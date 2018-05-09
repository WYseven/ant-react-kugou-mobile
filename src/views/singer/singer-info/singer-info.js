import React, { Component } from 'react';
import SongList from '@/components/song-list/song-list'

class SingerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let { data,info } = this.props;
    return ( 
      <div>
        <img width='100%' src={info.imgurl.replace(/{size}/, 400)} alt={info.intro} />
        
        <SongList data={data} />
      </div>
    )
  }
}
 
export default SingerInfo;