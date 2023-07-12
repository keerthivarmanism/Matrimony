import React from "react";

import google from "../assests/google-logo.svg";


function Icons() {
  return (
    <>
      <div className="SocialIcons">
        <div className="icon">
          <img src={google} alt="google" />
        </div>
  
      </div>

      <h6>
        Don't have an Account?<b>Create new now!</b>
      </h6>
      <h6>
        By signing up, you are agree with our <b>Term & Conditions</b>
      </h6>
    </>
  );
}

export default Icons;