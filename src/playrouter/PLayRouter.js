import React from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import Sidebar from '../components/Sidebar';
 import Spotifyhome from "../pages/Spotifyhome";
 import Spotifyplaylist from "../pages/Spotifyplaylist";
 import Spotifysignup from "../pages/Spotifysignup";
import Spotifylogin from "../pages/Spotifylogin";
import Spotifysignupaddpass from "../pages/Signinaddpass";
import Spotifysignuptellus from "../pages/Tellusaboutsignup";
import Spotifysignupterms from "../pages/Signupterms";
import Spotifyforgotpassword from "../pages/Forgotpassword";
import Spotifyaboutsong from "../pages/Spotifyaboutsong";

 const PlayRouter = () =>{
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Spotifyhome/>}/>
            <Route path="/shome" element={<Spotifyplaylist/>}/>
            <Route path="/signup" element={<Spotifysignup/>}/>
            <Route path="/login" element={<Spotifylogin/>}/>
            <Route path="/signuppass" element={<Spotifysignupaddpass/>}/>
            <Route path="/signuptellus" element={<Spotifysignuptellus/>}/>
            <Route path="/signupterms" element={<Spotifysignupterms/>}/>
            <Route path="/forgotpassword" element={<Spotifyforgotpassword/>}/>
            <Route path="/songlistonclick" element={<Spotifyaboutsong/>}/>
            </Routes>
        </Router>
       
    );
 }
 export default PlayRouter;