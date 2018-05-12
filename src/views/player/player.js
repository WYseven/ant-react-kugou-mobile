import React, { Component } from 'react';
import GoBack from '@/components/goback/goback'
import './player.css'
class Palyer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="player-box">
        <div className='bg-overlay'></div>
        <div className='play-overlay'></div>
        <GoBack title={'搜索'} />
        <div className='panel-play-bd'>
          <div className="panel-play-img-box">
            <img src="http://singerimg.kugou.com/uploadpic/softhead/200/20170515/20170515145015306.jpg" />
          </div>
          <div className="panel-play-lrc-box">
            <div className='panel-play-lrc'>
              <p>发如雪</p>
              <p className="current"> 发如雪222</p>
              <p>发如雪333</p>
              <p>发如雪</p>
              <p>发如雪222</p>
              <p>发如雪333</p>
              <p>发如雪</p>
              <p>发如雪222</p>
              <p>发如雪333</p>
            </div>
          </div>
          <div className="time-wrap" id="timeWrap">
            <div className="timeshow" id="timeshow">00:03</div>
            <div className="progress-wrap" id="progressWrap">
              <div className="progress-bar" id="progressBar">
                <div className="preview-progress" id="previewProgress"></div>
                <div className="progress" id="progress"><span></span></div>
              </div>
            </div>
            <div className="time" id="time">04:25</div>
          </div>
          <div className="play-operate">
            <i className="btn-prev js-btnPrev"></i>
            <i className=" js-btnPlayPause btn-play"></i>	
            <i className="btn-next js-btnNext"></i>
          </div>
        </div>
      </div>
    )
  }
}
 
export default Palyer;