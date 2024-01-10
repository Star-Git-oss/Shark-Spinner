import React from 'react';
import '../../css/BetDecreaseBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function BetDecreaseBtn(props) {
    return (
        <button 
            aria-label='Decrease Bet.' 
            id='betDecreaseBtn' 
            onClick={props.onClick}
            className={props.winner === null ? "disabled" : ""} 
        >
            <FontAwesomeIcon icon={faMinus} />
        </button>
    );
}

export default BetDecreaseBtn;
