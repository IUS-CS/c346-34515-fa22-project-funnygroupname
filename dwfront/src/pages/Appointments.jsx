import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import AppointmentsComponent from "../assets/AppointmentsComponent";
import '../assets/style.css'


/**
 * Class for the sake of getting and sending appointments to the backend database
 */
class Appointments extends Component{

    /**
     * Constructs the appointment component to initialize empty variables
     * @constructor
     * @param props react component props object
     */
    constructor(props){
        super(props)
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


    /**
     * Changes the full name variable
     * @param event event occurring in program
     */
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    /**
     * Changes the email variable
     * @param event event occurring in program
     */
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    /**
     * Changes the operation variable
     * @param event event occurring in program
     */
    changeOperation(event){
        this.setState({
            operation:event.target.value
        })
    }

    /**
     * Changes the cost variable
     * @param event event occurring in program
     */
    changeCost(event){
        this.setState({
            cost:event.target.value
        })
    }

    /**
     * Changes the date variable
     * @param event event occurring in program
     */
    changeDate(event){
        this.setState({
            date:event.target.value
        })
    }

    /**
     * Upon the submit button being pressed, this function executes
     * Sends request (appointment) to the database via axios
     * @param event event occurring in program
     */
    onSubmit(event){
        event.preventDefault()

        const appt = {
            fullName:this.state.fullName,
            email:this.state.email,
            operation:this.state.operation,
            cost:this.state.cost,
            date:this.state.date
        }

        axios.post('http://localhost:4000/app/appointments', appt)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            operation:'',
            cost:0,
            date:"01/01/1970"
        })
    }

    /**
     * Renders appointment request page
     */
    render() {
        return (
            <div>
                <div className="spacer03"/>
                <div className = "center">
                    <AppointmentsComponent/>
                </div>

                <div className="spacer03"/>
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