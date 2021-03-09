import React from "react";
import PropTypes, { object } from "prop-types";
import { useDispatch } from "react-redux";
import { Avatar, Button } from 'antd';

import { followRequest, unFollowRequest } from "../../redux/postRedux";

const Infomation = ({ myId, userId, userNickname,
    posts, followers, followings }) => {
    const dispatch = useDispatch();

    return (
        <>
            <div style={{ display: 'flex', margin: '70px' }}>
                <Avatar
                    style={{ flex: 1, marginRight: '20px' }}
                >
                    {userNickname}
                </Avatar>
                <div
                    style={{ flex: 17 }}
                >
                    {userNickname}
                </div>
                {userId !== myId &&
                    <div
                        style={{ flex: 3 }}
                    >
                        {followers.map(follower => parseInt(follower.id)).includes(myId) ? (
                            <Button
                                type="primary"
                                onClick={() => {
                                    dispatch(unFollowRequest(userId));
                                }}
                            >
                                UnFollow
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                onClick={() => {
                                    dispatch(followRequest(userId));
                                }}
                            >
                                Follow
                            </Button>
                        )}
                    </div>}
            </div>

            <div style={{ display: 'flex', width: '300px', margin: '20px' }}>
                <div style={{ flex: 1 }}>게시물  {posts.length}</div>
                <div style={{ flex: 1 }}>팔로워  {followers.length}</div>
                <div style={{ flex: 1 }}>팔로잉  {followings.length}</div>
            </div>
        </>
    );
}

export default Infomation;

Infomation.propTypes = {
    posts: PropTypes.arrayOf(object),
    followers: PropTypes.array.isRequired,
    followings: PropTypes.array.isRequired
}