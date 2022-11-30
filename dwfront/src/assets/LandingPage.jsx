import React from "react";

import {Route, Link} from "react-router-dom";
import {Routes, route} from "react-router-dom";

import NavigationBar from "./NavigationBar";

import Home from "../pages/Home";
import Appointments from "../pages/Appointments";
import ContactUs from "../pages/ContactUs";
import About from "../pages/About"
import SignIn from "../pages/SignIn";
import EmployeeSchedule from "../pages/EmployeeSchedule";
import Customers from "../pages/Customers";
import RequestAppointment from "../pages/RequestAppointment";
import DatabaseTest from "../pages/DatabaseTest"

const land = (
    <div className='LandingPage'>
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/appointments" element={<Appointments/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/employeeschedule" element={<EmployeeSchedule/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/reqapp" element={<RequestAppointment/>}/>
            <Route path="/test" element={<DatabaseTest/>}/>
            <></>
        </Routes>
    </div>
);

function LandingPage() {
    return land
}


export default LandingPage;