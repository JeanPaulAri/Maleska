import React from 'react';
import { Progress, Row } from 'antd';
// import Navbar from '../../components/NavBar';
import bg1 from '../../images/bg1.jpeg';

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
        <div className="bg1">
          <img src={bg1} alt="" />
        </div>
      </Row>
    </div>
  );
}

export default HomePage;
