import React from "react";

import {Route, Link} from "react-router-dom";
import {Routes, route} from "react-router-dom";

import NavigationBar from "./NavigationBar";

import Home from "../pages/Home";
import Appointments from "../pages/Appointments";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About"
import SignIn from "../pages/SignIn";
import Overview from "../pages/Overview";
import Photos from "../pages/Photos";

const land = (
    <div className='LandingPage'>
        <NavigationBar></NavigationBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/overview" element={<Overview/>}/>
            <Route path="/photos" element={<Photos/>}/>
        </Routes>
    </div>
);

function LandingPage() {
    return land
}


export default LandingPage;