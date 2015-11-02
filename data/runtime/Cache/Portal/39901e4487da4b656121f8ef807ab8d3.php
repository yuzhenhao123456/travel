<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><?php echo ($site_seo_title); ?> <?php echo ($site_name); ?></title>
    <meta name="keywords" content="<?php echo ($site_seo_keywords); ?>" />
    <meta name="description" content="<?php echo ($site_seo_description); ?>">
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
	
    
    <link href="/tpl/simplebootx/Portal/css/travel.css" rel="stylesheet">
    <style>

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
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">目的地</a>
                        <ul class="dropdown-menu">
                            <li><a href="/destination_explore" title="随便看看">随便看看</a></li>
                            <li><a href="/destination" title="精选目的地">精选目的地</a></li>
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
                <?php if(!sp_is_user_login()): ?><div class="login-control">
                        <a id="login-btn" href="javascript:void(0);">登录</a>|<a id="reg-btn" href="javascript:void(0);">注册</a>
                    </div>
                    <?php else: ?>
                    <div class="user-info dropdown">
                        <a class="user-name dropdown-toggle" href="javascript:;"  data-toggle="dropdown"><?php echo sp_get_current_user()['user_nicename'];?></a>
                            <ul class="list dropdown-menu">
                                <li>
                                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/icon_logout-eff495bc5e5492d4de51865723b64248.png"
                                         alt="Icon logout">
                                    <a href="/user/index/logout">退出</a>
                                </li>
                            </ul>
                    </div><?php endif; ?>
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


    <div class="row">
        <div class="main-banner our-banner" style="height: 361px;">
            <div class="banner-image"></div>
            <div class="banner-bottom">
                <div class="container">
                    <h1>我们都是好孩子</h1>

                    <p>她独自背包走过丝路，他用533天，走遍世界</p>

                    <p>他在莱茵河畔教德国孩子们说汉语，他在圣托里尼灿烂的阳光下快乐长大</p>

                    <p>我们来自天南海北，我们都是爱旅行的好孩子</p>
                </div>
            </div>
        </div>
        <div class="container">
            <?php if(is_array($top_makers)): $i = 0; $__LIST__ = $top_makers;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; $smeta=json_decode($vo['smeta'], true); ?>
            <div class="travel-tailor-item">
                <div class="cover">
                    <a href="/stories/<?php echo ($vo["story_id"]); ?>">
                        <img src="<?php echo sp_get_asset_upload_path($smeta['thumb']);?>" alt="<?php echo ($vo["user_nicename"]); ?>">
                    </a>
                </div>

                <div class="like-counter" data-id="<?php echo ($vo["id"]); ?>">
                    <div class="name">
                        定制师-<?php echo ($vo["user_nicename"]); ?>
                    </div>
                    <img src="/tpl/simplebootx/Public/images/like-icon.png"
                         alt="Like icon">
                    <span><?php echo ($vo["get_like"]); ?></span>
                </div>

                <div class="desc">
                    <h5><?php echo ($vo["title"]); ?></h5>

                    <p class="bio">
                        <?php echo ($vo["word"]); ?>
                    </p>
                    <a class="default-btn" href="/stories/<?php echo ($vo["story_id"]); ?>">了解他的故事</a>
                </div>
            </div><?php endforeach; endif; else: echo "" ;endif; ?>
        </div>

        <div class="container travel-tailor-container clearfix">
            <div class="row">
                <?php if(is_array($makers)): $i = 0; $__LIST__ = $makers;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="<?php echo sp_get_asset_upload_path($vo['avatar']);?>" alt="Jinjiali">

                        <div class="sub-title">
                            <?php echo ($vo["title"]); ?>
                        </div>
                    </div>
                    <div class="like-counter" data-id="28">
                        <div class="name">
                            定制师-<?php echo ($vo["user_nicename"]); ?>
                        </div>
                        <img src="/tpl/simplebootx/Public/images/like-icon.png"
                             alt="Like icon">
                        <span><?php echo ($vo["get_like"]); ?></span>
                    </div>

                    <p class="bio">
                        <?php echo ($vo["word"]); ?>
                    </p>
                </div><?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
        </div>

        <!-- <div class="bottom-block container" style="text-align: center;">
          <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/bottom-block-55e0340e5bdb8d048a57f0c174e17a4d.jpg" alt="Bottom block" />
          <a class="btn" href="/contact_us">定制你的旅行 &gt;</a>
        </div>
         -->

        <div class="container">
            <div class="booking-block" id="booking-block">
                <a href="/contact_us" class="let-us-travel ga-hook" data-ga-title="bottom_block">定制你的旅行 &gt;</a>
            </div>
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
<div id="login-dialog" class="dialog" style="display: none;">
    <div class="bg"></div>
    <div class="content">
        <span class="close">×</span>
        <div class="body">
            <ul class="error-list"></ul>
            <div class="title">
                <span>使用手机登录</span>
            </div>
            <div class="form login clearfix">
                <form class="login" action="/user/login/dologin" accept-charset="UTF-8" method="post" id="login_form">
                    <input name="utf8" type="hidden" value="✓">
                    <input class="input-control phone" placeholder="用户名或者手机号" type="text" name="username" id="session_phone">
                    <input class="input-control password" placeholder="密码" type="password" name="password" id="session_password">
                    <input type="hidden" name="session[user_beens]" id="session_user_beens">
                    <input type="hidden" name="session[user_likes]" id="session_user_likes">
                    <div class="form-controls">
                        <a class="login-btn" href="javascript:void(0)">登录</a>
                        <a target="reg-dialog" class="reg-btn" href="javascript:void(0)">注册</a>
                        <!--<a class="pull-left" href="/users/begin_password_reset">忘记密码?</a>-->
                    </div>
                </form>      </div>
            <iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></div>
    </div>
</div>
<!--<div id="init-reg-dialog" class="dialog" style="display: none;">
    <div class="bg"></div>
    <div class="content">
        <span class="close">×</span>
        <ul class="error-list"></ul>
        <div class="body">
            <div class="title">
                <span>使用手机注册</span>
            </div>
            <div class="form reg">
                <input type="text" name="phone" value="" class="input-control phone" placeholder="手机号">
                <div class="phone-captcha clearfix ">
                    <input type="text" name="captcha" value="" class="input-control verify-code" placeholder="验证码">
                    <a class="send_sms_code" href="javascript:void(0)">发送验证码</a>
                </div>

                <div class="form-controls">
                    <a class="login-btn" href="javascript:;">立即注册</a>
                </div>
            </div>
        </div>
    </div>
</div>-->
<div id="middle-reg-dialog" class="dialog" style="display: none;">
    <div class="bg"></div>
    <div class="content">
        <span class="close">×</span>
        <ul class="error-list"></ul>
        <div class="body">
            <div class="title">
                <span>账号注册</span>
            </div>
            <div class="form reg">
                <form class="reg" action="/user/register/doregister" accept-charset="UTF-8" method="post" id="reg_form">
                    <input name="utf8" type="hidden" value="✓">
                    <input class="input-control name" placeholder="手机号" type="text" name="mobile" id="registrations_name">
                    <input class="input-control name" placeholder="昵称" type="text" name="username" id="registrations_name">
                    <input class="input-control password" placeholder="密码" type="password" name="password" id="registrations_password">
                    <input class="input-control password_confirmation" placeholder="重复密码" type="password" name="repassword" id="registrations_password_confirmation">
                    <div class="form-controls">
                        <a class="login-btn finish-btn" href="javascript:;">完成</a>
                    </div>
                </form>      </div>
        </div>
    </div>
</div>
<div id="finish-all-dialog" class="dialog" style="display: none;">
    <div class="bg"></div>
    <div class="content">
        <span class="close">×</span>
        <span class="error-list"></span>
        <div class="body">
            <div class="title">
                <span>注册成功</span>
            </div>
            <div class="form reg">
                <img class="success-icon" src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/icon_success-7c28974ac8d630ec9312fb108991f691.png" alt="Icon success">
                <p class="tips">恭喜你注册成功!</p>
                <!-- <a target="login-dialog" class="link" href="/users/sign_in">登录</a> -->
            </div>
        </div>
    </div>
</div>
<?php echo ($site_tongji); ?>


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
<script>
	$(Document).on('click','#login-btn',function(){
		$('#middle-reg-dialog').hide();
		$('#login-dialog').show();
	});
	$(Document).on('click','a.reg-btn',function(){
		$('#login-dialog').hide();
		$('#middle-reg-dialog').show();
	});
	$(Document).on('click','#reg-btn',function(){
		$('#login-dialog').hide();
		$('#middle-reg-dialog').show();
	});

	$(Document).on('click','.close',function(e){
		$(e.target).parents('.dialog').hide();
	});

	$(Document).on('click','#login_form .login-btn',function(e){
		$.ajax({
			cache: true,
			type: "POST",
			url: $("#login_form").attr('action'),
			data:$('#login_form').serialize(),// 你的formid
			async: false,
			error: function(request) {
				alert("Connection error");
			},
			success: function(data) {
				if(data.status==1)
				{
					$('#middle-reg-dialog').hide();
					alert(data.info);
					location.reload();
				}else{
					alert(data.info);
				}
			}
		});
	});

	$(Document).on('click','#reg_form .login-btn',function(e){
		$.ajax({
			cache: true,
			type: "POST",
			url: $("#reg_form").attr('action'),
			data:$('#reg_form').serialize(),// 你的formid
			async: false,
			error: function(request) {
				alert("Connection error");
			},
			success: function(data) {
				if(data.status==1)
				{
					$('#middle-reg-dialog').hide();
					$('#finish-all-dialog').show();
				}else{
					alert(data.info);
				}
			}
		});
	});



</script>



</body>
</html>