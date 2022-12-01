import React from "react";
import '../assets/style.css'

/**
 * React component for About page
 */
const element = (
    <div>
        <h1>YOUR DENTIST NAME</h1>
        <body>
            <p className='default'>
                Introduce your business:
            </p>
            <p className='default'>
                Mention the goal of the business:
            </p>
            <p className='default'>
                Introduce an example what the business do, such as videos and images:
            </p>
        </body>
    </div>
);


/**
 * Gets the About page
 * @returns react component for about page
 */
function About() {
    return element
}

export default About;