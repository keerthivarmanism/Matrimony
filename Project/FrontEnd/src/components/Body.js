import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../assets/style.css';
import AliceCarousel from 'react-alice-carousel';

function Body() {
  const [login, setLogin] = useState(true);
  const [id,setId]=useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your STS endpoint with the login credentials
      const response = await axios.post("http://localhost:8080/post", {
      name:name,
        password:password,
      });

      // Assuming the STS returns the necessary tokens, you can handle them here
      const { accessToken, refreshToken } = response.data;

      // Do something with the tokens (e.g., store them in local storage or global state)
      // For example, you can use a state management library like Redux to handle this.
    } catch (error) {
      // Handle login error
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };
   
  function keerthisignup()
  {
    axios.post("http://localhost:8080/post", {

      name: name,
      phoneNumber: phoneNumber,
      userName: userName,
      password: password
  })
  }
  function keerthilogin()
  {
    axios.post("http://localhost:8080/post",{
      username:userName,
      password:password
    })
  }

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log(name,phoneNumber,userName,password)
    try {
      // Make a POST request to your STS endpoint with the signup data
      const response = await axios.post("http://localhost:8080/post", {

      name: name,
      phoneNumber: phoneNumber,
      userName: userName,
      password: password
 
      });
      // Assuming the STS returns the necessary tokens, you can handle them here
      const { accessToken, refreshToken } = response.data;

      // Do something with the tokens (e.g., store them in local storage or global state)
      // For example, you can use a state management 
    } catch (error) {
      // Handle signup error
      setErrorMessage("Error occurred during signup. Please try again.");
    }
  };

  return (
    <>
      <div className="opac">
        <div className="bodyChild">
          <div
            className={login && "bodyChildForm"}
            onClick={() => setLogin(true)}
          >
            LogIn
          </div>
          <div
            className={!login && "bodyChildForm"}
            onClick={() => setLogin(false)}
          >
            SignUp
          </div>
        </div>

        <form onSubmit={login ? handleLoginSubmit : handleSignupSubmit}>
          {!login && <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />}
          {!login && <input type="integer" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />}
          <input type="email" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">{login ? "LOGIN" : "SIGNUP"}</button>
        </form>

        {!login && <h6>I agree to the Terms and Conditions.</h6>}
        {login && <h4>I agree to the Terms and Conditions</h4>}

        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
}

export default Body;