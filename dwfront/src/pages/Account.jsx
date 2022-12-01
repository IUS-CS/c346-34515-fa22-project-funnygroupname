import React from "react";
import '../assets/style.css'
import Button from 'react-bootstrap/Button';
import LoginComponent from "../assets/LoginComponent";

function logOut() {
    localStorage.setItem("username","nil")
    localStorage.setItem("loggedIn","false")
    localStorage.setItem("privilege","nil")
}

const element = (
    <div>
        <h1>Account information</h1>
        <body>
        <p className='default'>
            Welcome back {localStorage.getItem("username")}
        </p>
        <p className='default'>
            You are a {localStorage.getItem("privilege")}
        </p>
        <p className='default'>
            Have a good ol' dentist time
        </p>


        <div className = 'form-div'>
            <form onSubmit={logOut}>
                <Button variant="outline-danger" type='submit'>Log Out</Button>
            </form>
        </div>

        </body>
    </div>
);

function Account() {
    let isLoggedIn = localStorage.getItem("loggedIn")
    if (isLoggedIn !== "true") {
        return (<LoginComponent/>)
    } else {
        return element
    }
}

export default Account;