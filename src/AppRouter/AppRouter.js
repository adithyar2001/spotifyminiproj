import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Spotifysignup from "../pages/Spotifysignup";
import PlayRouter from "../playrouter/PLayRouter";
const AppRouter = () =>{
    return (
        <Router>
            <Routes>
            <Route path="/" element={<PlayRouter/>} />
                <Route path="/signup" element={<Spotifysignup/>} />
            </Routes>
        </Router>
    );
}
export default AppRouter;