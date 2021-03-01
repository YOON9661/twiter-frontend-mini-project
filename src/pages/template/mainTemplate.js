import React from "react";
import "antd/dist/antd.css";
import { Menu, Input } from "antd";
import {
    SettingOutlined,
    TwitterOutlined
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
    return (
        <>
            <Menu
                mode="horizontal"
            >
                <Menu.Item style={{
                    marginLeft: '70px',
                    width: '100px',
                    textAlign: 'center',
                    fontSize: '17px'
                }}>
                    <Link to="/">
                        twiter <TwitterOutlined />
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search
                        style={{ marginTop: '7px', width: '400px' }}
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">
                        login
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/register">
                        register
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/upload">
                        upload
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    {/* <Link to="/profile"> */}
                        profile
                    {/* </Link> */}
                </Menu.Item>
                <Menu.Item>
                    <SettingOutlined />
                </Menu.Item>
            </Menu>
            <ChildrunWrapper>
                {children}
            </ChildrunWrapper>
        </>
    );
}

export default MainTemplate;

const ChildrunWrapper = styled.div`

`;