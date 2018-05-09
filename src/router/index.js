import React,{Component}  from 'react';

import NewSong from '@/views/new-songs/new-songs'
import Rank from '@/views/rank/rank'
import Singer from '@/views/singer/singer'
import SingerList from '@/views/singer/singer-list/singer-list'
import SingerInfo from '@/views/singer/singer-info/singer-info'

import { Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

import * as server from '@/server/'

let routes = [
  {
    path: '/',
    title: '新歌',
    route: false,
    nav:true,
    index:0,
    component: getComponent(NewSong, 'getNewSongs')
  },
  {
    path: '/new-song',
    title: '新歌',
    route: true,
    nav: true,
    index: 0,
    component: getComponent(NewSong,'getNewSongs')
  },
  {
    path: '/rank',
    title: '排行',
    route: true,
    nav: true,
    index: 1,
    component: getComponent(Rank,'getRankList')
  },
  {
    path: '/plist',
    title: '歌单',
    route: true,
    nav: true,
    index: 2,
    component: () => <div>歌单</div>
  },
  {
    path: '/singer',
    title: '歌手',
    nav: true,
    route: true,
    index: 3,
    component: getComponent(Singer, 'getHotSinger')
  },
 {
    path: '/singer/list/:classid',
    title: '歌手列表',
    route: false,
    component: getComponent(SingerList,'getSingerList',(match)=>{
      return {
        classid: match.params.classid
      }
    })
  },
   {
    path: '/singer/info/:singerid',
    title: '歌手列表',
    route: false,
    component: getComponent(SingerInfo,'getSingerInfo',(match)=>{
      return {
        singerid: match.params.singerid
      }
    })
  },
  /* {
    path: '/search',
    title: '搜索',
    route: false,
    component: Search
  } */
]

// 封装，用来统一的设置请求的数据
function getComponent(ComponentName,serverName,mapMatch){
  class ConnectComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        data: {}
      }
    }
    async componentDidMount(){
      let {match={}} = this.props,p = {};
      if(mapMatch){
        p = mapMatch(match);
      }
      let {data} = await server[serverName](p);
      this.setState({
        data
      })
    }
    render(){
      let data = this.state.data;
      // 当没有值得时候，不需要渲染
      return data.data ? <ComponentName {...this.state.data} {...this.props} /> : <Icon type="loading"/>;
    }
  }

  return withRouter(ConnectComponent);
}

export let routers = routes;