$(function(){
	//点击登录按钮
				$("#come").click(function(){

					//获取cookie中注册过的所有用户
					var users = $.cookie("users");
					console.log(users)
					if (users) {
						users = JSON.parse(users);

						//遍历查找是否有匹配的用户
						var isExist = false; //表示是否存在该用户
						for (var i=0; i<users.length; i++) {
							if ( $("#haoma").val() == users[i].name && $("#password").val() == users[i].pwd ) {
								alert("登录成功!");
								isExist = true; //表示存在该用户
								$(".go").attr("href","page.html");
							}
						}

						if (!isExist) {
							// alert("用户名或密码错误!");
						}

					}

				})

			//==============================================
				//注册、登录页面随机获取四位验证码
				//	封装随机获取四位字符
				function randomCode(){
					var code="";
					var str = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					for(var i=0;i<4;i++){
						var idx = parseInt(Math.random()*str.length);
						code += str[idx];
					}
					return code;
				}
				$("#code1").val(randomCode());
				$("#look").click(function(){
					randomCode();
					$("#code1").val(randomCode());
				});

				//封装验证码字体随机色
				function randomColor(){
					var color="#";
					var str = '0123456789abcdef';
					for(var i=0;i<6;i++){
						var idx = parseInt(Math.random()*str.length);
						color += str[idx];
					}
					return color;
				}
				$("#code1").css("color",randomColor());
				$("#look").click(function(){
					randomColor();
					$("#code1").css("color",randomColor());
				});

			//登录页面点击登录按钮：号码框、密码相应变化（提示框）

				//号码框失去焦点时提示框显示，若号码框中有值，失去焦点时提示框隐藏（提示框）
				$("#haoma").blur(function(){
					if($("#haoma").val()!=''){
						$(".kong").css("display","none");
						$(".kongkong").css("display","none");
					}else{
						$(".kong").css("display","block");
					}
				});

				//验证码
				$("#yzm").blur(function(){
					if($("#yzm").val()!=""){
						$(".kongg3").css("display","none");
						$(".kong3").css("display","none");
					}else{
						$(".kong3").css("display","block");
					}
				})
			//密码框失去焦点时提示框显示，若密码框中有值，失去焦点时提示框隐藏（提示框）
				$("#password").blur(function(){
					if($("#password").val()!=''){
						$(".kong1").css("display","none");
						$(".kong1kong1").css("display","none");
					}else{
						$(".kong1").css("display","block");
					}
				});


			//登录页面用户名与密码验证
	$.get("json/user.json",function(user){

	$("#come").click(function(){
		$.each(user, function(i,vall){

					// console.log($("#haoma").val()+'/'+vall.phone)

					if( $("#haoma").val() == '' ){
						// console.log(333)
						$(".kongkong").css("display","block");
					}
					else if(($("#password").val() == '')/*&&($("#password").val()!='')*/){
						//console.log(555)
						$(".kong1kong1").css("display","block");
					}
					else if($("#duanx").val()==''){
						$(".kong2").css("display","block");
					}
					else if($("#yzm").val()==''){
						$(".kong3").css("display","block");
					}
					else{
						// console.log(44444)
						$(".kongkong").css("display","none");
						// $("#come").attr("href","page.html");

					//进入页面首先创建cookie,存放用户名
						var Name = $("#haoma").val();
						var Iuser={
							userNmae: Name
						}
						//保存7天
						$.cookie("Iuser",JSON.stringify(Iuser),{expires:7,path:"/"});
						//只循环	一次
						return false;
					}
				});
		});
	});
})
