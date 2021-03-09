import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from 'antd';
import styled from "styled-components";


import MainTemplate from "./template/mainTemplate";
import CardContainer from "../components/mainBoard/cardContainer";
import Infomation from "../components/profile/information";

import { getUserRequest, getUserInitialize } from "../redux/postRedux";

const { TabPane } = Tabs;

// profile
const ProfilePage = ({ match }) => {
    const dispatch = useDispatch();

    const { userId } = match.params;

    // mydata
    const { loginData } = useSelector(state => state.userReducer);
    const myId = loginData?.id

    const { postsData, userData } = useSelector(state => state.postReducer);

    useEffect(() => {
        dispatch(getUserRequest(userId));
        return () => {
            dispatch(getUserInitialize());
        }
    }, [dispatch, userId]);


    return (
        <MainTemplate>
            <ProfileBlock>
                <Infomation
                    myId={myId}
                    userId={userData?.id}
                    userNickname={userData?.nickname}
                    posts={userData?.Posts || []}
                    followers={userData?.Followers || []}
                    followings={userData?.Followings || []}
                />
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="게시글" key="1">
                        <CardBlock>
                            {postsData.map(postData => (
                                <CardContainer
                                    key={postData.id}
                                    PostId={postData.id}
                                    UserId={postData.UserId}
                                    UserNick={postData.User?.nickname}
                                    content={postData.content}
                                    postLikers={postData.PostLikers.map(postLiker => (
                                        postLiker.id
                                    ))}
                                    images={postData.Images}
                                    Retweet={postData.Retweet}
                                    Retweeters={postData.Retweeters.map(retweeter => (
                                        retweeter.id))}
                                    Comments={postData.Comments}
                                />
                            ))}
                        </CardBlock>
                    </TabPane>
                </Tabs>
            </ProfileBlock>
        </MainTemplate>
    );
}

export default ProfilePage;

const ProfileBlock = styled.div`
    width: 800px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`;

const CardBlock = styled.div`
    width: 500px;
    margin-top: 30px;
    margin-left: 50px;
    margin-right: auto;
`;