// import Dashboard from "../components/Dashboard.jsx";


import React from "react";
// import './App.css';
import Icons from "./Icons";
import Body from "./Body";
import NavBar from "./NavBar";
import './style.css';

// import { Dashboard } from "@mui/icons-material";
// import { Dashboard } from "@mui/icons-material";
// import { BrowserRouter,Route,Routes } from "react-router-dom";

// import About from "../pages/About";
// import Contactus from "../pages/Contactus";
// import Profile from "../pages/Profile";



function Login() {
  return (
    <div className="container">
      <div className="body">

    
       
        <NavBar />
        <Body />
        <Icons />
      </div>
    </div>
  );
}

export default Login;
