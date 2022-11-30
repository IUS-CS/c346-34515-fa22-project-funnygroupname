import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

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
                    If you don't have an account, please sign up.
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>

    </div>
);


const element2 = (
    <div >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Login </Card.Title>
                <Card.Text>
                    You are not signed in. please sign in.
                </Card.Text>
                <Button variant="primary">Login</Button>
                <Card.Text>
                    If you don't have an account, please sign up.
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>

    </div>
);

function Login() {
    if (true) {

        return element
    } else {
        return element2
    }
}

export default Login;

