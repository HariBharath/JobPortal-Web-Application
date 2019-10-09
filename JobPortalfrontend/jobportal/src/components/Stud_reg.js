import React, { Component } from 'react'
import './stud_reg.css'
import axios from 'axios'
import Login from './Login'
import { Route , withRouter} from 'react-router-dom';


export class Stud_reg extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
        this.state = {
             'name' : '',
             'email' : '',
             'pwd' : ''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:1200/register',this.state)
            .then(response => {
                console.log(response);
                this.props.history.push('/register')
            }).catch(error => {
                console.log(error)
            })
    }
    routeChange(){
        this.props.history.push('/')
    }
    
    render() {
        const{name,email,pwd} = this.state
        return (
            <div>
                
                <div id="above">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><i class="fas fa-volleyball-ball"></i></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Login">Login</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                    <div class="container">
                    <div class="row">
                    <div class="col-lg-12">
                    <h1 id="align">REGISTER</h1>
                    <form onSubmit = {this.submitHandler} id="form">
                    <input type = "text" id = "forms" placeholder = "Name" name="name" value={name} onChange={this.changeHandler}></input>
                    <br></br>
                    <br></br>
                    <input type = "text" id="forms" placeholder = "Email" name="email" value={email} onChange={this.changeHandler}></input>
                    <br></br>
                    <br></br>
                    <input type = "password" id="forms" placeholder = "Password" name="pwd" value={pwd} onChange={this.changeHandler}></input>
                    <br></br>
                    <br></br>
                    <button type="submit" id="forms1">SUBMIT</button>
                    </form>
                    </div>
                </div>
                </div>
                </div>
            </div>

        )
        
    }
}

export default Stud_reg
