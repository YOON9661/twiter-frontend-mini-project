import React from "react";
import { Tabs } from 'antd';
import { DiffOutlined } from "@ant-design/icons";
import styled from "styled-components";

import MainTemplate from "./template/mainTemplate";
import PeedUpload from "../components/upload/peedUpload";
import StoryUpload from "../components/upload/storyUpload";

const { TabPane } = Tabs;

const UploadPage = () => {

    return (
        <>
            <MainTemplate>
                <UploadWrapper>
                    <h3 style={{ margin: '30px', textAlign: 'center' }}>
                        당신의 하루를 업로드하세요! <DiffOutlined />
                    </h3>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="스토리 업로드" key="1">
                            <StoryUpload />
                        </TabPane>
                        <TabPane tab="피드 업로드" key="2">
                            <PeedUpload />
                        </TabPane>
                    </Tabs>
                </UploadWrapper>
            </MainTemplate>
        </>
    );
}

export default UploadPage;

const UploadWrapper = styled.div`
    width: 800px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
`;