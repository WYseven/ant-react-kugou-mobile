import React, { Component } from 'react'
import TopNav from './topNav'
import Nav from './nav'
import GoBack from './goback'
import './header.css'
import {withRouter} from 'react-router-dom'
import { navConfig } from '../../router/config'

class Header extends Component {
  render() {
    // 如果访问的地址在配置文件中，就出现nav
    let item = !!navConfig.find(item => this.props.location.pathname === item.path);


    return (
      <div className="header">
        <TopNav/>
        {/* 地址栏中出现配置中任意一个路径，就出现导航 */}
        {
          item ? <Nav  /> : <GoBack  />
        }
        
        
      </div>
    )
  }
}

export default withRouter(Header)
