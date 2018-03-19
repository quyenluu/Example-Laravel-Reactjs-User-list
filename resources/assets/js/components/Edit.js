import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    componentWillMount() {
        let id = this.props.id;
        
        axios.get("/api/users/" + id)
        .then( response => {
            var user = response.data;

            this.setState({
                name: user.name,
                email: user.email
            });
        })
        .catch(error => {
            console.log(error);
        });
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
                <h2>Update User</h2>
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
                            <button type="submit" className="btn btn-default">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

if(document.getElementById("edit")){
    var id = $("#edit").data("id");
    ReactDOM.render(<Edit id={id} />, document.getElementById("edit"));
}