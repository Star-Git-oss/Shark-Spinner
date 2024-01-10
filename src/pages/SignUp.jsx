import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';
import '../css/Sign.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordClick = () => {
        setPasswordVisible(!passwordVisible);
    }
    const navigateSignClick = () => {
        navigate('/signin');
    }

    return (
        <div className="container-signup">
            <div className='inbox-signup' id="signup-container">
                <div className='logo' />
                <div className='input-container'>
                    <input type='text' className='input-box' placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)}/>
                    <div className='input-log name' />
                </div>
                <div className='input-container'>
                    <input type='text' className='input-box' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className='input-log email' />
                </div>
                <div className='input-container'>
                    <input type={passwordVisible ? 'text' : 'password'} className='input-box' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className='input-log password' onClick={handlePasswordClick}/>
                </div>
                <div className='confirm-container policy'>
                    <input type='checkbox' id='policy' value='policy' />
                    <label htmlFor='policy'>I agree to <b>Terms and Conditions</b> and <b>Privacy Policy</b></label>
                </div>
                <div className='confirm-container store'>
                    <input type='checkbox' id='store' value='store' />
                    <label htmlFor='store'>I consent for Shark to store my information and contact me with relevant marketing materials</label>
                </div>
                <div className='sign-container' id='signup'>
                    <p className='sign-button'>Sign up</p>
                </div>
                <div className='sign-container'>
                    <div className='button google' />
                    <p className='sign-button'>Sign up with Google</p>
                </div>
                <div className='navi-sign'>
                    <p className='ques'>Already have an account?</p>
                    <p className='navi' onClick={navigateSignClick}>Sign in</p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
