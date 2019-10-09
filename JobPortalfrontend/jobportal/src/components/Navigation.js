import React, { Component } from 'react'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#"><i class="fas fa-volleyball-ball"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="/Login">Login</a>
                    <a class="nav-item nav-link" href="/Studreg">Student Register</a>
                    <a class="nav-item nav-link" href="/Company">Post a Job</a>
                    
                    </div>
                </div>
                </nav>
            </div>
        )
    }
}

export default Navigation
