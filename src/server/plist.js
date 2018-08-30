import { axiosRequest} from './index'

// 根据id获取歌单信息
export const getPlistInfo = (params = { id: '' }) => {
  return axiosRequest(`/plist/list/${params.id}?json=true`)
}

