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

项目功能：
- [x] 新歌
- [x] 排行
- [x] 歌单
- [x] 歌手
- [ ] 搜索页
- [ ] 排行歌单进入页面
- [ ] 歌单部分进入页面
- [ ] 歌手页面
- [ ] 歌手歌曲页面
- [ ] 播放器页面

后续代码持续更新中。。。


