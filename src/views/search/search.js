import React, { Component } from 'react';
import GoBack from '@/components/goback/goback'
import { SearchBar } from 'antd-mobile';
import { searchHot, searchByKeyword } from '@/server/jsonp.js'
import SongList from '@/components/song-list/song-list'
import Loading from '@/components/loading/loading'

import './search.css'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hotData:[],
      title: '最近热门',
      loading: true
     }
  }
  componentDidMount() {
    // 自动获取光标
    this.autoFocusInst.focus();

    searchHot().then((data) => {
      let d = data.data.info.map((item) => {
        return {
          hash: item.sort,
          filename: item.keyword
        }
      })
      this.setState({
        hotData: d,
        loading: false
      })
    })
  }
  search = () => {
    let value = this.autoFocusInst.state.value.trim();
    if(value === '') return;
    this.setState({
      loading: true
    })
    searchByKeyword({
      keyword: value
    }).then((data) => {
      this.setState({
        hotData: data.data.info,
        title: `共有(${data.data.total})条结果`,
        loading: false
      })
    })
  }
  render() {
    let { hotData, loading} = this.state;
    
    return (
      <div>
        <GoBack title={'搜索'} />
        <SearchBar
          cancelText={'搜索'}
          placeholder="歌手/歌名/拼音"
          ref={ref => this.autoFocusInst = ref}
          onSubmit={this.search}
          onCancel={this.search}
        />
        <div style={{
          position: 'relative'
        }}>
          <Loading style={{
            display: loading ? 'block' : 'none'
          }} className="search-loading" />
          <SongList title={this.state.title} data={hotData} />
        </div>
      </div>
     )
  }
}
 
export default Search;