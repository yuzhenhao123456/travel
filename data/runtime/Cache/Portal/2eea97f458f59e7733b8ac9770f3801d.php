<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
	<html lang="en">
	<head>
		<title>ThinkCMF-跳转提示</title>
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
	
		<style type="text/css">
		*{ padding: 0; margin: 0; }
		body{ background: #fff; font-family: '微软雅黑'; color: #333; font-size: 16px; }
		.system-message{ padding: 24px 48px;text-align: center; }
		.system-message h1{ font-size: 100px; font-weight: normal; line-height: 120px; margin-bottom: 12px; text-align: center;}
		.system-message .jump{ padding-top: 10px}
		.system-message .success,.system-message .error{ line-height: 1.8em; font-size: 36px }
		.system-message .detail{ font-size: 12px; line-height: 20px; margin-top: 12px; display:none}
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
                                    <a href="/index/logout">退出</a>
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
	<div class="system-message">
	<?php if(isset($message)): ?><h1>^_^</h1>
	<p class="success"><?php echo($message); ?></p>
	<?php else: ?>
	<h1>&gt;_&lt;</h1>
	<p class="error"><?php echo($error); ?></p><?php endif; ?>
	<p class="detail"></p>
	<p class="jump">
	ThinkCMF：页面自动 <a id="href" href="<?php echo($jumpUrl); ?>">跳转</a> 等待时间： <b id="wait"><?php echo($waitSecond); ?></b>
	</p>
	</div>
	<script type="text/javascript">
	(function(){
	var wait = document.getElementById('wait'),href = document.getElementById('href').href;
	var interval = setInterval(function(){
		var time = --wait.innerHTML;
		if(time <= 0) {
			location.href = href;
			clearInterval(interval);
		};
	}, 1000);
	})();
	</script>

</body>
</html>