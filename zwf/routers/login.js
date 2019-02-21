//创建空路由器
const express=require('express');
const pool=require('../pool.js');
//引入连接池
var router=express.Router();
//1.用户注册
router.post('/log',(req,res)=>{
    //获取post请求的数据
        //console.log(1111)
   var $uname=req.body.inputUser;
	//执行SQL语句，将注册的数据插入到xz_user数据表中，
	//成功响应{code:200,msg:'register suc'}
    //res.send('注册成功');

  var sql="select * from zwf_login where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if (err)  throw err;
   // res.send(result)
    if(result.length>0){res.send("1")}
    else{res.send("0")} 
  })
});
module.exports=router;