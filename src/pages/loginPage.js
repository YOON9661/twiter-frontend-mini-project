import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from 'antd';
import {
    LoginOutlined,
    UserOutlined,
    LockOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import MainTemplate from "./template/mainTemplate";

const LoginPage = () => {
    return (
        <>
            <MainTemplate>
                <LoginTemplate>
                    <h3 style={{ textAlign: 'center', margin: '30px' }}>
                        트위터 로그인 <LoginOutlined />
                    </h3>
                    <Form>
                        <Form.Item
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input
                                prefix={<UserOutlined />}
                                placeholder="Username"
                            />
                        </Form.Item>

                        <Form.Item
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                style={{ width: '100%', marginBottom: '10px' }}
                                type="primary"
                                htmlType="submit"
                            >
                                Log in
                            </Button>
                            Or <Link to="/register">register now!</Link>
                        </Form.Item>
                    </Form>
                </LoginTemplate>
            </MainTemplate>
        </>
    );
}

export default LoginPage;

const LoginTemplate = styled.div`
    width: 400px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;