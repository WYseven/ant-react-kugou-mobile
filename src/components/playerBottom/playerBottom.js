import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './player.css'

import {connect} from 'react-redux'
import { getSongMp3, getRc } from '../../server/searchMp3'

import Player from './player/player'

import classnames from 'classnames'

class PlayBottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 1,
      currentTime:0,
      isShowPlayer: false,
      index: 0,  // 记录当前播放到哪一首歌曲
      isPlay: true,  // 记录歌曲是否在播放
      rcString: '',
      show: true,
      lyMove: false,
      playInfo: {
        //imgUrl: ''
      }  // 要播放个去的信息
    };

    this.audio = React.createRef();
  }

  changelyMove = (bl) => {
    this.setState({
      lyMove: bl
    })
  }

  getSongInfoMethodByHash =  (hash) => {
    let index = this.props.songList.findIndex(item => item.hash === hash);
    if (hash) {
      getSongMp3({ hash }).then(({ data }) => {
        this.setState({
          playInfo: data,
          index: index,
          isPlay: true
        })
        return data;
      }).then(async (data) => {
        let {data:d} = await getRc({ hash, keyword: data.songName});
        this.setState({
          rcString: d
        })
      })
      
    }
  }

  // 只有外界出给你的props更新了，就会触发，组件内部状态变了，不触发
  componentWillReceiveProps(nextProps) { 
    let { hash } = nextProps;
    this.getSongInfoMethodByHash(hash)
  }

  // 下一首
  nextSong = () => {
    let index = this.state.index;
    index++;
    if(index > this.props.songList.length - 1){
      index = 0;
    }
    // 下一首歌曲的hash
    let hash = this.props.songList[index].hash;
    this.getSongInfoMethodByHash(hash)
  }

  // 上一首
  prevSong = () => {
    let index = this.state.index;
    index--;
    if (index < 0) {
      index = this.props.songList.length - 1;
    }
    // 下一首歌曲的hash
    let hash = this.props.songList[index].hash;
    this.getSongInfoMethodByHash(hash)
  }

  // 播放或暂停
  playOrPause =() => {
    let audio = this.audio.current;
    if (audio.paused){
      audio.play();
    }else{
      audio.pause();
    }

    this.setState({
      isPlay: !this.state.isPlay
    })
  }

  // 音频加载完成
  onLoadedMetadata = () => {
    this.setState({
      duration: this.audio.current.duration
    })
  }

  // 位置发生变化
  ontimeupdate = () => {
    this.setState({
      currentTime: this.audio.current.currentTime
    })
  }

  // 在子级的子级中控制currentTime
  updateCurrentTime = (t) => {
    this.setState({
      currentTime: t,
      lyMove: false
    })
    this.audio.current.currentTime = t;
    // 通知歌词，进行滚动
  }

  toggleShow = (show) => {
    this.setState({
      show
    })
  }

  render() {
    let { playInfo} = this.state;
    return this.props.hash ? ReactDOM.createPortal(
      
      <div className="play-bottom" onClick={() => {
        console.log('冒泡来了')
      }}>
        <audio 
          onLoadedMetadata={this.onLoadedMetadata}
          onTimeUpdate={this.ontimeupdate}
          onEnded={this.nextSong}
          ref={this.audio} 
          autoPlay src={playInfo.url}
        ></audio>
        <div className="play-left" onClick={() => {
          this.setState({
            isShowPlayer: true,
            show: true
          })
        }}>
          <img src={playInfo.imgUrl && playInfo.imgUrl.replace('{size}',240)} alt="" />
            <p>
            <span>{playInfo.songName}</span>
            <span>{playInfo.singerName}</span>
            </p>
        </div>
          <div className="play-right">
            <div className="iconfont  icon-audio_last_step prev-song"
            onClick={this.prevSong}
            ></div>
            <div
            className={classnames({
              iconfont: true,
              'play-song': true,
              'icon-bofang': !this.state.isPlay,
              'icon-zanting': this.state.isPlay
            })}
              onClick={this.playOrPause}
            ></div>
            <div 
              className="iconfont  icon-audio_next_step next-song"
              onClick={this.nextSong}
            ></div>
          </div>
          {
            this.state.isShowPlayer
              ? <Player
                  lyMove={this.state.lyMove}
                  changelyMove={this.changelyMove}
                  playOrPause={this.playOrPause} 
                  isPlay={this.state.isPlay}
                  nextSong={this.nextSong}
                  duration={this.state.duration}
                  currentTime={this.state.currentTime}
                  uodateCurrentTime={this.updateCurrentTime}
                  playInfo={this.state.playInfo}
                  rcString={this.state.rcString}
                  toggleShow={this.toggleShow}
                  show={this.state.show}
                /> 
              : null
          }
          
        </div>
    ,document.body) : null;
  }
}

function mapStateToprops(state) {
  return {
    hash: state.hash,
    songList: state.songList
  }
}

export default connect(mapStateToprops)(PlayBottom);
