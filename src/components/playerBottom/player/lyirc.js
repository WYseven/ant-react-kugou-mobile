import React, { Component } from 'react'
import BScroll from 'better-scroll'

import { parseLyric } from '../../../utils/utils'

export default class Lyrcc extends Component {
  static defaultProps = {
    rcString: '暂无歌词'
  }
  constructor(props) {
    super(props);
    this.index = 0;
    this.area = React.createRef();
    this.oldString = '';
    this.rcHtml = '';
    this.rcArr = [];
    this.middle = 0;
    this.onPHeight = 0;
    this.isMove = this.props.lyMove;
  }
  componentDidMount(){
    this.scroll = new BScroll(this.area.current, {
      scrollY: true
    });
    let clientHeight = this.area.current.clientHeight;
    this.onPHeight = this.area.current.getElementsByTagName('p')[0].offsetHeight;
    this.middle = Math.floor((clientHeight / this.onPHeight)/2)-1;

    this.scroll.on('beforeScrollStart', () => {
      clearTimeout(this.timer);
      this.props.changelyMove(true)
    })
    this.scroll.on('scrollEnd', () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.props.changelyMove(false)
      }, 2000);
    })
    
  }
  componentWillReceiveProps(nextProps){
    if (this.rcArr && !nextProps.lyMove ){
      let index = this.rcArr.findIndex(item => item[0] > nextProps.currentTime) - 1;
      // 直接到最后了，拿到最后一位
      if (index === -2){
        this.index = this.rcArr.length - 1;
      }else{
        this.index = index < 0 ? 0 : index;
      }
      let n = this.index - this.middle < 0 ? 0 : this.index - this.middle;
      this.scroll.scrollTo(0, -n * this.onPHeight)
    }
  }
  render() {
    let { rcString } = this.props;
    if (rcString !== this.oldString){
      this.oldString = rcString;
      this.rcArr = parseLyric(rcString);
    }
    
    return (
      <div className="m-lyric-area" ref={this.area}>
        <div className="m-lyric" ref={(lyric) => { this.lyric = lyric}}>
          {
            !this.rcArr ? <p>暂无歌词</p> :
            this.rcArr.map((item,i) => {
              return <p key={item[0]} className={this.index === i ? 'bg' : ''}
                >{item[1]}</p>
            })
          }
        </div>
      </div>
    )
  }
}
