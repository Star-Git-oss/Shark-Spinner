import './BetDisplayOverlay.css';
import { useLottie } from 'lottie-react';
import { BET_HEADER_DISPLAY_INDEX } from './constants'; 

function BetDisplayOverlay() {
    const options = {
        animationData: BET_HEADER_DISPLAY_INDEX,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const { View } = useLottie(options);
    
    return (
        <div className="bet-display-overlay" >
            { View }
        </div>
    );   
}
export default BetDisplayOverlay;


