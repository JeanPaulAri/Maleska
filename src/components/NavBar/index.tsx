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
  // console.log(currentTime.format('HH:mm:ss'));
  return (
    <div className="navbar">
      <span>
        NavBar
        {' '}
        {currentTime.format('HH:mm:ss')}
      </span>
    </div>
  );
}

export default Navbar;
