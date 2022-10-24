import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {postData} from "yarn/lib/cli";


class testClass{
    strVar;
    constructor() {
        this.strVar = "nothing"
    }

    testMethod() {
        let promise = axios
            .get("http://localhost:4000/app/")
            .then((response)=> {
                const posts = response.data;
                return posts
            });
        this.strVar = promise[Symbol.toStringTag]
        return this.strVar
    }



}


function getFromServ(){
    try {

        axios
            .get("http://localhost:4000/app/")
            .then((response)=> {
                console.log(response)
            })

        return "nothing";
    }
    catch(err) {
        console.log(err);
        return "Error occurred while attempting to contact server; see getServerResponse test";
    }
}


test('Connect to and receive a response from our server', ()=> {
    expect(getFromServ()).toBe("Hello from the server !")
})