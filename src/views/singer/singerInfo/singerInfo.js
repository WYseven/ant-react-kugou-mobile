import React, { Component } from 'react'
import { getDataComponent } from '../../../components/getDataComponent'
import SongList from '../../comm/songList'
class SingerInfo extends Component {
  render() {
    let {info,data} = this.props.data;
    return (
      <div>
        <img 
          style={{marginTop:'-2rem'}}
          alt={info.singername} 
          src={info.imgurl.replace('{size}',400)} />
        <div style={{ marginTop: '-2rem' }}>
          <SongList songList={data} ></SongList>
        </div>
      </div>
    )
  }
}

export default getDataComponent('getSingerInfo',function(props){
  return {
    singerid: props.match.params.id
  }
})(SingerInfo);