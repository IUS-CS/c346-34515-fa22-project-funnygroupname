import axios from 'axios'


function getFromServ(){
    try {
        let stringVal = "nothing";
        axios
            .get("http://localhost:4000/app/")
            .then(function (response) {
                console.log(response.data.message)
                return response.data.message
            }).then((data)=>{
            stringVal = JSON.stringify(data);
        });
        return stringVal;
    }
    catch(err) {
        console.log(err);
        return "Error occurred while attempting to contact server; see getServerResponse test";
    }
}


test('Connect to and receive a response from our server', ()=> {
    expect(getFromServ()).toBe("Hello from the server !")
})