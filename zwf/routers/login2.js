//创建空路由器
const express=require('express');
const pool=require('../pool.js');
//引入连接池
var router=express.Router();
//1.用户注册
router.get('/',(req,res)=>{
    //获取post请求的数据
        //console.log(1111)
   var $phone=req.query.phone;
  var sql="select * from zwf_login where phone=?";
  pool.query(sql,[$phone],(err,result)=>{
    if (err)  throw err;
    //res.send(result)
   //console.log(result)
    if(result.length>0){res.send("1")}
   else{res.send("0")} 
  })
});
module.exports=router;
