import React, { Component } from 'react'
import axios from 'axios'
import './Stud_homepage.css'
import Extra from './Extra'


export class Stud_homepage extends Component {
    constructor(props) {
        console.log("fuckers")
        super(props)
        this.state = {
             output : [],
             search : '',
             query : []
       }
       
    }
    componentDidMount(){
        axios.get('http://localhost:1200/home').then(response => {
          this.setState({output : response.data})
          console.log(this.state.output)
        }).catch(error => {
          console.log(error)
        })
      }

      

      changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

      redirect = arr =>{
       
        console.log(this.state.search)
        axios.get('http://localhost:1200/search?search=' + this.state.search).then(response => {
            this.setState({
              output : response.data
            })
        }).catch(error => {
          console.log(error)
        })
        }
      
      
      
    render() {
        const {output,search,query} = this.state
        return (
            <>
            <div id="overall">
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
               <Extra/>
              <input type="text" id="txtbox" placehilder = "search by company" name = "search"  value = {search} onChange={this.changeHandler}></input><button type="button"  onClick = {this.redirect} class="btn btn-outline-dark">Search</button>
            {
              output.length ?
              output.map(arr =>
              
              <div class="container" id="homepage">
                <div class="card pt-5">
                  <div class="card-header">
                      <h5>{arr.cname}</h5>
                  </div>
                    <div class="card-body">
                      <h5 class="card-title">{arr.head}</h5>
                      <p class="card-text">{arr.job}</p>
                      <p class="card-text"><strong>Salary : {arr.sal}</strong></p>
                      <p class="card-text"><strong>Location : {arr.loc}</strong></p>
                      <a href={arr.url} id="temp" class="btn btn-primary">Apply</a>
                    </div>
                  </div> 

                </div>

              ):
              null
            }



            </div>

            </>
            
          )
    }
}

export default Stud_homepage
