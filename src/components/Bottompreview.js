import React from "react";
import '../assets/styles/spotifyhome.css'
import { Link } from "react-router-dom";


 const Bottompreview = ()=>{
  
    return (
        <>
     
        <div className="preview">
          <div className="text">
            <h6>Preview of spotify </h6>
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed
            </p>
          </div>
          <div className="button">
            <Link to="/signup">
            <button type="submit">Sign up Free</button>
            </Link>
          </div>
        </div>
        </>
    );

 }
 export default Bottompreview;