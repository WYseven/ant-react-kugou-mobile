import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let { data} = this.props;
    return ( 
      <List renderHeader={() => '最新歌曲'}>
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