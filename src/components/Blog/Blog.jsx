import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
    Card, Row, Col,
    Input, Space, Button, Switch,
    Form, Radio,
    Carousel,
    Pagination,
    Image 
} from 'antd';
import { } from '@ant-design/icons';
import { BlogPosts } from "./BlogPosts"
import "./BlogStyles.css"

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    // border:"1px solid lightgrey",
    borderRadius:"5px",
    padding:"4px"
  };

class BlogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
       return (
            <div className="carousal_container">
                <Carousel autoplay>
                    <div>
                    <h3 style={contentStyle}>
                        1
                        {/* <img style={{"height":"100%","width":"100%"}} src={require('../../Assets/svg_1.svg')} /> */}
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        2
                        {/* <img style={{"height":"100%","width":"100%"}} src={require('../../Assets/svg_2.svg')} /> */}
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        3 
                        {/* <img style={{"height":"100%","width":"100%"}} src={require('../../Assets/svg_3.svg')} /> */}
                    </h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>
                        4
                        {/* <img style={{"height":"100%","width":"100%"}} src={require('../../Assets/svg_4.svg')} /> */}
                    </h3>
                    </div>
                </Carousel>
                <Row>
                    {/* <BlogPosts /> */}
                </Row>
            </div>
        )
    }

    componentDidMount() {
        console.log("Blog Component")
    }
}
const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({})
export const Blog = withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogComponent))

