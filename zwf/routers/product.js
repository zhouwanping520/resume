//创建空路由器
const express=require('express');
const pool=require('../pool.js');
//引入连接池
var router=express.Router();
//商品列表
router.get('/list',(req,res)=>{
	var obj=req.query;
	//console.log(obj);
	var $pno=parseInt(obj.pno);
	var $count=parseInt(obj.count);
	if(!$pno) $pno=1;
	if(!$count) $count=10;
	console.log($pno,$count);
	var start=($pno-1)*$count;
	pool.query('SELECT * FROM xz_laptop LIMIT ?,?',[start,$count],
		(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//商品详情
router.get('/dateil',(req,res)=>{
	var obj=req.query;
	var $lid=obj.lid;
	pool.query('SELECT * FROM xz_laptop WHERE lid=?',
		[$lid],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('输入错误，请重新输入');
		}
	})
});
//商品删除
router.get('/delete',(req,res)=>{
	var obj=req.query;
	//这一步为验证是否为空.
	var $lid=obj.lid;
	if(!$lid){
		res.send('所选内容不存在');
		return;
	};
	pool.query('DELETE FROM xz_laptop WHERE lid=?',[$lid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send('删除成功');
		}else{
			res.send('请重新输入');
		};
	});
});
//商品添加
router.post('/add',(req,res)=>{
	var obj=req.body;
	//console.log(obj);
	//遍历对象的属性
	var $code=400;
	for(var key in obj){
		$code++;
	//console.log(key+'----'+obj[key]);
	//判断属性值是否为空
	if(!obj[key]){
		res.send({code:$code,msg:key+'require'});	
		return;
	};
	};
	pool.query('INSERT INTO xz_laptop SET ?',[obj],
		(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('写入成功');
		}else{
			res.send('请重新输入');
		};
	});
});
//修改商品列表
router.post('/update',(req,res)=>{
	var obj=req.body;
	for(var key in obj){
	if(!obj) res.send('数据不存在');
	//return;
	};
pool.query('UPDATE xz_laptop SET ? WHERE lid=?',[obj,obj.lid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('更新成功');
		}else{
			res.send('输入错误，请重新输入');
		};
});
	
});
//导出路由器
module.exports=router;

//在app.js服务器文件中挂载到/product