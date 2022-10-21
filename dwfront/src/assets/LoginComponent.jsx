import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css'
const element = (
    <div >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Login </Card.Title>
                <Card.Text>
                    You are not signed in. please sign in.
                </Card.Text>
                <Button variant="primary">Login</Button>
                <Card.Text>
                    If you don't have account, please sign up.
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>

    </div>
);

function Login() {
    return element
}

export default Login;
