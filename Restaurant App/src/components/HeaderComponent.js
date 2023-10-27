import { useEffect } from "react/cjs/react.production.min";
import { APP_LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const HeaderComponent = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("useEffect called")
  },[]);
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img className="w-56" src={APP_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4">
          <li>Online Status:{onlineStatus ? "🟢 " : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
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
