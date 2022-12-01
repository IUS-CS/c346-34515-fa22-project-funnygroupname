import React from "react";
import '../assets/style.css'
import {Link} from "react-router-dom";

/**
 * React component for Home page
 */
const element = (
    <div>
        <h1>You're home</h1>
        <body>
            <p className = "default">
                Welcome to you dentist group! We hope you have teeth that need dentist-ing
            </p>
            <p className = "default">
                The last thing you will see is, a bright light. Then... your teeth will be clean.
                Or something.
            </p>
        </body>
        <footer className="footer01">
            <h4>
                To see your appointment:
            </h4>
            <Link to="/reqapp">Click here</Link>
        </footer>
    </div>
);

/**
 * Gets the Home page
 * @returns react component for Home page
 */
function Home() {
    return element
}

export default Home;