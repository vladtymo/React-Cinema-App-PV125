import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { HomeOutlined, FileDoneOutlined, InfoCircleOutlined, UserOutlined, LoginOutlined, NumberOutlined } from '@ant-design/icons';
import { Layout, Menu, Space, Typography } from 'antd';
import Paragraph from "antd/es/skeleton/Paragraph";
import { UserContext } from '../contexts/user.context';
// import { CounterContext } from '../contexts/counter.context';
import { CounterContext, selectCount } from '../store/reducers/counter.reducer';
import { useDispatch, useSelector } from 'react-redux';

const { Sider } = Layout;

export function Sidebar() {

    const { username } = useContext(UserContext);
    // const { count } = useContext(CounterContext);
    const count = useSelector(selectCount);

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo">
                <h3 style={{ color: 'white' }}>User: {username}</h3>
                <p style={{ color: 'white' }}>Counter: {count}</p>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: 1,
                        icon:
                            <Link to="/">
                                {React.createElement(HomeOutlined)}
                            </Link>,
                        label: `Home`,
                    },
                    {
                        key: 2,
                        icon:
                            <Link to="/about">
                                {React.createElement(InfoCircleOutlined)}
                            </Link>,
                        label: `About`,
                    },
                    {
                        key: 3,
                        icon:
                            <Link to="/privacy">
                                {React.createElement(FileDoneOutlined)}
                            </Link>,
                        label: `Privacy`,
                    },
                    {
                        key: 4,
                        icon:
                            <Link to="/users">
                                {React.createElement(UserOutlined)}
                            </Link>,
                        label: `Users`,
                    },
                    {
                        key: 5,
                        icon:
                            <Link to="/counter">
                                <NumberOutlined />
                            </Link>,
                        label: `Counter`,
                    },
                    {
                        key: 6,
                        icon:
                            <Link to="/login">
                                {React.createElement(LoginOutlined)}
                            </Link>,
                        label: `Login`,
                    }
                ]}
            />
        </Sider>
    );
}