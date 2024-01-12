import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';
import '../css/MainGame.css';
import '../css/BetBarContainer.css';
import '../css/BetHeaderBarContainer.css';
import '../css/BetStatusBarContainer.css';
import '../css/mediaqueries.scss';

import Navbar from '../components/maincomponents/Navbar';
import WinningSound from '../WinningSound';
import Spinner from '../components/maincomponents/Spinner';
import ActionBar from '../components/maincomponents/ActionBar';
import RepeatButton from '../components/maincomponents/RepeatBtn';
import BetIncreaseBtn from '../components/maincomponents/BetIncreaseBtn';
import BetDecreaseBtn from '../components/maincomponents/BetDecreaseBtn';
import AutoPlayBtn from '../components/maincomponents/AutoPlayBtn';
import FastPlayBtn from '../components/maincomponents/FastPlayBtn';
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faWallet, faCoins, faTrophy }
    from '@fortawesome/free-solid-svg-icons';

import BetDisplayOverlay from '../components/maincomponents/BetDisplayOverlay';
import LineOverlay from '../components/maincomponents/LineOverlay';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function MainContent({
    winner,
    bannerPrincipal,
    betAmount,
    hasPlayed,
    finishHandler,
    walletAmount,
    totalWinnings,
    handleDecreaseBet,
    handleSpin,
    handleIncreaseBet,
    winnerIndexesPosArr,
    winnerIndexesSymbolsArr,
    actualPayout,
    spinnerRefs,
    affiliate,
    hasCheated,
    forcedSymbol,
    handleAutoPlay,
    autoPlayOn
}) {

    // useEffect(() => {
    //     if (walletAmount <= betAmount) {
    //         handleAutoPlay();
    //     }
    // }, [walletAmount]);

    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') == false || localStorage.getItem('isLoggedIn') == null) {
            navigate('/signin');
        }
    }, [localStorage.getItem('isLoggedIn')]);

    return (
        <div className="container-fluid">
            {/* <Navbar /> */}
            {/* {winner === true && <WinningSound />} */}
            <div className="lcontainer row h-100 align-items-center justify-content-center">
                <div className="parent-container">
                    <div className="gif-container">
                        <img src={bannerPrincipal} />
                    </div>

                    <div className="slots-box-container" >
                        <div className="lateral-column-wrapper-left"></div>
                        <div className="spinners-container">
                            {winner && <div className="winner-overlay"></div>}
                            {/* {winner && <LineOverlay 
                                yPosition={1} 
                                slopeDegree={45} />
                            } */}

                            <Spinner
                                id={0}
                                timer="950"
                                ref={spinnerRefs.current[0]}
                                hasPlayed={hasPlayed}
                                onFinish={finishHandler}
                                hasCheated={hasCheated}
                                forcedSymbol={forcedSymbol + 1}
                                showOverlay={winner}
                                overlayIdx={winnerIndexesPosArr[0]}
                                overlaySymbolIdx={winnerIndexesSymbolsArr[0]}
                            />

                            <Spinner
                                id={1}
                                timer="1050"
                                ref={spinnerRefs.current[1]}
                                hasPlayed={hasPlayed}
                                onFinish={finishHandler}
                                hasCheated={hasCheated}
                                forcedSymbol={forcedSymbol}
                                showOverlay={winner}
                                overlayIdx={winnerIndexesPosArr[1]}
                                overlaySymbolIdx={winnerIndexesSymbolsArr[1]}
                                actualPayout={actualPayout}
                            />

                            <Spinner
                                id={2}
                                timer="900"
                                ref={spinnerRefs.current[2]}
                                hasPlayed={hasPlayed}
                                onFinish={finishHandler}
                                hasCheated={hasCheated}
                                forcedSymbol={forcedSymbol}
                                showOverlay={winner}
                                overlayIdx={winnerIndexesPosArr[2]}
                                overlaySymbolIdx={winnerIndexesSymbolsArr[2]}
                            />
                        </div>
                        <div className="lateral-column-wrapper-right"></div>
                    </div>

                    <div className="bet-bar-container">
                        <div className="bet-header-bar-container">
                            {winner && <BetDisplayOverlay />}

                            {!winner && (
                                <div className="scrolling-text">
                                    Jogue Shark Win para ganhar diversos prêmios!
                                </div>
                            )}

                            {(winner && actualPayout) && (
                                <div className="winner-text">
                                    {"Ganhou " + actualPayout.toFixed(2)}
                                </div>
                            )}
                        </div>
                        <div className="bet-status-bar-container">
                            <div className="col">
                                <FontAwesomeIcon icon={faWallet} /> {walletAmount.toFixed(2)}
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faCoins} /> {betAmount.toFixed(2)}
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faTrophy} /> {totalWinnings.toFixed(2)}
                            </div>
                        </div>
                    </div>

                    <div className="action-bar-container">
                        <ActionBar>
                            <FastPlayBtn />

                            <BetDecreaseBtn
                                onClick={handleDecreaseBet}
                                winner={winner} />

                            <RepeatButton
                                onClick={() => handleSpin(false)}
                                winner={winner}
                                autoPlayOn={autoPlayOn}
                            />

                            <BetIncreaseBtn
                                onClick={handleIncreaseBet} />

                            <AutoPlayBtn
                                onClick={handleAutoPlay} />
                        </ActionBar>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainContent;
