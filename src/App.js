import React from "react";
import { Button, theme, Form, Input, Select, Checkbox } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  LockFilled,
  LockTwoTone,
} from "@ant-design/icons";

import CButton from "components/Button/Button";
import { Container } from "react-bootstrap";
import Title from "antd/es/skeleton/Title";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const App = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1 style={{ color: "black", paddingLeft: "100px", paddingTop: "100px" }}>
        Sign Up
      </h1>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        className="container"
        style={{ paddingTop: "30px", paddingLeft: "100px", width: "700px" }}
        onFinish={onFinish}
      >
        <Form.Item name="name" rules={[{ required: true }]}>
          <Input
            size="large"
            placeholder="Your Name"
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input
            size="large"
            placeholder="Your Email"
            prefix={<MessageOutlined />}
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input
            size="large"
            type="password"
            placeholder="Password"
            prefix={<LockFilled />}
          />
        </Form.Item>
        <Form.Item name="password-confirm" rules={[{ required: true }]}>
          <Input
            size="large"
            type="password"
            placeholder="Password"
            prefix={<LockTwoTone />}
          />
        </Form.Item>
        <Form.Item {...tailLayout} style={{ paddingRight: "600px" }}>
          <Checkbox style={{ color: "black", width: "300px" }}>
            I agree all statements in Terms of service
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout} style={{ paddingRight: "600px" }}>
          <CButton text="Register" />
        </Form.Item>
      </Form>
    </>
  );
};

export default App;
