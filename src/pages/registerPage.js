import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from 'antd';
import { FormOutlined } from "@ant-design/icons";

import MainTemplate from "./template/mainTemplate";

const RegisterPage = () => {
    return (
        <>
            <MainTemplate>
                <RegisterTemplate>
                    <h3 style={{ margin: '30px', textAlign: 'center' }}>
                        트위터 회원가입 <FormOutlined />
                    </h3>
                    <Form>
                        <Form.Item>
                            <Input placeholder="Email" required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="Username" required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="password" required />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="password confirm" required />
                        </Form.Item>
                        <h4 style={{ margin: '20px', textAlign: 'center' }}>
                            약관 1-1)  당신은 저의 따까리가 되시겠습니까?
                        </h4>
                        <Form.Item>
                            <Checkbox>약관에 동의합니다</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                style={{ width: '100%' }}
                                type="primary"
                                htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </RegisterTemplate>
            </MainTemplate>
        </>
    );
}

export default RegisterPage;

const RegisterTemplate = styled.div`
    width: 400px;
    margin-top: 70px;
    margin-right: auto;
    margin-left: auto;
`;