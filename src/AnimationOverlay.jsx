import './AnimationOverlay.css';
import { useLottie } from 'lottie-react';
import { ANIMATION_INDEXES, ICON_HEIGHT } from './constants'; 

function AnimationOverlay({ yPosition, animationIndex }) {
    const animations = Object.values(ANIMATION_INDEXES);
    // console.log(animations);

    const options = {
        animationData: animations[animationIndex],
        loop: true,
        autoplay: true,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const { View } = useLottie(options);
    
    return (
        <div className="icon-overlay scale-animation" 
            style={{ top: yPosition * ICON_HEIGHT + 'px' }}>
            { View }
        </div>
    );   
}
export default AnimationOverlay;
