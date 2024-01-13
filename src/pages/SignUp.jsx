import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';
import '../css/Sign.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { signup } from '../action/auth';
import { setProfile } from '../features/profileSlice';

const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [store, setStore] = useState(false);
    const [policy, setPolicy] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isCheck, setIsCheck] = useState(true);

    const handlePasswordClick = () => {
        setPasswordVisible(!passwordVisible);
    }
    const navigateSignClick = () => {
        navigate('/signin');
    }
    const signupClick = async () => {
        console.log("store, policy", store, policy);
        if (password != confirmPassword) setIsPasswordValid(false);
        else if (store && policy == false) setIsCheck(false);
        else try {
            dispatch(signup({ username: name, email: email, password: password, walletAmount: password }))
                .then(res => {
                    dispatch(setProfile({email: email, password: password}));
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                    setIsEmailValid(false);
                });
        } catch (err) { }
    }
    useEffect(() => {
        setIsEmailValid(true);
    }, [email])
    useEffect(() => {
        setIsPasswordValid(true);
    }, [password, confirmPassword])

    return (
        <div className="container-signup">
            <div className='inbox-signup' id="signup-container">
                <div className='logo' />
                <div className='input-container'>
                    <input type='text' className='input-box' placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)} />
                    <div className='input-log name' />
                </div>
                <div className='input-container'>
                    <input type='text' className={isEmailValid ? 'input-box' : 'input-box-error'} placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='input-log email' />
                </div>
                <div className='input-container'>
                    <input type={passwordVisible ? 'text' : 'password'} className={isPasswordValid ? 'input-box' : 'input-box-error'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='input-log password' onClick={handlePasswordClick} />
                </div>
                <div className='input-container'>
                    <input type={passwordVisible ? 'text' : 'password'} className={isPasswordValid ? 'input-box' : 'input-box-error'} placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <div className='input-log password' onClick={handlePasswordClick} />
                </div>
                <div className={isCheck ? 'confirm-container policy' : 'confirm-container-error policy'}>
                    <input type='checkbox' id='policy' value={policy} onChange={(e) => setPolicy(e.target.value)}/>
                    <label htmlFor='policy'>I agree to <b>Terms and Conditions</b> and <b>Privacy Policy</b></label>
                </div>
                <div className={isCheck ? 'confirm-container policy' : 'confirm-container-error policy'}>
                    <input type='checkbox' id='store' value={store} onChange={(e) => {console.log(e); setStore(e.target.value)}}/>
                    <label htmlFor='store'>I consent for Shark to store my information and contact me with relevant marketing materials</label>
                </div>
                <div className='sign-container' id='signup'>
                    <p className='sign-button' onClick={signupClick}>Sign up</p>
                </div>
                {/* <div className='sign-container'>
                    <div className='button google' />
                    <p className='sign-button'>Sign up with Google</p>
                </div> */}
                <div className='navi-sign'>
                    <p className='ques'>Already have an account?</p>
                    <p className='navi' onClick={navigateSignClick}>Sign in</p>
                </div>
                {isEmailValid ? <></> : <label className='confirm-error-up'>Please change your email</label>}
                {isPasswordValid ? <></> : <label className='confirm-error-up'>Please check your password</label>}
            </div>
        </div>
    );
}
export default SignUp;
