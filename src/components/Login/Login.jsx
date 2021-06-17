import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon, Input } from 'semantic-ui-react'
import "./LoginStyle.css"
import { LoginDemo } from './LoginDemo';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            LoginState: {},
            register: false,
            login: true,
            userNameValue: "",
            passwordValue: "",
            verifyPasswordValue: ""
        }
    }

    register = (args) => {
        if (args === 'register') {
            this.setState({
                register: true,
                login: false
            })
        }
    }
    login = (args) => {
        if (args === 'login') {
            this.setState({
                register: false,
                login: true
            })
        }
    }

    registerUser = () => {
        console.log("register user", this.state)
    }
    loginUser = () => {
        console.log("login user", this.state)
    }
    userNameInput = (event) => {
        this.setState({ userNameValue: event.target.value });
    }

    passwordInput = (event) => {
        this.setState({ passwordValue: event.target.value });
    }

    verifyPasswordInput = (event) => {
        this.setState({ verifyPasswordValue: event.target.value });
    }

    render() {
        console.log('state ', this.state)
        return (
            <LoginDemo/>
        )
    }

    componentDidMount() {
        console.log("login Component")
    }
}
const mapStateToProps = state => {
    return null
}

const mapDispatchToProps = dispatch => ({})


export const Login = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent))

 