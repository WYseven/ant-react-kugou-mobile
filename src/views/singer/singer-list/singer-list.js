import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import './singer-list.css'
import { formatStringToObject} from '@/utils/utils'
import GoBack from '@/components/goback/goback'
const Item = List.Item;

class SingerList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    let {data,history} = this.props;
    return ( 
      <div className="singer-list">
        <GoBack title={formatStringToObject(this.props.location.search).tip}/>
        {
          data.map((val) => {
            return (
              <List key={val.singerid}>
                <Item
                  thumb={val.imgurl.replace(/{size}/, 240)}
                  arrow="horizontal"
                  onClick={() => { history.push('/singer/info/' + val.singerid) }}
                >{val.singername}</Item>
              </List>
            )
          })
        }
      </div>
     )
  }
}
 
export default withRouter(SingerList);