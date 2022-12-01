import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Button from "react-bootstrap/Button";


/**
 * Class for the sake of getting and sending appointments to the backend database
 */
class SignUp extends Component{

    /**
     * Constructs the sign-up component to initialize empty variables
     * @constructor
     * @param props react component props object
     */
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
        }

        this.changeUsername= this.changeUsername.bind(this)
        this.changePassword= this.changePassword.bind(this)
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    /**
     * Changes the username name variable
     * @param event event occurring in program
     */
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    /**
     * Changes the password variable
     * @param event event occurring in program
     */
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }


    /**
     * Changes the first name variable
     * @param event event occurring in program
     */
    changeFirstName(event){
        this.setState({
            firstName:event.target.value
        })
    }

    /**
     * Changes the last name variable
     * @param event event occurring in program
     */
    changeLastName(event){
        this.setState({
            lastName:event.target.value
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
     * Upon the submit button being pressed, this function executes
     * Sends request (users) to the database via axios
     * @param event event occurring in program
     */
    onSubmit(event){
        event.preventDefault()

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const request = {
            username:this.state.username,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            privilege:"customer",
            dateJoined:today
        }

        axios.post('http://localhost:4000/app/users', request)
            .then(response => console.log(response.data))

        this.setState({
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
        })
    }

    /**
     * Renders signup request page
     */
    render() {
        return (
            <div>
                <div className='container'>
                    <h1>Dental Service</h1>
                    <h2>Please provide information below to sign up: </h2>

                    <div className = 'form-div'>
                        <form onSubmit={this.onSubmit}>

                            <input type = 'text'
                                   placeholder='Username'
                                   onChange={this.changeUsername}
                                   value={this.state.username}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='Password'
                                   onChange={this.changePassword}
                                   value={this.state.password}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='First Name'
                                   onChange={this.changeFirstName}
                                   value={this.state.firstName}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='last Name'
                                   onChange={this.changeLastName}
                                   value={this.state.lastName}
                                   className='form-control form-group'
                            />

                            <input type = 'text'
                                   placeholder='E-mail'
                                   onChange={this.changeEmail}
                                   value={this.state.email}
                                   className='form-control form-group'
                            />

                            <Button type='submit' variant="outline-info">Sign Up</Button>{' '}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;