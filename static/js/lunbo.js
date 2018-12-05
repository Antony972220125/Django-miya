		$(function(){
				//搜索 获得焦点显示，失去焦点隐藏
				
				
				$(".in").focus(function(){
					
					$(".lenovoWord").show();
					$(".lenovoWord a").mouseenter(function(){
						var index = $(this).index()
						$(".lenovoWord a").eq(index).css({"background":"#f7f7f7"})
					})
					$(".lenovoWord a").mouseleave(function(){
						
						$(".lenovoWord a").css({"background":"white"})
					})
					
				}).blur(function(){
					$(".lenovoWord").hide();
					
				})
				
				//购物车显示隐藏
				$("#carbox").hover(function(){
					$("#shopingcar").css({display:"block"});
					$("#cara").css({"height":"35",border:" 1px solid #fa4b9b","border-bottom":"1px solid white"})
					$("#spancar").find("img").attr("src","images/shopcar.jpg");
					$("#spancar").css({"background":"white"});
					$("#cara").find("strong").css("display","block");
				},function(){
					$("#shopingcar").css({display:"none"});
					$("#cara").css({"height":"32",border:" 1px solid #e5e5e5"});
					$("#spancar").find("img").attr("src","images/shoping.jpg");
					$("#spancar").css({"background":"#ff3893"});
					$("#cara").find("strong").css("display","none");
				});
				
				//1、获取数据
				$.get("json/luobo.json",function(a){
				var data = a.lunbo
					//console.log(data);
					//2、显示数据到页面上
					//便利data数组，将每个图片显示在页面上
					for(var i=0; i<data.length;i++){
						//console.log(data.length)
						var obj = data[i];
						var img = obj.img; //img
						var id = obj.id;   //id
					
						//将创建的节点添加到页面上
						$("#list").append("<li><img src="+ img +" /></li>") 
						$("#list2").append("<li></li>");
						
						//初始化把第一个li的样式变成选中状态
						if(i == 0){
							$("#list2 li").addClass("active");
						}						
					}
					//开启自动轮播
					lunbo()
					
				})
				
				//2、显示数据到页面上
				
				//轮播图
				function lunbo(){
					//
					var _list1 = $("#list");
					var _list2 = $("#list2");
					var _li1 = $("#list li");
					var _li2 = $("#list2 li");
					
					//复制第一张图到最后
					_li1.first().clone().appendTo(_list1);
					
					var size =$ ("#list li").length;
					//console.log(size)
					
					var i = 0; //即将显示的图片的下标
					
					//开启定时器，自动轮播
					var timer = setInterval(function(){
						i++;
						move();
					},3000);
					
					//移动
					function move(){
						
						//如果超出左边界
						if(i<0){
							_list1.css("left",-(size-1)*1300) //i=4 的图片
							i=size-2; //即将移动到第四张图（i=3的图）
						}
						
						//如果超出右边界
						if(i>=size){
							_list1.css("left",0);//瞬间移动到第一张图（非动画的方式）
							i=1; //即将移动到下一张图（i=1的图）
						}
						//动画移动
						_list1.stop().animate({left: -i*1300},500);
						
						//更改按钮的选中状态
						_li2.removeClass().eq(i).addClass("active");
						if(i == size-1){
							_li2.removeClass().eq(0).addClass("active")
						}
						
					}

					//上一页
					$("#left").click(function(){
						i--;
						move();
					})
					
					//下一页
					$("#right").click(function(){
						i++;
						move();
					})

					//按钮的移入事件
					_li2.click(function(){
						
						i = $(this).index();
						move();
					})
					
					$("#box").hover(
						function(){//mouseenter
							clearInterval(timer)
						
						},
						function(){//mouseleave
							clearInterval(timer)						
							timer = setInterval(function(){
								i++;
								move();
							},3000)
						
					})
				}
				
				
			//======正品保证==========================	
			var $uli = $(".fys")
			
			$uli.mouseenter(function(){
				$(".list").css({"display":"block"});
			})
			$uli.mouseleave(function(){
				$(".list").css({"display":"none"});
			})
			
			$(".list>span").mouseenter(function(){
				console.log(12)
				$(".list").css({"display":"block"});
				$(this).css({"background":"#ec0971"})
				
			}).mouseleave(function(){
				$(".list").css({"display":"none"});
				$(this).css({"background":""})
				
			})
			
			//=======商品分类=========================================
			var  $dl= $("dl");
			
			//console.log($dl.length)
			//鼠标移入
			$dl.mouseenter(function(){
				var index = $(this).index();
//				var height = $("dd").eq(index-1).offset().height();
//				console.log(height)
				//console.log(index)
				if(index==5){
					$("dd").eq(4).css({
					top:281
					})
				}
				
				$("dd").eq(index-1).css({
					
					"display":"block",
					"borderLeft":"none",
					top:(index-1)*74,
										
				});
				
				$("dl").eq(index-1).css({"background":"white","border":"none"})
				$("dl span").eq(index-1).hide()
				$(".dls span").first().css({
				
					top:(index-1)*74,
					"display":"block"
				})
				
			})
			//鼠标移出
			$dl.mouseleave(function(){
				var index = $(this).index();
				$("dd").eq(index-1).css({
					
					"display":"none",
					"borderLeft":"none"
					
				});
				$("dl span").eq(index-1).show()
				$("dl").eq(index-1).css({"background":""})
				$(".dls span").first().css({
				
					"display":"none"
				})
				
			})
			
			//==二维码===============================
			var $ewm = $(".ewm");
			$(window).scroll(function(){
				
				var current = $(this).scrollTop()
				if(current>=150){
					$ewm.show();
					
				}else{
					$ewm.hide();
				}
			})
			
			
			//===右边=======================================
					//左右两边图片固定
			$(window).scroll(function(){
				// var scrollt=$(document).scrollTop();
				// var navTop=$("#nav").offset().top;
				// var headTop=$("#header").offset().top;
				var current = $(this).scrollTop()
				if(current>=150){
//					$("#leftApp").css("display","block");
					$("#rightlist").css("display","block");
				}else{
//					$("#leftApp").css("display","none");
					$("#rightlist").css("display","none");
				}
				$("#sideTop").click(function(){
					$("html,body").stop().animate({scrollTop:0},1000);
				});
			});
			//点击购物车图，跳转购物车页面
			$(".lione").click(function(){
				//location.href="shoppingCart.html";
				open("shoppingCart.html");
			})
		
			//li中移入移出效果
			$("#lilianxi").hover(function(){
				$("#lianxi").css("display","block");
				$("#lianxi").stop().animate({marginLeft:-160},600);
			},function(){
				$("#lianxi").css("display","none");
				$("#lianxi").stop().animate({marginLeft:-210},600);
		
			});
			$("#ligzh").hover(function(){
				$("#gzh").css("display","block");
				$("#gzh").stop().animate({marginLeft:-160},600);
			},function(){
				$("#gzh").css("display","none");
				$("#gzh").stop().animate({marginLeft:-210},600);
			});

			
			//==========json依据ID寻找商品详情===================================
			$.get("json/xiangqing.json",function(data){				
				for(var i=0;i<data.length;i++){
					var obj=data[i];
					var id=obj.id;
					var a = $("<div class='gds-img'><img src="+obj.img+"/></div>");
					$(".layout").eq(i).find("a").append(a);
					var b = $("<p class='tite'>"+obj.a1+"</p>");
					$(".layout").eq(i).find("a").append(b);
					var c = $("<span class='news'>"+obj.item_price+"</span>");
					$(".layout").eq(i).find("a").append(c);
					var d = $("<span class='old'>"+obj.yuanjia+"</span>");
					$(".layout").eq(i).find("a").append(d);
					var e = $("<p class='buy'>"+obj.buy+"</p>");
					$(".layout").eq(i).find("a").append(e);
					var f = $("<span class='btn'>"+obj.btn+"</span>");
					$(".layout").eq(i).find("a").append(f);
//						console.log(id)
					$(".layout").eq(i).find("a").attr("href","xiangqing.html?"+id);
				}
				
			
				
				
				
			})
			
			
			
			
			
			
			//=========热门商品推荐详情推荐JSON==========================================
			$.get("json/luobo.json",function(aa){
				
				var data1 = aa.tuijian;
				var id=data1.id;
				for(var i=0;i<data1.length;i++){
					if(id>=6){
					var a = $("<div class='gds-img'><img src="+data1[i].img+"/></div>");
					$(".layout").eq(i).find("a").append(a);
					var b = $("<p class='tite'>"+data1[i].tite+"</p>");
					$(".layout").eq(i).find("a").append(b);
					var c = $("<span class='news'>"+data1[i].news+"</span>");
					$(".layout").eq(i).find("a").append(c);
					var d = $("<span class='old'>"+data1[i].old+"</span>");
					$(".layout").eq(i).find("a").append(d);
					var e = $("<p class='buy'>"+data1[i].buy+"</p>");
					$(".layout").eq(i).find("a").append(e);
					var f = $("<span class='btn'>"+data1[i].btn+"</span>");
					$(".layout").eq(i).find("a").append(f);
					}
				}
			})
			
			
			
			
			
//			//======今日特卖JSON=======================================================
			$.get("json/luobo.json",function(bb){
				var data2 = bb.temai;
				for(var i=0; i<data2.length; i++){
					//添加大图
					var aa = $("<div class='block'><img src="+data2[i].img1+"/></div>")
					$(".block ").find(".beiban").eq(i).append(aa);
					//添加i标签
					$(".block").append($("<i />"));
					
					//添加小图1
					var bb = $("<div class='l'><img class='lazyload' src="+data2[i].img2+"/></div>");
					$(".rank").eq(i).find("a").eq(0).append(bb);
					//添加小图2
					var ff = $("<div class='l'><img class='lazyload' src="+data2[i].img3+"/></div>");
					$(".rank").eq(i).find("a").eq(1).append(ff)
					//添加小图3
					var gg = $("<div class='l'><img class='lazyload' src="+data2[i].img4+"/></div>");
					$(".rank").eq(i).find("a").eq(2).append(gg)
					
					//添加文字说明
					var cc = $("<p class='titt'>"+data2[i].titt1+"</p>");
					$(".rank").eq(i).find("a").eq(0).append(cc);
					
					var ll = $("<p class='titt'>"+data2[i].titt2+"</p>");
					$(".rank").eq(i).find("a").eq(1).append(ll);
					
					var mm = $("<p class='titt'>"+data2[i].titt3+"</p>");
					$(".rank").eq(i).find("a").eq(2).append(mm);
					//最新价格
						//最新价格一
					var dd = $("<span class='new'> ￥<em>"+data2[i].newss1+"</em></span>");
					$(".rank").eq(i).find("a").eq(0).append(dd);
					//console.log(data2[i].newss1)
						//最新价格二				
					var hh = $("<span class='new'> ￥<em>"+data2[i].newss2+"</em></span>");
					$(".rank").eq(i).find("a").eq(1).append(hh);
						//最新价格三				
					var ii = $("<span class='new'> ￥<em>"+data2[i].newss3+"</em></span>");
					$(".rank").eq(i).find("a").eq(2).append(ii);
					
					//老价格
						//老价格一
					var ee = $("<span class='old'>￥<em>"+data2[i].old1+"</em></span>");
					$(".rank").eq(i).find("a").eq(0).append(ee);
						//老价格二						
					var jj = $("<span class='old'>￥<em>"+data2[i].old2+"</em></span>");
					$(".rank").eq(i).find("a").eq(1).append(jj);
						//老价格三						
					var kk = $("<span class='old'>￥<em>"+data2[i].old3+"</em></span>");
					$(".rank").eq(i).find("a").eq(2).append(kk);
				
					
					$(".rank ").eq(i).find(".l").eq(0).append($("<i class='r1'></i>"));
					$(".rank ").eq(i).find(".l").eq(1).append($("<i class='r2'></i>"));
					$(".rank ").eq(i).find(".l").eq(2).append($("<i class='r3'></i>"));

				}
			})
			//========底部二维码====================================
			$(".PubBtnHover").mouseover(function(){
				$(".wxmore").show();
			}).mouseleave(function(){
				$(".wxmore").hide();
			})
			
			
			//登入成功后，用户名显示
	//加载页面判断cookie存不存在，
	if($.cookie("users")){
		var Iname=JSON.parse($.cookie("Iuser"));
	}else{
		return;
	}
	//var Iname=$.cookie("Iuser")?JSON.parse($.cookie("Iuser")):[];
	//var Iname=JSON.parse($.cookie("Iuser"));
	var Iun=Iname.userNmae;
	$("#addname").html(Iun+'用户');
	$(".nihao").css("display","none")
			
		})