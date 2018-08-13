
// 格式化对象为&连接
export function formatObjectToString(obj) {
  return Object.keys(obj).map((item) => {
    return item + '=' + obj[item]
  }).join('&')
}

// 格式化queryString为对象
export function formatStringToObject(query) {
  let index = query.indexOf('?') === -1 ? 0 : 1
  return query.slice(index).split('&').reduce((o, item) => {
    let arr = item.split('=')
    o[arr[0]] = arr[1]
    return o
  }, {})
}
export function addZero(n) {
  return n < 10 ? '0' + n : n;
}
// 秒转成分钟
export function sToM(d) {
  var m = addZero(parseInt(d / 60));
  var s = addZero(parseInt(d % 60));
  return m + ":" + s;
}

// 解析歌词
export function parseLyric(text) {
  if(text.trim() === '') return [];
  //将文本分隔成一行一行，存入数组
  var lines = text.split('\n'),
    //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
    pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
    //保存最终结果的数组
    result = [];
  //去掉不含时间的行

  lines = lines.map(item => item.trim()).filter(item => item);
  //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
  lines[lines.length - 1].length === 0 && lines.pop();
  lines.forEach(function (v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
    //提取出时间[xx:xx.xx]
    var time = v.match(pattern),
      //提取歌词
      value = v.replace(pattern, '');
    //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
    time.forEach(function (v1, i1, a1) {
      //去掉时间里的中括号得到xx:xx.xx
      var t = v1.slice(1, -1).split(':');
      //将结果压入最终数组
      if (value) {
        result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
      }

    });
  });
  //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
  result.sort(function (a, b) {
    return a[0] - b[0];
  });
  return result;
}