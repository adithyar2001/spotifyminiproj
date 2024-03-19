import React from "react";
// import '../assets/styles/Spotifyhome.css'
import "../assets/styles/spotifyhome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Topbar =() =>{
 
    return (
        <div className="topbar">
            <div className="prev-next-btn">
              <button type="button" className="fa fas fa-chevron-left">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button type="button" className="fa fas fa-chevron-right">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <div className="navbar">
              <ul>
                <li className="divider">|</li>
              </ul>
              <div className="top-btns">
                <div>
                  <Link to="/signup" style={{textDecoration:"none"}}>
                  <a href="#" className="signup-btn">
                    Sign Up
                  </a>
                  </Link>
                </div>

                <div>
                  <Link to="/login">
                  <button type="button" id="login-top-btn">Log In</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    );
    
}
export default Topbar;