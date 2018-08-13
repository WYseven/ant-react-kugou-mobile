import NewSong from '../views/new-song/newsong'
import Rank from '../views/rank/rank'
import Plist from '../views/plist/plist'
import Singer from '../views/singer/singer'
import SingerList from '../views/singer/singerList/singerList'
import SingerInfo from '../views/singer/singerInfo/singerInfo'
import PlistInfo from '../views/plist/plistInfo'

// 导航区域的配置
export let navConfig = [
  {
    path: '/',
    title: '新歌',
    component: NewSong,
    info:{
      order:0
    }
  },
  {
    path: '/rank',
    title: '排行',
    component: Rank,
    info: {
      order: 1
    }
  },
  {
    path: '/plist',
    title: '歌单',
    component: Plist,
    info: {
      order: 1
    }
  },
  {
    path: '/singer',
    title: '歌手',
    component: Singer,
    info: {
      order: 2
    }
  },
]
export let two = [
  {
    path: '/singer/list/:id',
    title: '歌手',
    component: SingerList
  },
  {
    path: '/singer/info/:id',
    title: '歌手信息',
    component: SingerInfo
  },
  {
    path: '/plist/list/:id',
    title: '歌单信息',
    component: PlistInfo
  }
]

export default [...navConfig, ...two]