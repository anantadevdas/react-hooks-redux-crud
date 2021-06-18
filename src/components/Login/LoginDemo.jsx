import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
// import Login from 'ant-design-pro/lib/Login';
import { Form, Input, Button, Tooltip, Typography } from "antd";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class LoginDemoComponent extends React.Component {
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true,
  };

  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  register = ()=>{
    console.log(" register user")
  }

  login = ()=>{
    console.log(" login user")
  }

  render() {
    return (
      <Form className="NewLoginForm"
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Verify Password"
          name="verify password"
          rules={[{ required: true, message: 'Please verify your password!' }]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout} className="submitButton">
          <Tooltip title="Email if you have some question">
            <Typography.Link href="#API">Need Help ?</Typography.Link>
          </Tooltip>
          <Button type="" htmlType="submit" className="LoginButton" onClick={this.login}>Login</Button>
          <Button type="" htmlType="submit" className="LoginButton" onClick={this.register}>Register</Button>
        </Form.Item>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return null
}
const mapDispatchToProps = dispatch => ({})


export const LoginDemo = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginDemoComponent))

