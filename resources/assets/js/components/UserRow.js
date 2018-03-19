import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserRow extends Component {
    deleteUser(user, object){
        var $this = object;
        axios.delete("/api/users/"+ user.id)
        .then(response => {
            const newState = $this.state.data.slice();
            newState.splice(newState.indexOf(user), 1);
            $this.setState({
                data: newState
            });
        })
        .catch(error => {
            console.log(error);
        });        
    }

    render() {
        return (
            <tr key={this.props.i}>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <a href={"/users/" + this.props.user.id + "/edit"} className="btn btn-primary">Edit</a> || 
                    <a href="javascript:void(0);" className="btn btn-danger" onClick={this.deleteUser.bind(this, this.props.user, this.props.object)}>Delete</a>
                </td>
            </tr>
        );
    }
}