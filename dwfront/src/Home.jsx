import React from "react";

const element = (
    <div>
        <h1>You're home</h1>
        <body>
            <p style={{color: 'red'}}>
                Welcome to you dentist group! We hope you have teeth that need dentist-ing
            </p>
            <p>
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