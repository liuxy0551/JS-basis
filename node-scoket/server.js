// 引入 http 模块
let http = require('http')

// 引入文件系统模块
let fs = require('fs')

// 引入 socket 模块
let ws = require('socket.io')

// 创建一个 web 服务器实例
let server = http.createServer((req, res) => {

  // 读取 html 文件
  let html = fs.readFileSync('./client.html')

  // 设置发送头信息
  res.setHeader('Content-type', 'text/html')
  res.end(html)
})

// 新建 io 实例，挂载到 web 服务器中
let io = ws(server)

// 监听客户端连接
io.on('connection', socket => {

  console.log('用户连接到聊天室')

  // 监听到消息接收
  socket.on('message', msg => {
    // 向所有的客户端广播消息
    console.log(msg)
    io.emit('message', msg)
  })
})

// 监听 3000 端口
server.listen('3000')
