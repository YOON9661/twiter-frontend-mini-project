import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import styled from "styled-components"
import { Card, Avatar, Image, Carousel, Dropdown, Menu, Button } from 'antd';
import {
    HeartOutlined,
    EllipsisOutlined,
    RetweetOutlined,
    CommentOutlined,
    HeartTwoTone
} from '@ant-design/icons';

import CommentBlock from "./comment";
import {
    postLikeRequest,
    postLikeDeleteRequest,
    postRetweetRequest,
    postDeleteRequest
} from "../../redux/postRedux";


// start
const CardContainer = ({
    PostId, UserId, UserNick, content, history,
    images, postLikers, Retweet, Retweeters, Comments }) => {
    const dispatch = useDispatch();

    // myData
    const { loginData } = useSelector(state => state.userReducer);
    const myId = loginData?.id

    // like update
    const onClickLike = useCallback(() => {
        dispatch(postLikeRequest(PostId));;
    }, [dispatch, PostId]);
    const onClickLikeDelete = useCallback(() => {
        dispatch(postLikeDeleteRequest(PostId));
    }, [dispatch, PostId]);


    // retweet
    const [useRetweeters, setUseRetweeters] = useState([...Retweeters]);
    const onClickRetweet = useCallback(() => {
        dispatch(postRetweetRequest(PostId));
        setUseRetweeters([myId, ...useRetweeters]);
        history.push('/');
    }, [dispatch, PostId, history, useRetweeters, myId]);

    // open commentBlock
    const [watchComment, setWatchComment] = useState(false);
    const onOpenCommentBlock = useCallback(() => {
        setWatchComment(!watchComment);
    }, [watchComment]);

    return (
        <>
            <Card
                style={{
                    width: '100%',
                    marginTop: '30px',
                    marginBottom: '30px'
                }}
                actions={[
                    <div>
                        {useRetweeters.includes(myId) ? (
                            <>
                                <RetweetOutlined
                                    style={{ color: '#1795EA' }}
                                    onClick={onClickRetweet} />
                            </>
                        ) : (
                            <>
                                <RetweetOutlined
                                    onClick={onClickRetweet} />
                            </>
                        )}
                        <div>{useRetweeters.length}</div>
                    </div>,
                    <div>
                        {postLikers.includes(myId) ? (
                            <HeartTwoTone onClick={onClickLikeDelete} />
                        ) : (
                            <HeartOutlined onClick={onClickLike} />
                        )}
                        <div>{postLikers.length}</div>
                    </div>,
                    <div onClick={onOpenCommentBlock}>
                        <CommentOutlined />
                        <div>{Comments.length}</div>
                    </div>,
                    <Dropdown overlay={
                        <div>
                            {UserId === myId ? (
                                <Menu>
                                    <Menu.Item>
                                        <Button
                                            style={{ border: 'none' }}
                                            onClick={() => {
                                                dispatch(postDeleteRequest(PostId));
                                            }}
                                        >
                                            삭제
                                        </Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Button style={{ border: 'none' }}>
                                            수정
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
                        <EllipsisOutlined />
                    </Dropdown>
                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{UserNick}</Avatar>}
                    title={UserNick}
                    description={
                        <>
                            {Retweet ? (
                                // retweet
                                <Card
                                    style={{ margin: '20px' }}
                                >
                                    <Card.Meta
                                        avatar={<Avatar>{Retweet?.User?.nickname}</Avatar>}
                                        title={
                                            <div style={{ display: 'flex' }}>
                                                <div>{Retweet?.User?.nickname}</div>
                                                <h6 style={{ margin: '7px' }}>(retweeted)</h6>
                                            </div>}
                                        description={
                                            <>
                                                <div style={{ margin: '20px' }}>
                                                    {Retweet?.Images.length > 1 ? (
                                                        <Carousel>
                                                            {Retweet?.Images.map(image => (
                                                                <div>
                                                                    <Image
                                                                        key={image.id}
                                                                        width='100%'
                                                                        src={image.Imagepath}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </Carousel>
                                                    ) : (
                                                        <>
                                                            {Retweet?.Images.map(image => (
                                                                <Image
                                                                    key={image.id}
                                                                    width='100%'
                                                                    src={image.Imagepath}
                                                                />
                                                            ))}
                                                        </>
                                                    )}
                                                </div>
                                                <div>
                                                    {Retweet?.content}
                                                </div>
                                            </>
                                        }
                                    />
                                </Card>
                                // retweet end
                            ) : (
                                // mypost
                                <>
                                    <div style={{ margin: '20px' }}>
                                        {images.length > 1 ? (
                                            <>
                                                <Carousel>
                                                    {images.map(image => (
                                                        <div>
                                                            <Image
                                                                key={image.id}
                                                                width='90%'
                                                                src={image.Imagepath}
                                                            />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </>
                                        ) : (
                                            <>
                                                {images.map(image => (
                                                    <Image
                                                        key={image.id}
                                                        width='90%'
                                                        src={image.Imagepath}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </div>
                                    <div>{content}</div>
                                </>
                            )}
                        </>
                    }
                />
            </Card>
            {watchComment && <CommentBlock Comments={Comments} PostId={PostId} />}
        </>
    );
}
// TYPE
CardContainer.propTypes = {
    images: PropTypes.array,
    postLikers: PropTypes.array,
    content: PropTypes.string,
    Retweet: PropTypes.object,
    Retweeters: PropTypes.array,
    Comments: PropTypes.array
}

export default withRouter(CardContainer);

