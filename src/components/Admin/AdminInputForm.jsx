import ReactDOM from 'react-dom'


import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, Checkbox,
  DatePicker, Space
} from 'antd';
import AdminImageUpload from "./AdminImageUpload"

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
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

function onChange(date, dateString) {
  console.log(date, dateString);
}

const AdminInputForm = () => {
  const [form] = Form.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick]);

  const onCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  let onCancel = async () => {

  }

  return (
    <Form form={form} name="dynamic_rule">

      <Form.Item
        {...formItemLayout}
        name="UploadImage"
        label="Upload Image"
      >
        <AdminImageUpload />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="FullName"
        label="Full Name"
        rules={[
          {
            required: true,
            message: 'Please input your full name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="PhoneNumber"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please enter your phone number',
          },
        ]}
      ><Input placeholder="Please input your phone number" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
            message: 'Please enter your Email',
          },
        ]}
      ><Input placeholder="Please input your Email" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="Address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please enter your current address',
          },
        ]}
      ><Input placeholder="Please input your current address" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="Company"
        label="Company"
        rules={[
          {
            required: true,
            message: 'Please enter your current company',
          },
        ]}
      ><Input placeholder="Please input your current company" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="LinkedIn"
        label="LinkedIn"
        rules={[
          {
            required: true,
            message: 'Please enter your LinkedIn',
          },
        ]}
      ><Input placeholder="Please input your LinkedIn" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="Twitter"
        label="Twitter"
        rules={[
          {
            required: true,
            message: 'Please enter your current Twitter',
          },
        ]}
      ><Input placeholder="Please input your current Twitter" />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        name="DateOfBirth"
        label="Date Of Birth"
        rules={[
          {
            required: false,
            message: 'Please enter your date of birth',
          },
        ]}
      ><Input placeholder="Please input your date of birth" />
      </Form.Item>


      <Form.Item {...formTailLayout} style={{ "textAlign": "left" }}>
        <span className="formSubmit"><Button onClick={onSubmit}> Submit </Button></span>
        <span className="formSubmitCancel" style={{ "marginLeft": "5px" }}><Button danger onClick={onCancel}> Cancel </Button></span>
      </Form.Item>


    </Form>
  );
};

export default AdminInputForm;