import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import TabNav from "./tab-nav/tab-nav";
import './header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <div className="header">
        <NavBar
          mode="dark"
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />
          ]}
        ></NavBar>
        {this.props.showNav ? <TabNav /> : null}
      </div>
    )
  }
}
 
export default Header