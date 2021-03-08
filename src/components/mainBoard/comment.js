import {
    Comment, Avatar, Form, Button,
    Input, Dropdown, Menu
} from 'antd';
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeartOutlined, SettingOutlined } from "@ant-design/icons"

import {
    commentLikeRequest,
    commentLikeDeleteRequest,
    postCommentRequest,
    postCommentDeleteRequest,
    // postCommentUpdateRequest
} from "../../redux/postRedux";


const { TextArea } = Input;



const CommentBlock = ({ Comments, PostId }) => {
    const dispatch = useDispatch();

    // mydata
    const { loginData } = useSelector(state => state.userReducer);
    const myId = loginData?.id;

    // 댓글 생성
    const [comment, setComment] = useState("");
    const onChangeComment = useCallback((e) => {
        setComment(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        dispatch(postCommentRequest({ PostId, comment }));
        setComment("");
    }, [dispatch, PostId, comment]);


    return (
        <>
            <Form onFinish={onSubmit}>
                <Form.Item>
                    <TextArea
                        placeholder="댓글을 입력하세요"
                        onChange={onChangeComment}
                        value={comment}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </Form>

            <CommentWraper>
                {Comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        actions={[
                            <div style={{ display: 'flex' }}>
                                <Button
                                    style={{ border: 'none' }}
                                >
                                    {comment.CommentLikers.map(commentLiker => (
                                        commentLiker.id
                                    )).includes(myId) ? (
                                        <HeartOutlined
                                            onClick={() => {
                                                dispatch(commentLikeDeleteRequest({ comment }));
                                            }}
                                            style={{ color: 'red' }}
                                        />
                                    ) : (
                                        <HeartOutlined
                                            onClick={() => {
                                                dispatch(commentLikeRequest({ comment }));
                                            }}
                                        />
                                    )}
                                </Button>
                                <div style={{ margin: '3px' }}>
                                    {comment.CommentLikers.length}
                                </div>
                            </div>,
                            <Dropdown overlay={
                                <div>
                                    {comment.UserId === myId ? (
                                        <Menu>
                                            <Menu.Item>
                                                <Button
                                                    // onClick={onUpdateComment}
                                                    style={{ border: 'none' }}>
                                                    수정
                                                </Button>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Button
                                                    onClick={() => {
                                                        dispatch(postCommentDeleteRequest({ comment }));
                                                    }}
                                                    style={{ border: 'none' }}>
                                                    삭제
                                                </Button>
                                            </Menu.Item>
                                        </Menu>
                                    ) : (
                                        <Menu>
                                            <Menu.Item>
                                                신고
                                            </Menu.Item>
                                        </Menu>
                                    )}
                                </div>
                            }>
                                <SettingOutlined style={{ marginLeft: '30px' }} />
                            </Dropdown>]}
                        author={<div>{comment.User.nickname}</div>}
                        avatar={<Avatar>{comment.User.nickname}</Avatar>}
                        content={<p>{comment.content}</p>}
                    ></Comment>
                ))}
            </CommentWraper>
        </>
    );
}

export default CommentBlock;

const CommentWraper = styled.div`

`;

