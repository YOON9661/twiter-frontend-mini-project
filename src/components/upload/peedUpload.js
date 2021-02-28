import React from "react";
import styled from "styled-components";
import {
    UploadOutlined
} from "@ant-design/icons";
import { Form, Input, Button } from 'antd';


const PeedUpload = () => {
    return (
        <>
            <PeedUploadBlock>
                <Form>
                    <Form.Item>
                        <UploadOutlined />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        required
                        tooltip="This is a required field"
                    >
                        <Input placeholder="해당 피드에 대한 설명을 반드시 입력해 주세요" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                    </Form.Item>
                </Form>
            </PeedUploadBlock>
        </>
    );
}

export default PeedUpload;

const PeedUploadBlock = styled.div`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
`;