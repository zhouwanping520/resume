const express=require("express")
const router=express.Router();
const pool=require("../pool");
//http://localhost:3000/index
//app.use("/index",index)
//   鈫�
//http://localhost:3000/index/
router.get("/",(req,res)=>{
  var sql=`select * from xz_index_product where seq_recommended!=0 order by seq_recommended `;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
   // res.send(result);
   res.writeHead(200,{
      "Access-Control-Allow-Origin":"*"
   });//writeHead在相应过程中只能写一次，在写会冲突报错
   res.write(JSON.stringify(result))
   res.end();
  })
})

module.exports=router;