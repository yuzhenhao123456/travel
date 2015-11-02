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
    .welcome-banner{
        height: 600px;
        background-image: url(/tpl/simplebootx/Public/images/welcome_banner.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 260px;
    }
    .welcome-banner .slogan-block {
        position: relative;
        width: 520px;
        height: 160px;
        background-color: rgba(0,0,0,0.6);
        padding-top: 40px;
        border-radius: 4px;
    }
    .welcome-banner .slogan-block .faq-block {
        margin-top: 24px;
        width: 315px;
    }
    .welcome-banner .slogan-block h1 {
        font-size: 24px;
        color: #fff;
        margin: 0;
    }
    .welcome-banner .slogan-block .faq-block .faq-btn {
        display: inline-block;
        height: 38px;
        width: 138px;
        line-height: 38px;
        background-color: rgba(255,255,255,0);
        color: #fff;
        font-size: 14px;
        border: 1px solid #fff;
        border-radius: 4px;
        text-align: center;
        text-decoration: none;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
    }

    .welcome-introduction .intro-row {
        border-bottom: 1px solid #ebeae9;
        padding-bottom: 40px;
    }
    .welcome-introduction .intro-block img {
        display: block;
        width: 180px;
        margin: 0 auto;
    }
    .welcome-introduction .intro-block .title {
        font-size: 22px;
        color: #3c3931;
        text-align: center;
    }
    .welcome-introduction .intro-block p {
        text-align: center;
        font-size: 14px;
        color: #9c968f;
        margin: 3px;
    }

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
        <div class="welcome-banner" data-stellar-background-ratio="0.5" style="background-position: 0px 0px;">
            <div class="slogan-block center-block">
                <h1 class="text-center">无二之旅，让你的旅行有温度</h1>
                <div class="faq-block center-block">
                    <a href="/trip" class="faq-btn ga-hook" data-ga-title="index-faq-trip">什么是定制旅行？</a>
                    <a href="/our_story" class="faq-btn ga-hook" data-ga-title="index-faq-our-stroy">谁定制我的旅行？</a>
                </div>
            </div>
        </div>
        <div class="welcome-introduction container">
            <div class="row intro-row">
                <div class="col-md-4 col-xs-12 intro-block">
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/chair-278b038ff3e3a69db8da73437e27166e.png" alt="Chair">
                    <h2 class="title">解决自由行的麻烦</h2>
                    <p>人的天性：自由自在的旅行</p>
                    <p>反人类：繁琐的行前准备</p>
                    <p>可不可以有一次不麻烦的自由行？</p>
                    <p>这正是我们能为你做的。</p>
                </div>
                <div class="col-md-4 col-xs-12 intro-block">
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/guidebook-4e779aa37057804d055ae541843c7785.png" alt="Guidebook">
                    <h2 class="title">帮你设计独一无二的行程</h2>
                    <p>你的旅行，应该独一无二。</p>
                    <p>我们为你定制旅行的唯一原则是，</p>
                    <p>旅行中的每一个画面，</p>
                    <p>都是你自己想要的。</p>
                </div>
                <div class="col-md-4 col-xs-12 intro-block">
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/expense-da87175902d3873e5e56bf079d72e325.png" alt="Expense">
                    <h2 class="title">帮你节省每一分的花费</h2>
                    <p>谁说非要花很多钱，才能有难忘的旅行？</p>
                    <p>我们永远、永远、永远坚决反对！</p>
                    <p>因为我们希望能够给你</p>
                    <p>最有性价比，同时也最为难忘的旅行。</p>
                </div>

            </div>
            <div class="our-pride center-block"><span class="plan-count" data-start="0" data-from="0" data-to="37868" data-speed="1000" data-refresh-interval="10" data-done="true">37868</span>人已在无二之旅体验定制旅行</div>
            <a href="/contact_us" class="booking-btn center-block ga-hook" data-ga-title="index-contact-us">定制我的旅行</a>
        </div>
        <div class="destination-item-container container">
            <h3 class="welcome-item-title"><span class="title">定制旅行目的地</span>没错，生活总是很忙，但有些地方，你不能错过<iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></h3>
            <div class="destination-row row">
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#europe" class="destination-item center-block ga-hook" data-ga-title="index-destination-Europe" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/Europe-a59c18aee62edc38a6832d301393724b.jpg)">
                        <div class="bottom-banner">
                            <h4>欧洲 | Europe</h4>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#newzealand" class="destination-item center-block ga-hook" data-ga-title="index-destination-New Zealand" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/Newzealand-81239392b672615074ff10f66c17217d.jpg)">
                        <div class="bottom-banner">
                            <h4>新西兰 | Newzealand</h4>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#nationalparkofwest" class="destination-item center-block ga-hook" data-ga-title="index-destination-America" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/America-1ab0aae8d2ebc49a9798e1c58c4eac51.jpg)">
                        <div class="bottom-banner">
                            <h4>美国 | America</h4>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#coralsea" class="destination-item center-block ga-hook" data-ga-title="index-destination-Australia" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/Australia-592b365d014a50a793988b321c16db25.jpg)">
                        <div class="bottom-banner">
                            <h4>澳大利亚 | Australia</h4>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#tahiti" class="destination-item center-block ga-hook" data-ga-title="index-destination-Tahiti" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/Tahiti-bc36fd4ac6cd80e9c9bc5a570e048afc.jpg)">
                        <div class="bottom-banner">
                            <h4>大溪地 | Tahiti</h4>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-xs-12">
                    <a href="/destination#lapland" class="destination-item center-block ga-hook" data-ga-title="index-destination-Lapland" style="background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/welcome/Lapland-b711dfe5d9da4d027c3320ae4c6d02dd.jpg)">
                        <div class="bottom-banner">
                            <h4>拉普兰 | Lapland</h4>
                        </div>
                    </a>
                </div>

            </div>
            <a class="more-link" href="/destination">更多定制旅行目的地 &gt;&gt;</a>
        </div>
        <div class="travel-tailor-index-block">
            <div class="container">
                <h3 class="welcome-item-title"><span class="title">旅行定制师</span>这是最酷，也是最辛苦的职业</h3>
                <div id="travel-tailor-slide" class="carousel slide travel-tailor-slide hidden-xs">
                    <ol class="carousel-indicators">
                        <li data-target="#travel-tailor-slide" data-slide-to="0" class="active"></li>
                        <li data-target="#travel-tailor-slide" data-slide-to="1"></li>
                        <li data-target="#travel-tailor-slide" data-slide-to="2"></li>
                    </ol>

                    <div class="carousel-inner">
                        <a href="/stories/2" class="item iris active">
                            <div class="travel-tailor-banner">“让行走，丰盛你的生命和灵魂”</div>
                        </a>
                        <a href="/stories/3" class="item leitao">
                            <div class="travel-tailor-banner">“不和当地人用当地话聊几句可怎么行”</div>
                        </a>
                        <a href="/stories/4" class="item sida">
                            <div class="travel-tailor-banner">“带她上路吧，答案就在旅途中”</div>
                        </a>
                    </div>

                    <a class="slide-control left" href="#travel-tailor-slide" role="button" data-slide="prev">
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/left-arrow-thin-517798dac3e8f65fa25fae07aab979cf.png" alt="Left arrow thin">
                    </a>
                    <a class="slide-control right" href="#travel-tailor-slide" role="button" data-slide="next">
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/right-arrow-thin-e13fadfa7dc12535fc35cc7a0fc53c49.png" alt="Right arrow thin">
                    </a>

                </div>
                <div class="visible-xs iris-block">
                    <div class="bottom-banner">“让行走，丰盛你的生命和灵魂”</div>
                </div>
                <a class="more-link" href="/our_story">更多定制师的故事 &gt;&gt;</a>
            </div>
        </div>
        <ul class="their-story-container their-story-item-list container clearfix">
            <h3 class="welcome-item-title"><span class="title">他们的定制旅行</span>一次美好的旅行，应该是有温度的</h3>
            <div class="row">
                <li class="first col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/newzealand-a1911cedfac5b07deed016e2141d26d0.jpg" alt="Newzealand">
                        <div class="dest_icon">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/nz_icon-3fcbd43830c9f66669b1e5b143479b3a.svg" alt="Nz icon">
                            <p>新西兰</p>
                        </div>
                        <div class="story_info">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/days-df6f4a740e2e5a7f72f9ec11207cc9bd.png" alt="Days"> <span>16天</span>
                            <img class="p_num" src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/p_num-99cb5c126ccb1ecc39d8a9bef10b080f.png" alt="P num"> <span>2人</span>
                        </div>
                        <img class="cover-bg" src="http://uniqueway-assets.b0.upaiyun.com/assets/their_story/bg1-f3bbf3d32e00c4370747625e5dbc76f5.png" alt="Bg1">
                    </div>
                    <div class="desc">
                        <h5>定制旅行总花费：28550元/人</h5>
                        <p>“指环王里称这片土地为中土世界，来过的人说它是世界上最后一片净土，当我站在Eden Mountain，从山顶看着奥克兰，我就信了，多谢无二告诉我这个地方，犹如梦中” &nbsp; By 安小乔</p>
                    </div>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/australia-35ed252f285f6c2fa50fd1d731dab5cb.jpg" alt="Australia">
                        <div class="dest_icon">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/aus_icon-54c08cec130f6a96413a6614b630ffaf.svg" alt="Aus icon">
                            <p>澳大利亚</p>
                        </div>
                        <div class="story_info">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/days-df6f4a740e2e5a7f72f9ec11207cc9bd.png" alt="Days"> <span>16天</span>
                            <img class="p_num" src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/p_num-99cb5c126ccb1ecc39d8a9bef10b080f.png" alt="P num"> <span>2人</span>
                        </div>
                        <img class="cover-bg" src="http://uniqueway-assets.b0.upaiyun.com/assets/their_story/bg2-d5602da1f34daa0b9153e3b4e9f812fd.png" alt="Bg2">
                    </div>
                    <div class="desc">
                        <h5>定制旅行总花费：23620元/人</h5>
                        <p>“我们的船长能在嘈杂的音乐声中听到海龟海豹的呼吸声，能呼唤老鹰，知道哪片海最美最大的是哪条鱼，知道星星的名字。他就像海上的人猿泰山。感谢爸爸妈妈让我出现在这么美的世界上” &nbsp;By 铁铁
                        </p>
                    </div>
                </li>
                <li class="col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/nordic-21d5bc5e5d582412bc501f43942626f1.jpg" alt="Nordic">
                        <div class="dest_icon">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/nordic_icon-6ec60aa56641de7c63f8b3254a52fcb3.svg" alt="Nordic icon">
                            <p>北欧</p>
                        </div>
                        <div class="story_info">
                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/days-df6f4a740e2e5a7f72f9ec11207cc9bd.png" alt="Days"> <span>11天</span>
                            <img class="p_num" src="http://uniqueway-assets.b0.upaiyun.com/assets/welcome/their_story_block/p_num-99cb5c126ccb1ecc39d8a9bef10b080f.png" alt="P num"> <span>3人</span>
                        </div>
                        <img class="cover-bg" src="http://uniqueway-assets.b0.upaiyun.com/assets/their_story/bg3-d3584757820ac3e7d6115e1422060f99.png" alt="Bg3">
                    </div>
                    <div class="desc">
                        <h5>定制旅行总花费：31330元/人  </h5>
                        <p>“带着一岁多的娃去看极光的旅行：坐飞机从北京到赫尔辛基，然后乘夜火车进入北极圈，玩转罗瓦涅米圣诞老人村，再自驾到希尔克内斯，最后坐邮轮到特罗姆瑟，回顾一下行程也是醉了~幸运的是我们运气超好，看到极光大爆发，被震撼到了！”by 景婷
                        </p>
                    </div>
                </li>
            </div>
            <a class="more-link" style="margin-top:0;" href="/their_story">更多他们的故事 &gt;&gt;</a>
        </ul>
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