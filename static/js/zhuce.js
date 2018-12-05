$(function(){
				
				// 点击注册按钮
				$("#come").click(function(){
					
					//先获取之前保存在cookie中的用户
					var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
					
					//遍历users数组, 判断是否存在该用户,如果存在则不能注册
					for(var i=0; i<users.length; i++) {
						if ( $("#haoma").val() == users[i].name ) {
							console.log("该用户已经存在, 不能注册!");
							return;
						}
					}
					
					//需要注册的用户(需要保存到cookie中的用户)
					var user = {
						name: $("#haoma").val(), //用户名
						pwd: $("#password").val() //密码
					}
					users.push(user); //添加新用户
					
					//保存到cookie中
					$.cookie("users", JSON.stringify(users), {expires:30, path:"/"});
					console.log( $.cookie("users") );
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
			
			//注册、登录页面随机获取六位手机短信验证码
				//封装随机获取六位数字
				function randomNum(){
					var num="";
					var str = '0123456789';
					for(var i=0;i<6;i++){
						var idx = parseInt(Math.random()*str.length);
						num += str[idx];	
					}
					return num;
				}	
				$("#duanx").val("");
				$("#get").click(function(){
					randomNum();
					$("#duanx").val(randomNum());
				});
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
				//确认登陆
				$("#passwords").blur(function(){
					if($("#passwords").val()!=""){
						$(".kongg2").css("display","none");
						$(".kong2kong2").css("display","none");
					}else{
						$(".kongg2").css("display","block");
						
					}
				});
				//短信验证码框失去焦点时提示框显示，若短信验证码框中有值，失去焦点时提示框隐藏	（提示框）		
				$("#duanx").blur(function(){
					if($("#duanx").val()!=''){
						$(".kong2").css("display","none");
					}else{
						$(".kong2").css("display","block");
					}
				});
	
				
				//注册页面点击注册按钮：号码框、密码框、短息框和确定密码框相应变化（提示框）		
				$("#go").click(function(){
						//号码框、密码框、短息框和确定密码框中的值都不为空，就隐藏所有的input框（提示框）	
						if(($("#haoma").val()!='') && ($("#password").val()!='') && ($("#duanx").val()!='') && ($("#confirmWord").val()!='')){
							$(".kong").css("display","none");
							$(".kong1").css("display","none");
							$(".kong2").css("display","none");
							$(".kong4").css("display","none");
						}
						 //号码框中的值不为空，就显示密码框、短息框和确定密码框（提示框）	
						else if (($("#haoma").val()!='')) {
								$(".kong").css("display","none");
								$(".kong1").css("display","block");
								$(".kong2").css("display","block");
								$(".kongg2").css("display","block");
								//号码框、短息框中的值不为空，就显示密码框和确定密码框（提示框）	
								if($("#duanx").val()!=''){
									$(".kong").css("display","none");
									$(".kong1").css("display","block");
									$(".kong2").css("display","none");
									$(".kongg2").css("display","block");
									//号码框、短息框和密码框中的值不为空，就显示确定密码框（提示框）	
									if($("#password").val()!=''){
										$(".kong").css("display","none");
										$(".kong1").css("display","none");
										$(".kong2").css("display","none");
										$(".kongg2").css("display","block");
									}
									//号码框、短息框和确定密码框中的值不为空，就显示密码框（提示框）	
									else if($("#confirmWord").val()!=''){
										$(".kong").css("display","none");
										$(".kong1").css("display","block");
										$(".kong2").css("display","none");
										$(".kongg2").css("display","none");
									}
								}
								//号码框、密码框中的值不为空，就显示短息框和确定密码框（提示框）	
								else if($("#password").val()!=''){
									$(".kong").css("display","none");
									$(".kong1").css("display","none");
									$(".kong2").css("display","block");
									$(".kongg2").css("display","block");
									
								}
								//号码框、确定密码框中的值不为空，就显示短息框和密码框（提示框）	
								else if($("#confirmWord").val()!=''){
									$(".kong").css("display","none");
									$(".kong1").css("display","block");
									$(".kong2").css("display","block");
									$(".kongg2").css("display","none");
									
								}
							}
						//密码框中的值不为空，就显示号码框、短息框和确定密码框（提示框）	
						 else if($("#password").val()!=''){
							$(".kong1").css("display","none");
							$(".kong").css("display","block");
							$(".kong2").css("display","block");
							$(".kongg2").css("display","block");
							
						}
						 //短息验证框中的值不为空，就显示密码框、号码框和确定密码框（提示框）	
						else if($("#duanx").val()!=''){
							$(".kong2").css("display","none");
							$(".kong").css("display","block");
							$(".kong1").css("display","block");
							$(".kongg2").css("display","block");
				
						}
						//确定密码框中的值不为空，就显示密码框、短息框和号码框（提示框）	
						else if($("#confirmWord").val()!=''){
							$(".kongg2").css("display","none");
							
							$(".kong").css("display","block");
							$(".kong1").css("display","block");
							$(".kong2").css("display","block");
						}
				 		//号码框、密码框、短息框和确定密码框中的值都为空，就显示所有的input框（提示框）	
						else{
							$(".kong").css("display","block");
							$(".kong1").css("display","block");
							$(".kong2").css("display","block");
							$(".kongg2").css("display","block");
						}
				
					});
									
					//刷新后，所有值无
						$("#haoma").val("");
						$("#yzm").val("");
				
				
					//注册页面注册
					$(".go").click(function(){
				var _phone = $("#haoma").val();
				var _pass= $("#password").val();
				var _yam=$("#yzm").val();
				var _duanx=$("#duanx").val();
				var _passwords=$(".passs").val();
				
				if($("#agreeuser").prop("checked")){
					
				
				
					if(!/^1[34578]\d{9}$/.test(_phone)){
						//alert("手机号")
						$(".kongkong").css("display","block");
						}
					
					else if($("#duanx").val()==''){
						$(".kong2").css("display","block");
					}
					else if($("#yzm").val()==''){
						$(".kong3").css("display","block");
					}
					
					else if(!/^[a-z0-9A-Z]{6,14}$/.test(_pass)){
						//alert("密码")
						$(".kong1").css("display","block");
					}
					
					else if($(".passs").val()!=_pass){
							//alert("确定密码")
							
							$(".kong2kong2").css("display","block");
					}
	
					else {
						alert("注册成功请登录");
						$(".go").attr("href","login.html");
					}
				}
				else{
					alert("还没有同意注册协议")
				}
			});
			
			
			
			//==注册页面延时器==============================================
			var timer =null;
			timer = setTimeout(function(){
				$(".bjtp").find("img").attr("src","imag/df528a2a915203fefa34035f08343ebb884536665.png");
			},200)
			
			
	
			
			
			
			})