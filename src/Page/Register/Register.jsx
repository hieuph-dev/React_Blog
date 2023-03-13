import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="text"
          className="register-input"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="register-input"
          placeholder="Enter your password..."
        />
        <button className="register-button">Register</button>
      </form>
      <button className="register-login-button">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
};

export default Register;
