import { Comment, Avatar, Form, Button, Input } from 'antd';
import React from "react";

const { TextArea } = Input;

const CommentBlock = () => {
    return (
        <>
            <Form>
                <Form.Item>
                    <TextArea placeholder="댓글을 입력하세요" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
            </Form>
            <Comment
                actions={[<span key="comment-nested-reply-to">Reply to</span>]}
                author={<div>Han Solo</div>}
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure).
                    </p>
                }
            >
            </Comment>
        </>
    );
}

export default CommentBlock;