// src/components/SignUpForm.jsx
import { Link } from 'react-router-dom'
import './SignUpForm.css';

const SignUpForm = () => {

  return (
    <form className="form">
      <div className="title">Welcome,<br /><span>sign up to continue</span></div>
      <input className="input" name="email" placeholder="Email" type="email" />
      <input className="input" name="password" placeholder="Password" type="password" />
      <div className="login-with">
        <div className="button-log"><b>t</b></div>
        <div className="button-log">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M19.6 3H4.4C3.6 3 3 3.6 3 4.4v15.2c0 .8.6 1.4 1.4 1.4h8.1v-6.6H9.7V12h2.8V9.3c0-2.7 1.7-4.1 4-4.1 1.1 0 2 .1 2.3.2v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5V12h3l-.4 3.4h-2.6V21h5.1c.8 0 1.4-.6 1.4-1.4V4.4c0-.8-.6-1.4-1.4-1.4z"></path>
          </svg>
        </div>
        <div className="button-log">
          <svg className="icon" height="24px" viewBox="0 0 56.693 56.693" width="24px" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029 c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77 L40.43,21.739z"></path>
          </svg>
        </div>
      </div>
      <Link to="/register" className="styled-link">
        <b>Register →</b>
      </Link>
      <button className="button-confirm">Let`s go →</button>
    </form>
  );
};

export default SignUpForm;
