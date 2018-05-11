import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {getSongMp3} from '@/server/searchMp3'
const Item = List.Item;



class SongList extends Component {
  static defaultProps = {
    title: '最新歌曲'
  }
  constructor(props) {
    super(props);
    this.state = { 
      audioSrc : ''
    }
  }

  getMp3 = (hash) => {
    getSongMp3({hash}).then(({data}) => {
      this.setState({
        audioSrc: data.url
      })
    })
  }
  render() {
    let { data} = this.props;
    return ( 
      <div>
        <audio autoPlay src={this.state.audioSrc} controls></audio>
        <List renderHeader={() => this.props.title}>
        {
          data.map((val) => {

            return (
              <Item
                key={val.hash}
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={this.getMp3.bind(this,val.hash)}
              >{val.filename}</Item>
            )
          })
        }
      </List>
      </div>
    )
  }
}
 
export default SongList;