import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';
import '../css/Sign.scss';
import { useState } from 'react';

const SignIn = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleClick = () => {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <div className="container-signup">
            <div className='inbox-signup'>
                <div className='logo' />
                <div className='input-container'>
                    <input type='text' className='input-box' placeholder='Enter your email' />
                    <div className='input-log email' />
                </div>
                <div className='input-container'>
                    <input type={passwordVisible ? 'text' : 'password'} className='input-box' placeholder='Enter your password' />
                    <div className='input-log password' onClick={handleClick}/>
                </div>
                <div className='confirm-container policy'>
                    <input type='checkbox' id='policy' value='policy' />
                    <label for='policy'>I agree to <b>Terms and Conditions</b> and <b>Privacy Policy</b></label>
                </div>
                <div className='confirm-container store'>
                    <input type='checkbox' id='store' value='store' />
                    <label for='store'>I consent for Shark to store my information and contact me with relevant marketing materials</label>
                </div>
                <div className='signup'>
                    <div className='button' />
                    <p className='sign-button'>Sign In</p>
                </div>
                <div className='signup'>
                    <div className='button google' />
                    <p className='sign-button'>Sign In with Google</p>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
