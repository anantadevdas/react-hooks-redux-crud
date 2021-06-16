import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
    Card, Col, Row,
    Input, Space, Button, Switch,
    Form, Radio
} from 'antd';
import { } from '@ant-design/icons';

class BlogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() { 
        return (<div className="BlogSection"> Blog</div>)
    }

    componentDidMount() {
        console.log("Blog Component")
    }
}
const mapStateToProps = state => {
    return null
}

const mapDispatchToProps = dispatch => ({})
export const Blog = withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogComponent))

