import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import TabNav from "./tab-nav/tab-nav";
import {withRouter} from "react-router-dom";
import './header.css'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let {history} = this.props;
    return ( 
      <div className="header">
        <NavBar
          mode="dark"
          onLeftClick={() => {
            history.push('/')
          }}
          rightContent={[
            <Icon 
              key="0" 
              type="search" 
              style={{ marginRight: '16px' }} 
              onClick={() => {
                history.push('/search')
              }}
            />
          ]}
        ></NavBar>
        {this.props.showNav ? <TabNav /> : null}
      </div>
    )
  }
}
 
export default withRouter(Header)