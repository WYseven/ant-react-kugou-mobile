import React, { Component } from 'react';
import {List } from 'antd-mobile';
import CustomeCarousel from './custome-carousel'
import SongList from '@/components/song-list/song-list'


class NewSongs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
     }
  }
  render() { 
    let { banner,data } = this.props;
    return ( 
      <div>
        <CustomeCarousel banner={banner} />
        <SongList data={data}/>
      </div>
    )
  }
}
 
export default NewSongs;