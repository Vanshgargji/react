import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


 const Header = () => {

  const onlineStatus = useOnlineStatus();

  const [btnNameReact, setbtnNameReact]= useState("Login")
  let btnName = "Login"
  console.log("header rendered")

  useEffect(()=>{
    console.log("useEffect called")
  })

 return (
  <div className="header flex justify-between items-center bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)] px-8 py-3 m-0">

    <div className="logo-container w-28">
      <img className="logo w-full" src={LOGO_URL} alt="Logo" />
    </div>

    <div className="nav-items">
      <ul className="flex items-center gap-2 text-[15px] font-medium text-gray-700">
        <li className="px-4 py-2 hover:text-orange-500 cursor-pointer">
          Status: {onlineStatus ? "✅" : "🔴"}
        </li>
        <li className="px-4 py-2 hover:text-orange-500 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:text-orange-500 cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="px-4 py-2 hover:text-orange-500 cursor-pointer">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-4 py-2 hover:text-orange-500 cursor-pointer">
          Cart
        </li>
        <button
          className="bg-gray-100 px-4 py-1.5 ml-4 rounded-md hover:bg-gray-200 transition"
          onClick={() => {
            btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </ul>
    </div>

  </div>
);

};

export default Header ; 