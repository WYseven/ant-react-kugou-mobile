import React, { Component } from 'react'
import { List } from 'antd-mobile';
import {connect} from 'react-redux'
const Item = List.Item;


class Songlist extends Component {
  static defaultProps = {
    songList:[]
  }
  render() {
    return (
      <div>
        <List className="my-list">
          {
            this.props.songList.map((item) => {
              return (
                <Item
                  key={item.hash}
                  extra={<i style={{ fontSize: '1rem' }}
                    className="iconfont icon-xiazai"></i>}
                  onClick={() => {
                    this.props.dispatch({ type: 'updateHash', hash: item.hash })
                    this.props.dispatch({ type: 'updateSongList', songList: this.props.songList})
                  }}
                >{item.filename}</Item>
              )
            })
          }

        </List>
      </div>
    )
  }
}
export default connect()(Songlist)