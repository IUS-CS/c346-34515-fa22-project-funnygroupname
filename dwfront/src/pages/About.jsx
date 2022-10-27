import React from "react";
import '../assets/style.css'


const element = (
    <div>
        <h1>YOUR DENTIST NAME</h1>
        <body>
            <p className='default'>
                I hope these large words help you trust this website more
            </p>
            <p className='default'>
                This is really just a test for fonts
            </p>
        </body>
    </div>
);

function About() {
    return element
}

export default About;