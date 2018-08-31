# ant-react-kugou-mobile

> 一个音乐站

## 启动项目

- 克隆项目到本地

> git clone git@github.com:WYseven/ant-react-kugou-mobile.git

> cd ant-react-kugou-mobile

- 使用命令启动项目：

> npm start

之后在浏览器打开 **http://localhost:8080/** 预览。


## 数据来源
参考音乐站为酷狗音乐：[http://m.kugou.com/](http://m.kugou.com/)
数据来源为酷狗音乐站，访问的酷狗网站，在地址后面写上queryString为 **json=true** 即可拿到数据，例如新歌数据：
> http://m.kugou.com?json=true

点击访问[http://m.kugou.com?json=true](http://m.kugou.com?json=true)

## 设置代理
但在本地开发环境直接访问酷狗接口会出现跨域访问题，所以需要在**package.json**中设置代理：
```
proxyTable: {
      "/proxy/": { 
        target: "http://m.kugou.com",
        "secure": false, // 使用的是http协议，如果是https协议设置为true
        "changeOrigin": true, // 允许跨域
        "pathRewrite": { // 路径改写规则
          "^/proxy": ""
        },
        "headers": { // 伪造用户代理信息访问酷狗手机端
          "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
        }
```
以上的规则为当在发送请求时，地址写上 **/proxy/plist/index** 时候，会匹配到以上设置的代理规则，会被代理到 **target: "http://m.kugou.com"** 访问，在 **pathRewrite**设置了 ** "^/proxy": "" ** 为空，就意味着访问的地址为 ** http://localhost:8080/proxy/plist/index** 时，代理访问的真实地址为
**http://m.kugou.com/plist/index**

## 项目功能：

- [x] 新歌
- [x] 排行
- [x] 歌单
- [x] 歌手
- [x] 歌手页面
- [x] 歌手歌曲页面
- [x] 播放器页面
- [ ] 搜索页
- [ ] 排行歌单进入页面
- [ ] 歌单部分进入页面

## 开发遇到问题

### 1. 组件销毁调用 **setState** 问题

当从一个导航路径切换到另一个导航路径时，路径对应的组件会被销毁。例如：从 **/rank** 切换到 **/plist** 上时，**/rank** 对应的组件 **Rank** 组件会被销毁， **/plist** 对应的组件 **Plist** 会被创建。如果在组件 **Rank** 中有 **ajax** 请求，当 **ajax** 请求还没有完成，就被切换到了 **/plist** 上，此时 **Rank** 组件被销毁，销毁后 **ajax** 请求返回数据，在销毁的组件 **Rank** 中调用 **setState** 更新数据，此时会报错。

**/rank** 组件：
```
class Rank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // 一旦切换路径后，此组件被销毁，ajax请求数据后，调用setState会报错
    getRankData().then((data) => {
      this.setState({
        data: data
      })
    })
  }
  render() {
    return (
      <div>
        渲染data数据。。。。
      </div>
    )
  }
}
```
调用销毁后组件的 **setState**，报错信息为：
> Warning: Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.  

以上错误信息大致意思：
> 警告：在一个已经卸载组件中不能调用setState或forceUpdate。若要修复，在componentWillUnmount方法中取消订阅和异步任务

以上解决方案：

```
componentWillUnmount() {
  // 取消ajax请求
  // 这里为伪代码，具体参考项目中的取消方式
  ajax.cancel();
}
```

但上面取消 **ajax** 请求的行为后，**还会报错！还会报错！还会报错！** 为什么呢？

时机！

在卸载组件时候调用了 componentWillUnmount 方法，里面取消了 ajax 请求，此时是在请求没有回来时候取消的，ajax 被取消后，状态变成了 rejected，不会再调用 then 方法的成功状态函数，自然不会调用 setState 方法。

如果在 ajax请求成功回来了后，那么一瞬间切换导航，销毁了组件，then 方法的成功状态函数还会触发，还会调用 setState 方法，依然会出现上述的错误。

所以时机非常重要，是在异步完成之前取消请求就没有问题，异步完成之后取消请求变得没有意义。

继续改进，思路很简单，设置是否要卸载的状态，如果卸载了就把状态设置为true，在异步回来之后判断是否已经卸载。

```
constructor(props) {
  ...
  this.isUnmount = false; // 默认不是卸载状态
}

componentWillUnmount(){
  ajax.cancel();  // 取消也加上，切换了组件，就没有必要发送ajax了
  this.isUnmount = true; // 默认不是卸载状态
}

componentDidMount() {
    
    getRankData().then((data) => {
      // 如果没有卸载，则继续调用setState更新数据
      if(!this.isUnmount){
        this.setState({
          data: data
        })
      }
    })
  }

```

