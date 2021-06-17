import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
    Row,
    Button,
    Form, 
    Card,
    Input,
    DatePicker, Space
} from 'antd';
import {  } from '@ant-design/icons';
import "./Content.css"
import TextareaAutosize from "react-textarea-autosize"
import ImageUploader from 'react-images-upload';

const { Meta } = Card;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
        span: 5,
    },
    wrapperCol: {
        span: 15,
    },
};

const formTailLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
        offset: 4,
    },
};
  
class CreateContentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            pictures: [],
            title:"",
            description:"",
            date:"",
            location:"",
            youtube:""
        }
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    setDate=(date, dateString)=>{
        this.setState({
            date:dateString
        })
    }

    setValue=(e) =>{ 
        this.setState({
            textAreaValue:e
        })
    }

    content_youtube=(e)=>{
        this.setState({youtube:e.target.value})
    }
    content_location=(e)=>{
        this.setState({location:e.target.value})
    }
    content_descripton=(e)=>{
        this.setState({description:e.target.value})
    }
    content_title=(e)=>{
        this.setState({title:e.target.value})
    }

    onSubmit = async () => {
        console.log("state ", this.state)
    };

    onCancel = async () => {
        this.setState({ 
            pictures: [],
            title:"",
            description:"",
            date:"",
            location:"",
            youtube:""
        })
    }



    render() {
        const { value, pictures } = this.state;
        return (
            <div className="CreateContentSection">
                <Row className="ImageUploadSection">
                    <div className="avatarIconDiv">
                        <ImageUploader
                            withIcon={true}
                            buttonText={pictures.length > 0 ? pictures[0].name : "Choose Image"}
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                        /> 
                    </div>
                </Row>
                <Row className="ContentFillUpSection">
                    <Form className="contentWrittingForm">
                        <Form.Item
                            {...formItemLayout}
                            name="Title"
                            label="Title"
                        >
                            <Input placeholder="" value={this.state.title} onChange={this.content_title}/>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            name="Description"
                            label="Description"
                        >
                            <Input placeholder="" value={this.state.description} onChange={this.content_descripton}/>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            name="Date"
                            label="Date"
                        >
                            <Space direction="vertical">
                                <DatePicker onChange={this.setDate}/>
                            </Space>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="Location"
                            label="Location"
                        >
                            <Input placeholder="Location" value={this.state.location} onChange={this.content_location}/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="YoutubeLink"
                            label="You tube link"
                        >
                            <Input placeholder="" value={this.state.youtube} onChange={this.content_youtube}/>
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            name="Content"
                            label="Content"
                        > 
                            <TextareaAutosize
                                className="contentTextArea"
                                cacheMeasurements
                                value={value}
                                onChange={ev => this.setValue(ev.target.value)}
                            />
                        </Form.Item>

                        <Form.Item {...formTailLayout} style={{ "textAlign": "left" }}>
                            <span className="formSubmit"><Button onClick={this.onSubmit}> Submit </Button></span>
                            <span className="formSubmitCancel" style={{ "marginLeft": "5px" }}><Button danger onClick={this.onCancel}> Cancel </Button></span>
                        </Form.Item>

                    </Form>
                </Row>
            </div>)
    }

    componentDidMount() { }
}
const mapStateToProps = state => {
    return {}
}
const mapDispatchToProps = dispatch => ({})
export const CreateContent = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateContentComponent))

