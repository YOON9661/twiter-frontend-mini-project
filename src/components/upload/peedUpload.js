import React, { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
    UploadOutlined
} from "@ant-design/icons";
import { Form, Input, Button } from 'antd';

import useInput from "../../lib/useInput";
import {
    postUploadRequest,
    postPreviewRequest,
    postPreviewInitializeRequest
} from "../../redux/postRedux";



const PeedUpload = () => {
    const dispatch = useDispatch();

    // preview
    const imageInput = useRef();
    const onOpenFile = useCallback(() => {
        imageInput.current.click();
    }, []);
    const onChangeImage = useCallback((e) => {
        const formData = new FormData();
        formData.append("img", e.target.files[0])
        dispatch(postPreviewRequest(formData));
    }, [dispatch]);
    const { postPreviewData } = useSelector(state => state.postReducer);
    // preview delete
    const onClickPreviewDelete = useCallback(() => {
        dispatch(postPreviewInitializeRequest());
    }, [dispatch]);

    // description
    const [description, onChangeDescription] = useInput("");

    // submit
    const onSubmit = useCallback(() => {
        if (postPreviewData === null) {
            dispatch(postUploadRequest({ description }));
        } else {
            dispatch(postUploadRequest({
                description,
                imagepath: postPreviewData?.url
            }));
        }
    }, [dispatch, description, postPreviewData]);

    return (
        <>
            <PeedUploadBlock>
                <Form encType="multipart/form-data" onFinish={onSubmit}>
                    <Form.Item>
                        {postPreviewData &&
                            <div>
                                <img
                                    style={{ width: '500px' }}
                                    src={postPreviewData?.url || null}
                                    alt={postPreviewData?.url || null}
                                />
                                <div style={{ textAlign: 'center' }}>
                                    <Button
                                        onClick={onClickPreviewDelete}
                                        style={{ color: 'red' }}
                                    >
                                        삭제
                                    </Button>
                                </div>
                            </div>}
                        <input
                            name="img"
                            type="file"
                            onChange={onChangeImage}
                            multiple
                            hidden
                            ref={imageInput}
                        />
                        <div style={{ textAlign: 'center', margin: '20px' }}>
                            <Button style={{ border: 'none' }}>
                                <UploadOutlined onClick={onOpenFile} />
                                <br />
                                <div>사진 업로드</div>
                            </Button>
                        </div>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        required
                        tooltip="This is a required field"
                    >
                        <Input
                            placeholder="해당 피드에 대한 설명을 반드시 입력해 주세요"
                            onChange={onChangeDescription}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
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