import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import useSlotMachine from './useSlotMachine';
import bannerPrincipal from './assets/tela/header-TUBA.gif';
import MainContent from './pages/MainContent';
import { CHOSEN_INDEX } from './constants';
import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";

const App = () => {
  // Criar um objeto URL com base na URL atual
  const url = new URL(window.location.href);

  // Extrair o parâmetro 'param' da URL
  const affiliate = url.searchParams.get('afiliado') ?? null;

  // Variable to show the components depending on the login state.
  let showComponents = null;

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
    <>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
