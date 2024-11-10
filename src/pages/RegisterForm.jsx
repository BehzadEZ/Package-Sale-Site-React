// src/components/RegisterForm.jsx
import './SignUpForm.css';

const RegisterForm = () => {
  return (
    <form className="form">
      <div className="title">Join Us,<br /><span>create an account to get started</span></div>
      <input className="input" name="firstName" placeholder="First Name" type="text" />
      <input className="input" name="lastName" placeholder="Last Name" type="text" />
      <input className="input" name="email" placeholder="Email" type="email" />
      <input className="input" name="password" placeholder="Password" type="password" />
      <input className="input" name="confirmPassword" placeholder="Confirm Password" type="password" />
      <button className="button-confirm">Register</button>
    </form>
  );
};

export default RegisterForm;
