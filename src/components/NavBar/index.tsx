import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { TIME_REFRESH_INTERVAL } from '../../utils/constants';

import './styles.scss';

function Navbar() {
  const [currentTime, setCurrentTime] = useState(moment());
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
    </div>
  );
}

export default Navbar;
