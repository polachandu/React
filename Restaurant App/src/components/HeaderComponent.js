import { useEffect } from "react/cjs/react.production.min";
import { APP_LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  useEffect(() => {
    console.log("useEffect called")
  },[]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "LOGIN"
                ? setBtnNameReact("LOGOUT")
                : setBtnNameReact("LOGIN");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
