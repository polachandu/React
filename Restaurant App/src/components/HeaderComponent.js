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
    <div className="flex justify-between bg-slate-400">
      <div className="logo-container">
        <img className="w-44  bg-slate-600" src={APP_LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢 " : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/aboutUs">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
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
