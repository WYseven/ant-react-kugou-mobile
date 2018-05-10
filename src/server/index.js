import axios from 'axios'

let oneLeve = axios.create({
  responseType: 'json',
  transformResponse(data){
    let o = {}
    if(data.list) {
      o.data = data.list;
      o.origin = 'singer'
    }else if(data.banner){
      o.data = data.data;
      o.banner = data.banner
      o.origin = 'home'
    }else if(data.rank){
      o.data = data.rank.list;
      o.origin = 'rank'
    }else if(data.plist){
      o.data = data.plist.list.info;
      o.origin = 'plist'
    }else if(data.singers){
      o.data = data.singers.list.info;
      o.origin = 'singers-list'
    }else if(data.songs){
      o.data = data.songs.list;
      o.info = data.info;
      o.origin = 'singers-info'
    }
    return o;
  }
})

// 获取banner和新歌
export const getNewSongs = () => {
  return oneLeve('/proxy/?json=true')
}

export const getPlist = () => {
  return oneLeve('/proxy/plist/index&json=true')
}

export const getRankList = () => {
  return oneLeve('/proxy/rank/list&json=true')
}


export const getHotSinger = () => {
  return oneLeve('/proxy/singer/class&json=true')
}

// 歌手列表

export const getSingerList = (params={classid:''}) => {
  return oneLeve(`/proxy/singer/list/${params.classid}?json=true`)
}

// 歌手信息

export const getSingerInfo = (params={singerid:''}) => {
  return oneLeve(`/proxy/singer/info/${params.singerid}?json=true`)
}