import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css'
const element = (
    <div >
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Upcoming Appointments</Card.Title>
                <Card.Text>
                    Check your upcoming appointments
                </Card.Text>
                <Button variant="primary">Upcoming Appointments</Button>
            </Card.Body>
        </Card>

    </div>
);

function Appointments() {
    return element
}

export default Appointments;
