import React from "react";
import useSound from "use-sound";
import axios from 'axios';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Bottommusicplayer.css";
import onerepublic from "../assets/styles/AUDIO/iaintworried.mp3";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

const Bottommediaplayer = ({aboutplaying}) => {

  
  const [isPlaying, setIsPlaying] = useState(false);

  const [play, { pause, duration, sound }] = useSound(onerepublic);

  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };
  
  useEffect(()=>{
    if (aboutplaying) {
      pause(); 
      setIsPlaying(false);
    } else {
      play(); 
      setIsPlaying(true);
    }
  },[aboutplaying])

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); 
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause(); 
      setIsPlaying(false);
    } else {
      play(); 
      setIsPlaying(true);
    }
  };
  return (
    <div className="play-area">
      <div>
        <div className="play-area-img">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273ec96e006b8bdfc582610ec13"
            alt=""
          />
        </div>

        <div className="play-area-links">
          <div>
            <div>
              <a href="#">I Ain't Worried</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#">OneRepublic</a>
            </div>
          </div>
        </div>
        <div className="playarea-like">
          <span className="far fa-heart">
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
      </div>

      <div className="play-control-length">
        <div className="play-area-controls-play">
          <div>
            <span className="fa fa-random">
              <FontAwesomeIcon icon={faShuffle} />
            </span>
          </div>
          <div>
            <span className="fa fa-step-backward">
              <FontAwesomeIcon icon={faBackwardStep} />
            </span>
          </div>
          <div>
            <div>
              {/* {!isPlaying ? ( */}
                <button className="play-btn" onClick={playingButton}>
                <span className="fa fa-pause" id="pause">
                {!isPlaying ? 
                  <FontAwesomeIcon icon={faPause} />: <FontAwesomeIcon icon={faPlay} />}
                </span>
              </button>
              {/* // ) : (
              //   <button className="play-btn" onClick={playingButton}>
              //     <span className="fa fa-play" id="play">
              //       <FontAwesomeIcon icon={faPlay} />
              //     </span>
              //   </button>
                
              // )} */}
            </div>
          </div>
          <div>
            <span className="fa fa-step-forward">
              <FontAwesomeIcon icon={faForwardStep} />
            </span>
          </div>
          <div>
            <span className="fas fa-repeat">
              <FontAwesomeIcon icon={faRepeat} />
            </span>
          </div>
        </div>
        <div className="play-length-outer">
          <div>
            <span>
              {currTime.min}:{currTime.sec}
            </span>

            <div className="play-length">
              <div>
                <input
                  type="range"
                  className="length-player"
                  default="0"
                  min="0"
                  max={duration / 1000}
                  value={seconds}
                  onChange={(e) => {
                    sound.seek([e.target.value]);
                  }}
                />
              </div>
            </div>
            <span>
              {time.min}:{time.sec}
            </span>
          </div>
        </div>
      </div>

      <div className="right-play-area">
        <div>
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faCirclePlay} />
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faMicrophone} />
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faLayerGroup} />
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faLaptop} />
          </span>
        </div>
        <div>
          <div>
            <span className="material-symbols-outlined">
              <FontAwesomeIcon icon={faVolumeHigh} />
            </span>
          </div>
          <div>
            <input type="range" value="100" />
          </div>
        </div>
        <div>
          <span className="material-symbols-outlined">
            <FontAwesomeIcon icon={faSquare} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default Bottommediaplayer;
