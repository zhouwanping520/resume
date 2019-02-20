$(function(){//仅DOM内容加载后就提前执行
    $.ajax({
      url:"http://localhost:3000/subject",
      type:"get",
      dataType:"json",//自动JSON.parse()
      //提前给success赋值一个回调函数
      //在请求成功后自动执行
      //参数data可自动获得服务端返回的数据
      success:function(data){
        //data形参接住了ajax抛出的服务端返回的数据对象
        //获得第一个商品对象
        var p=data;
        //复制页面上第一个商品卡片的HTML片段，并用模板字符串，填充其中动态生成的部分
        var html=`
                <img src=${p[0].pic} class="show" id="showBig">
				<img src=${p[1].pic}>
				<img src=${p[2].pic}>
				<img src=${p[3].pic}>
                <img src=${p[4].pic}>`;
        //将片段填充回页面中原父元素内: 
        var div=document.querySelector("#slider");
        //console.log(div);
        div.innerHTML=html;
        
        
    //jquery 3.2.1
    /*.then(function(data){
      
    })*/
  }
})
});

