import Estrela_EF     from "./assets/lottie/estrela.json";
import Tesouro_EF     from "./assets/lottie/tesouro.json";
import Ostra_EF       from "./assets/lottie/ostra.json";
import Mergulhador_EF from "./assets/lottie/capacete.json";
import Tubarao_EF     from "./assets/lottie/wild_tuba.json";
import Camarao_EF     from "./assets/lottie/camarao.json";
// import Camarao_EF     from "./assets/lottie/megawin-bundlefonts.json";
import Peixe_EF       from "./assets/lottie/peixe_amarelo.json";

import Linha_EF       from "./assets/lottie/linha.json";
import Visor_EF       from "./assets/lottie/visor2.json";

export const TOTAL_ICONS = 7;
export const ICON_HEIGHT = 142;
export const MULTIPLIER  = Math.floor(Math.random()*(4-1)+1);

export const SYMBOLS_INDEXES = {
    Tesouro_idx:     -ICON_HEIGHT * 6,    
    Estrela_idx:     0,  
    Peixe_idx:       -ICON_HEIGHT,        
    Mergulhador_idx: -ICON_HEIGHT * 2,    
    Camarao_idx:     -ICON_HEIGHT * 3,    
    Tubarao_idx:     -ICON_HEIGHT * 4,    
    Ostra_idx:       -ICON_HEIGHT * 5,  
}
export const WILD_INDEX   = 5;
export const CHOSEN_INDEX = 5;


const getSymbolsPositions = () => {
    const positionsArr = [];
    
    for(let key in SYMBOLS_INDEXES) {
        positionsArr.push(SYMBOLS_INDEXES[key]);
    }
    
    return positionsArr;
}
export const symbolsPositions = getSymbolsPositions();

export const SYMBOLS_PAYOUTS = {
    Tesouro_x:     3,    
    Estrela_x:     100,  
    Peixe_x:       25,  
    Mergulhador_x: 10,  
    Camarao_x:     250,  
    Tubarao_x:     8,  
    Ostra_x:       5      
}

export const ANIMATION_INDEXES = {
    Tesouro_EF,
    Estrela_EF,         
    Peixe_EF,       
    Mergulhador_EF, 
    Camarao_EF,    
    Tubarao_EF,     
    Ostra_EF,
    Visor_EF
};
export const VICTORY_LINE_INDEX       = Linha_EF;
export const BET_HEADER_DISPLAY_INDEX = Visor_EF;


const getSymbolsPayouts = () => {
    const payoutsArr = [];

    for(let key in SYMBOLS_PAYOUTS) {
      payoutsArr.push(SYMBOLS_PAYOUTS[key]);
    }

    return payoutsArr;
}
export const symbolsPayouts = getSymbolsPayouts();