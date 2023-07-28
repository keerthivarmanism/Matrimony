import React from "react";
import '../assets/profilecreation.css';

const ProfileCreation=()=> {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="profile-setup.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet" />
          <title>Contact Form | Brandon Reader</title>
          <section id="profile-setup">
            <div  className="Profiletitle" >
              <div className="main-title">
                <p>Create your profile</p>
              </div>
              <form onsubmit="return validateForm(this)" action method style={{width:'100%', color:'white'}} >
                {/* Attributes input section */}
                <div className="field-row">
                  <div className="field-wrap"><label htmlFor="first_name">First Name<span className="req">*</span></label><br />
                    <input type="text" name="first_name" defaultValue required />
                  </div>
                  <div className="field-wrap"><label htmlFor="last_name">Last Name<span className="req">*</span></label><br />
                    <input type="text" name="last_name" defaultValue required />
                  </div>
                  <div className="field-wrap"><label htmlFor="email">Email Address<span className="req">*</span></label><br />
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="field-wrap"><label htmlFor="tel">Telephone Number</label><br />
                    <input type="tel" id="tel" name="tel" />
                  </div>
                  <div className="address"><label htmlFor="address">Address</label><br />
                    <input type="text" id="address" name="address" />
                  </div>
                </div>
                <div className="field-row">
                  <div className="field-wrap"><label htmlFor="city">City</label><br />
                    <input type="city" id="city" name="city" />
                  </div>
                  {/* State input section */}
                  <div className="combo">
                    <div className="field-wrap state"><label htmlFor="state">State</label><br />
                      <select id="state" name="state">
                        <option value="none" />
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="FL">FL</option>
                      </select>
                    </div>
                    {/* Zip Code input section */}
                    <div className="field-wrap zip"><label htmlFor="zipcode">Zip Code</label><br />
                      <input type="number" id="zipcode" name="zipcode" />
                    </div>
                  </div>
                </div>
                <div className="field-row">
                  {/* Profile photo upload section */}
                  <div className="extra-field">
                    <div className="input-title">Profile Photo</div>
                    <input id="upload" type="file" />
                    <a id="upload_link" className="pic-upload" href="#">
                      <div className="image-upload"><img src="https://seamlesscreative.design/uploads/code-examples/profileupload.svg" alt="Profile Upload Icon" />
                        <p>Upload your Profile Photo</p>
                      </div>
                    </a>
                  </div>
                  {/* Gender selection section */}
                  <div className="extra-field">
                    <div className="input-title">Gender</div>
                    <div className="gender">
                      <div className="radio-holder">
                        <div className="radio">
                          <input id="radio-1" name="radio" type="radio" />
                          <label htmlFor="radio-1" className="radio-label">Male</label>
                        </div>
                        <div className="radio">
                          <input id="radio-2" name="radio" type="radio" />
                          <label htmlFor="radio-2" className="radio-label">Female</label>
                        </div>
                        <div className="radio">
                          <input id="radio-3" name="radio" type="radio" />
                          <label htmlFor="radio-3" className="radio-label">Other</label>
                        </div>
                      </div>
                      {/* Terms and Conditions acknowledgment */}
                      <div className="checkbox-container"><input type="checkbox" id="sccheckbox" className="checkbox-sc" /><label htmlFor="sccheckbox" className="switch-checkbox" />
                        <p>I agree to the terms and conditions</p>
                      </div>
                      {/* Hidden error text section */}
                      <div className="error" id="error">
                        <p className="error-txt">Please agree to the terms and conditions to proceed</p>
                      </div>
                    </div>
                  </div>
                  {/* Submit button */}
                  <div className="submit"><button type="submit" className="button">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      );
    }
export default ProfileCreation;