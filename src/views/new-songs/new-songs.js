import React, { Component } from 'react';
import {List } from 'antd-mobile';
import CustomeCarousel from './custome-carousel'
const Item = List.Item;

class NewSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
     }
  }
  render() { 
    let { banner,data } = this.props;
    console.log(data)
    return ( 
      <div>
        <CustomeCarousel banner={banner} />
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
      </div>
    )
  }
}
 
export default NewSongs;