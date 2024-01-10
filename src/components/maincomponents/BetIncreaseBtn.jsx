import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function BetIncreaseBtn(props) {
    return (
        <button 
            aria-label='Aumentar Aposta.' 
            id='betIncreaseBtn' 
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
}



export default BetIncreaseBtn;
