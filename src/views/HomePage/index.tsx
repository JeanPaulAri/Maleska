import React from 'react';

import { Progress, Row } from 'antd';

import Navbar from '../../components/NavBar';

import './styles.scss';

function HomePage() {
  const percentage = 40;
  return (
    <div className="Homepage-container">
      <Navbar />
      <Row align="middle" justify="center">
        <span>
          HomePage
        </span>
      </Row>
      <Row align="middle" justify="center">
        <span>
          Score
        </span>
      </Row>
      <Row align="middle" justify="center">
        <Progress
          type="circle"
          percent={percentage || ''}
          showInfo={false}
          format={(percent) => `${percent}%`}
        />
      </Row>
    </div>
  );
}

export default HomePage;
