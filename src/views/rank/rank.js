import React, { Component } from 'react';
import { List } from 'antd-mobile';
import './rank.css'
const Item = List.Item;

class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    }
  }
  render() {
    let { data } = this.props;
    return (
      <div className="rank">
        {
          data.map((val) => {
            return (
              <List key={val.id}>
                <Item
                  key={val.id}
                  thumb={val.imgurl.replace(/{size}/, 240)}
                  arrow="horizontal"
                  onClick={() => { }}
                >{val.rankname}</Item>
              </List>
            )
          })
        }
      </div>
    )
  }
}

export default Rank;