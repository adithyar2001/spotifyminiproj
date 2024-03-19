import React from "react";
import "../assets/styles/spotifysignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Spotifysignupaddpass = () => {

    const navigate= useNavigate();
    const [formData, setFormData] = useState({
        password: ''
      });

      const handlepassword = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const [passwordError, setPasswordError] = useState('');



    const handlepasssubmit = (e) => {
        e.preventDefault();
      
 
  if (formData.password.length < 8) {
    setPasswordError('Password must be at least 8 characters long');
    return;
  } 
  else {
    navigate('/signuptellus')
  }
}

      
  

    
  return (
    <>
<body>
    <div class="main-containers">
        <div class="topbar">
            <div>
                <a href="#">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                        alt="" />
                </a>
            </div>
        </div>

        <div class="login-outer" style={{background:'#121212'}}>
            <div className="login-middle">
                <div className="progressbar-1-outer">
                    <p className="progressbar-1"></p>
                </div>
            <div class="login-inner">
                

                <div class="signup-data">
                    <form action="" onSubmit={handlepasssubmit}>

                        <div className="top-navigation-pass">
                        <div className="top-back-left">
                            <span>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            </span>
                        
                        </div>
                        <div className="top-navigation-text">
                            <div>
                                <p>Step 1 of 3</p>
                            </div>
                            <div>
                                <p>Create a password</p>
                            </div>
                        </div>
                        </div>

                        
                        
                        <div class="ip-name">
                            <div>
                                <label >Password</label>
                            </div>
                            <div>
                                <input type="password" name="password" onChange={handlepassword} value={formData.password}/>
                            </div>
                        </div>
                        <div>
                            
                            {passwordError &&<div className="signuperror">
                                <div>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                </div>
                                <div>
                                    <p>{passwordError}</p>
                                </div>
                                </div>}

                        </div>

                        <div className="password-instruction">
                            <p>The password must contain at least 8 characters. We recommend including at least 1 number and 1 special character.</p>
                        </div>

                        <div class="login-button-passnext">
                            <input type="submit" value="Next"/>
                        </div>
                    </form>
                </div>

                
                
                <div class="footer-sign" style={{background:'#121212'}}>
                    <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a
                            href="#">Terms of Service</a> apply.</p>
                </div>
            </div>
            </div>

            
        </div>
    </div>

</body>
    </>
  );
};
export default Spotifysignupaddpass;
