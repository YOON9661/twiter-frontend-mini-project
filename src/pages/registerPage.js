import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from 'antd';
import { FormOutlined } from "@ant-design/icons";

import useInput from "../lib/useInput";
import MainTemplate from "./template/mainTemplate";
import { registerRequest } from "../redux/userRedux";

const RegisterPage = () => {
    const dispatch = useDispatch();

    const [email, onChangeEmail] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");

    // confirm
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [confirmError, setConfirmError] = useState(false);
    //confirm function
    const onChangePasswordConfirm = useCallback((e) => {
        setPasswordConfirm(e.target.value);
        setConfirmError(password !== e.target.value);
    }, [password]);

    // submit
    const onSubmit = useCallback(() => {
        if (password !== passwordConfirm) {
            setConfirmError(true);
        } else {
            dispatch(registerRequest({ email, nickname, password }));
        }
    }, [dispatch, email, nickname, password, passwordConfirm]);

    return (
        <>
            <MainTemplate>
                <RegisterTemplate>
                    <h3 style={{ margin: '30px', textAlign: 'center' }}>
                        트위터 회원가입 <FormOutlined />
                    </h3>
                    <Form onFinish={onSubmit}>
                        <Form.Item>
                            <Input
                                placeholder="Email"
                                onChange={onChangeEmail}
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Nickname"
                                onChange={onChangeNickname}
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="password"
                                onChange={onChangePassword}
                                required
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="password confirm"
                                onChange={onChangePasswordConfirm}
                                required />
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
                    {confirmError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다...</div>}
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