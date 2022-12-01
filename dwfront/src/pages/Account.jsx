import React from "react";
import '../assets/style.css'
import Button from 'react-bootstrap/Button';
import {Login, logOut} from "../assets/LoginComponent";

/**
 * React component for About page
 */
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

/**
 * Gets the Account page if they are logged in; requests they log in otherwise
 * @returns react component for Account page
 */
function Account() {
    let isLoggedIn = localStorage.getItem("loggedIn")
    if (isLoggedIn !== "true") {
        return (<Login/>)
    } else {
        return element
    }
}

export default Account;