import React, { Component } from 'react'
import { getDataComponent} from '../../components/getDataComponent'
import CustomeCarousel from './carousel'
import SongList from '../comm/songList'

 class NewSong extends Component {
  render() {
    let { banner } = this.props.data;
    let { data } = this.props.data;
    return (
      <div>
        <CustomeCarousel banner={banner}></CustomeCarousel>
        <SongList songList={data} />
      </div>
    )
  }
}

export default getDataComponent('getNewSongs')(NewSong)