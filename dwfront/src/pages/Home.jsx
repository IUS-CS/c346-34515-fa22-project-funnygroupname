import React from "react";
import '../assets/style.css'


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
    </div>
);

function Home() {
    return element
}

export default Home;