import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
// import Login from 'ant-design-pro/lib/Login';
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
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
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="" htmlType="submit">
            Submit
          </Button>
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

