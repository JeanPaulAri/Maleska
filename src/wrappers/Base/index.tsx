import React from 'react';

import { Layout } from 'antd';

import HomePage from '../../views/HomePage';
import Navbar from '../../components/NavBar';

const { Header, Sider, Content } = Layout;

function Base() {
  return (
    <div>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content>
          <HomePage />
        </Content>
      </Layout>

    </div>
  );
}

export default Base;
