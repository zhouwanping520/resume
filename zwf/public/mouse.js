//头部隐藏div
var index=document.getElementById("index");
var indexone=document.getElementById("indexone");
		index.onmouseover=function(){
			indexone.style.display="block";
		}
		indexone.addEventListener("mouseleave",function(){
				indexone.style.display="none";
   },false)
   		//中间小图闪烁
		var time=setInterval(function(){
			var $btn=$(".sbj_smallp2>ul>li>a>img");
						$btn.fadeOut().fadeIn()			
				},1000);
				//中间小图闪烁
			  /*周期性定时器*/
	  //1定义任务函数
	 function task(){
	  //查找class为show的当前img
	  var img=document.getElementsByClassName("show")[0];
	//将当前img的class清除
	  img.className=""
	//如果当前img有下一个元素
	if(img.nextElementSibling!==null)
	//才设置当前img的下一个兄弟的class为show
	img.nextElementSibling.className="show"
	//设置当前的父元素的第一个孩子的class为show
	else
	img.parentNode.children[0].className="show"
	  }
	//启用定时器
	var n=setInterval(task,3000);
	//查找id为slider的div容器元素
	var div=document.getElementById("slider")
	//当鼠标进入div时
	//停止定时器
	div.onmouseover=function(){
	  clearInterval(n)
	}
	//当鼠标移出定时器
	//启动定时器
	div.onmouseout=function(){
	  n=setInterval(task,3000)
	}
	