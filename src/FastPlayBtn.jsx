import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

function FastPlayBtn(props) {
    return (
        <button 
            aria-label='Jogada Rápida' 
            id='fastPlayBtn' 
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faBolt} />
        </button>
    );
}

export default FastPlayBtn;
