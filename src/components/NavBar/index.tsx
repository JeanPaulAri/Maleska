import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Row } from 'antd';

import { TIME_REFRESH_INTERVAL } from '../../utils/constants';

import NavItem from './NavItem';
import { items } from './functions';
import './styles.scss';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(moment());
  const navigationItems = items;
  const refreshTime = () => { setCurrentTime(moment()); };

  useEffect(() => {
    setInterval(refreshTime, TIME_REFRESH_INTERVAL);
  }, []);

  return (
    <div className="navbar-container">
      <span>
        NavBar
        {' '}
        {currentTime.format('HH:mm:ss')}
      </span>
      <Row>
        {navigationItems.map((item) => (
          <NavItem
            key={item.id}
            name={item.name}
            url={item.url}
            logo={item.logo}
          />
        ))}
      </Row>
    </div>
  );
}

export default Navbar;
