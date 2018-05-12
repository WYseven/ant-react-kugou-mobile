import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

class TabBarBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item title="hello" key="hello" />
        </TabBar>
      </React.Fragment>
     )
  }
}
 
export default TabBarBottom;