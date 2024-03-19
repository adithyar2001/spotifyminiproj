import React from "react";
import "../assets/styles/spotifysignup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Spotifyforgotpassword = () => {
    const navigate =useNavigate();
    const [forgotemail, setForgotemail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (e) => {
        setForgotemail(e.target.value);
      };
      const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(forgotemail));
      };
      const handleforgotpassword = (e) => {
        e.preventDefault();
        if (isValidEmail && forgotemail !=="" ) {
            alert('An email has been has been send to your account to reset the password')
            navigate('/login')
        } 
      };
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
                
            <div class="login-inner">
                <div className="password-head">
                    <p>Password Reset</p>
                </div>
                <div className="reset-text">
                    <p>Enter your Spotify username, or the email address that you used to register. We'll send you an email with your username and a link to reset your password.</p>
                </div>

                <div class="signup-data">
                    <form onSubmit={handleforgotpassword}>
                        <div class="ip-name">
                            <div>
                                <label >Email address or username</label>
                            </div>
                            <div>
                                <input type="email" name="email" value={forgotemail} onChange={handleChange} onBlur={validateEmail} placeholder="Email address or username" />
                            </div>
                        </div>
                        <div>
                            
                            {!isValidEmail &&<div className="signuperror">
                                <div>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                </div>
                                <div>
                                    <p>Please enter a valid email</p>
                                </div>
                                </div>}

                        </div>

                        <div class="forgotpassword-send">
                            <input className="send-forgot" type="submit" value="Send"/>
                        </div>
                    </form>
                </div>

                
                
                <div className="reset-support">
                    <p>If you still need help, check out <a href="/">Spotify Support</a>.</p>
                </div>
            </div>
            </div>

            
        </div>
    </div>

</body>
    </>
  );
};
export default Spotifyforgotpassword;
