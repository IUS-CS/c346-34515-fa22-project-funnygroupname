import React from "react";
import LoginComponent from "../assets/LoginComponent";
import NavigationBar from "../assets/NavigationBar";
const element = (
    <div>
        <LoginComponent>

        </LoginComponent>
        <h1>
            Enter your username
        </h1>
        <h1>
             Enter your password
        </h1>

    </div>

);
function SignIn (){
    return element;
}
export default SignIn;