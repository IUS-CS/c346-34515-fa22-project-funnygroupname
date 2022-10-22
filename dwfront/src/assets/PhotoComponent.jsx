import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/css'
const element = (
    <div >

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Photos</Card.Title>
                <Card.Text>
                    Upload your photo.
                </Card.Text>
                <Button variant="primary">Photos</Button>

            </Card.Body>
        </Card>

    </div>
);

function Photos() {
    return element
}

export default Photos;
