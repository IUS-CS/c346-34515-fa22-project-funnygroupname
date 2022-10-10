import React from "react";
import Contacts from "./Contacts";
import Home from "./Home";
import Appointments from "./Appointments";
import {Route, Link} from "react-router-dom";
import {Routes, route} from "react-router-dom";
import NavigationBar from "./NavigationBar";

const land = (
    <div className='LandingPage'>
        <NavigationBar></NavigationBar>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
    </div>
);

function LandingPage() {
    return land
}


export default LandingPage;