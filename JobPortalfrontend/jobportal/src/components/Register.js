import React, { Component } from 'react'
import './Register.css'
import axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             email: '',
             cgpa : '',
             univ : '',
             deg : '',
             company: '',
             position:'',
             work : '',
             projecttitle1 : '',
             languages1 : '',
             projdesc1 : '',
             projecttitle2 : '',
             languages2 : '',
             projdesc1 : '',
             linkedin : '',
             portfolio : '',
             education :'',
             education1:''
        }
    }
    changeHandler = (e) => {
        console.log(e.target.name);
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }
    setEducation = (e) => {
        this.setState({
            education: e.target.value
        })
    }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:1200/create',this.state)
            .then(response => {
                console.log(response)
                this.props.history.push('/Login')
            }).catch(error => {
                console.log(error)
            })
    }
    render() {
        const{name,email,cgpa,univ,deg,company,position,work,projecttitle1,languages1,projdesc1,projecttitle2,languages2,projdesc2,linkedin,portfolio,education,education1} = this.state
        return (
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><i class="fas fa-volleyball-ball"></i></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Stud_homepage">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Login">Logout</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Profile">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Stud_homepage">Jobs</a>
                        </li>
                        </ul>
                    </div>
                </nav>    
                <div id="classy">
                <div class="container"> 
                        <h1 id="next_head">FILL YOUR PROFILE</h1>
                            <form onSubmit = {this.submitHandler}>
                                <input type = "text" id="addone" placeholder = "Enter your name" class = "change" name="name" value={name} onChange={this.changeHandler}></input>
                                <input type = "text" id="addone" placeholder = "Enter your Email ID" name="email" value={email} onChange={this.changeHandler}></input>
                                <input type="text" id="addone" placeholder = "Enter your CGPA" name="cgpa" value={cgpa} onChange={this.changeHandler}></input> 
                                <input type="text" id="addone" placeholder = "Enter your current university" name="univ" value={univ} onChange={this.changeHandler}></input>  
                                <input type="text" id="addone" placeholder = "Enter your current degree" name="deg" value={deg} onChange={this.changeHandler}></input> 
                                <input type="text" id="addone" placeholder = "Enter your company name" name="company" value={company} onChange={this.changeHandler}></input>  
                                <input type="text" id="addone" placeholder = "Enter your previous job position" name="position" value={position} onChange={this.changeHandler}></input>         
                                <textarea rows="7" cols="50" id="addone" placeholder = "Enter your relevant Work Experience" name="work" value={work} onChange={this.changeHandler}>
                                </textarea>
                                <input type="text" id="addone" placeholder = "Enter your previous job position" name="projecttitle1" value={projecttitle1} onChange={this.changeHandler}></input>         
                                <input type="text" id="addone" placeholder = "Enter your previous job position" name="languages1" value={languages1} onChange={this.changeHandler}></input>         
                                <textarea rows="7" cols="50" id="addone" placeholder = "Enter your best Projects" name="projdesc1" value={projdesc1} onChange={this.changeHandler}>
                                </textarea>
                                <input type="text" id="addone" placeholder = "Enter your previous job position" name="projecttitle2" value={projecttitle2} onChange={this.changeHandler}></input>         
                                <input type="text" id="addone" placeholder = "Enter your previous job position" name="languages2" value={languages2} onChange={this.changeHandler}></input>         
                                <textarea rows="7" cols="50" id="addone" placeholder = "Enter your best Projects" name="projdesc2" value={projdesc2} onChange={this.changeHandler}>
                                </textarea>
                                <textarea rows="1" cols="50" id="addone" placeholder = "Enter your LinkedIn URL" name="linkedin" value={linkedin} onChange={this.changeHandler}>
                                </textarea>
                                <textarea rows="1" cols="50" id="addone" placeholder = "Enter your portfolio URL" name="portfolio" value={portfolio} onChange={this.changeHandler}>
                                </textarea>
                                <select id = "addone" onChange={this.setEducation}>
                                    <option name="education" value = "ugrad">Undergrad</option>
                                    <option name="education" value= "grad">grad</option>
                                </select>
                                <button type="submit" id="addone1">Submit</button>
                              </form>
                        </div>
                     </div>
           </>
        )
    }
}

export default Register

