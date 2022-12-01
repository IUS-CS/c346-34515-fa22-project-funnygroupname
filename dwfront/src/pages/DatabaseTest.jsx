import React, {Component} from "react";
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import axios from 'axios'

function setLocalTestVar(strVar) {
    localStorage.setItem("testKey", strVar)
}


class DatabaseTest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // First two values for submit, seconds are for recieve
            name: '',
            num: 0,
            nameD: '',
            numD: 0,
            name2: '',
            num2: 0,
            numValue:0,
            strValue:'',
            localNum:0,
        }

        this.changeName = this.changeName.bind(this)
        this.changeNum = this.changeNum.bind(this)
        this.sendToDatabase = this.sendToDatabase.bind(this)

        this.changeName2 = this.changeName2.bind(this)
        this.changeNum2 = this.changeNum2.bind(this)
        this.receiveFromDatabase = this.receiveFromDatabase.bind(this)


        this.changeLocalNum = this.changeLocalNum.bind(this)
        this.setLocalValue = this.setLocalValue.bind(this)
        this.resetValues = this.resetValues.bind(this)
    }


    changeName(event){
        this.setState({
            nameD:event.target.value
        })
    }
    changeNum(event){
        this.setState({
            numD:event.target.value
        })
    }

    changeName2(event){
        this.setState({
            name2:event.target.value
        })
    }
    changeNum2(event){
        this.setState({
            num2:event.target.value
        })
    }
    changeLocalNum(event){
        this.setState({
            localNum:event.target.value
        })
    }

    sendToDatabase(event){
        event.preventDefault()

        const namNum = {
            name:this.state.nameD,
            num:this.state.numD
        }

        axios.post('http://localhost:4000/app/test', namNum)
            .then(response => console.log(response.data))

        this.setState({
            nameD:'',
            numD:0
        })
    }


    receiveFromDatabase(event){
        event.preventDefault()

        // make sure what is actually sent to the database has the name
        // matching its contents. So, test has name and num
        const namNum2 = {
            name:this.state.name2,
            num:this.state.num2
        }

        axios
            .get("http://localhost:4000/app/")
            .then(function (response) {
                console.log(response.data.message)
                return response.data.message
            }).then((data)=>{
                this.setState({strValue: JSON.stringify(data)});
            });



        this.setState({
            name2:'',
            num2:0,
            numValue:namNum2.num,
        })
    }

    resetValues(event){
        event.preventDefault()

        this.setState({ numValue : 0})
        this.setState({ strValue: ''})
    }

    setLocalValue(event) {
        event.preventDefault()
        setLocalTestVar(this.state.localNum)

    }







    render() {
        return (
            <div>
                <div className='container'>
                    <h2>Please give information to submit:</h2>

                    <div className='form-div'>
                        <form onSubmit={this.sendToDatabase}>

                            <input type='text'
                                   placeholder='Name'
                                   onChange={this.changeName}
                                   value={this.state.nameD}
                                   className='form-control form-group'
                            />

                            <input type = 'number'
                                   placeholder='Number'
                                   onChange={this.changeNum}
                                   value={this.state.numD}
                                   className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Send to database'/>

                        </form>
                    </div>

                    <div className="spacer01"/>
                    <div className="pageLine"/>
                    <div className="spacer01"/>

                    <h2>Please give information to receive:</h2>
                    <div className='form-div'>
                        <form onSubmit={this.receiveFromDatabase}>

                            <input type='text'
                                   placeholder='Name'
                                   onChange={this.changeName2}
                                   value={this.state.name2}
                                   className='form-control form-group'
                            />

                            <input type = 'number'
                                   placeholder='Number'
                                   onChange={this.changeNum2}
                                   value={this.state.num2}
                                   className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Get from database'/>


                            <div className="spacer02"/>

                            <div className="card">
                                <div className="card-body">
                                    Here is your data: {this.state.numValue}
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    Here is your data: {this.state.strValue}
                                </div>
                            </div>

                            <div className="spacer02"/>

                            <div className='form-div'>
                                <form onSubmit={this.resetValues}>
                                    <input type='submit' className='btn btn-danger btn-block' value='Reset Value'/>
                                </form>
                            </div>

                            <div className="spacer01"/>

                            <div className="card">
                                <div className="card-body">
                                    Here is your local data length: {localStorage.length}
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Here is your local data key 0: {localStorage.key(0)}
                                    </p>
                                    <p>
                                        Here is the data there: {localStorage.getItem(localStorage.key(1))}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Here is your local data key 1: {localStorage.key(1)}
                                    </p>
                                    <p>
                                        Here is the data there: {localStorage.getItem(localStorage.key(0))}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Here is your local data key 2: {localStorage.key(2)}
                                    </p>
                                    <p>
                                        Here is the data there: {localStorage.getItem(localStorage.key(2))}
                                    </p>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        Here is the data at "testKey": {localStorage.getItem("testKey")}
                                    </p>
                                </div>
                            </div>


                            <div className="spacer03"/>


                            <input type = 'number'
                                   placeholder='Number'
                                   onChange={this.changeLocalNum}
                                   value={this.state.localNum}
                                   className='form-control form-group'
                            />

                            <div className="spacer03"/>

                            <div className='form-div'>
                                <form onSubmit={setLocalTestVar(this.state.localNum)}>
                                    <input type='submit' className='btn btn-danger btn-block' value='Local Value'/>
                                </form>
                            </div>


                        </form>
                    </div>






                </div>
            </div>
        );
    }
}



export default DatabaseTest;