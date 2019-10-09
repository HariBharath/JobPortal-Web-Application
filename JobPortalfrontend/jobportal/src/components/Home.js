import React, { Component } from 'react'
import Nav from './Navigation'
import Scu from './Scu'
import Comp from './Companies.js'
import './Home.css';
export class Home extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
        this.routeChange2 = this.routeChange2.bind(this)
        this.routeChange3 = this.routeChange3.bind(this)
        this.state = {
             
        }
    }
    
    routeChange(){
        this.props.history.push('/Login')
    }
    routeChange2(){
        this.props.history.push('/Studreg')
    }
    routeChange3(){
        this.props.history.push('/Company')
    }
    
    render() {
        return (
            <div>
                <Nav />
                <div id ="pot">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 id="text"><i class="fas fa-volleyball-ball"></i> &nbsp; THE JOB PORTAL</h1>
                                <p id="sub">A Platform to the outside world</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Scu/>
                <Comp/>
            </div>
           
        )
    }
}

export default Home
