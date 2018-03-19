import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { Route, Redirect } from 'react-router';
//import { Link, withRouter, Redirect } from "react-router-dom";

export default class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        })
    }

    handleEmailChange(e){
        this.setState({
            email: e.target.value
        })
    }

    handlePasswordChange(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        var $this = this;
        

        axios.post('/api/users', this.state)
        .then(response => {
            window.location.href = "/users";
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h2>Add New User</h2>
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="name" className="control-label col-sm-2">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label col-sm-2">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="control-label col-sm-2">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if (document.getElementById('create')) {
    ReactDOM.render(<Create />, document.getElementById('create'));
}