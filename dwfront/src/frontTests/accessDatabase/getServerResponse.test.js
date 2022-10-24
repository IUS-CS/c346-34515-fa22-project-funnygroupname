
import axios from 'axios'

function getFromServ(){
    try {
        let responseFrom;

        axios
            .get("http://localhost:4000/app/")
            .then(function (response) {
                return response.data.message
            })

        return "The response failed";
    }
    catch(err) {
        console.log(err)
        return "Error occurred while attempting to contact server; see getServerResponse test";
    }
}


test('Connect to and receive a response from our server', ()=> {
    expect(getFromServ()).toBe("Hello from the server !")
})