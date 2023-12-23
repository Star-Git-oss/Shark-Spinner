import React, { useState, useRef, useCallback, useEffect } from 'react';
import { TOTAL_ICONS, WILD_INDEX, symbolsPayouts } from './constants';

function useSlotMachine() {
  // States
  const [winner, setWinner]                           = useState(false);
  const [hasPlayed, setHasPlayed]                     = useState(false);
  const [walletAmount, setWalletAmount]               = useState(1000);
  const [betAmount, setBetAmount]                     = useState(3.00);
  const [actualPayout, setActualPayout]               = useState(null);
  const [totalWinnings, setTotalWinnings]             = useState(0);
  const [winnerSymbolPayout, setWinnerSymbolPayout]   = useState(null);
  const [winnerIndexesPosArr, setWinnerIndexesPosArr] = useState([]);
  const [winnerIndexesSymbolsArr, setWinnerIndexesSymbolsArr] 
    = useState([]);
  const [autoPlayOn, setAutoPlayOn]                   = useState(false);
  const [autoTriggerSpin, setAutoTriggerSpin]         = useState(false);
    
  // Refs
  const matches                                       
    = useRef([null, null, null]);
  const spinnerRefs 
    = useRef([React.createRef(), React.createRef(), React.createRef()]);


  useEffect(() => {
      if (autoPlayOn && (winner !== null)) {
          const timer = setTimeout(() => {
              setAutoTriggerSpin(true); 
          }, 850);

          return () => clearTimeout(timer);
      }
  }, [autoPlayOn, winner]);

  // Efeito para acionar handleSpin quando autoTriggerSpin muda
  useEffect(() => {
      if (autoTriggerSpin) {
          handleSpin(true);
          setAutoTriggerSpin(false);
      }
  }, [autoTriggerSpin]);

  const computeVisibleIndicesTransposed = useCallback(() => {
    const topValues = [];
    const values = [];
    const bottomValues = [];

    for (let value of matches.current) {
      const topValue = (value - 1 + TOTAL_ICONS) % TOTAL_ICONS;
      const bottomValue = (value + 1) % TOTAL_ICONS;
      topValues.push(topValue);
      values.push(value);
      bottomValues.push(bottomValue);
    }

    return [topValues, values, bottomValues];
  }, []);

  const emptyMatchesArray = useCallback(() => {
    matches.current = [null, null, null];
  }, []);

  const checkBetLines = useCallback((matrix) => {
    // Check horizontal and diagonal lines for a win
    const checkLine = (index1, index2, index3) => {
      const arrSymbols = [matrix[index1][0], matrix[index2][1], matrix[index3][2]];
      
      // Identifica todos os coringas na linha
      const wildCount = arrSymbols.filter(x => x === WILD_INDEX).length;
      let referencePayoutArr = [];

      // 1 ou mais coringas
      if (wildCount > 0) {
        if (wildCount == 3) {
          setWinnerIndexesPosArr([index1, index2, index3]);
          setWinnerIndexesSymbolsArr([arrSymbols[0], arrSymbols[1], arrSymbols[2]]);
          setWinnerSymbolPayout(symbolsPayouts[WILD_INDEX]);       
          setWinner(true);
          return true;
        } else {
          // 2 coringas
          if (wildCount == 2) {
            referencePayoutArr = arrSymbols.filter(x => x !== WILD_INDEX);
            setWinnerIndexesPosArr([index1, index2, index3]);
            setWinnerIndexesSymbolsArr([arrSymbols[0], arrSymbols[1], arrSymbols[2]]);
            setWinnerSymbolPayout(symbolsPayouts[referencePayoutArr[0]]);       
            setWinner(true);
            return true;
          } 
          // Nenhum coringa
          else {
            referencePayoutArr = arrSymbols.filter(x => x !== WILD_INDEX);
            // Os outros 2 itens na linha são iguais
            if (referencePayoutArr.every( (val, i, arr) => val === arr[0] )) {
              setWinnerIndexesPosArr([index1, index2, index3]);
              setWinnerIndexesSymbolsArr([arrSymbols[0], arrSymbols[1], arrSymbols[2]]);
              setWinnerSymbolPayout(symbolsPayouts[referencePayoutArr[0]]);       
              setWinner(true);
              return true;
            }
            else {
              setWinner(false);
              return false;
            }
          }
        }
      } else {
        if (matrix[index1][0] === matrix[index2][1] && matrix[index2][1] === matrix[index3][2]) {
          setWinnerIndexesPosArr([index1, index2, index3]);
          setWinnerIndexesSymbolsArr([matrix[index1][0], matrix[index2][1], matrix[index3][2]]);
          setWinnerSymbolPayout(symbolsPayouts[matrix[index1][0]]);
          setWinner(true)
          return true;
        } else {
          setWinner(false)
          return false;
        }
      }
    };

    // Top row
    if(checkLine(0, 0, 0))
      return true;
    // Middle row
    else if (checkLine(1, 1, 1))
      return true;
    // Bottom row
    else if (checkLine(2, 2, 2))
      return true;
    // Diagonal left-to-right
    else if (checkLine(0, 1, 2))
      return true;
    // Diagonal right-to-left
    else if (checkLine(2, 1, 0))
      return true;
    else
      return false;
  }, []);

  const handleAutoPlay = useCallback(() => {
    setAutoPlayOn(currentState => !currentState);
  }, []);

  const handleSpin = useCallback((isAutoPlayBtnPressed) => {
    if (!isAutoPlayBtnPressed && autoPlayOn) {
      setAutoPlayOn(false);

      const element = document.getElementById('repeatButton'); 
      if (element) {
          element.classList.remove('autoPlayOn'); 
      }
      return;
    }

    emptyMatchesArray();
    setWinner(null);
    setHasPlayed(true);
    setWalletAmount(prevWallet => prevWallet - betAmount);
    
    const intervalId = setInterval(() => {
      const allRefsAvailable = spinnerRefs.current.every(ref => ref.current);

      if (allRefsAvailable) {
        clearInterval(intervalId);

        spinnerRefs.current.forEach(ref => {
          ref.current?.forceUpdateHandler();
        });
      }
    }, 100); 

    // let chance = Math.random(); 
    // let activationProbability = calculateProbability(betAmount);
    // setHasCheated(chance <= activationProbability);
  }, [betAmount, spinnerRefs, autoPlayOn]);

  const handleIncreaseBet = useCallback(() => {
    setBetAmount(prevBet => Math.min(prevBet + 1.50, 50));
  }, []);

  const handleDecreaseBet = useCallback(() => {
    setBetAmount(prevBet => Math.max(prevBet - 1.50, 1.50));
  }, []);
  
  useEffect(() => {
    if (winner) {
      const localActualPayout = winnerSymbolPayout * betAmount;
      
      setActualPayout(localActualPayout);
      setTotalWinnings(prevWinnings => prevWinnings + localActualPayout);
    }
  }, [winner]);

  const finishHandler = useCallback((value, spinnerId) => {
    if (!hasPlayed) return;  
    matches.current[spinnerId] = value;

    if (matches.current.every(match => match !== null)) {
      setHasPlayed(false);
      const visibleMatrix = computeVisibleIndicesTransposed();
      checkBetLines(visibleMatrix);
    }
  }, [hasPlayed]);

  return {
    winner,
    hasPlayed,
    walletAmount,
    betAmount,
    totalWinnings,
    winnerIndexesPosArr,
    winnerIndexesSymbolsArr,
    actualPayout,
    finishHandler,
    handleDecreaseBet,
    handleIncreaseBet,
    spinnerRefs,
    handleSpin,
    handleAutoPlay,
    autoPlayOn
  };
}
export default useSlotMachine;

// const calculateProbability = useCallback((betAmount) => {
//   const minAmount = 1.50;
//   const maxAmount = 50;
//   const minProbability = 0.15; // 15%
//   const maxProbability = 1;    // 100%

//   const slope = (maxProbability - minProbability) / (maxAmount - minAmount);
//   const prob = slope * (betAmount - minAmount) + minProbability;
//   return prob;
// }, []);