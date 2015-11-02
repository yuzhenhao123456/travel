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
        <div class="main-banner contact-banner">
            <div class="banner-image" style="background-image: url('http://uniqueway.b0.upaiyun.com/contact_us_banner.jpg!w1500');"></div>
            <div class="container">
                <div class="contact-form">
                    <form action="/api/guestbook/addmsg" method="POST" id="planForm" data-remote="true">
                        <div class="row">
                            <input id="name" type="text" name="full_name" placeholder="姓名">
                            <input id="old_destination" type="text" name="title" placeholder="海外目的地">
                            <input id="travel_days" type="text" name="day" placeholder="天数">
                        </div>

                        <div class="row">
                            <input id="phone" type="tel" name="mobile" placeholder="手机" autocomplete="off">
                            <!--<input type="text" id="verify_code" name="verify_code" placeholder="验证码">
                            <button id="send_verify_code" class="disabled" disabled="disabled">获取验证码</button>-->
                        </div>
                        <div class="row submit">
                            <button type="submit" id="submit" class="ga-hook" data-ga-title="contact-us-submit">开始我的定制</button>
                        </div>
                    </form>
                </div>
            </div>
            <iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></div>
        <div>
            <div class="clearfix contact-body">
                <div class="row self-desc">
                    <div class="col-md-6 col-xs-12">
                        <div class="best">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/logo-750c3360116dba3e5bd4250f875c839f.png" alt="Logo">
                            <h3>最好的定制旅行专家</h3>
                            <p>我们是<span class="highlight">国内最好的定制旅行专家</span></p>
                            <p><span class="highlight">不组团、不找地接、不配导游、不做国内游</span></p>
                            <p>三年来，自始至终的专注做好一件事情</p>
                            <p>为你定制一次难忘的海外旅行</p>
                        </div>
                    </div>
                    <div class="col-md-6 col xs-12">
                        <div class="solution">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/chair-e347c5fea77f1d8ab72bf897e8a3ef4b.png" alt="Chair">
                            <h3>帮你解决自由行的麻烦事</h3>
                            <p>人的天性：自由自在的旅行</p>
                            <p>反人类：繁琐的行前准备</p>
                            <p>可不可以有一次<span class="highlight">不麻烦的自由行？</span></p>
                            <p>这正是我们能为你做的。</p>
                        </div>
                    </div>
                    <div class="col-md-6 col xs-12">
                        <div class="guide">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/guidebook-310a049f84b5891cb5f4a294e465a994.png" alt="Guidebook">
                            <h3>帮你设计独一无二的行程</h3>
                            <p>你的旅行，应该是不一样的</p>
                            <p>我们为你定制旅行的唯一原则是</p>
                            <p class="highlight">旅行中的每一个画面</p>
                            <p class="highlight">都是你自己想要的</p>
                        </div>
                    </div>
                    <div class="col-md-6 col xs-12">
                        <div class="cost">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/card-9b41112101515ab8bdc42fc80e317e34.png" alt="Card">
                            <h3>帮你节省每一分的花费</h3>
                            <p>谁说非要花很多钱，才能有难忘的旅行？</p>
                            <p>我们永远、永远、永远坚决反对！</p>
                            <p>因为我们希望能够给你</p>
                            <p class="highlight">最有性价比，同时也最为难忘的旅行。</p>
                        </div>
                    </div>
                </div>
                <div class="we-hope">
                    <h2>我们希望给你有温度的旅行</h2>
                    <p>2012年，无二之旅在北京诞生了。</p>
                    <p>最初，我们只是为小圈子里的朋友们，提供个性化的定制旅行服务。</p>
                    <p>但随着业务的发展，我们发现，原来有那么多不认识我们的朋友，也都在寻找着这种自由、省心、又有性价比的定制旅行服务。</p>
                    <p>是呀，个性化是我们永恒不变的诉求，但繁忙的工作，却让我们没有时间去精心准备。那么，难道真的要把自己的旅行，交给千篇一律、走马观花的旅行团吗？</p>
                    <p>我们真的不希望这样，我们愿能帮助越来越多的朋友，充分享受到旅行真正的乐趣，我们永远以此为荣。</p>
                    <p>慢慢的，慕名而来的朋友越来越多，不仅遍布大江南北，还有很多旅居国外的朋友，也找我们定制新的旅行。我们欣喜的同时，也深感惶恐。</p>
                    <p>这既是信任，也是责任，我们知道，将自己的旅行交给别人，真的是一件很大的决定，我们能不能不辜负这种信任？我们能不能做到比预期的更好？这是永远激励我们向前的动力。</p>
                    <p>我们永远相信，旅行是有温度的。</p>
                    <p>我们希望能在这个总是冰冷冷的世界里，用我们的专业与热情，带给你一抹属于旅行的温度。</p>
                </div>
                <div class="contact-us-map">
                    <div class="map-area">
                        <img class="pin-icon pull-left" src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/pin-c037d5b2e0ddb30417eb7fd29d0e81bf.png" alt="Pin">
                        <p>无二之旅（全称：北京无二之旅文化传播有限公司）</p>
                        <p>北京市朝阳区百子湾路苹果社区北区22院街艺术区6-19</p>
                        <div id="allmap" style="overflow: hidden; position: relative; z-index: 0; color: rgb(0, 0, 0); text-align: left; background-color: rgb(243, 241, 236);"><div style="overflow: visible; position: absolute; z-index: 0; left: 0px; top: 0px; cursor: url(http://api0.map.bdimg.com/images/openhand.cur) 8 8, default;"><div class="BMap_mask" style="position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; -webkit-user-select: none; width: 810px; height: 330px;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"><div style="position: absolute; height: 0px; width: auto; left: 0px; top: 0px; z-index: 800;"><div class="BMapLib_SearchInfoWindow" id="BMapLib_SearchInfoWindow0" style="width: 300px; -webkit-user-select: none; bottom: -222px; left: 283px;"><div class="BMapLib_bubble_top"><div class="BMapLib_bubble_title" id="BMapLib_bubble_title0">无二之旅</div><div class="BMapLib_bubble_tools"><div class="BMapLib_bubble_close" title="关闭" id="BMapLib_bubble_close0"></div><div class="BMapLib_sendToPhone" title="发送到手机" id="BMapLib_sendToPhone0"></div></div></div><div class="BMapLib_bubble_center"><div class="BMapLib_bubble_content" id="BMapLib_bubble_content0" style="height: 105px;"><div style="margin:0;line-height:20px;padding:2px;"><img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/foreground-51912f55001c4db060050b5ec3f7e704.jpg" alt="无二之旅" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;">地址：北京市朝阳区百子湾路苹果社区北区22院街艺术区6-19 <br>电话：400-8903040 <br></div></div><div class="BMapLib_nav" id="BMapLib_nav0"><ul class="BMapLib_nav_tab" id="BMapLib_nav_tab0"><li class="BMapLib_current BMapLib_first" id="BMapLib_tab_search0" style="display: block; width: 99px;"><span class="BMapLib_icon BMapLib_icon_nbs"></span>在附近找</li><li class="" id="BMapLib_tab_tohere0" style="display: block; width: 99px;"><span class="BMapLib_icon BMapLib_icon_tohere"></span>到这里去</li><li class="" id="BMapLib_tab_fromhere0" style="display: block; width: 100px;"><span class="BMapLib_icon BMapLib_icon_fromhere"></span>从这里出发</li></ul><ul class="BMapLib_nav_tab_content"><li id="BMapLib_searchBox0" style="display: block;"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td style="padding-left:8px;"><input id="BMapLib_search_text0" class="BMapLib_search_text" type="text" maxlength="100" autocomplete="off"></td><td width="55" style="padding-left:7px;"><input id="BMapLib_search_nb_btn0" type="submit" value="搜索" class="iw_bt"></td></tr></tbody></table></li><li id="BMapLib_transBox0" style="display:none"><table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td width="30" style="padding-left:8px;"><div id="BMapLib_stationText0">起点</div></td><td><input id="BMapLib_trans_text0" class="BMapLib_trans_text" type="text" maxlength="100" autocomplete="off"></td><td width="106" style="padding-left:7px;"><input id="BMapLib_search_bus_btn0" type="button" value="公交" class="iw_bt" style="margin-right:5px;"><input id="BMapLib_search_drive_btn0" type="button" class="iw_bt" value="驾车"></td></tr></tbody></table></li></ul></div></div><div class="BMapLib_bubble_bottom"></div><img src="http://api.map.baidu.com/library/SearchInfoWindow/1.4/src/iw_tail.png" width="58" height="31" alt="" class="BMapLib_trans" id="BMapLib_trans0" style="left: 119px; top: 211px;"></div></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 700;"><span class="BMap_Marker BMap_noprint" unselectable="on" "="" style="position: absolute; padding: 0px; margin: 0px; border: 0px; cursor: pointer; width: 19px; height: 25px; left: 395px; top: 254px; z-index: -7981122; background: url(http://api0.map.bdimg.com/images/blank.gif);" title=""></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 600;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 500;"><label class="BMapLabel" unselectable="on" style="position: absolute; display: none; cursor: inherit; border: 1px solid rgb(190, 190, 190); padding: 1px; white-space: nowrap; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 12px; line-height: normal; font-family: arial, sans-serif; z-index: -20000; color: rgb(190, 190, 190); background-color: rgb(190, 190, 190);">shadow</label></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 400;"><span class="BMap_Marker" unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 0px; height: 0px; left: 395px; top: 254px; z-index: -7981122;"><div style="position: absolute; margin: 0px; padding: 0px; width: 19px; height: 25px; overflow: hidden;"><img src="http://api0.map.bdimg.com/images/marker_red_sprite.png" style="display: block; border:none;margin-left:0px; margin-top:0px; "></div></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 300;"><span unselectable="on" style="position: absolute; padding: 0px; margin: 0px; border: 0px; width: 20px; height: 11px; left: 399px; top: 268px;"><div style="position: absolute; margin: 0px; padding: 0px; width: 20px; height: 11px; overflow: hidden;"><img src="http://api0.map.bdimg.com/images/marker_red_sprite.png" style="display: block; border:none;margin-left:-19px; margin-top:-13px; "></div></span></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 201;"></div><div style="position: absolute; height: 0px; width: 0px; left: 0px; top: 0px; z-index: 200;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 1;"><div style="position: absolute; overflow: visible; z-index: -100; left: 405px; top: 165px; display: block; transform: translate3d(0px, 0px, 0px);"><img src="http://online3.map.bdimg.com/tile/?qt=tile&amp;x=12662&amp;y=4711&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -137px; top: -16px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=tile&amp;x=12661&amp;y=4711&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -393px; top: -16px; max-width: none; opacity: 1;"><img src="http://online4.map.bdimg.com/tile/?qt=tile&amp;x=12663&amp;y=4711&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: 119px; top: -16px; max-width: none; opacity: 1;"><img src="http://online4.map.bdimg.com/tile/?qt=tile&amp;x=12662&amp;y=4712&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -137px; top: -272px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=tile&amp;x=12664&amp;y=4711&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: 375px; top: -16px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=tile&amp;x=12660&amp;y=4711&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -649px; top: -16px; max-width: none; opacity: 1;"><img src="http://online3.map.bdimg.com/tile/?qt=tile&amp;x=12661&amp;y=4712&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -393px; top: -272px; max-width: none; opacity: 1;"><img src="http://online0.map.bdimg.com/tile/?qt=tile&amp;x=12663&amp;y=4712&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: 119px; top: -272px; max-width: none; opacity: 1;"><img src="http://online2.map.bdimg.com/tile/?qt=tile&amp;x=12660&amp;y=4712&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: -649px; top: -272px; max-width: none; opacity: 1;"><img src="http://online1.map.bdimg.com/tile/?qt=tile&amp;x=12664&amp;y=4712&amp;z=16&amp;styles=pl&amp;scaler=2&amp;udt=20150528" style="position: absolute; border: none; width: 256px; height: 256px; left: 375px; top: -272px; max-width: none; opacity: 1;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 2; display: none;"><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 0; display: none;"></div></div><div style="position: absolute; overflow: visible; top: 0px; left: 0px; z-index: 3;"></div></div><div class="pano_close" title="退出全景" style="z-index: 1201; display: none;"></div><a class="pano_pc_indoor_exit" title="退出室内景" style="z-index: 1201; display: none;"><span style="float:right;margin-right:12px;">出口</span></a><div class=" anchorBL" style="height: 32px; position: absolute; z-index: 30; bottom: 0px; right: auto; top: auto; left: 1px;"><a title="到百度地图查看此区域" target="_blank" href="http://map.baidu.com/?sr=1" style="outline: none;"><img style="border:none;width:77px;height:32px" src="http://api0.map.bdimg.com/images/copyright_logo.png"></a></div><div id="zoomer" style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:url(http://api0.map.bdimg.com/images/openhand.cur) 8 8,default"><div class="BMap_zoomer" style="top:0;left:0;"></div><div class="BMap_zoomer" style="top:0;right:0;"></div><div class="BMap_zoomer" style="bottom:0;left:0;"></div><div class="BMap_zoomer" style="bottom:0;right:0;"></div></div><div unselectable="on" class=" BMap_cpyCtrl BMap_noprint anchorBL" style="cursor: default; white-space: nowrap; color: black; font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 11px; line-height: 15px; font-family: arial, sans-serif; bottom: 2px; right: auto; top: auto; left: 81px; position: absolute; z-index: 10; background: none;"><span _cid="1" style="display: inline;"><span style="font-size:11px">© 2015 Baidu&nbsp;- Data © <a target="_blank" href="http://www.navinfo.com/" style="display:inline;">NavInfo</a> &amp; <a target="_blank" href="http://www.cennavi.com.cn/" style="display:inline;">CenNavi</a> &amp; <a target="_blank" href="http://www.365ditu.com/" style="display:inline;">道道通</a></span></span></div></div>
                        <p class="abstract">无二之旅（全称：北京无二之旅文化传播有限公司），自信是国内最专业的海外<a href="/trip">旅游定制</a>公司。我们拥有优秀的旅行定制师团队，凭借多年深度旅行和海外旅居经历，为想要出国旅行的朋友提供咨询服务。专业的推荐、精彩的设计、严谨的安排、24小时电话和网络协助，一切都只为，让你的旅行有温度。</p>
                    </div>
                </div>
            </div>
            <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&amp;ak=6f643b72cb7bff6d9e141ed546a0f547"></script><script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&amp;ak=6f643b72cb7bff6d9e141ed546a0f547&amp;services=&amp;t=20151020152414"></script>
            <script type="text/javascript" src="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.js"></script>
            <link rel="stylesheet" href="http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css">

            <script type="text/javascript">
                // 百度地图API功能
                var map = new BMap.Map('allmap');
                var poi = new BMap.Point(116.47822,39.905614);
                map.centerAndZoom(poi, 16);
                map.enableScrollWheelZoom();

                var content = '<div style="margin:0;line-height:20px;padding:2px;">' +'<img src="http://uniqueway-assets.b0.upaiyun.com/assets/contact_us/foreground-51912f55001c4db060050b5ec3f7e704.jpg" alt="无二之旅" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                        '地址：北京市朝阳区百子湾路苹果社区北区22院街艺术区6-19 <br/>电话：400-8903040 <br/>' +'</div>';

                //创建检索信息窗口对象
                var searchInfoWindow = null;
                searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                    title  : "无二之旅",
                    width  : 290,
                    height : 105,
                    panel  : "panel",
                    enableAutoPan : true,
                    searchTypes   :[
                        BMAPLIB_TAB_SEARCH,
                        BMAPLIB_TAB_TO_HERE,
                        BMAPLIB_TAB_FROM_HERE
                    ]
                });
                var marker = new BMap.Marker(poi);
                searchInfoWindow.open(marker);
                map.addOverlay(marker); //在地图中添加marker
            </script>
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