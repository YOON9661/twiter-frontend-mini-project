import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"

import MainTemplate from "./template/mainTemplate";
import CardContainer from "../components/mainBoard/cardContainer";
import { getPostsRequest } from "../redux/post/getPosts";

const MainBoardPage = ({ history }) => {
    const dispatch = useDispatch();

    const { postsData } = useSelector(state => state.getPosts);
    const { isLoggedIn } = useSelector(state => state.login);

    // login 한 사람만 입장 가능..
    useEffect(() => {
        if (isLoggedIn === false) {
            history.push("/login");
        } else {
            dispatch(getPostsRequest());
        }
    }, [dispatch, isLoggedIn, history])

    return (
        <>
            <MainTemplate>
                <MainBoardTemplate>
                    <StoryWrapper>
                        <div style={{ border: '1px solid lightgray', height: '100px', marginBottom: '20px' }}>
                            story
                        </div>
                    </StoryWrapper>

                    {/* cardContainer map fucntion required */}
                    {postsData.map(postData => (
                        <CardContainer
                            key={postData.id}
                            PostId={postData.id}
                            UserId={postData.UserId}
                            UserNick={postData.User?.nickname}
                            content={postData.content}
                            postLikers={postData.PostLikers}
                            images={postData.Images}
                            Retweet={postData.Retweet}
                            Retweeters={postData.Retweeters.map(retweeter => (
                                retweeter.id))}
                            Comments={postData.Comments}
                        />
                    ))}

                </MainBoardTemplate>
            </MainTemplate>
        </>
    );
}

export default withRouter(MainBoardPage);

const MainBoardTemplate = styled.div`
    width: 500px;
    margin-left: 300px;
    margin-right: auto;
    margin-top: 50px;
`;

const StoryWrapper = styled.div`
    
`;