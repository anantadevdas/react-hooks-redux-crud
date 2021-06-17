import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
    Card, Row, Col,
    Input, Space, Button, Switch,
    Form, Radio,
    Carousel,
    Pagination 
} from 'antd';
import { } from '@ant-design/icons';
import { Carousal } from "./Carousal"
import { BlogPosts } from "./BlogPosts"
import "./BlogStyles.css"


const contentStyle = {
    height: '200px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

class BlogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
        return (
            <div>
                <Row className="BlogSection">
                    <Col className="carousal_posts" span={18}>
                        <Carousal />

                    </Col>
                    <Col className="tags" span={6}>
                        All Tags Area
                    </Col>
                </Row>
                <Row>
                    <BlogPosts />
                </Row>
                {/* <Row>
                    <Pagination defaultCurrent={1} total={50} />
                </Row> */}
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

