import React from "react";
import "../assets/styles/spotifysignup.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Spotifysignupterms = () => {
    const navigate = useNavigate();
    const handlesignuptohome =()=>{
        navigate('/')

    }
  return (
    <>
      <body>
        <div class="main-containers">
          <div class="topbar">
            <div>
              <a href="#">
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="login-outer" style={{ background: "#121212" }}>
            <div className="login-middle">
              <div className="progressbar-3-outer">
                <p className="progressbar-3"></p>
              </div>
              <div class="login-inner">
                <div class="signup-data">
                  <form>
                    <div className="top-navigation-pass">
                      <div className="top-back-left">
                        <span>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                      </div>
                      <div className="top-navigation-text">
                        <div>
                          <p>Step 3 of 3</p>
                        </div>
                        <div>
                          <p>Terms & Conditions</p>
                        </div>
                      </div>
                    </div>

                    <div className="conditions">
                      <div  className="condition-1">
                        <div>
                        <label className="term-container">
                            <input type="checkbox" />
                            <span className="checkmark-term"></span>
                            </label>
                          
                        </div>
                        <div>
                          <p>
                            I would prefer not to receive marketing messages
                            from Spotify
                          </p>
                        </div>
                      </div>

                      <div className="condition-2">
                        <div>
                        <label className="term-container">
                            <input type="checkbox" />
                            <span className="checkmark-term"></span>
                            </label>
                        </div>
                        <div>
                          <p>
                            Share my registration data with Spotify's content
                            providers for marketing purposes.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="termswithlink">
                      <div>
                        <p>By clicking on sign-up, you agree to Spotify's <a href="/">Terms and Conditions of Use.</a>.</p>
                      </div>
                      <div>
                        <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <a href="/">Spotify's Privacy Policy</a>.</p>
                      </div>
                    </div>

                    <div class="login-button-passnext">
                      <input type="button" value="Next" onClick={handlesignuptohome} />
                    </div>
                  </form>
                </div>

                <div class="footer-sign" style={{ background: "#121212" }}>
                  <p>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="#">Privacy Policy</a> and{" "}
                    <a href="#">Terms of Service</a> apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
export default Spotifysignupterms;
