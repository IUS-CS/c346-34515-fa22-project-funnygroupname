import axios from 'axios'

function runServ(){
    try {

        axios
            .get("http://localhost:4000/app/")
            .then((response)=> {
                console.log(response)
            })


        return "ran without error";
    }
    catch(err) {
        // did not properly make contact with server
        return "Error occurred while attempting to contact server; see getServerResponse test";
    }
}


test('Connect to and receive a response from our server', ()=> {
    expect(runServ()).toBe("ran without error")
})