import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
    Card, Row, Col,
    Input, Space, Button, Switch,
    Form, Radio,
    Carousel,
    Avatar
} from 'antd';
import { UserOutlined } from '@ant-design/icons';

class BlogPostsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="BlogPostsSection">
                <Row className="BlogSection">
                    <Col className="carousal_posts" span={6}>
                        <div className="avatarIconDiv">
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                    </Col>
                    <Col className="tags" span={18}>
                        <Row>Title</Row>
                        <Row>Description</Row>
                    </Col>
                </Row>

                <Row className="BlogSection">
                    <Col className="carousal_posts" span={6}>
                        <div className="avatarIconDiv">
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                    </Col>
                    <Col className="tags" span={18}>
                        <Row>Title</Row>
                        <Row>Description</Row>
                    </Col>
                </Row>
            </div>)
    }

    componentDidMount() {
        console.log("Blog Posts Component")
    }
}
const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => ({})
export const BlogPosts = withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogPostsComponent))

