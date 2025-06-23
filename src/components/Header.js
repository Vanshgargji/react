import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

 const Header = () => {
  const [btnNameReact, setbtnNameReact]= useState("Login")
  let btnName = "Login"
  console.log("header rendered")

  useEffect(()=>{
    console.log("useEffect called")
  })

  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src= {LOGO_URL}></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
          }}>{btnNameReact}</button>
        </ul>
      </div>

    </div>
  );
};

export default Header ; 