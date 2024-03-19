import React from "react";
import spotify from "../assets/styles/images/spotify.png";
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
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import Bottommediaplayer from "../components/Bottommusicplayer";
import { useState } from "react";


const Spotifyplaylist = () => {
  const [aboutplaying, SetAboutplaying] = useState(false);

    const handleplayclick = ()=>{
        SetAboutplaying(!aboutplaying)
    }
  const navigate = useNavigate();
  const handletoindividualsong = ()=>{
    navigate('/songlistonclick');
      
  }
  return (
    
    <>
      <body>
        <Sidebar />
        <div className="main-container">
          <Topbar/>
          <div className="playlist-card">
            <div className="top-theme">
              <div>
                <img
                  height="200px"
                  className="top-theme-image"
                  src="https://i.scdn.co/image/ab67706f000000028d90dd98d40fd7fba2fd0223"
                  alt=""
                />
              </div>
              <div className="theme-text">
                <div>
                  <p>Playlist</p>
                </div>
                <div>
                  <h3>Happy Hits!</h3>
                </div>
                <div>
                  <p>Hits to boost your mood and fill you with happiness!</p>
                </div>
                <div className="theme-link-outer">
                  <div className="theme-link">
                    <div>
                      <img src={spotify} alt="" height="20px" />
                    </div>
                    <div>
                      <a href="#">Spotify</a>
                    </div>
                  </div>
                  <div>
                    <p> . 6,204,666 likes 100 songs, about 4 hr 45 min</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="play-top">
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
              <div className="table-div">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <p className="hash">#</p>
                      </th>
                      <th>
                        <p>Title</p>
                      </th>
                      <th className="to-hide">
                        <p>Album</p>
                      </th>
                      <th className="to-hide">
                        <p>Date added</p>
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
                  
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
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
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtK8uUQwINvtrwOhy0dwQgJfyCkvzMl_KztvnUIAXFQ&s"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">
                                  Rockin' Around The Christmas Tree
                                </a>
                              </div>
                              <div>
                                <a href="#">Brenda Lee</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Merry christmas from brenda lee</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>2:06</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                    
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>2</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b273c7337ca0137ed4f15f00e3ca"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">On My Love</a>
                              </div>
                              <div>
                                <a href="#">Zara Larsson, David Guetta</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">On My Love</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:42</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"></span>
                        </div>
                      </td>
                    </tr>

                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>3</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b273e415acfc247a0401946ca104"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Houdini</a>
                              </div>
                              <div>
                                <a href="#">Dua Lipa</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Houdini</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:06</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                    
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>4</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e022a368fea49f5c489a9dc3949"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Heaven</a>
                              </div>
                              <div>
                                <a href="#">Niall Horan</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Heaven</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:06</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                    
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>5</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Cruel Summer</a>
                              </div>
                              <div>
                                <a href="#">Taylor Swift</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Cruel Summer</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>2:58</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

             
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>6</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67706c0000da84c2eeef93bd5aad523f275abb"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Water</a>
                              </div>
                              <div>
                                <a href="#">Tyla</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Water</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:20</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                 
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>7</span>
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
                                <a href="#">I Ain't Worried</a>
                              </div>
                              <div>
                                <a href="#">One Republic</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">I Ain't Worried</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>3 years ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>2:28</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                  
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>8</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b2733e6613d8dca59eccc434c5f5"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Dive</a>
                              </div>
                              <div>
                                <a href="#">Olivia Dean</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Dive</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:20</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>

                    
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>9</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616100005174b51f0aabeb157cf5fb151c97"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Feather</a>
                              </div>
                              <div>
                                <a href="#">Sabrina Carpenter</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Feather</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:05</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-more-options">
                          <span className="fas fa-ellipsis-h"><FontAwesomeIcon icon={faEllipsis} /></span>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="list-cell" onClick={handletoindividualsong}>
                      <td>
                        <div className="list-music-list-no">
                          <div className="list-play">
                            <span className="fa fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                          </div>
                          <div className="list-no">
                            <span>10</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="img-plus-text-outer">
                          <div className="img-plus-text">
                            <div>
                              <img
                                src="https://i.scdn.co/image/ab67616d0000b273c18194a4022ec44507f7b248"
                                alt=""
                              />
                            </div>
                            <div>
                              <div>
                                <a href="#">Celestial</a>
                              </div>
                              <div>
                                <a href="#">Ed Sheeran</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="album-link-text">
                          <a href="#">Celestial</a>
                        </div>
                      </td>
                      <td className="to-hide">
                        <div className="date-added-text">
                          <p>1 week ago</p>
                        </div>
                      </td>
                      <td>
                        <div className="list-like-songs">
                          <span className="far fa-heart"><FontAwesomeIcon icon={faHeart} /></span>
                        </div>
                      </td>
                      <td className="time-text">
                        <div className="duration">
                          <p>3:29</p>
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
        
        {/* <Bottommediaplayer/> */}
        <Bottommediaplayer aboutplaying={aboutplaying}/>
        <script
          src="https://kit.fontawesome.com/23cecef777.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </>
  );
};
export default Spotifyplaylist;
