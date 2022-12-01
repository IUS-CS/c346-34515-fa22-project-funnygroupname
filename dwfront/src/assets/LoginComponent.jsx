import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";



/**
 * Function to set local variables to the state of being logged out
 */
function logOut() {
    localStorage.setItem("username","nil")
    localStorage.setItem("loggedIn","false")
    localStorage.setItem("privilege","nil")
}


/**
 * Temporary variables for logging in
 */
let usernameTemp = "";
let passwordTemp = "";

/**
 * Logs a user into their account given their account username and password
 */
function onSubmit(){


    const requ = {
        username:"user",
        password:"2124",
    }

    axios.post('http://localhost:4000/app/users', requ)
        .then(response => console.log(response.data))

    usernameTemp = ""
    passwordTemp = ""
}


/**
 * login variable
 */
const login = (
    <div >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Login </Card.Title>

                <div className = 'form-div'>
                    <form onSubmit={onSubmit}>
                        <input type = 'text'
                               placeholder='username'
                               //onChange={this.changeFullName}
                               //value={usernameTemp}
                               className='form-control form-group'
                        />

                        <input type = 'text'
                               placeholder='password'
                               //onChange={this.changeEmail}
                               //value={passwordTemp}
                               className='form-control form-group'
                        />
                        <Button variant="outline-primary" type='submit'>Login</Button>{' '}
                    </form>
                </div>


                <Card.Text>
                    If you don't have an account, please sign up.
                </Card.Text>
                <Button variant="outline-info">Sign Up</Button>{' '}
            </Card.Body>
        </Card>

    </div>
);

/**
 * welcome message variable
 */
const welcome = (
    <div >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Login </Card.Title>
                <Card.Text>
                    Welcome {localStorage.getItem("username")}
                </Card.Text>
                <Card.Text>
                    You are logged in
                </Card.Text>
            </Card.Body>
        </Card>

    </div>
);

/**
 * Gets the Login component; returns a different login
 * component whether you are logged in or not.
 * @returns a way to login if not logged in; returns a welcome message otherwise
 */
function Login() {
    let isLoggedIn = localStorage.getItem("loggedIn")
    if (isLoggedIn !== "true") {
        return login
    } else {
        return welcome
    }
}

export {Login, logOut};

