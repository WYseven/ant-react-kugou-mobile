import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import {withRouter} from 'react-router-dom'

import { routers } from "@/router";

function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = routers.filter((item) => {
  return item.route 
});

class TabNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  tabClick = (tab,index) => {
    let {history} = this.props;
    history.push(tab.path)
  }
  render() {
    let {location } = this.props;
    let item = routers.filter((item) => {
      return item.path === location.pathname;
    })[0];
    return ( 
      <div>
        <StickyContainer>
          <Tabs tabs={tabs}
            renderTabBar={renderTabBar}
            onTabClick={this.tabClick}
            initialPage={item ? item.index : 0}
          >
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}
 
export default withRouter(TabNav);