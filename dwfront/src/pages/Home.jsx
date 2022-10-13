import React from "react";
import '../assets/style.css'
import {Link} from "react-router-dom";
import Overview from "../pages/Overview"
import NavigationBar from "../assets/NavigationBar";


const element = (
    <div>
        <h1>You're home</h1>
        <body>
            <p className = "pMain01">
                Welcome to you dentist group! We hope you have teeth that need dentist-ing
            </p>
            <p className = "pMain01">
                The last thing you will see is, a bright light. Then... your teeth will be clean.
                Or something.
            </p>
        </body>
        <Overview></Overview>
        <footer className="footer01">
            <h4>
                To see your appointment:
            </h4>
            <Link to="/reqapp">Click here</Link>
        </footer>
    </div>
);

function Home() {
    return element
}

export default Home;