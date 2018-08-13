import React, { Component } from 'react'
import { getDataComponent } from '../../components/getDataComponent'
import { List } from 'antd-mobile';
import './singer.css'
import {withRouter} from 'react-router-dom'
const Item = List.Item;

class Singer extends Component {
  render() {
    let {data}  = this.props.data;
    return (
      <div className="singer">
        <List className="my-list">
        {
            data.map((item) => {
              return (
                <Item key={item.classid}
                arrow="horizontal" onClick={() => { 
                  this.props.history.push(`/singer/list/${item.classid}`)
                }}>
                  {item.classname}
                </Item>
              )
            })
        }
          
        </List>
      </div>
    )
  }
}

export default withRouter(getDataComponent('getSingers')(Singer)); 