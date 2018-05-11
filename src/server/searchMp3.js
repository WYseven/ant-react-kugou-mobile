import axios from 'axios'

let newRequset = axios.create({
  responseType: 'json'
})
// http://www.kugou.com/yy/index.php?r=play/getdata&hash=57B83EAF673D77EE21009CBD8FD05BD6&album_id=8542768&_=1526050598106
// http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=9E8CE7AC9F2E4514BFB65E9C0BAE8782&from=mkugou
// 获取banner和新歌
export const getSongMp3 = ({hash=''}) => {
  return newRequset('/proxy/app/i/getSongInfo.php',{
    params:{
      cmd:'playInfo',
      hash: hash,
      from:'mkugou'
    }
  })
}




