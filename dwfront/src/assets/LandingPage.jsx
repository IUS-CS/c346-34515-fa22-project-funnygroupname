import React from "react";

import {Route, Link} from "react-router-dom";
import {Routes, route} from "react-router-dom";

import NavigationBar from "./NavigationBar";

import Home from "../pages/Home";
import Appointments from "../pages/Appointments";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About"
import SignIn from "../pages/SignIn";
import Schedule from "../pages/Schedule";
import Customers from "../pages/Customers";
import Account from "../pages/Account";
import RequestAppointment from "../pages/RequestAppointment";
import DatabaseTest from "../pages/DatabaseTest"
import LocVars from "./LocalVariables"


/**
 * landing page variable
 */
const land = (
    <div className='LandingPage'>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/schedule" element={<Schedule/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/reqapp" element={<RequestAppointment/>}/>
            <Route path="/test" element={<DatabaseTest/>}/>
            <Route path="/account" element={<Account/>}/>
            <></>
        </Routes>
    </div>
);

/**
 * Gets the Landing page of our website and runs the setUpLocalVariable method
 * This ensures that no matter which page is called, the local variables
 * are set up
 * @returns react component for the landing page
 */
function LandingPage() {
    LocVars.setUpLocalVariables()
    return land
}


export default LandingPage;