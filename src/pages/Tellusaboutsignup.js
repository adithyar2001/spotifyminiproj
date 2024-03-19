import React from "react";
import "../assets/styles/spotifysignup.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Spotifysignuptellus = () => {
  const navigate = useNavigate();

  const [tellus, setTellus] = useState({
    name: "",
    year: "",
    month: "",
    day: "",
    gender: "",
  });

  const [telluserror, setTelluserror] = useState({
    name: "",
    year: "",
    month: "",
    day: "",
    gender: "",
  });

  const handletellussubmit = (e) => {
    e.preventDefault();

    if (!tellus.name.trim()) {
      setTelluserror({
        ...telluserror,
        name: "Name is required",
      });
      return;
    }

    if (!tellus.year) {
      setTelluserror({
        ...telluserror,
        year: "year is required",
      });
      return;
    }

    if (!tellus.month) {
      setTelluserror({
        ...telluserror,
        month: "month is required",
      });
      return;
    }

    if (!tellus.day) {
      setTelluserror({
        ...telluserror,
        day: "day is required",
      });
      return;
    }
    if (!tellus.gender) {
      setTelluserror({
        ...telluserror,
        gender: "Please select your gender",
      });
      return;
    }

    console.log("Form submitted successfully:", tellus);
    navigate("/signupterms");
  };

  const handlename = (e) => {
    const { name, value } = e.target;

    setTellus({
      ...tellus,
      [name]: value,
    });

    setTelluserror({
      ...telluserror,
      [name]: "",
    });
  };

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
              <div className="progressbar-2-outer">
                <p className="progressbar-2"></p>
              </div>
              <div class="login-inner">
                <div class="signup-data">
                  <form onSubmit={handletellussubmit}>
                    <div className="top-navigation-pass">
                      <div className="top-back-left">
                        <span>
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </span>
                      </div>
                      <div className="top-navigation-text">
                        <div>
                          <p>Step 2 of 3</p>
                        </div>
                        <div>
                          <p>Tell us about yourself</p>
                        </div>
                      </div>
                    </div>

                    <div class="ip-name">
                      <div>
                        <label>Name</label>
                      </div>
                      <p className="why-gen">
                        This name will appear on your profile
                      </p>
                      <div className="input-name-tellus">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={handlename}
                          value={tellus.name}
                        />
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {telluserror.name}
                      </span>
                    </div>

                    <div>
                      <div>
                        <p className="dob-text">Date of birth</p>
                      </div>
                      <p className="why-dob">
                        Why do we need your date of birth ?
                        <a href="#"> Learn more.</a>
                      </p>
                      <div className="select-date">
                        <div>
                          <select
                            id="year"
                            name="year"
                            value={tellus.year}
                            onChange={handlename}
                          >
                            <option value="">yyyy</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                          </select>
                        </div>
                        <div>
                          <select
                            id="month"
                            name="month"
                            value={tellus.month}
                            onChange={handlename}
                          >
                            <option value="">month</option>
                            <option value="Jan">January</option>
                            <option value="Feb">February</option>
                            <option value="Mar">March</option>
                            <option value="Apr">April</option>
                            <option value="May">May</option>
                            <option value="Jun">June</option>
                            <option value="Jul">July</option>
                            <option value="Aug">August</option>
                            <option value="Sep">September</option>
                            <option value="Oct">October</option>
                            <option value="Nov">November</option>
                            <option value="Dec">December</option>
                          </select>
                        </div>
                        <div>
                          <select
                            id="day"
                            name="day"
                            value={tellus.day}
                            onChange={handlename}
                          >
                            <option value="">dd</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {telluserror.year}
                      </span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {telluserror.month}
                      </span>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {telluserror.day}
                      </span>
                    </div>

                    <div>
                      <div className="gender-text">
                        <p>Gender</p>
                      </div>
                      <p className="why-gen">
                        We use your gender to help personalize our content
                        recommendations and ads for you.
                      </p>
                      <div className="radio-gender">
                        <div className="checkbox-top">
                          <div>
                            <label className="radio-container">
                              <input
                                type="radio"
                                name="gender"
                                id="man"
                                value="student"
                                onChange={handlename}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <span>Man</span>
                          </div>
                          <div>
                            <label className="radio-container">
                              <input
                                type="radio"
                                name="gender"
                                id="woman"
                                value="woman"
                                onChange={handlename}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <span>Woman</span>
                          </div>
                          <div>
                            <label className="radio-container">
                              <input
                                type="radio"
                                name="gender"
                                id="nonbinary"
                                value="nonbinary"
                                onChange={handlename}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <span>Non-binary</span>
                          </div>
                        </div>
                        <div className="checkbox-bottom">
                          <div>
                            <label className="radio-container">
                              <input
                                type="radio"
                                name="gender"
                                id="other"
                                value="other"
                                onChange={handlename}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <span>Something else</span>
                          </div>
                          <div>
                            <label className="radio-container">
                              <input
                                type="radio"
                                name="gender"
                                id="nottosay"
                                value="nottosay"
                                onChange={handlename}
                              />
                              <span className="checkmark"></span>
                            </label>
                            <span>Prefer not to say</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span
                        style={{
                          color: "red",
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        {telluserror.gender}
                      </span>
                    </div>

                    <div class="login-button-passnext">
                      <input type="submit" value="Next" />
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
export default Spotifysignuptellus;
