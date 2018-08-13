import React, { Component } from 'react'
import { getDataComponent } from '../../../components/getDataComponent'
import { List } from 'antd-mobile';
import '../singer.css'
const Item = List.Item;

class SingerList extends Component {
  render() {
    let { data } = this.props.data;
    console.log(data)
    return (
      <div className="singer-list">
        <List>
          {
            data.map((item) => {
              return (
                <Item
                  key={item.singerid}
                  thumb={item.imgurl.replace('{size}',240)}
                  arrow="horizontal"
                  onClick={() => {
                    this.props.history.push(`/singer/info/${item.singerid}`)
                   }}
                >{item.singername}</Item>
              )
            })
          }
          
        </List>
      </div>
    )
  }
}
/* function mapStateTopProp(state) {
  return {
    a: state.a
  }
}
connect()(组件) */
export default getDataComponent('getSingerList',function(props){
  return { classid: props.match.params.id }
})(SingerList);
