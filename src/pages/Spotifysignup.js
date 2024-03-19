import React from "react";
import "../assets/styles/spotifysignup.css";
import search from '../assets/styles/images/search.png'
import facebook from '../assets/styles/images/facebook (1).png'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";


const Spotifysignup = () => {

    const navigate= useNavigate();

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const [signupinvalid, setSignupinvalid] =useState('');

    const handleEmail = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);
        setIsValidEmail(isValid);
      };

      
  const handleemailsubmit = (e) => {
    e.preventDefault();
    
    if (isValidEmail) {
        navigate('/signuppass')
    } else {
        setSignupinvalid('This email is invalid. Make sure its written like example@gmail.com')
    //   alert('Invalid email. Please provide a valid email address.');
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

        <div class="login-outer">
            <div class="login-inner">
                <div class="typo">
                    <h1>Sign up to start listening</h1>
                </div>

                <div class="signup-data">
                    <form action="" onSubmit={handleemailsubmit}>
                        
                        <div class="ip-name">
                            <div>
                                <label>Email address</label>
                            </div>
                            <div>
                                <input type="email" placeholder="name@domain.com" onChange={handleEmail} value={email}/>
                            </div>
                        </div>
                        <div>
                            
                            {signupinvalid &&<div className="signuperror">
                                <div>
                                <FontAwesomeIcon icon={faCircleInfo} />
                                </div>
                                <div>
                                    <p>{signupinvalid}</p>
                                </div>
                                </div>}

                        </div>

                        <div>
                            <a href="#">Use phone number instead.</a>
                        </div>

                        <div class="login-button">
                            <input type="submit" value="Next"/>
                        </div>
                    </form>
                </div>

                <div class="or-line">
                    <div class="line"><hr/></div>
                    <div>
                        <p>or</p>
                    </div>
                    <div class="line"><hr/></div>
                </div>

                
                <div class="btn-class">
                    <div>
                        <button>
                            <div class="login-btns" >
                                <div>
                                    <img src={search} alt="" />
                                </div>
                                <div>
                                    <p>Continue with Google</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div>
                        <button>
                            <div class="login-btns">
                                <div>
                                    <img src={facebook} alt="" />
                                </div>
                                <div>
                                    <p>Continue with Facebook</p>
                                </div>
                            </div>
                        </button>
                    </div>

                </div>

                <hr/>


                <div class="login-link-outer">
                    <div class="login-link">
                        <div>
                            <p>Already have an account?</p>
                        </div>
                        <div>
                            <a href="#">
                              <Link to="/login">Log in here.</Link></a>
                        </div>
                    </div>
                </div>

                
                <div class="footer-sign">
                    <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a
                            href="#">Terms of Service</a> apply.</p>
                </div>
            </div>

            
        </div>
    </div>

</body>
    </>
  );
};
export default Spotifysignup;
