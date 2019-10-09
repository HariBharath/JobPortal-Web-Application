import React, { Component } from 'react'
import axios from 'axios'
import Stud_homepage from './Stud_homepage'
import { Route , withRouter} from 'react-router-dom';
import './login.css'



export class Login extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
        this.state = {
            LoggedIn : false,
            'email' : '',
            'pwd' : ''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
        window.localStorage.setItem("email",this.state.email);
    }
    routeChange(){
        this.props.history.push('/')
    }
    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:1200/login',this.state)
            .then(response => {
                if(response.status == 204){
                    console.log("Sucessful Assholes")
                    this.props.history.push('/Stud_homepage')
                }else{
                  console.log("try again assholes")
                  alert("Incorrect Username or password")
                  this.props.history.push('/Login')
                }
            }).catch(error => {
                console.log(error)
            })  
    }
    /* <div id="totl">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                        
                        <h1 id="align">LOGIN</h1>
                        <form onSubmit = {this.submitHandler} id="form">
                            <input type="text" id="forms" placeholder = "Email" name = "email" value = {email} onChange={this.changeHandler} width = "50"></input> 
                            <br></br>
                            <br></br>
                            <input type="password" id="forms" placeholder = "Password" name = "pwd" value = {pwd} onChange={this.changeHandler}></input> 
                        <br></br>
                        <br></br>
                        <button type="submit" id="forms1">SUBMIT</button>
                    </form>
                        </div>
                    </div>
                    
                </div>
            </div> */
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
                    <h1 id="align">LOGIN</h1>
                    <form onSubmit = {this.submitHandler} id="form">
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

export default Login
