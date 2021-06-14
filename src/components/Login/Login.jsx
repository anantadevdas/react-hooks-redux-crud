import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
 
   
class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { LoginState: {} }
    }

    render() {
        return (
            <div className="Login"></div> 
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

