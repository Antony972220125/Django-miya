$(function(){
	//将主页的cookice值写入到页面。
	//显示购物车信息
		if($.cookie("cart")){
			//当cookie存在时，购物车页面的提示信息隐藏
			$(".empty").css("display","none");

			//当cookie存在时，结算提示显示
			$(".money").css("display","block");

			var goodlist = JSON.parse( $.cookie("cart") );
		}else{
			//当cookie不存在时，购物车页面的提示信息显示
			$(".empty").css("display","block");

			//当cookie存在时，结算提示隐藏
			$(".money").css("display","none");

			return;
		}
		var goodlist = JSON.parse( $.cookie("cart") );
		console.log($.cookie("cart"))
		var add = 0;
		var pic=0;
		// console.log( $.cookie("cart"));
			for (var i=0; i<goodlist.length; i++) {
				var goods = goodlist[i]; //购物车中的每个商品

				var box=$("<div></div>");
				box.addClass("boxBox clearfix");

				//创建p存放 图片
				var o_div=$("<div>" + goods.pritue+ "</div>");
				o_div.addClass("tuLeft");

				//创建p存放 图片 显示发大图片效果
				var big=$("<div><img src="+goods.luj+"></div>");
				big.addClass("bigTu");

				//创建p存放 产品名称
				var o_p=$("<p>"+goods.name+"</p>")
				o_p.addClass("pRight");

				//创建p存放 价格
				console.log(goods)
				var o_pTwo=$("<p>"+goods.price+"</p>")
				o_pTwo.addClass("pCenter");
				var o_pTh=$("<p></p>");
				o_pTh.addClass("addnumT");
				var p_span=$("<span></span>");
				p_span.addClass("jianT");
				p_span.attr("id","yi");
				$(o_pTh).append(p_span);

				//创建input存放 数量
				var p_input=$("<input type='text' value='"+goods.num+"' />");
				$(p_input).addClass("numbianT");
				$(o_pTh).append(p_input);
				var p_spanT=$("<span></span>");
				p_spanT.addClass("jiaT");
				$(o_pTh).append(p_spanT);

				//创建p存放 总价
				var o_pF=$("<p>"+'¥'+(goods.price)*(goods.num)+"</p>");
				o_pF.addClass("lastPic");

				//创建a 添加删除按钮
				var o_pFi=$("<a href='##'>"+"删除"+"</a>");
				o_pFi.addClass("dela");

				//创建的节点，放入页面中
				$(box).append(o_div,o_p,o_pTwo,o_pTh,o_pF,o_pFi,big)
				$(".details").append(box);

 				add = add + Number(goodlist[i].num);
				//console.log(add)
				var pric=(goodlist[i].price)*(goodlist[i].num)
				//console.log(o);
				pic+=pric;
				//console.log(pic);
			}

		//所有的数量放入#num中
		$("#num").html(add);
		//总价放入#jiaqian中
		$("#jiaqian").html("¥"+pic)


		//删除
		$(".dela").click(function(){
			var goodsData = JSON.parse($.cookie("cart"));
			//console.log($.cookie("cart"));//json字符串。[{}]
			//json.parse.将字符串转换为json对象。
			//json.stringfy 将对象转换为字符串。
			//console.log(goodsData);

			goodsData.splice($(this).parent().index(),1);
			//splice有两个参数，第一个为被操作的位置，第二个为要删除的个数。
			//console.log($(this).parent().index());
			//移除
			$(this).parent().remove();
			//console.log(goodsData);
			$.cookie("cart", JSON.stringify(goodsData), {expires:7, path:"/"});

			//点击之后，自动刷新页面
			self.location.reload();

		});


	//$(".numbianT").val('1');
	/*数量点一次加1*/
	$(".jiaT").click(function(){
		var index = $(this).parents('.boxBox').index();
		var num=$(this).siblings('input').val();
		var a= Number(num);
		$(this).siblings('.numbianT').val(a+1);
		//当	#count大于1时，#subtract的span的背景图中间为亮
		 if(Number($(".numbianT").val())>1){
			$("#yi").removeClass().addClass('bjT');
		}

		var goods=JSON.parse($.cookie("cart"));
		goods[index].num = parseInt(num)+1;
		$.cookie("cart", JSON.stringify(goods), {expires:7, path:"/"});

		//点击之后，自动刷新页面
			self.location.reload();

		//console.log($.cookie("cart"))
		//num=cook.allnum;
	});

	/*数量点一次减1*/
	$(".jianT").click(function(){
		if($(this).siblings('input').val()>=2){
			//var num=$(".numbianT").val();
			//var a= Number(num);
			//$(".numbianT").val(a-1);
			var index = $(this).parents('.boxBox').index();
			//console.log(index)
			var num=$(this).siblings('input').val();
			var a= Number(num);
			$(this).siblings('.numbianT').val(a-1);

			//当#count为1时，#subtract的span背景图中间为暗
			if(Number($(".numbianT").val())===1){
				$("#yi").removeClass("bjT").addClass('jianT');
			}
			var goods=JSON.parse($.cookie("cart"));
			goods[index].num = parseInt(num)-1;
			$.cookie("cart", JSON.stringify(goods), {expires:7, path:"/"});
			//点击之后，自动刷新页面
			self.location.reload();

			//console.log($.cookie("cart"))
		}
		else{
			$(".numbianT").val("1");
		}
	});

	//点击物品信息跳转蜜芽产品购买页
	$(".pRight").click(function(){
		// location.href="page.html";
	});

	//鼠标移入图中，会有放大效果
	$(".tuLeft").hover(function(){
		//var index=$(this).index();
		$(this).parent().find(".bigTu").css("display","block");
	},function(){
		$(".bigTu").css("display","none");
	});




	//点击”结算“按钮，弹出总金额
		//如果未登录则点击“结算”按钮会提示：“请登录后购买”，并且跳转到登录页面
		//如果已登录则点击“结算”按钮会提示：“购买成功！”，并且跳转到首页
		$("#del").click(function(){
			if($("#addname").html()!=''){
				alert("购买成功！");
				// location.href="page.html";
			}else{
				// alert("请登录后购买");
				// location.href="register.html";
			}
		});


	//点击购物车图，跳转购物车页面
/*	$(".lione").click(function(){
		//location.href="shoppingCart.html";
		open("shoppingCart.html");

	});
*/

	//当购物车没有商品的时候，显示购物车空的提示信息，并且隐藏结算栏
	if($(".details").children().length<=0){

		$(".money").css("display","none");
		$(".empty").css("display","block");
	}

});