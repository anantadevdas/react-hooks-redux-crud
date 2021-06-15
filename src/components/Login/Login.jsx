import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon, Input } from 'semantic-ui-react'
import "./LoginStyle.css"


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
            <div className="container">
                <div className="form-box">
                    <div className="header-form">
                        <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                        <div className="image">
                        </div>
                    </div>
                    <div className="body-form">
                        {/* <div className="image_placeholder_div">
                        </div> */}
                        <form className="form">
                            <div className="input-group mb-3">
                                {/* <div style={{"height":"200px", "width":"200px"}}><i class="user circle outline icon"></i></div> */}
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="text" value={this.state.userNameValue} onChange={this.userNameInput} className="form-control" placeholder="Username" />

                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" value={this.state.passwordValue} onChange={this.passwordInput} className="form-control" placeholder="Password" />
                            </div>
                            {this.state.register ? <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                </div>
                                <input type="password" value={this.state.verifyPasswordValue} onChange={this.verifyPasswordInput} className="form-control" placeholder="Verify Password" />
                            </div> : null}

                            {this.state.register ? <button type="button" onClick={this.registerUser} className="btn btn-secondary btn-block">{"REGISTER"}</button> : null}

                            {this.state.login ? <button type="button" onClick={this.loginUser} className="btn btn-secondary btn-block">{"LOGIN"}</button> : null}

                            {/* <div className="message">
                                <div><input type="checkbox" /> Remember ME</div>
                                <div><a href="#">Forgot password</a></div>
                            </div> */}
                            <div className="message">
                                <div> <a onClick={() => this.login('login')} href="#">Login</a></div>
                                <div><a onClick={() => this.register('register')} href="#">Register</a></div>
                            </div>
                        </form>
                        <div className="social">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter-square"></i></a>
                            <a href="#"><i className="fab fa-google"></i></a>
                        </div>
                    </div>
                </div>
            </div>
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

