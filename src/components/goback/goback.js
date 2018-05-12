import React, { Component } from 'react';
import {  NavBar, Icon } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
class GoBack extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { history} = this.props;
    return ( 
      <div style={{zIndex:999,position:"relative"}}>
        <NavBar
          className={this.props.className}
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.go(-1)}
          
        >
          {this.props.title}
        </NavBar>
      </div>

    )
  }
}
 
export default withRouter(GoBack);