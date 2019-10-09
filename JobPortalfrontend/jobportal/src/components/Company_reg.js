import React, { Component } from 'react'
import axios from 'axios'
import './company_reg.css'

export class Company_reg extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
        this.state = {
            cname:'',
            head:'',
            job: '',
            loc : '',
            sal : '',
            url:''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state);
    }

    submitHandler = e =>{
        e.preventDefault();
        console.log(this.state)
        axios.post('http://localhost:1200/comp',this.state)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }
    routeChange(){
        this.props.history.push('/')
    }

    render() {
        const{cname,head,job,loc,sal,url} = this.state;
        return (
            <div>
                <div class="some">
                <button onClick = {this.routeChange}>Home</button>
                    <form onSubmit={this.submitHandler}>

                        NAME<input type = "text" placeholder = "Enter your name" name="cname" value={cname} onChange={this.changeHandler}></input>
                        HEADER<textarea rows="4" cols="60" placeholder = "Enter the job position" name="head" value={head} onChange={this.changeHandler}>
                        </textarea>
                        JOBDESC<textarea rows="7" cols="60" placeholder = "Enter the job details" name="job" value={job} onChange={this.changeHandler}>
                        </textarea>
                        LOCATION<input type = "text" placeholder = "Enter the location" name="loc" value={loc} onChange={this.changeHandler}></input>
                        SALARY<input type = "text" placeholder = "Enter the salary" name="sal" value={sal} onChange={this.changeHandler}></input>
                        URL<input type = "text" placeholder = "Enter the url" name="url" value={url} onChange={this.changeHandler}></input>
                        <button type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Company_reg
