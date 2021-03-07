import { Comment, Avatar, Form, Button, Input } from 'antd';
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons"


import useInput from "../../lib/useInput"
import {
    commentLikeRequest,
    commentLikeDeleteRequest,
    postCommentRequest,
    // postCommentDeleteRequest,
    // postCommentUpdateRequest
} from "../../redux/postRedux";


const { TextArea } = Input;



const CommentBlock = ({ Comments, PostId }) => {
    const dispatch = useDispatch();

    // mydata
    const { loginData } = useSelector(state => state.userReducer);
    const myId = loginData?.id;

    // 댓글 생성 / 삭제
    const [comment, onChangeComment] = useInput("");
    // const [useComments, setUseComments] = useState([...Comments]);
    // const { commentData } = useSelector(state => state.postReducer);
    const onSubmit = useCallback(() => {
        dispatch(postCommentRequest({ PostId, comment }));
        // setUseComments([{
        //     id: Comments?.id || 10000,
        //     content: comment,
        //     User: {
        //         id: myId,
        //         nickname: loginData?.nickname
        //     },
        //     CommentLikers: []
        // }, ...useComments]);
    }, [dispatch, PostId, comment]);

    // 댓글 좋아요 / 좋아요 취소ㅓ


    return (
        <>
            <Form onFinish={onSubmit}>
                <Form.Item>
                    <TextArea
                        placeholder="댓글을 입력하세요"
                        onChange={onChangeComment}
                    />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </Form>

            <CommentWraper>
                {Comments.map((comment, index) => (
                    <Comment
                        key={index}
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
                                                dispatch(commentLikeDeleteRequest(comment.id));
                                            }}
                                            style={{ color: 'red' }}
                                        />
                                    ) : (
                                        <HeartOutlined
                                            onClick={() => {
                                                dispatch(commentLikeRequest(comment.id));
                                            }}
                                        />
                                    )}
                                </Button>
                                <div style={{ margin: '3px' }}>
                                    {comment.CommentLikers.length}
                                </div>
                            </div>]}
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

