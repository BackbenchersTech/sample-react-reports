import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';

import Dashboard from '../Dashboard';
import history from '../../history';

import './style.css';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        name: '',
        password : ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className = "formPage-wrapper">
                <div className = "form-wrapper">
                    <div className="form-header">
                        <h2 className="form-heading">Login</h2>
                    </div>
                    <form className = "form1" onSubmit={this.handleSubmit}>
                        <div className="field-wrapper" >
                            <input className="field-input" type="text" id="name"  placeholder="UserName" value={this.state.name} onChange={this.handleEmailChange} />
                            <label className="field-label" htmlFor="username" >Username</label>
                        </div>
                        <div className="field-wrapper" >
                            <input className="field-input" type="password" id="password"  placeholder="........" value={this.state.password} onChange={this.handlePasswordChange} />
                            <label className="field-label" htmlFor="password" >Password</label>
                        </div>
                        <div className="submit-btn-wrapper">
                            <button className="submit-btn" type="submit">Login</button>
                        </div>
                    </form>
                    <p>Username or password is invalid</p>
                </div>
            </div>
        );
    }

    handleEmailChange(event) {
        this.setState({name: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var email = this.state.name;
        var pass = this.state.password;
        var Credentials = [];
        Credentials.push(email);
        Credentials.push(pass);
        console.log(Credentials);

        if(  email == "admin" && pass == "admin" )
        {
            console.log( "validation succeeded" );
            history.push('/dashboard');
            renderForm();
        }
        else
        {
            ReactDOM.render(
                <Login error={true} />,
                document.getElementById('root')
            );
        }
    }
}

function renderForm() {
    ReactDOM.render(
        <Dashboard isLoggedIn={true} />, 
        document.getElementById('root')
    );
}

export default Login;