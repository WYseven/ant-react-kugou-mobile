import React, { Component } from 'react';
import { List, NavBar, Icon } from 'antd-mobile';
import './singer-list.css'
const Item = List.Item;

class SingerList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let {data,history} = this.props;
    return ( 
      <div className="singer-list">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => history.go(-1)}
        >NavBar</NavBar>
        {
          data.map((val) => {
            return (
              <List key={val.singerid}>
                <Item
                  thumb={val.imgurl.replace(/{size}/, 240)}
                  arrow="horizontal"
                  onClick={() => { }}
                >{val.singername}</Item>
              </List>
            )
          })
        }
      </div>
     )
  }
}
 
export default SingerList;