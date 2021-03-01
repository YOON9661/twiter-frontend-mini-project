import React, { useState, useCallback } from "react";
import styled from "styled-components"
import { Card, Avatar, Image } from 'antd';
import {
    HeartOutlined,
    EllipsisOutlined,
    SettingOutlined
    , CommentOutlined
} from '@ant-design/icons';

import MainTemplate from "./template/mainTemplate";
import CommentBlock from '../components/mainBoard/comment';

const { Meta } = Card;

const MainBoardPage = () => {

    const [watchComment, setWatchComment] = useState(false);
    const onOpenCommentBlock = useCallback(() => {
        setWatchComment(!watchComment);
    }, [watchComment]);

    return (
        <>
            <MainTemplate>
                <MainBoardTemplate>
                    <StoryWrapper>
                        <div style={{ border: '1px solid lightgray', height: '100px', marginBottom: '20px' }}>
                            story
                        </div>
                    </StoryWrapper>

                    <Card
                        style={{
                            width: '100%',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}
                        actions={[
                            <SettingOutlined />,
                            <HeartOutlined />,
                            <CommentOutlined onClick={onOpenCommentBlock} />,
                            <EllipsisOutlined />
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description={
                                <>
                                    <div style={{ margin: '20px' }}>
                                        <Image
                                            width={200}
                                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        />
                                    </div>
                                    <div>즐거운 하루</div>
                                </>
                            }
                        />
                    </Card>
                    {watchComment && <CommentBlock />}

                    <Card
                        style={{
                            width: '100%',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}
                        actions={[
                            <SettingOutlined />,
                            <HeartOutlined />,
                            <CommentOutlined />,
                            <EllipsisOutlined />
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="Card title"
                            description={
                                <>
                                    <img
                                        style={{ margin: '10px', width: '80%' }}
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    <div>즐거운 하루</div>
                                </>
                            }
                        />
                    </Card>
                </MainBoardTemplate>
            </MainTemplate>
        </>
    );
}

export default MainBoardPage;

const MainBoardTemplate = styled.div`
    width: 500px;
    margin-left: 300px;
    margin-right: auto;
    margin-top: 50px;
`;

const StoryWrapper = styled.div`
    
`;