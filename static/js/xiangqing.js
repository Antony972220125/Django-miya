$(function(){
	
/*导航栏下列表清单*/
	$(".menu .tit").mouseover(function(){
		$(".menu .dls").css("display","block");
	});
	$(".menu .dls").mouseover(function(){
		$(".menu .dls").css("display","block");
	})
	$(".menu .tit").mouseout(function(){
		$(".menu .dls").css({"display":"none"});
	});
	$(".menu .dls").mouseout(function(){
		$(".menu .dls").css({"display":"none"});
	});
	$(".tit").mouseenter(function () {
		$(".dls").css({display: 'block'})
	});
	$(".tit").mouseleave(function () {
		$(".dls").css({display: 'none'})
	});

	
	/*切换图*/
	function fdj(){
		
	
	var tu=$("#showboxleft-Bot img");
	
	var _showboxleft=$("#showboxleft-Top");//
	
	var _smallImg=$("#smallImg");//小图
	var _bigImg=$("#bigPic");//大图
	
	var _smallArea = $("#smallArea"); //小区域
	var _bigArea = $("#bigArea"); //大区域

 	tu.mouseenter(function(){
 		
		$(this).css({borderColor:"#fa4b9b"}).siblings().css({borderColor:"#f4f4f4"});
		_smallImg.attr("src",$(this).attr('src'));
		$("#selectrightUl a").find("span").css("display","none")
	})
 
	
	/*放大镜*/
	/*_smallImg.hover(function(){
		_bigImg.attr("src",$(this).attr('src'));
		_bigArea.css("display","block");
	},function(){
		_bigArea.css("display","none");
	});
	*/
	
				_smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
				_smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );

				var scale = _bigImg.width() / _smallImg.width();
				//mouseenter
				_showboxleft.mousemove(function(e){
					_smallArea.css({
 						"display":"block"
					})
						_bigArea.show()
					var x = e.pageX - _showboxleft.offset().left - _smallArea.width()/2;
					var y = e.pageY - _showboxleft.offset().top - _smallArea.height()/2; 
					
					if (x <= 0) { //不超出左边
						x = 0;
					}
					else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
						x = _smallImg.width()-_smallArea.width();
					}
					if (y <= 0) { //不超出上边
						y = 0;
					}
					else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
						y = _smallImg.height()-_smallArea.height();
					}
					_smallArea.css({left: x, top: y});
					
					_bigImg.css({
						left: -x*scale, top: -y*scale
					})
				})
				_showboxleft.mouseleave(function(){
					
					_smallArea.css({
 						"display":"none"
 						
					})
					_bigArea.hide()
				})
				/*<!--小图选择-->*/
	$("#selectrightUl a").hover(function(){
		$(this).css({borderColor:"#fa4b9b"}).parent().siblings().find("a").css({borderColor:"#b5b5b5"});
	});
	$("#selectrightUl a").click(function(){
		$(this).find("span").css({"display":"block"}).parent().parent().siblings().find("a span").css("display","none");
		//$(this).find("img").css({border:"1px solid #fa4b9b"}).parent().siblings().find("a").css({borderColor:"#b5b5b5"});
		_smallImg.attr("src",$(this).find("img").attr('src'))
		
	});
	}
	
//=============================================================	
	if(location.search){
		var id=location.search.replace("?","");	
	}
//	===========商品详情json输入===========
	$.get("json/xiangqing.json",function(data){
//		console.log("aaa");
		for(var i=0; i<data.length; i++){
			var obj = data[i];
			if(id==obj.id){
				
				$("<img src="+obj.images[0]+" id='smallImg' class='img'/>").appendTo($("#showboxleft-Top"));
				$("<img src="+obj.images[1]+" id='bigPic' />").appendTo($("#bigArea"));
				$("<img src="+obj.images[2]+" />").appendTo($("#showboxleft-Bot"));
				$("<img src="+obj.images[3]+" />").appendTo($("#showboxleft-Bot"));
				$("<a href='#3'>"+obj.a+"</a>").appendTo($(".pone"));
				$("<span >"+obj.a1+"</span>").appendTo($(".pone"));

				$(".pone").after($("<span class='erweima' id='erweima'>"+""+"</span>"));
				$("<span class='fenxiang' id='fengxiang'>"+obj.fenxiang+"</span>").appendTo($(".showbox-Right"));
				$("#erweima").after($("<p class='ptwo'>"+obj.ptwo+"</p>"));
				$(".pbox_price").prepend($("<span class='yahei'>"+obj.yahei+"</span>"));
				
				$("<i class='pbox_yen'>¥</i><em id='item_price'>"+obj.item_price+"</em>").appendTo($(".pbox_price"));
				$("<span>¥</span><del id='mprice' class='yuanjia'>"+obj.yuanjia+"</del>").appendTo($(".pbox_market"));
				$(".markwarp").prepend($("<dt class='youhuiLeft' style='float:left;'>"+obj.youhuiLeft+"</dt>"));
				$("<dt class='youhuiRight' style='float:left;'>").appendTo($(".youhui"));
				$("<i class='manjian'>"+obj.manjian+"</i><span>"+obj.wushi+"</span>").appendTo($(".markwarp"));
				$(".selectRight").prepend($("<dt class='selectLeft'>"+obj.selectLeft+"</dt>"));
				
				for(var j=0;j<obj.tittle.length;j++){
				$("#selectrightUl").append("<li><a href='#' title="+obj.tittle[j]+"><img src="+obj.imag[j]+" class='f1'/><span class='gou2'></span></a></li>");
					
				}

				
				
				
			}
			
//			var a = $("<div class='showbox-Left'><img src="+data[i].images+"/></div>")
//			$(".showBox").append(a)
		}
		fdj();
	})
	
	
//	======商品详情输入结束=============================
	/*<!--二维码显示-->*/
	$("#erweima").click(function(){
		$("#showerweima").css("display","block");
	});
	$("#close").click(function(){
		$("#showerweima").css("display","none");
	});
	/*<!--分享显示-->*/
	$("#erweima").hover(function(){
		$("#fengxiang").css("display","block");
		$("#erweima").css("opacity","0.5");
	},function(){
		$("#fengxiang").css("display","none");
		$("#erweima").css("opacity","1");
	});
	
	
	$("#count").val('1');
	/*数量点一次加1*/
	$("#add").click(function(){
		var num=$("#count").val();
		var a= Number(num);
		$("#count").val(a+1);
		//当	#count大于1时，#subtract的span的背景图中间为亮	
		 if(Number($("#count").val())>1){
			$("#subtract").removeClass().addClass('bj');
		}
		
	});
	/*数量点一次减1*/
	$("#subtract").click(function(){
		if($("#count").val()>=2){
			var num=$("#count").val();
			var a= Number(num);
			$("#count").val(a-1);
			//当#count为1时，#subtract的span背景图中间为暗
			if(Number($("#count").val())===1){
				$("#subtract").removeClass().addClass('jian');
			}
		}
		else{
			$("#count").val("1")
		}
	});
	
	
	$("#join").click(addToCart);

	//cookie购物车
	function addToCart(){
	
	//获取商品信息
		//获取图片
		var a=$(this).parent().parent().parent().siblings().first().children().html();
		//console.log(this)
		//console.log(a)
		//获取图片路径
		
		var s=$(this).parent().parent().parent().siblings().first().children().find("#smallImg").attr('src');
		//获取价格
		var b=$(this).parent().parent().parent().parent().find("#item_price").html();
		//console.log(b)
		//console.log(b)
		//获取物品详情
		var d=$(this).parent().parent().parent().parent().find(".pone").find("span").html();
		//console.log(d)
		//获取物品数量,并转换为数字类型
		var n=$(this).parent().parent().parent().find("#count").val()-0;
		//console.log(n)
		//判断是否为空
		var goodlist=$.cookie("cart")?JSON.parse($.cookie("cart")):[];
	
		var be=0;
		
		var isExist=false;
		for(var i=0; i<goodlist.length; i++){
			var carid=goodlist[i].pritue;
			//console.log(carid);
			if (a == carid) {
				//console.log(goodlist[i].num);
				//存在相同的商品, 则把num++
				be= goodlist[i].num++;
				goodlist[i].num=Number(be+n);
				isExist = true; //表示存在
			}
		}
		
		//创建一个对象来存储商品。
		if(!isExist){
			var goods = {
				pritue:a,
				name:d,
				price:b,
				num:n,
				luj:s
			}
			goodlist.push(goods);
		}
		
		//创建cookice来储存数据。
		$.cookie("cart", JSON.stringify(goodlist), {expires:7, path:"/"});
		//console.log( $.cookie("cart") );
	}
	
	
//点击购物车图，跳转购物车页面
/*	$(".lione").click(function(){
		location.href="shoppingCart.html"
	});
*/
//点击加入购物车按钮，购物车相应变化
	var m=0;
	$("#join").click(function(){
		alert("添加成功")
		var n=parseInt($(this).parent().parent().parent().find("#count").val());
		var l=(m+=n);
		$("#shopingcar").html("购物车已加入"+l+"件宝贝");
	});
	
	var x=0;
	$("#join").click(function(){
		var y=parseInt($(this).parent().parent().parent().find("#count").val());
		var l=(x+=y);
		$(".lione1").html(l);
	});
	
	//===商品详情滚动轴========================================
	$(window).scroll(function(){
		var $modulefixed = $(".modulefixed")
		
		var current = $(document).scrollTop()
		console.log(current)
		if( current>=1150){
			 $modulefixed.css({"top":0,"position":"fixed"});
		}else{
			$modulefixed.css({"top":"","position":""});
		}
	})
	//===商品详情=============================================
	

	var li = $(".yahei li");
	li.click(function(){
		//console.log(li.length)
		var index = $(this).index();
		//移除背景色
		li.removeClass("current");
		//添加当前背景色
		$(this).addClass("current");
		//隐藏
		$(this).closest(".left").find(".area").css({"display":"none"});
		//显示当前
		$(".left .area").eq(index).css({"display":"block"});
	})
	
	
	//==点击展开=======================================
	$("#read_more a").click(function(){
	//offset():top和left用的，height和width不用
		if($("#wrap_con").height()>=100){
			$("#wrap_con").css("height","98px");
			$("#read_more a").html("展开")
		}else{
			$("#wrap_con").css("height","122px");
			$("#read_more a").html("隐藏")
		}
		
	})
});
