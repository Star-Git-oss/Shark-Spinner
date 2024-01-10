import React               from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay }          from '@fortawesome/free-solid-svg-icons';

function AutoPlayBtn(props) {
    return (
        <button 
            aria-label='AutoPlay' 
            id='autoPlayBtn' 
            onClick={props.onClick}
        >
            <FontAwesomeIcon icon={faPlay} />
        </button>
    );
}
export default AutoPlayBtn;
