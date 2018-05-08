import jsonp from 'jsonp';

import {formatObjectToString} from '@/utils/utils'

// 根据关键字搜索下拉框使用
let searchTipUrl = `http://searchtip.kugou.com/getSearchTip`
export const searchTip = (params={}) => {
  // 默认参数
  let defaults = {
    MusicTipCount: 5,
    MVTipCount: 2,
    albumcount: 2,
    keyword: ''
  }
  Object.assign(defaults,params)

  return new Promise((resolve,reject) => {
    jsonp(searchTipUrl,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })
}


// 根据歌曲名字获取到相关歌曲
let songSearchUrl = `http://songsearch.kugou.com/song_search_v2`
export const songSearch = (params={}) => {
  // 默认参数
  let defaults = {
    format: "jsonp",
    keyword:'',
    page: 1,
    pagesize:30,
    platform:"WebFilter",
    //tag:"em",
    filter:2,
    iscorrection:1,
    privilege_filter:0
  }
  Object.assign(defaults,params);
  
  return new Promise((resolve,reject) => {
    jsonp(songSearchUrl,{
      param: formatObjectToString(defaults) + '&callback'
    },(e,d) => {
      if(e) reject(e)
      resolve(d)
    })
  })
}
