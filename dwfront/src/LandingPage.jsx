import React from "react";
import Contacts from "./Contacts";
import Home from "./Home";
import App from "./App";
import {Route, Link} from "react-router-dom";
import {Routes, route} from "react-router-dom";
import NavigationBar from "./NavigationBar";

const land = (
    <div className='LandingPage'>
        <NavigationBar></NavigationBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/app" element={<App/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </div>
);

function LandingPage() {
    return land
}


export default LandingPage;