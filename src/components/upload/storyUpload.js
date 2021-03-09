import React from "react";
import styled from "styled-components";
import {
    UploadOutlined
} from "@ant-design/icons";
import { Form, Button } from 'antd';


const StoryUpload = () => {
    return (
        <>
            <StoryUploadBlock>

                <Form>
                    <Form.Item>
                        <div>사진을 업로드해보세요!</div>
                        <br />
                        <UploadOutlined />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </StoryUploadBlock>
        </>
    );
}

export default StoryUpload;

const StoryUploadBlock = styled.div`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
`;