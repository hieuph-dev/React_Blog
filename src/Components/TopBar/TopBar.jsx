import { Link } from "react-router-dom";
import "./TopBar.css";

const TopBar = () => {
  const user = false;
  return (
    <div className="top-bar">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-pinterest"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link className="link " to="/">
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link " to="/about">
              ABOUT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link " to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="link " to="/write">
              WRITE
            </Link>
          </li>
          <li className="top-list-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            className="top-img"
            src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link className="link " to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-list-item">
              <Link className="link " to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
