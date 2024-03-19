import React, { useState } from "react";
import "../assets/styles/spotifyplaylist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottommediaplayer from "../components/Bottommusicplayer";


const Spotifyaboutsong = () => {
    const [aboutplaying, SetAboutplaying] = useState(false);

    const handleplayclick = ()=>{
        SetAboutplaying(!aboutplaying)
    }
  return (
    <>
      <body>
        <Sidebar />
        <div className="main-container">
          <Topbar/>
          <div className="playlist-card">
            <div className="top-theme" style={{background:'#164c52'}}>
              <div>
                <img
                  height="200px"
                  className="top-theme-image"
                  src="https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13"
                  alt=""
                />
              </div>
              <div className="theme-text">
                <div>
                  <p>Single</p>
                </div>
                <div>
                  <h3>I Ain't Worried</h3>
                </div>
                
                <div className="theme-link-outer">
                  <div className="theme-link">
                    <div>
                      <img src='https://i.scdn.co/image/ab6761610000517457138b98e7ddd5a86ee97a9b' alt="" height="22px" style={{borderRadius:'50%'}} />
                    </div>
                    <div>
                      <a href="#">OneRepublic . 2022</a>
                    </div>
                  </div>
                  <div>
                    <p>. 1 song, 2 min 28 sec</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="play-top" >
                <div className="play-top-1">
                  <div>
                    <div className="play" onClick={handleplayclick}>
                      <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                    </div>
                  </div>
                </div>
                <div className="play-top-2">
                  <div>
                    <div>
                      <p>List</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="fas fa-list"><FontAwesomeIcon icon={faListUl} /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="table-div" style={{paddingBottom:'100px'}}>
                <table>
                  <thead>
                    <tr>
                      <th>
                        <p className="hash">#</p>
                      </th>
                      <th>
                        <p>Title</p>
                      </th>
                      
                      <th></th>
                      <th>
                        <div className="thead-clock">
                          <span className="far fa-clock"><FontAwesomeIcon icon={faClock} /></span>
                        </div>
                      </th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    
                    <tr className="list-cell" style={{background:'rgba(36,36,36,255)'}}>
                      <td >
                        <div className="list-music-list-no" style={{width:'30px'}}>
                          <div className="list-play" onClick={handleplayclick}>
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>1</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">
                                  I Ain't Worried
                                </a>
                              </div>
                              <div>
                                <a href="#">OneRepublic</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      
                      <td >
                        <div className="list-like-songs" >
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>2:34</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                    
                  </tbody>
                </table>
                <div className="aboutsong-tablebottom">
                <p>May 13, 2022</p>
                <p>© 2022 Paramount Pictures</p>
                <p>℗ 2022 Mosley Music/Interscope Records</p>
              </div>
              </div>
              
            </div>

            <div class="footer">
                <div class="footer-section-1">
                    <div class="footer-items">
                        <ul>
                            <p>Company</p>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Jobs</a>
                            </li>
                            <li>
                                <a href="#">For the Record</a>
                            </li>
                        </ul>
                    </div>
    
                    <div class="footer-items">
                        <ul>
                            <p>Communities</p>
                            <li>
                                <a href="#">For Artists</a>
                            </li>
                            <li>
                                <a href="#">Developers</a>
                            </li>
                            <li>
                                <a href="#">Advertising</a>
                            </li>
                            <li>
                                <a href="#">Investors</a>
                            </li>
                            <li>
                                <a href="#">Vendors</a>
                            </li>
                        </ul>
                    </div>
    
                    <div class="footer-items">
                        <ul>
                            <p>Useful links</p>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Free Mobile App</a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                    
                <div class="footer-section-2">
                    <div class="footer-social-links">
                        <div>
                            <button >
                                <span class="fab fa-instagram" ><FontAwesomeIcon icon={faInstagram} /></span>
                            </button>
                        </div>
                        <div>
                            <button>
                                <span class="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></span>
                            </button>
                        </div>
                        <div>
                            <button>
                                <span class="fab fa-facebook"> <FontAwesomeIcon icon={faFacebookF} /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="copyright">
              <p>© 2023 Spotify AB</p>
            </div>
          </div>
        </div>
        
        <Bottommediaplayer aboutplaying={aboutplaying}/>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
};
export default Spotifyaboutsong;
