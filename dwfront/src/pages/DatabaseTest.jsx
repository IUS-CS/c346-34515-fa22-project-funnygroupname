import React, {Component} from "react";
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import axios from 'axios'


class DatabaseTest extends Component {

    constructor() {
        super()
        this.state = {
            // First two values for submit, seconds are for recieve
            name: '',
            num: 0,
            nameD: '',
            numD: 0,
            name2: '',
            num2: 0,
            numValue:0,
            strValue:''
        }

        this.changeName = this.changeName.bind(this)
        this.changeNum = this.changeNum.bind(this)
        this.sendToDatabase = this.sendToDatabase.bind(this)

        this.changeName2 = this.changeName2.bind(this)
        this.changeNum2 = this.changeNum2.bind(this)
        this.receiveFromDatabase = this.receiveFromDatabase.bind(this)

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
                console.log(response)
            })



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

                        </form>
                    </div>

                    <div className="spacer01"/>

                    <div className='form-div'>
                        <form onSubmit={this.resetValues}>
                            <input type='submit' className='btn btn-danger btn-block' value='Reset Value'/>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}



export default DatabaseTest;