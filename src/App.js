import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Privacy } from './components/Privacy';

import { Route, Routes } from 'react-router-dom';

import { Layout, theme } from 'antd';
import React from 'react';
import Login from './components/Login';
import { Sidebar } from './components/Sidebar';
import UserList from './components/UserList';
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar />

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
              <Route path="/users" element={<UserList />} />
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
