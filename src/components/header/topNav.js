import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class TopNav extends Component {
  render() {
    return (
      <div className="top">
        <NavBar
          mode="dark"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" onClick={() => {
              this.props.history.push('/search')
            }} />
          ]}
        ></NavBar>
      </div>
    )
  }
}

export default withRouter(TopNav);