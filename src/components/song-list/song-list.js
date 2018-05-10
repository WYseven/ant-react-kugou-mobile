import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;

class SongList extends Component {
  static defaultProps = {
    title: '最新歌曲'
  }
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let { data} = this.props;
    return ( 
      <List renderHeader={() => this.props.title}>
        {
          data.map((val) => {

            return (
              <Item
                key={val.hash}
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => { }}
              >{val.filename}</Item>
            )
          })
        }
      </List>
    )
  }
}
 
export default SongList;