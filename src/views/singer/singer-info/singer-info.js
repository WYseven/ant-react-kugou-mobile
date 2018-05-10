import React, { Component } from 'react';
import SongList from '@/components/song-list/song-list'
import { List, ActionSheet} from 'antd-mobile'
import GoBack from '@/components/goback/goback'
import './singer-info.css'
const Item = List.Item;

class SingerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  singerDetail = () => {
    const BUTTONS = [<div id="abc">{this.props.info.intro}</div>];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      message: this.props.info.singername
    })

    // 数据更新后，设置css样式
    this.setState({},() => {
      let abc = document.getElementById('abc');
      abc.parentNode.style.cssText = 'padding:0px 15px;min-height:300px;line-height: 24px;'
      abc.parentNode.parentNode.style.overflowY = 'scroll';
    })

  }
  render() {
    let { data,info } = this.props;
    return ( 
      <div className="singer-info">
        <GoBack className="singer-info-nav" title={info.singername}/>
        <img width='100%' src={info.imgurl.replace(/{size}/, 400)} alt={1} />
        <List className="my-list">
          <Item extra="歌手详情" arrow="down" onClick={this.singerDetail}>
            {info.intro}
          </Item>
        </List>
        <SongList data={data} />
      </div>
    )
  }
}
 
export default SingerInfo;