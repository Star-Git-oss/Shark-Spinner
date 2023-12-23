import './PayoutOverlay.css';
import { ICON_HEIGHT } from './constants'; 

function PayoutOverlay({ payoutValue, yPosition }) {
    
    return (
        <div className="payout-overlay blinking" 
            style={{ top: yPosition * ICON_HEIGHT + 92 + 'px' }}>
            {payoutValue.toFixed(2)}
        </div>
    );
}
export default PayoutOverlay;
