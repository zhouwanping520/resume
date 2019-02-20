const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
  var output={
    product:{/*title,subtitle,..*/},
    pics:[/*{sm,md,lg},{sm,md,lg},...*/],
    specs:[/*{lid,spec},{lid,spec},...*/]
  }
  res.writeHead(200,{
    "Access-Control-Allow-Origin":"*"
  });
  var lid=req.query.lid;
  console.log(lid);
  if(lid!==undefined){
    var sql="select * from xz_laptop where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err) console.log(err);
      if(result.length!=0){
        //result:[{product}]
        output.product=result[0];
        console.log(output.product);
        var sql="select * from xz_laptop_pic where laptop_id=?";
        pool.query(sql,[lid],(err,result)=>{
          if(err) console.log(err);
          //result:[{sm,md,lg},{sm,md,lg},...]
          output.pics=result;
          var family_id=output.product["family_id"];
          var sql="select lid,spec from xz_laptop where family_id=?";
          pool.query(
            sql,[family_id],(err,result)=>{
              if(err) console.log(err);
              output.specs=result;
              res.write(JSON.stringify(output));
              res.end();
            }
          )
        })
      }else{
        res.write(JSON.stringify(output));
        res.end();
      }
    });
    
  }else{
    res.write(JSON.stringify(output));
    res.end();
  }
})

module.exports=router;