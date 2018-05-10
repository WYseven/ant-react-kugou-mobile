import React, { Component } from 'react';
import CommList from '@/components/comm-list/comm-list'

class Plist extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let { data } = this.props;
    let list = data.map((item) => {
      return {
        commid: item.specialid,
        commname: item.specialname,
        imgurl: item.imgurl,
        brief: item.playcount
      }
    })
    return (
      <div>
        <CommList list={list} />
      </div>
    )
  }
}

export default Plist;