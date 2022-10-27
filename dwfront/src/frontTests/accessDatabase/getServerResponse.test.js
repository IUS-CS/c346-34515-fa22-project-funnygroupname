import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {postData} from "yarn/lib/cli";


class testClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            strVal:"nothing"
        }
    }

    testMethod() {
        axios
            .get("http://localhost:4000/app/")
            .then(function (response) {
                console.log(response.data.message)
                return response.data.message
            }).then((data)=>{
                //console.log(JSON.stringify(data));
            //this.setState({strVal: JSON.stringify(data)});
        });
        return this.state.strVal;
    }

}


function getFromServ(){
    try {
        // axios
        //     .get("http://localhost:4000/app/")
        //     .then((response)=> {
        //         console.log(response)
        //     })
        let testStr = new testClass();
        return testStr.testMethod();
    }
    catch(err) {
        console.log(err);
        return "Error occurred while attempting to contact server; see getServerResponse test";
    }
}


test('Connect to and receive a response from our server', ()=> {
    expect(getFromServ()).toBe("Hello from the server !")
})