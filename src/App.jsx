import React            from 'react';
import useSlotMachine   from './useSlotMachine'; 
import bannerPrincipal  from './assets/tela/header-TUBA.gif';
import MainContent      from './MainContent';
import { CHOSEN_INDEX } from './constants';

function App() {
  // Criar um objeto URL com base na URL atual
  const url = new URL(window.location.href);

  // Extrair o parâmetro 'param' da URL
  const affiliate = url.searchParams.get('afiliado') ?? null; 

  // Use the hook to get states and handlers
  const {
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
    handleSpin,
    spinnerRefs,
    handleAutoPlay,
    autoPlayOn
  } = useSlotMachine();

  return (
    <MainContent
      bannerPrincipal={bannerPrincipal}
      betAmount={betAmount}
      hasPlayed={hasPlayed}
      walletAmount={walletAmount}
      totalWinnings={totalWinnings}
      finishHandler={finishHandler}
      handleDecreaseBet={handleDecreaseBet}
      handleSpin={handleSpin} 
      handleIncreaseBet={handleIncreaseBet}
      winner={winner}
      hasCheated={0}
      forcedSymbol={CHOSEN_INDEX}
      winnerIndexesPosArr={winnerIndexesPosArr}
      winnerIndexesSymbolsArr={winnerIndexesSymbolsArr}
      actualPayout={actualPayout}
      spinnerRefs={spinnerRefs}
      affiliate={affiliate}
      handleAutoPlay={handleAutoPlay}
      autoPlayOn={autoPlayOn}
    />
  );
}

export default App;
