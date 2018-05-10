import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div 
      className={this.props.className}
      style={{
      display: 'flex',
      height: '100%',
      'justifyContent': 'center',
      'alignItems': 'center',
        ...this.props.style
    }}>
      <Icon type="loading" />
    </div> )
  }
}
 
export default Loading;