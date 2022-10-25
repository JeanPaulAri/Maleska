import React from 'react';
import {
  Avatar, Col, Row, Typography,
} from 'antd';

import './styles.scss';

interface navItemProps {
  name : string,
  url : string,
  logo : string,
}

const { Text } = Typography;

const NavItem: React.FC<navItemProps> = function ({
  name, url, logo,
}) {
  return (
    <div>
      <Row>
        <Col>
          <div>
            <Avatar
              src={logo}
              className="nav-item__avatar"
              onClick={() => { window.open(url); }}
            />
          </div>
        </Col>
        <Col>
          <Text>
            {name}
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default NavItem;
