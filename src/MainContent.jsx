import 'bootstrap/dist/css/bootstrap.css';
import './base.css';
import './MainGame.css';
import './BetBarContainer.css';
import './BetHeaderBarContainer.css';
import './BetStatusBarContainer.css';
import './mediaqueries.scss';

import Navbar         from './Navbar';
import WinningSound   from './WinningSound'; 
import Spinner        from './Spinner';
import ActionBar      from './ActionBar';       
import RepeatButton   from './RepeatBtn'; 
import BetIncreaseBtn from './BetIncreaseBtn';
import BetDecreaseBtn from './BetDecreaseBtn';
import AutoPlayBtn    from './AutoPlayBtn';
import FastPlayBtn    from './FastPlayBtn';
import { FontAwesomeIcon }             
    from '@fortawesome/react-fontawesome';
import { faWallet, faCoins, faTrophy } 
    from '@fortawesome/free-solid-svg-icons';

import BetDisplayOverlay from './BetDisplayOverlay';  
import LineOverlay       from './LineOverlay'; 

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
                                id               = {0}
                                timer            = "950"
                                ref              = {spinnerRefs.current[0]} 
                                hasPlayed        = {hasPlayed} 
                                onFinish         = {finishHandler} 
                                hasCheated       = {hasCheated}
                                forcedSymbol     = {forcedSymbol+1}
                                showOverlay      = {winner}
                                overlayIdx       = {winnerIndexesPosArr[0]}
                                overlaySymbolIdx = {winnerIndexesSymbolsArr[0]}
                            />

                            <Spinner 
                                id               = {1}
                                timer            = "1050" 
                                ref              = {spinnerRefs.current[1]} 
                                hasPlayed        = {hasPlayed} 
                                onFinish         = {finishHandler} 
                                hasCheated       = {hasCheated}
                                forcedSymbol     = {forcedSymbol}
                                showOverlay      = {winner}
                                overlayIdx       = {winnerIndexesPosArr[1]}
                                overlaySymbolIdx = {winnerIndexesSymbolsArr[1]}
                                actualPayout     = {actualPayout}
                            />
                            
                            <Spinner 
                                id               = {2}
                                timer            = "900" 
                                ref              = {spinnerRefs.current[2]} 
                                hasPlayed        = {hasPlayed} 
                                onFinish         = {finishHandler}
                                hasCheated       = {hasCheated}
                                forcedSymbol     = {forcedSymbol}
                                showOverlay      = {winner}
                                overlayIdx       = {winnerIndexesPosArr[2]} 
                                overlaySymbolIdx = {winnerIndexesSymbolsArr[2]}
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
