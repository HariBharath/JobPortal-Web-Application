import React, { Component } from 'react'
import Axios from 'axios';
import './profile.css'

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this)
        this.contentEditable = React.createRef();
        this.state = {
             output : '',
             title : '',
             position : '',
             email : '',
             work:'',
             project1 : '',
             language1 : '',
             projdesc1 : '',
             project2 : '',
             language2 : '',
             projdesc2 : '',
             deg : '',
             cgpa : '',
             portfolio : '',
             linkedIn : '',
             editing : false
        };
    }
    changeHandler = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    componentDidMount(){
        let url = 'http://localhost:1200/getdetails?hari=' + window.localStorage.getItem("email")
        Axios.get(url).
        then(response => {
            this.setState({output : response.data})
            console.log(this.state.output)
          }).catch(error => {
            console.log(error)
          })
    }
    routeChange(){
        this.props.history.push('/Stud_homepage')
    }

    getData = (val) =>{
        console.log(val);
        this.setState({
            title: val.company,
            email : val.email,
            position : val.position,
            work : val.work,
            project1 : val.projecttitle1,
            language1 : val.languages1,
            projdesc1 : val.projdesc1,
            project2 : val.projecttitle2,
            language2 : val.languages2,
            projdesc2 : val.projdesc2,
            deg : val.deg,
            cgpa : val.cgpa,
            portfolio : val.portfolio,
            linkedIn : val.linkedIn
        })
    }

    setTitle = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    
    editContent = () => {
        console.log(this.state)
        Axios.put('http://localhost:1200/edit',this.state)
            .then(response =>{
                console.log(response)
            }).catch(error => {

            })
        
    }

    render() {

        const {output,title,position,work,project1,language1,projdesc1,project2,language2,projdesc2,deg,cgpa,portfolio,linkedIn} = this.state
        return (
            <>
            <div id="ultimate">
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
                    {
              output.length ?
              output.map(arr =>
            <div id="page">
              <div class = "container" id="cont">
              <h5 id="name">{arr.name}</h5>
              <p>{arr.email}</p>
              <h1 id="exp">EXPERIENCE</h1>
                <div class="card text-center" id="thick">
                    <div class="card-header" id="color">
                        <h5>{arr.company}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{arr.position}</h5>
                        <p class="card-text">{arr.work}</p>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                    </div>
                    
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" value = {this.state.title}  onClick={() => this.getData(arr)}>
                    Edit
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type = "text"  name="title" disabled = {false} value={title}  onChange = {this.setTitle}></input>
                            <input type = "text"  name="position" disabled = {false} value={position}  onChange = {this.setTitle}></input>
                            <textarea rows = "7" cols = "55" name = "work" value = {work} onChange = {this.setTitle}></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick = {() => this.editContent()}  data-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>
                <h1 id="proj">PROJECTS</h1>
                    <div class="card text-center" id="thick">
                    <div class="card-header">
                        <h5>{arr.projecttitle1}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{arr.languages1}</h5>
                        <p class="card-text">{arr.projdesc1}</p>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                    </div>
                
                    <div class="card text-center" id="thick">
                    <div class="card-header">
                        <h5>{arr.projecttitle2}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{arr.languages2}</h5>
                        <p class="card-text">{arr.projdesc2}</p>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1"  onClick={() => this.getData(arr)}>
                    Edit
                    </button>

                    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type = "text"  name="project1" disabled = {false} value={project1}  onChange = {this.setTitle}></input>
                            <input type = "text"  name="language1" disabled = {false} value={language1}  onChange = {this.setTitle}></input>
                            <textarea rows = "7" cols = "55" name = "projdesc1" disabled = {false} value = {projdesc1} onChange = {this.setTitle}></textarea>
                            <input type = "text"  name="project2" disabled = {false} value={project2}  onChange = {this.setTitle}></input>
                            <input type = "text"  name="language2" disabled = {false} value={language2}  onChange = {this.setTitle}></input>
                            <textarea rows = "7" cols = "55" name = "projdesc2" disabled = {false} value = {projdesc2} onChange = {this.setTitle}></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick = {() => this.editContent()}  data-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>

                <h1 id="exp">EDUCATION</h1>
                <div class="card text-center" id="thick">
                    <div class="card-header">
                        <h5>{arr.univ}</h5>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{arr.deg}</h5>
                        <p class="card-text">CGPA : {arr.cgpa} /4</p>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2"  onClick={() => this.getData(arr)}>
                    Edit
                    </button>

                    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type = "text"  name="deg" disabled = {false} value={deg}  onChange = {this.setTitle}></input>
                            <input type = "text"  name="cgpa" disabled = {false} value={cgpa}  onChange = {this.setTitle}></input>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick = {() => this.editContent()}  data-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
                    </div>


                <h1 id="exp">PROFILE</h1>
                <div class="card text-center" id="thick">
                    <div class="card-header">
                    </div>
                    <div class="card-body">
                        <p class="card-title">portfolio url : {arr.portfolio}</p>
                        <p class="card-text">linkedin url : {arr.linkedIn} </p>
                    </div>
                    <div class="card-footer text-muted">
                    </div>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal3"  onClick={() => this.getData(arr)}>
                    Edit
                    </button>

                    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type = "text"  name="portfolio" disabled = {false} value={portfolio}  onChange = {this.setTitle}></input>
                            <input type = "text"  name="linkedIn" disabled = {false} value={linkedIn}  onChange = {this.setTitle}></input>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick = {() => this.editContent()}  data-dismiss="modal">Save changes</button>
                        </div>
                        </div>
                    </div>
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

export default Profile
