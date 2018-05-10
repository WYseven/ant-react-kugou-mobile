import React, { Component } from 'react'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;


class CommList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let { list } = this.props;  // [{commid,commname,imgurl,brief}]
    return (
      <div>
        {
          list.map((val) => {
            return (
              <List key={val.commid} className="rank">
                <Item
                  thumb={val.imgurl.replace('{size}', 400)}
                  arrow="horizontal"
                  onClick={() => { }}
                >
                  {val.commname}
                  {val.brief ? <Brief>{val.brief}</Brief> : null}
                </Item>
              </List>
            )
          })
        }</div>
    )
  }
}

export default CommList;