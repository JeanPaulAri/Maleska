import React from 'react';

import { Image, Progress, Row } from 'antd';

// import Navbar from '../../components/NavBar';

import './styles.scss';

function HomePage() {
  const percentage = 40;
  return (
    <div className="homepage-container">
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
      <Row>
        <div className="homepage-container__bg-1">
          image background
        </div>
      </Row>
    </div>
  );
}

export default HomePage;
