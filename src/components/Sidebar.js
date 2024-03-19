import React from "react";
import "../assets/styles/spotifyhome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-section-1">
          <div class="logo">
            <a href="#">
              <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                alt="logo"
              />
            </a>
          </div>
          <div class="navigation">
            <ul>
              <li>
                <Link to="/">
                <a href="#">
                  <span class="fa fa-home"><FontAwesomeIcon icon={faHouse} /></span>
                  <span>  Home</span>
                </a>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span class="fa fa-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                  <span>  Search</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="sidebar-section-1">
          <div class="navigation">
            <div class="lib-section">
              <div>
                <a href="#">
                  <div class="your-lib">
                    <div>
                      <span class="fa fas fa-book"><FontAwesomeIcon icon={faBookOpen} /></span>
                    </div>
                    <div>
                      <span>Your Library</span>
                    </div>
                  </div>
                </a>
              </div>
              <div>
                <a href="#">
                  <span class="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></span>
                </a>
              </div>
            </div>

            <div class="scroll-class">
              <div class="create-find">
                <div class="create-playlist">
                  <div>
                    <h5>Create your first playlist</h5>
                  </div>
                  <div>
                    <p>It's easy, we'll help you</p>
                  </div>
                  <div>
                    <button>Create playlist</button>
                  </div>
                </div>
                <div class="find-podcast">
                  <div>
                    <h5>Let's find some podcasts to follow</h5>
                  </div>
                  <div>
                    <p>We'll keep you updated on new episodes</p>
                  </div>
                  <div>
                    <button>Browse podcasts</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar-links">
              <div>
                <a href="#">Legal</a>
              </div>
              <div>
                <a href="#">Privacy</a>
              </div>
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Cookies</a>
              </div>
              <div>
                <a href="#">About Ads</a>
              </div>
              <div>
                <a href="#">Accessibility</a>
              </div>
            </div>

            <div class="policies">
              <ul>
                <li>
                  <a href="#">Cookies</a>
                </li>
              </ul>
            </div>

            <div class="lang-btn">
              <button>
                <i class="fa fa-globe"><FontAwesomeIcon icon={faGlobe} /></i>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
