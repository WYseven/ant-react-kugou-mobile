import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Controls from './controls'
import Lyirc from './lyirc'
import { NavBar, Icon } from 'antd-mobile';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ReactDOM.createPortal(
      <div className="m-main" style={{ top: 0,display: this.props.show ? 'block': 'none'}}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {
            this.props.toggleShow(false)
          }}
        >{
            this.props.playInfo && this.props.playInfo.songName
        }</NavBar>
        <div className="bg-overlay"></div>
        <div className="play-overlay"></div>
        <Lyirc 
          rcString={this.props.rcString}
          duration={this.props.duration}
          currentTime={this.props.currentTime}
          lyMove={this.props.lyMove}
          changelyMove={this.props.changelyMove}
        />
        <Controls {...this.props}/>
      </div>,
      document.body
    )
  }
}

export default Player;