//引入mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.ajaxDemo
/*router.get('/ajaxDemo',(req,res)=>{
	res.send("这是我的第一个ajax");
})
router.get('/login',(req,res)=>{
	var obj=req.query;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send('用户名为空');
		return;
	}
	if(!$upwd){
		res.send('密码为空')	
		return;
	}
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
	
		if(result.length>0){
			res.send("登录成功");
		}else{
		
			res.send("用户密码错误");
		}
	
	})

/*pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',
	[$uname,$upwd],(err,result)=>{
	if(err) throw err;
	//如果大于0，说明查询到数据，有这个用户登录成功
	if(result.length>0){
		res.send({code:200,msg:'login sunc'});
	}else{
		res.send({code:301,msg:'login err'});
	}
});
	//执行SQL语句，查看是否登录成功（使用用户名和密码
	//两个条件能查询到数据）
}); */
router.get('/userlist',(req,res)=>{
	//res.send('今天的作业');
	var sql="select * from xz_user";
pool.query(sql,(err,result)=>{
    if(result.length>0){
		res.send("响应成功");
		
	}else{
		console.log(result); 
		res.send("响应失败");
	}
});
});
/*router.get('/userlist',(req,res)=>{
	req.query;
});*/

module.exports=router;