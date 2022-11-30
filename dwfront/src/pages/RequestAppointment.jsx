import React, {Component} from "react";
import '../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


class RequestAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: ''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const appt = {
            fullName:this.state.fullName
        }

        //axios.post('http://localhost:4000/app/appointments', appt)
        //    .then(response => console.log(response.data))

        this.setState({
            fullName:''
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h1>Please provide your full name below:</h1>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                                   placeholder='Full Name'
                                   onChange={this.changeFullName}
                                   value={this.state.fullName}
                                   className='form-control form-group'
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}



export default RequestAppointment;