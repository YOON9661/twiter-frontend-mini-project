import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";
import styled from "styled-components"
import { Card, Avatar, Image, Carousel } from 'antd';
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
    postLikeDeleteRequest
} from "../../redux/post/postLike";
import {
    postRetweetRequest
} from "../../redux/post/postRetweet";


// start
const CardContainer = ({
    PostId, UserId, UserNick, content,
    images, postLikers, Retweet, Retweeters, Comments }) => {
    const dispatch = useDispatch();

    // myData
    const { loginData } = useSelector(state => state.login);
    ; const myId = loginData?.id

    // like update
    const onClickLike = useCallback(() => {
        dispatch(postLikeRequest(PostId));
    }, [dispatch, PostId]);
    const onClickLikeDelete = useCallback(() => {
        dispatch(postLikeDeleteRequest(PostId));
    }, [dispatch, PostId]);

    // retweet
    const onClickRetweet = useCallback(() => {
        dispatch(postRetweetRequest(PostId));
    }, [dispatch, PostId]);

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
                        {Retweeters.includes(myId) ? (
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
                        <div>{Retweeters.length}</div>
                    </div>,
                    <div>
                        {postLikers.map(postLiker => postLiker.id).includes(myId) ? (
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
                    <EllipsisOutlined />
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
                                                                        width={200}
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
                                                                    width={200}
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
                                                                width={200}
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
                                                        width={200}
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

export default CardContainer;

