// import React, { useState } from "react";
// import { Link } from "@mui/icons-material";

// function Body() {
//   const [login, setLogin] = useState(true);

//   return (
//     <>
 
//       <div className="bodyChild">
//         <div
//           className={login && "bodyChildForm"}
//           onClick={() => setLogin(true)}
//         >
//           Login
//         </div>
//         <div
//           className={!login && "bodyChildForm"}
//           onClick={() => setLogin(false)}
         
//         >
//           Signup
//         </div>
//       </div>
//       <form>
//         {!login && <input type="text" placeholder="Enter name" />}
//         {!login && <input type="age" placeholder="Enter your Age" />}
//         <input type="email" placeholder="Email address" />
//         <input type="password" placeholder="Password" />
//         <Link to ='/home'><button type="submit">{login ? "LOGIN" : "SIGNUP"}</button></Link>
//       </form>
      
//     {login && <h4>
//       Forgot Password?</h4>}
//       {<h5>or {login ? "login" : "signup"} with</h5>}
//     </>

//   );
// }

// export default Body;



import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './style.css';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";

function Body() {
  const [login, setLogin] = useState(true);

  return (
    
    <>
    <div className="opac">
      <div className="bodyChild">
        <div
          className={ login &&"bodyChildForm"}
          onClick={() => setLogin(true)}>
          SignIn
        </div>
        <div
          className={!login && "bodyChildForm"}
          onClick={() => setLogin(false)}>
          SignUp
        </div>
      </div>
      
        <form>
          {!login && <input type="text" placeholder="Enter name" />}
          {!login && <input type="integer" placeholder="Phone Number" />}
          <input type="email" placeholder="User Name" />
          <input type="password" placeholder="Password" />
          <Link to ='/home'><button type="submit">{login ? "LOGIN" : "SIGNUP"}</button></Link>
        </form>
      
      {!login && <h6>I agree to the Terms and Conditions.</h6>}
      {login && <h4>I agree to the Terms and Conditions</h4>}
      </div>
    </>
   
  );
}

export default Body;