import axios from 'axios'

let plist = axios.create({
  baseURL: '/kugou'
})

// 根据id获取歌单信息
export const getPlistInfo = (params = { id: '' }) => {
  return plist(`/plist/list/${params.id}?json=true`)
}

