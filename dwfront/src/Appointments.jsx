import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

class Appointments extends Component{
    constructor(){
        super()
        this.state = {
            fullName:'',
            email:'',
            operation:'',
            cost:0,
            date:"01/01/1970"
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeOperation = this.changeOperation.bind(this)
        this.changeCost = this.changeCost.bind(this)
        this.changeDate = this.changeDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changeOperation(event){
        this.setState({
            operation:event.target.value
        })
    }
    changeCost(event){
        this.setState({
            cost:event.target.value
        })
    }
    changeDate(event){
        this.setState({
            date:event.target.value
        })
    }


    onSubmit(event){
        event.preventDefault()

        const appt = {
            fullName:this.state.fullName,
            email:this.state.email,
            operation:this.state.operation,
            cost:this.state.cost,
            date:this.state.date
        }

        axios.post('http://localhost:4000/app/appointment', appt)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            operation:'',
            cost:0,
            date:"01/01/1970"
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h1>Dental Service</h1>
                    <h3>Request an appointment: </h3>

                    <div className = 'form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                                   placeholder='Full Name'
                                   onChange={this.changeFullName}
                                   value={this.state.fullName}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='E-mail'
                                   onChange={this.changeEmail}
                                   value={this.state.email}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='Operation'
                                   onChange={this.changeOperation}
                                   value={this.state.operation}
                                   className='form-control form-group'
                            />

                            <input type = 'number'
                                   placeholder='Cost'
                                   onChange={this.changeCost}
                                   value={this.state.cost}
                                   className='form-control form-group'
                            />

                            <input type = 'date'
                                   placeholder='Date of Operation'
                                   onChange={this.changeDate}
                                   value={this.state.date}
                                   className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Appointments;