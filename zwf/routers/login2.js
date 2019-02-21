//创建空路由器
const express=require('express');
const pool=require('../pool.js');
//引入连接池
var router=express.Router();
//1.登录验证
router.get('/',(req,res)=>{
   var $uname=req.query.uname;
  var sql="select * from zwf_login where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if (err)  throw err;
    //res.send(result)
   //console.log(result)
    if(result.length>0){res.send("1")}
   else{res.send("0")} 
  })
});
//用户注册
router.post("/register",(req,res)=>{
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $phone=obj.phone;
    
    var sql="insert into zwf_login values(NULL,?,?,?)"
    pool.query(sql,[$uname,$upwd,$phone],(err,result)=>{
      if(err)  throw  err
        res.send("1")
    })
 })
module.exports=router;
