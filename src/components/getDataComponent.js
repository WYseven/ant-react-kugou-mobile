import React, { Component } from 'react'
import servers, { cancelRequst } from '../server'
import {Icon} from 'antd-mobile'

export let getDataComponent = function (serverName,params={}) {
  return function (Component2) {
    return class componentName extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data:{},
          loading: true
        };
        this.isUnMount = false;
      }
      componentDidMount() {
        // 找到请求的方法
       
        let method = servers[serverName];
        if (!method){
          throw new Error('请求的方法不存在，请检测传入的参数')
        }
        // 声明变量存一下参数params
        let p = params;
        // 如果params是函数，给函数传入props，上面有match history location
        // 函数要返回一个对象，对象就是发送给后端的参数
        if (typeof params === 'function'){
          p = params(this.props)
        }
        servers[serverName](p).then(({data}) => {
          console.log('还会成功')
          if (!this.isUnMount){
            this.setState({
              data,
              loading: false
            })
          }
        })
      }

      componentWillUnmount() {
        // 当卸载时候设置一个标示，在ajax回来时候不触发setState
        this.isUnMount = true;
        cancelRequst();
      }

      render() {
        return (
          
          this.state.loading 
            ? <Icon type="loading"></Icon> 
            : <Component2 data={this.state.data} {...this.props}/>
        )
      }
    }
  }
}

/* export default getDataComponent('getNewSongs')(NewSong)
export default getDataComponent('getRanklist')(Rank) */




