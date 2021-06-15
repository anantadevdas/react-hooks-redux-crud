import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { Card, Col, Row,
    Input, Space, Button, Switch,
    Form, Radio        
} from 'antd';

import { InfoCircleOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./Admin.css"

import Demo from "./Demo"


class AdminComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    
    render() {
        console.log('state ', this.state)
        return (<div className="AdminPortalSection"> <Demo /> </div>)
    }

    componentDidMount() {
        console.log("login Component")
    }
}
const mapStateToProps = state => {
    return null
}

const mapDispatchToProps = dispatch => ({})


export const Admin = withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminComponent))

