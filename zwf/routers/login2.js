//创建空路由器
const express=require('express');
const pool=require('../pool.js');
//引入连接池
var router=express.Router();
//1.用户注册
router.get('/',(req,res)=>{
    //获取post请求的数据
        //console.log(1111)
   var $uname=req.query.uname;
  if(!$uname){
    res.send("用户名不能为空");
    return;
  }
  var sql="select * from zwf_login where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if (err)  throw err;
    //res.send(result)
   //console.log(result)
    if(result.length>0){res.send("1")}
    else{res.send("0")} 
  })
});
module.exports=router;
