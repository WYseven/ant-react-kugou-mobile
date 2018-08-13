import axios from 'axios'

// 请求的基路径，会在请求的地址前都加上这个
//axios.defaults.baseURL = '/kugou'

let c1 = axios.create({
  baseURL: '/kugou',
  /* transformRequest(data){
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    console.log(data)
    data.user = 'leo'
    return JSON.stringify(data);
  } */
  transformResponse(data){
    data = JSON.parse(data)
    data.abc = 1000;
    return data;
  }
})

function request(url, params = { a: 1 }) {
  return c1(url, { params: params }).catch((e) => {
    console.log('网络有问题')
  })
}

/* c1.post('/abc', { a: 1, b: 2 })
c1.post('/abc1', { a: 1, b: 2 })
c1.post('/abc3', { a: 1, b: 2 })
c1.post('/abc4', { a: 1, b: 2 })
c1.post('/abc5',{a:1,b:2}) */


// 获取新歌方法
export function getNewSog(params) {  // {}
  return request(`?json=true`, params)
}

// 获取排行方法
export function getRank(params) {  // {}
  return request(`/rank/list?json=true`, params)
}