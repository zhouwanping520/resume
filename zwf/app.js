const express=require('express');
const bodyParser=require('body-parser');
const login=require('./routers/login.js');
const subject=require('./routers/subject.js');
const login2=require('./routers/login2.js')
//创建 web 路由器
var server=express();
server.listen(3000);
//托管静态资源到public目录下
server.use(express.static('public'));
//使用body-parser中间件将post请求数据解析为对象
//注意：一定要写在路由的前边
server.use(bodyParser.urlencoded({
	extended:false
}));
//ajax测试案例挂载
server.use('/login',login);
server.use('/subject',subject);
server.use('/login2',login2);



