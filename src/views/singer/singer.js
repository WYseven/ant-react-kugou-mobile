import React, { Component } from 'react';
import './singer.css'
import { List } from 'antd-mobile';
import { Link} from 'react-router-dom'
const Item = List.Item;

class Singer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { data } = this.props;
    console.log(data)
    return ( 
      <div className="singer">
        {
          data.map((val) => {
            return (
              <List key={val.classid} className="my-list">
                <Link to={{
                  pathname: '/singer/list/' + val.classid,
                  search: 'tip=' + val.classname
                }}>
                  <Item arrow="horizontal">{val.classname}</Item>
                </Link>
              </List>
            )
          })
        }
      </div>
     )
  }
}
 
export default Singer;