import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css'

/**
 * element for appointments component
 */
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

/**
 * Gets the component for appointments
 * @returns react component of appointments
 */
function Appointments() {
    return element
}

export default Appointments;
