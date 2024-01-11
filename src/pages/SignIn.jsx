import 'bootstrap/dist/css/bootstrap.css';
import '../css/base.css';
import '../css/Sign.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handlePasswordClick = () => {
    setPasswordVisible(!passwordVisible);
  }
  const navigateSignClick = () => {
    navigate('/signup');
  }
  const signinClick = () => {
    console.log("email & password", email, password);
    if (email == "12345" && password == "12345") {
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    }
    else {
      setEmail('');
      setPassword('');
      setIsEmailValid(false);
      setIsPasswordValid(false);
    }
  }
  useEffect(() => {
    if(email.length > 0) setIsEmailValid(true);
  }, [email])
  useEffect(() => {
    if(password.length > 0) setIsPasswordValid(true);
  }, [password])

  return (
    <div className="container-signup">
      <div className='inbox-signup' id="signin-container">
        <div className='logo' />
        <div className='input-container'>
          <input type='text' className={isEmailValid ? 'input-box' : 'input-box-error'} placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className='input-log email' />
          {/* {isEmailValid ? <></> : <label>Please check your email</label>} */}
        </div>
        <div className='input-container'>
          <input type={passwordVisible ? 'text' : 'password'} className={isPasswordValid ? 'input-box' : 'input-box-error'} placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className='input-log password' onClick={handlePasswordClick} />
          {/* {isPasswordValid ? <></> : <label>Please check your password</label>} */}
        </div>
        {isEmailValid || isPasswordValid ? <></> : <label className='confirm-error'>Please check your email or password</label>}
        {/* <div className='confirm-container policy'>
          <input type='checkbox' id='policy' value='policy' />
          <label htmlFor='policy'>I agree to <b>Terms and Conditions</b> and <b>Privacy Policy</b></label>
        </div>
        <div className='confirm-container store'>
          <input type='checkbox' id='store' value='store' />
          <label htmlFor='store'>I consent for Shark to store my information and contact me with relevant marketing materials</label>
        </div> */}
        <div className='sign-container' id='signin'>
          <p className='sign-button' onClick={signinClick}>Sign In</p>
        </div>
        {/* <div className='sign-container'>
          <div className='button google' />
          <p className='sign-button'>Sign In with Google</p>
        </div> */}
        <div className='navi-sign'>
          <p className='ques'>Don't have an account?</p>
          <p className='navi' onClick={navigateSignClick}>Sign up</p>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
