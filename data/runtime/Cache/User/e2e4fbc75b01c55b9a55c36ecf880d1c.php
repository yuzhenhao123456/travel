<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
<title><?php echo ($site_name); ?></title>
<meta name="keywords" content="<?php echo ($site_seo_keywords); ?>" />
<meta name="description" content="<?php echo ($site_seo_description); ?>">
<meta name="author" content="ThinkCMF">
    <meta name="author" content="jason.yu">
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    
    <!-- Set render engine for 360 browser -->
    <meta name="renderer" content="webkit">

   	<!-- No Baidu Siteapp-->
    <meta http-equiv="Cache-Control" content="no-siteapp"/>

    <!-- HTML5 shim for IE8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->
	<link rel="icon" href="/tpl/simplebootx/Public/images/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="/tpl/simplebootx/Public/images/favicon.ico" type="image/x-icon">
    <!--<link href="/tpl/simplebootx/Public/simpleboot/themes/cmf/theme.min.css" rel="stylesheet">-->
    <link href="/tpl/simplebootx/Public/simpleboot/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet">
    <link href="/tpl/simplebootx/Public/simpleboot/font-awesome/4.2.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css">
	<!--[if IE 7]>
	<link rel="stylesheet" href="/tpl/simplebootx/Public/simpleboot/font-awesome/4.2.0/css/font-awesome-ie7.min.css">
	<![endif]-->
	<link href="/tpl/simplebootx/Public/css/style.css" rel="stylesheet">
	<style>
		/*html{filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}*/
		#backtotop{position: fixed;bottom: 50px;right:20px;display: none;cursor: pointer;font-size: 50px;z-index: 9999;}
		#backtotop:hover{color:#333}
		#main-menu-user li.user{display: none}
	</style>
	
</head>

<body class="body-white">
	<div class="header">
    <!--<div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container">
                    <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                <a class="brand" href="/"><img src="/tpl/simplebootx/Public/images/logo.png"/></a>
                <div class="nav-collapse collapse" id="main-menu">
                    <ul class="nav" id="main-menu-left">
                        <li><a href="/trip" title="定制旅行">定制旅行</a></li>
                        <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#" title="目的地">目的地<b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="/destination_explore" title="随便看看" >随便看看</a></li>
                                <li><a href="/destination" title="精选目的地" >精选目的地</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/our_story">旅行定制师</a>
                        </li>
                        <li class="">
                            <a href="/their_story">案例故事</a>
                        </li>
                        <li class="">
                            <a href="/contact_us">联系我们</a>
                        </li>
                    </ul>
                    <div class="contact-area hidden-sm">
                        <a href="/contact_us">
                            <div class="tel-icon">
                                <img src="/tpl/simplebootx/Public/images/icon_tel.png" alt="Icon tel">
                            </div>
                            <p>
                                400 890 3040
                            </p>
                        </a>
                    </div>
                    <div class="login-control">
                        <a id="login-btn" href="javascript:void(0)">登录</a>|<a id="reg-btn" href="javascript:void(0)">注册</a>
                    </div>
                    <div class="wish-container">
                        <div class="wish-map-num hidden-sm" style="display: block;">
                            <span class="like-num"><img src="/tpl/simplebootx/Public/images/icon_like_on.png" alt=""><span>0</span></span>
                            <span class="been-num"><img src="/tpl/simplebootx/Public/images/icon_been_on.png" alt=""><span>0</span></span>
                        </div>
                        <a class="wish-map-btn" href="http://www.uniqueway.com/wish_map?">
                            我的心愿地图(<span class="J_wish_num">0</span>)
                        </a></div>
                </div>
            </div>
        </div>
    </div>-->
    <div class="nav-bar navbar-fixed-top on-scroll">
        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle collapsed" data-target=".navbar-collapse" data-toggle="collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="nav-logo" href="/">
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/nav-logo-d49c956fe42b30b987fd2780f9ce2f76.png"
                         alt="Nav logo">
                </a></div>
            <div class="navbar-collapse collapse" role="navigation">
                <ul class="nav-lists clearfix">
                    <li class="">
                        <a href="/trip">定制旅行</a>
                    </li>
                    <li class="destination parent-item hidden-xs dropdown">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" >目的地</a>
                        <ul class="dropdown-menu">
                            <li><a href="/destination_explore" title="随便看看" >随便看看</a></li>
                            <li><a href="/destination" title="精选目的地" >精选目的地</a></li>
                        </ul>
                    </li>

                    <li class="visible-xs ">
                        <a href="/destination">目的地</a>
                    </li>

                    <li class="">
                        <a href="/our_story">旅行定制师</a>
                    </li>

                    <li class="">
                        <a href="/their_story">案例故事</a>
                    </li>

                    <li class="">
                        <a href="/contact_us">联系我们</a>
                    </li>
                    <!-- <li class="hide-li">
                      <a href="/wish_map">我的心愿地图</a>
                    </li> -->

                </ul>
                <div class="contact-area hidden-sm">
                    <a href="/contact_us">
                        <div class="tel-icon">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/icon_tel-913f3b4e1c8a692e37eb66f64db8d634.png"
                                 alt="Icon tel">
                        </div>
                        <p>
                            400 890 3040
                        </p>
                    </a></div>

                <div class="login-control">
                    <a id="login-btn" href="/user/login">登录</a>|<a id="reg-btn" href="/user/register">注册</a>
                </div>
                <div class="wish-container">
                    <div class="wish-map-num hidden-sm" style="display: none;">
                        <span class="like-num"><img src="http://uniqueway.b0.upaiyun.com/assets/icon_like_on.png"
                                                    alt=""><span>0</span></span>
                        <span class="been-num"><img src="http://uniqueway.b0.upaiyun.com/assets/icon_been_on.png"
                                                    alt=""><span>0</span></span>
                    </div>
                    <a class="wish-map-btn" href="/wish_map?">
                        我的心愿地图(<span class="J_wish_num">0</span>)
                    </a></div>
            </div>
        </div>
    </div>
</div>

	<div class="container tc-main">
		<div class="row">
			<div class="span6 offset3">
				<h2 class="text-center">创建账号</h2>
				<form class="form-horizontal J_ajaxForm" action="<?php echo U('user/register/doregister');?>" method="post">
					<div class="control-group">
						<label class="control-label" for="input_username">账号</label>
						<div class="controls">
							<input type="text" id="input_username" name="username" placeholder="请输入账号" class="span3">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_email">邮箱</label>
						<div class="controls">
							<input type="text" id="input_email" name="email" placeholder="请输入邮箱" class="span3">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_password">密码</label>
						<div class="controls">
							<input type="password" id="input_password" name="password" placeholder="请输入密码" class="span3">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_repassword">重复密码</label>
						<div class="controls">
							<input type="password" id="input_repassword" name="repassword" placeholder="请输入重复密码" class="span3">
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_verify">验证码</label>
						<div class="controls">
							<input type="text" id="input_verify" name="verify" placeholder="请输入验证码" class="span3">
							<?php echo sp_verifycode_img('code_len=4&font_size=15&width=100&height=35&charset=1234567890');?>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="input_repassword"></label>
						<div class="controls">
							<label class="checkbox persistent"><input type="checkbox" name="terms" value="1">
								我同意<a href="#">网站内容服务条款</a></label>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_repassword"></label>
						<div class="controls">
							<button class="btn btn-primary J_ajax_submit_btn" type="submit" data-wait="1500">确定注册</button>
						</div>
					</div>

					<div class="control-group">
						<label class="control-label" for="input_repassword"></label>
						<div class="controls">
							<p>
								已有账号? <a href="<?php echo U('user/login/index');?>">点击此处登录</a>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>

		<div id="footer" class="footer">
    <div class="links">
        <?php $links=sp_getlinks(); ?>
        <?php if(is_array($links)): foreach($links as $key=>$vo): ?><a href="<?php echo ($vo["link_url"]); ?>" target="<?php echo ($vo["link_target"]); ?>"><?php echo ($vo["link_name"]); ?></a><?php endforeach; endif; ?>
    </div>
    <div class="footer-content">
        <div class="footer-container">
            <div class="row">
                <div class="col-sm-5">
                    <img class="bottom-logo" src="http://uniqueway-document.b0.upaiyun.com/images/bottom_logo.png" width="" alt="海外旅行定制专家 - 无二之旅">
                </div>
                <div class="col-sm-7">
                    <div class="text-container">
                        <p>
                            Copyright © 2015 jason. 保留所有权利   <a href="">京ICP备xxxxxx</a>
                        </p>
                        <p>
                            xxxxx传播有限公司
                        </p>
                        <p>
                            地址：xxxxxxxx
                        </p>
                        <p>*本网站部分图片来自网络，若作者看到，请尽快与无二之旅联系</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div id="backtotop"><i class="fa fa-arrow-circle-up"></i></div>
<?php echo ($site_tongji); ?>


	</div>
	<!-- /container -->

	<script type="text/javascript">
//全局变量
var GV = {
    DIMAUB: "/",
    JS_ROOT: "statics/js/",
    TOKEN: ""
};
</script>
<!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/statics/js/jquery.js"></script>
    <script src="/statics/js/wind.js"></script>
    <script src="/tpl/simplebootx/Public/simpleboot/bootstrap/js/bootstrap.min.js"></script>
    <script src="/statics/js/frontend.js"></script>
	<script>
	$(function(){
		$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
		
		$("#main-menu li.dropdown").hover(function(){
			$(this).addClass("open");
		},function(){
			$(this).removeClass("open");
		});
		
		$.post("<?php echo U('user/index/is_login');?>",{},function(data){
			if(data.status==1){
				if(data.user.avatar){
					$("#main-menu-user .headicon").attr("src",data.user.avatar.indexOf("http")==0?data.user.avatar:"/data/upload/avatar/"+data.user.avatar);
				}
				
				$("#main-menu-user .user-nicename").text(data.user.user_nicename!=""?data.user.user_nicename:data.user.user_login);
				$("#main-menu-user li.user.login").show();
				
			}
			if(data.status==0){
				$("#main-menu-user li.user.offline").show();
			}
			
		});	
		;(function($){
			$.fn.totop=function(opt){
				var scrolling=false;
				return this.each(function(){
					var $this=$(this);
					$(window).scroll(function(){
						if(!scrolling){
							var sd=$(window).scrollTop();
							if(sd>100){
								$this.fadeIn();
							}else{
								$this.fadeOut();
							}
						}
					});
					
					$this.click(function(){
						scrolling=true;
						$('html, body').animate({
							scrollTop : 0
						}, 500,function(){
							scrolling=false;
							$this.fadeOut();
						});
					});
				});
			};
		})(jQuery); 
		
		$("#backtotop").totop();
		
		
	});
	</script>


</body>
</html>