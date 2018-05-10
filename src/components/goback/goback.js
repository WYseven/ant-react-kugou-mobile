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
      <NavBar
        className={this.props.className}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => history.go(-1)}
      >
        {this.props.title}
      </NavBar>

    )
  }
}
 
export default withRouter(GoBack);