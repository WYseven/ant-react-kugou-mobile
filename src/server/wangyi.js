import axios from 'axios'

let wangyiAxios = axios.create({
  baseURL: 'wangyi'
})

wangyiAxios.get()