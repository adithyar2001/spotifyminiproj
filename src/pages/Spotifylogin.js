import React from "react";
import "../assets/styles/spotifylogin.css";
import search from "../assets/styles/images/search.png";
import facebook from "../assets/styles/images/facebook (1).png";
import apple from "../assets/styles/images/apple.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Spotifylogin = () => {
  const navigate = useNavigate();
  const users = [
    {
      username: "adith54756@gmail.com",
      password: "adith2001@",
    },
    {
      username: "spotifyex@gmail.com",
      password: "spotifyex2001@",
    },
  ];
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValidCredentials, setIsValidCredentials] = useState(true);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setIsValidCredentials(false);
      return;
    }

    const isValid = users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValid) {
      navigate('/')
      // alert("Login successful!");
    } else {
      setIsValidCredentials(false);
    }
  };

  // const [data, SetData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const [invalidlogin, setInvalidlogin] = useState("");

  // const navigate = useNavigate();

  // const changehandler = (e) => {
  //   SetData({ ...data, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   checkUser(users);
  // };
  // const checkUser = () => {
  //   const usercheck = users.find(
  //     (user) =>
  //       user.username === data.username && user.password === data.password
  //   );
  //   if (usercheck) {
  //     navigate("/");
  //     console.log("login sucess");
  //   } else {
  //     setInvalidlogin("Incorrect username or password");
  //     console.log("wrong username or password");
  //   }
  // };

  // console.log(data);
  return (
    <>
      <body>
        <div className="main-containers1">
          <div className="topbar-login">
            <div>
              <a href="#">
                <img
                  src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div className="login-outer-con">
            <div className="login-inner-con">
              <div>
                <h1>Log in to Spotify</h1>
              </div>

              {/* {invalidlogin && (
                <div className="error-outer">
                  <div>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </div>
                  <div>
                    <p className="error">{invalidlogin}</p>
                  </div>
                </div>
              )} */}

              {!isValidCredentials && (
                <div className="error-outer">
                  <div>
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </div>
                  <div>
                    <p className="error">Incorrect username or Password</p>
                  </div>
                </div>
              )}

              <div className="btn-class-con">
                <div>
                  <button>
                    <div className="login-btns-con">
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
                    <div className="login-btns-con">
                      <div>
                        <img src={facebook} alt="" />
                      </div>
                      <div>
                        <p>Continue with Facebook</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button>
                    <div className="login-btns-con">
                      <div>
                        <img src={apple} alt="" />
                      </div>
                      <div>
                        <p>Continue with Apple</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button>
                    <div className="login-btns-con">
                      <div className="number-con">
                        <p>Continue with phone number</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <hr />

              <div className="field-data">
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="ip-field">
                      <div>
                        <label>Email or username</label>
                      </div>
                      <div>
                        {/* <input
                          type="text"
                          placeholder="Email or username"
                          name="username"
                          value={data.username}
                          onChange={changehandler}
                        /> */}
                        <input
                          type="text"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                      </div>
                    </div>

                    <div className="ip-field">
                      <div>
                        <label>Password</label>
                      </div>
                      <div>
                        {/* <input
                          type="text"
                          placeholder="Password"
                          name="password"
                          value={data.password}
                          onChange={changehandler}
                        /> */}

                        <input
                          type="text"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                    </div>

                    <div className="toggle-btn">
                      <div>
                        <label className="switch-outer">
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </label>
                      </div>
                      <div>
                        <p>Remember me</p>
                      </div>
                    </div>

                    <div className="login-buttons">
                      <input type="submit" value="Log In" />
                    </div>

                    <div className="forgot-pass">
                      <Link to="/forgotpassword">
                        <a href="#">Forgot your password?</a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <hr />

              <div>
                <div className="signup-link">
                  <div>
                    <p>Don't have an account?</p>
                  </div>
                  <div>
                    <Link to="/signup">
                      <a href="#">Sign up for Spotify</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div style={{ background: "black" }}>
                <div className="footer-login">
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
export default Spotifylogin;
