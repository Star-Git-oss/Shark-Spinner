import './LineOverlay.css';
import { useLottie } from 'lottie-react';
import { VICTORY_LINE_INDEX, ICON_HEIGHT } from './constants'; 

function LineOverlay({ yPosition, slopeDegree }) {
    const options = {
        animationData: VICTORY_LINE_INDEX,
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const { View } = useLottie(options);
    
    return (
        <div className="line-overlay scale-animation" 
            style={{ top: yPosition * ICON_HEIGHT + 'px' }}>
            { View }
        </div>
    );   
}
export default LineOverlay;
