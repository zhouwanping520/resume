//引入mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
	//获取post请求的数据
	var obj=req.body;
	//判断用户名是否为空
	var $uname=obj.uname;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	var $email=obj.email
	if(!$email){
		res.send({code:403,msg:'email required'});
		return;
	}
	var $phone=obj.phone
	if(!$phone){
		res.send({code:404,msg:'phone required'});
		return;
	}
	//执行SQL语句，将注册的数据插入到xz_user数据表中，
	//成功响应{code:200,msg:'register suc'}
	//res.send('注册成功');
	pool.query('INSERT INTO xz_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'register suc'});
		}
	});
});
/*2.用户登录路由
url:/login method:post
创建路由，获取请求的数据，验证是否为空
401 'uname require'
402 'upwd require'
//导出路由器*/
router.post('/login',(req,res)=>{
	var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!$upwd){
		res.send({code:402,msg:'upwd required'})	
		return;
	}
pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',
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
});
//3.用户检索
router.get('/detail',(req,res)=>{
	//获取get请求的数据
	var obj=req.query;
	//console.log(obj);
	//判断是否为空
	var $uid=obj.uid;
	if(!$uid){
		res.send({code:401,msg:'uid required'});
		return;
	};
	pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],(err,result)=>{
		if(err) throw err;
		//如何判断是否检索到了用户
		//判断结果（数组）长度是否大于0
		if(result.length>0){
			res.send(result);
		}else{
			res.send({code:301,msg:'detail err'});
		}
	});
});
//用户修改
router.post('/update',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	var $uid=obj.uid;
	var $email=obj.email;
	var $phone=obj.phone;
	var $gender=obj.gender;
	var $user_name=obj.user_name;
	if(!$uid){
		res.send({code:401,msg:'uname required'});
	}
	if(!$email){
		res.send({code:402,msg:'uname required'});
	}
	if(!$phone){
		res.send({code:403,msg:'uname required'});
	};
	if(!$gender){
		res.send({code:404,msg:'uname required'});
	};
	if(!$user_name){
		res.send({code:405,msg:'uname required'});
	};
	//执行SQL语句
pool.query('UPDATE xz_user SET email=?,phone=?gender=?user_name=? WHERE uid=?',
	[$email,$phone,$gender,$user_name,$uid],(err,result)=>{
	if(err) throw err;
	//console.log(result);
	if(result.affectedRows>0){
		res.send({code:200,msg:'update suc'});
	}else{
		res.send({code:301,msg:'update err'});
	}
	});
})
//用户列表
router.get('/list',(req,res)=>{
	var obj=req.query;
	//console.log(obj);
	//将数据转为数值型
	var $pno=parseInt(obj.pno);
	var $count=parseInt(obj.count);
	//如果页码和每页数量为空，设置默认值
	if(!$pno){
		$pno=1;
	}
	if(!$count){
	//如果每页的数量为空，默认显示3条记录
		$count=3;
	}
   //计算开始查询的值
   var start=($pno-1)*$count;
   //执行SQL语句，返回商品列表数据
   pool.query('SELECT * FROM xz_user LIMIT ?,?',[start,$count],
	   (err,result)=>{
		if(err) throw err;
		res.send(result);
   });
});
//用户删除
router.get('/delete',(req,res)=>{
	var obj=req.query;
	//console.log(obj);
	if(!obj){
	res.send({code:401,msg:'delete required'});
	return;
	};
	pool.query('DELETE FROM xz_user WHERE ?',[obj.uid],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send({code:200,msg:'删除成功'});
		}else{
			res.send({code:401,msg:'档案不存在'});
		}
	});
});
module.exports=router;