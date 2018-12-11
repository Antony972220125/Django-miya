
$(function () {

    var topswiper = new Swiper('#topSwiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay : 3000,
    })})


$(function () {

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


	//搜索 获得焦点显示，失去焦点隐藏


	$(".in").focus(function () {

		$(".lenovoWord").show();
		$(".lenovoWord a").mouseenter(function () {
			var index = $(this).index()
			$(".lenovoWord a").eq(index).css({"background": "#f7f7f7"})
		})
		$(".lenovoWord a").mouseleave(function () {

			$(".lenovoWord a").css({"background": "white"})
		})

	}).blur(function () {
		$(".lenovoWord").hide();

	})

	//购物车显示隐藏
	$("#carbox").hover(function () {
		$("#shopingcar").css({display: "block"});
		$("#cara").css({"height": "35", border: " 1px solid #fa4b9b", "border-bottom": "1px solid white"})
		$("#spancar").find("img").attr("src", "/static/images/shopcar.jpg");
		$("#spancar").css({"background": "white"});
		$("#cara").find("strong").css("display", "block");
	}, function () {
		$("#shopingcar").css({display: "none"});
		$("#cara").css({"height": "32", border: " 1px solid #e5e5e5"});
		$("#spancar").find("img").attr("src", "/static/images/shoping.jpg");
		$("#spancar").css({"background": "#ff3893"});
		$("#cara").find("strong").css("display", "none");
	});



	//======正品保证==========================
	var $uli = $(".fys")

	$uli.mouseenter(function () {
		$(".list").css({"display": "block"});
	})
	$uli.mouseleave(function () {
		$(".list").css({"display": "none"});
	})

	$(".list>span").mouseenter(function () {
		console.log(12)
		$(".list").css({"display": "block"});
		$(this).css({"background": "#ec0971"})

	}).mouseleave(function () {
		$(".list").css({"display": "none"});
		$(this).css({"background": ""})

	})

	//=======商品分类=========================================
	var $dl = $("dl");

	//console.log($dl.length)
	//鼠标移入
	$dl.mouseenter(function () {
		var index = $(this).index();
//				var height = $("dd").eq(index-1).offset().height();
//				console.log(height)
		//console.log(index)
		if (index == 5) {
			$("dd").eq(4).css({
				top: 281
			})
		}

		$("dd").eq(index - 1).css({

			"display": "block",
			"borderLeft": "none",
			top: (index - 1) * 74,

		});

		$("dl").eq(index - 1).css({"background": "white", "border": "none"})
		$("dl span").eq(index - 1).hide()
		$(".dls span").first().css({

			top: (index - 1) * 74,
			"display": "block"
		})

	})
	//鼠标移出
	$dl.mouseleave(function () {
		var index = $(this).index();
		$("dd").eq(index - 1).css({

			"display": "none",
			"borderLeft": "none"

		});
		$("dl span").eq(index - 1).show()
		$("dl").eq(index - 1).css({"background": ""})
		$(".dls span").first().css({

			"display": "none"
		})

	})

	//==二维码===============================
	var $ewm = $(".ewm");
	$(window).scroll(function () {

		var current = $(this).scrollTop()
		if (current >= 150) {
			$ewm.show();

		} else {
			$ewm.hide();
		}
	})


	//===右边=======================================
	//左右两边图片固定
	$(window).scroll(function () {
//				var scrollt=$(document).scrollTop();
//				var navTop=$("#nav").offset().top;
//				var headTop=$("#header").offset().top;
		var current = $(this).scrollTop()
		if (current >= 150) {
//					$("#leftApp").css("display","block");
			$("#rightlist").css("display", "block");
		} else {
//					$("#leftApp").css("display","none");
			$("#rightlist").css("display", "none");
		}
		$("#sideTop").click(function () {
			$("html,body").stop().animate({scrollTop: 0}, 1000);
		});
	});
	//点击购物车图，跳转购物车页面
	$(".lione").click(function () {
		//location.href="shoppingCart.html";
		open("cart/");
	})

	//li中移入移出效果
	$("#lilianxi").hover(function () {
		$("#lianxi").css("display", "block");
		$("#lianxi").stop().animate({marginLeft: -160}, 600);
	}, function () {
		$("#lianxi").css("display", "none");
		$("#lianxi").stop().animate({marginLeft: -210}, 600);

	});
	$("#ligzh").hover(function () {
		$("#gzh").css("display", "block");
		$("#gzh").stop().animate({marginLeft: -160}, 600);
	}, function () {
		$("#gzh").css("display", "none");
		$("#gzh").stop().animate({marginLeft: -210}, 600);
	});




	//=========热门商品推荐详情推荐JSON==========================================
	$.get("json/luobo.json", function (aa) {

		var data1 = aa.tuijian;
		var id = data1.id;
		for (var i = 0; i < data1.length; i++) {
			if (id >= 6) {
				var a = $("<div class='gds-img'><img src=" + data1[i].img + "/></div>");
				$(".layout").eq(i).find("a").append(a);
				var b = $("<p class='tite'>" + data1[i].tite + "</p>");
				$(".layout").eq(i).find("a").append(b);
				var c = $("<span class='news'>" + data1[i].news + "</span>");
				$(".layout").eq(i).find("a").append(c);
				var d = $("<span class='old'>" + data1[i].old + "</span>");
				$(".layout").eq(i).find("a").append(d);
				var e = $("<p class='buy'>" + data1[i].buy + "</p>");
				$(".layout").eq(i).find("a").append(e);
				var f = $("<span class='btn'>" + data1[i].btn + "</span>");
				$(".layout").eq(i).find("a").append(f);
			}
		}
	})


//			//======今日特卖JSON=======================================================
	$.get("json/luobo.json", function (bb) {
		var data2 = bb.temai;
		for (var i = 0; i < data2.length; i++) {
			//添加大图
			var aa = $("<div class='block'><img src=" + data2[i].img1 + "/></div>")
			$(".block ").find(".beiban").eq(i).append(aa);
			//添加i标签
			$(".block").append($("<i />"));

			//添加小图1
			var bb = $("<div class='l'><img class='lazyload' src=" + data2[i].img2 + "/></div>");
			$(".rank").eq(i).find("a").eq(0).append(bb);
			//添加小图2
			var ff = $("<div class='l'><img class='lazyload' src=" + data2[i].img3 + "/></div>");
			$(".rank").eq(i).find("a").eq(1).append(ff)
			//添加小图3
			var gg = $("<div class='l'><img class='lazyload' src=" + data2[i].img4 + "/></div>");
			$(".rank").eq(i).find("a").eq(2).append(gg)

			//添加文字说明
			var cc = $("<p class='titt'>" + data2[i].titt1 + "</p>");
			$(".rank").eq(i).find("a").eq(0).append(cc);

			var ll = $("<p class='titt'>" + data2[i].titt2 + "</p>");
			$(".rank").eq(i).find("a").eq(1).append(ll);

			var mm = $("<p class='titt'>" + data2[i].titt3 + "</p>");
			$(".rank").eq(i).find("a").eq(2).append(mm);
			//最新价格
			//最新价格一
			var dd = $("<span class='new'> ￥<em>" + data2[i].newss1 + "</em></span>");
			$(".rank").eq(i).find("a").eq(0).append(dd);
			//console.log(data2[i].newss1)
			//最新价格二
			var hh = $("<span class='new'> ￥<em>" + data2[i].newss2 + "</em></span>");
			$(".rank").eq(i).find("a").eq(1).append(hh);
			//最新价格三
			var ii = $("<span class='new'> ￥<em>" + data2[i].newss3 + "</em></span>");
			$(".rank").eq(i).find("a").eq(2).append(ii);

			//老价格
			//老价格一
			var ee = $("<span class='old'>￥<em>" + data2[i].old1 + "</em></span>");
			$(".rank").eq(i).find("a").eq(0).append(ee);
			//老价格二
			var jj = $("<span class='old'>￥<em>" + data2[i].old2 + "</em></span>");
			$(".rank").eq(i).find("a").eq(1).append(jj);
			//老价格三
			var kk = $("<span class='old'>￥<em>" + data2[i].old3 + "</em></span>");
			$(".rank").eq(i).find("a").eq(2).append(kk);


			$(".rank ").eq(i).find(".l").eq(0).append($("<i class='r1'></i>"));
			$(".rank ").eq(i).find(".l").eq(1).append($("<i class='r2'></i>"));
			$(".rank ").eq(i).find(".l").eq(2).append($("<i class='r3'></i>"));

		}
	})
	//========底部二维码====================================
	$(".PubBtnHover").mouseover(function () {
		$(".wxmore").show();
	}).mouseleave(function () {
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