import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Privacy } from './components/Privacy';

import { Link, Route, Routes } from 'react-router-dom';

import { HomeOutlined, FileDoneOutlined, InfoCircleOutlined, LoginOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import Login from './components/Login';
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
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
        <div className="logo" />
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
                <Link to="/login">
                  {React.createElement(LoginOutlined)}
                </Link>,
              label: `Login`,
            }
          ]}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '90vh',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          2023 - Educational React App created for PV125 Group!
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
