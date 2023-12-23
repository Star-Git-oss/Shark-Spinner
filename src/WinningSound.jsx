import React from 'react';

function WinningSound() {
    return (
        <audio autoPlay="autoPlay" className="player" preload="false">
            <source src="https://andyhoffman.codes/random-assets/img/slots/winning_slot.wav" />
        </audio>
    );
}

export default WinningSound;
