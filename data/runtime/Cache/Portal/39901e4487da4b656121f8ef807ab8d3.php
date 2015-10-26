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
                    <li class="hide-li">
                        <a href="/users/sign_in">登录</a>
                    </li>
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
                    <a id="login-btn" href="javascript:void(0)">登录</a>|<a id="reg-btn" href="javascript:void(0)">注册</a>
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
            <div class="travel-tailor-item">
                <div class="cover">
                    <a href="/stories/2">
                        <img src="http://uniqueway.b0.upaiyun.com/TravelTailor/caiyun.jpg" alt="Caiyun">
                    </a>
                </div>

                <div class="like-counter" data-id="1">
                    <div class="name">
                        定制师-蔡韵
                    </div>
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                         alt="Like icon">
                    <span>4375</span>
                </div>

                <div class="desc">
                    <h5>让行走，丰盛你的生命和灵魂</h5>

                    <p class="bio">
                        东帝汶总统帮我倒了一杯茶，问了我一个问题，热带雨林深处的巫医对我说了她自己的秘密,
                        土库曼斯坦的那个边警狠狠的告诉我，下次不要再来这个国家，我在伊朗弄丢了朋友送的那个黑袍子，还有人要把他的古堡送我, 你问我去过那儿，准备好十天十夜来听我讲...
                    </p>
                    <a class="default-btn" href="/stories/2">了解他的故事</a>
                </div>
            </div>
            <div class="travel-tailor-item">
                <div class="cover">
                    <a href="/stories/3">
                        <img src="http://uniqueway.b0.upaiyun.com/TravelTailor/leitao.jpg" alt="Leitao">
                    </a>
                </div>

                <div class="like-counter" data-id="2">
                    <div class="name">
                        定制师-雷涛
                    </div>
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                         alt="Like icon">
                    <span>2747</span>
                </div>

                <div class="desc">
                    <h5>欧洲方言控</h5>

                    <p class="bio">
                        不管是德语、法语、意大利语、马扎尔语，还是西班牙语、冰岛语、波兰语，或者是才学的希腊语和挪威语，每到一个国家小住，不和当地人用当地话聊几句可怎么行...
                    </p>
                    <a class="default-btn" href="/stories/3">了解他的故事</a>
                </div>
            </div>
            <div class="travel-tailor-item">
                <div class="cover">
                    <a href="/stories/1">
                        <img src="http://uniqueway.b0.upaiyun.com/TravelTailor/liboyuan.jpg" alt="Liboyuan">
                    </a>
                </div>

                <div class="like-counter" data-id="3">
                    <div class="name">
                        定制师-李博渊
                    </div>
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                         alt="Like icon">
                    <span>5532</span>
                </div>

                <div class="desc">
                    <h5>暖男的旅行箱</h5>

                    <p class="bio">
                        每趟旅行都在帮妈妈完成一个又一个旅行心愿，<br>
                        她说要去加拿大看枫叶，我说跟我走吧！她说要去新西兰看星空，我说跟我走吧！她说要去维也纳听音乐会，我说跟我走吧！<br>
                        她说要去拉普兰德看北极光，我说，那就跟着我走吧...
                    </p>
                    <a class="default-btn" href="/stories/1">了解他的故事</a>
                </div>
            </div>
            <div class="travel-tailor-item">
                <div class="cover">
                    <a href="/stories/4">
                        <img src="http://uniqueway.b0.upaiyun.com/TravelTailor/wangsida.jpg" alt="Wangsida">
                    </a>
                </div>

                <div class="like-counter" data-id="4">
                    <div class="name">
                        定制师-王思达
                    </div>
                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                         alt="Like icon">
                    <span>4531</span>
                </div>

                <div class="desc">
                    <h5>边走边吃，边走边爱</h5>

                    <p class="bio">
                        和她认识那么多年，每天却都像第一次见面的瞬间，那时候她就说，要吃遍全世界的美味，你们总在问爱情保鲜的秘诀是什么？带她上路吧，答案就在旅途中。
                    </p>
                    <a class="default-btn" href="/stories/4">了解他的故事</a>
                </div>
            </div>
        </div>

        <div class="container travel-tailor-container clearfix">
            <div class="row">

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/jinjiali.jpg!w700" alt="Jinjiali">

                        <div class="sub-title">
                            世界就是我的家
                        </div>
                    </div>
                    <div class="like-counter" data-id="28">
                        <div class="name">
                            定制师-金佳丽
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1233</span>
                    </div>

                    <p class="bio">
                        一个偶然的机会，申请到了美企的offer，之后便中了旅行的"毒"。除了利用闲暇之余游遍了整个美利坚外，从赤道到雪山，从高原到海底，也都留下了我的足迹。下一站去哪儿？表问，走就对了！
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/wangxin.jpg!w700" alt="Wangxin">

                        <div class="sub-title">
                            别和我谈柏拉图
                        </div>
                    </div>
                    <div class="like-counter" data-id="9">
                        <div class="name">
                            定制师-王鑫
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>2616</span>
                    </div>

                    <p class="bio">
                        我可没说我是哲学家，我只是爱去什么苏格拉底、亚里士多德、阿基米德、柏拉图、蒙梭、伏尔泰他们老家八卦八卦他们而已，冰岛待久了，去其他地儿为什么总有种从外星球来的感觉呢？
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/lingyi.jpg!w700" alt="Lingyi">

                        <div class="sub-title">
                            跟时光演出对手戏
                        </div>
                    </div>
                    <div class="like-counter" data-id="18">
                        <div class="name">
                            定制师-严领仪
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>2442</span>
                    </div>

                    <p class="bio">
                        依恋九月清晨在上汤路等巴士时逗小狗玩儿没心没肺的笑。难忘在曼谷Manna餐厅和吃货好友们无忧无虑的午餐和自拍，把体重抛在脑后。享受Haji
                        Lane午后3点的阳光，跟涂鸦爱好者们探讨艺术。夜晚沉醉在克拉码头那杯鸡尾酒中。我的旅行还在继续，想把每一段旅程都变成独一无二的，用心去体验旅行，跟无二之旅一起游走世界吧。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/yangkun.jpg!w700" alt="Yangkun">

                        <div class="sub-title">
                            我喜欢边走边看
                        </div>
                    </div>
                    <div class="like-counter" data-id="32">
                        <div class="name">
                            定制师-杨琨
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1464</span>
                    </div>

                    <p class="bio">
                        喜欢旅行，原因很简单，我喜欢看，看哪里不重要，只要看就可以，坐在一个地方看烦了，只好走着看，对看还很挑剔，我喜欢看大的东西，也就是一眼望不到边的东西，比如大山大海大峡谷大瀑布还有大象。到一个城市我都会上最高的建筑上面看，因为可以看到很远很多的东西。当我看到天边并且看不到的地方的时候。哎～只好走过去看喽～
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/xx.jpg!w700" alt="Xx">

                        <div class="sub-title">
                            终·有一颗不安分的心
                        </div>
                    </div>
                    <div class="like-counter" data-id="35">
                        <div class="name">
                            定制师-许曦
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1167</span>
                    </div>

                    <p class="bio">
                        一个爱幻想的双鱼座菇凉终于在23岁那一年游走在了欧罗巴的板块上，那一年只需要戴着耳机，便好像和整个世界隔离—奔驰的火车会带你去它向往的地方～～随后的24岁踏上了美利坚的土地，在这里开始掌控着方向盘，随心而走！虽然关于旅行我依旧说不清意义何在，但终·有一颗不安分的心，所以我想去远方，亦或是带你去远方～～
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/zhaohuan.jpg!w700" alt="Zhaohuan">

                        <div class="sub-title">
                            让文学和电影跟旅行隔空相遇
                        </div>
                    </div>
                    <div class="like-counter" data-id="31">
                        <div class="name">
                            定制师-赵欢
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1388</span>
                    </div>

                    <p class="bio">
                        我曾在王尔德的墓碑边留下唇印，在莎翁书店翻看泛黄的《情人》，在塞维利亚的街头巷尾寻觅卡门的踪影，在老水手的带领下遥望奥尔马希口中的博斯普鲁斯海峡，最后，在拍摄花样年华的金雀餐厅喝一杯咖啡，等待那张迟来的船票。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/mel.jpg!w700" alt="Mel">

                        <div class="sub-title">
                            不是在路上，那大概是在海里吧
                        </div>
                    </div>
                    <div class="like-counter" data-id="19">
                        <div class="name">
                            定制师-Mel
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>2376</span>
                    </div>

                    <p class="bio">
                        21岁独自跑到离中国最遥远的南美大陆，22岁爱上五彩斑斓的海底世界。总是想让更多人的体验在一片蔚蓝里失重和鱼风暴里穿梭的感觉，所以考了Divemaster，总是想让更多人都能爱上旅行，和我一样体会到双脚踏上陌生土地时心跳加速的感觉，于是我在这儿呢
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/lixin.JPG!w700" alt="Lixin">

                        <div class="sub-title">
                            潜入世界的海
                        </div>
                    </div>
                    <div class="like-counter" data-id="8">
                        <div class="name">
                            定制师-李欣
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>3337</span>
                    </div>

                    <p class="bio">
                        世界上每多一位潜水员，就多了一位海洋守护者，地球的十分之七都是海洋，所以，保护地球这个重任我当然要肩负起来啦，被水母包围，被鲨鱼跟踪，那都不是事儿，遇见刺鳐还是赶紧跑吧。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/zjj.jpg!w700" alt="Zjj">

                        <div class="sub-title">
                            呐，别买房了
                        </div>
                    </div>
                    <div class="like-counter" data-id="33">
                        <div class="name">
                            定制师-周舒菁
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1133</span>
                    </div>

                    <p class="bio">
                        房价太高了，一个平方可以去欧洲玩半个月。房间布置得再好有几人会看，走的地方多了自然有人来听你讲故事。算我是有份虚荣吧，反正终点都一样，途中风景哪怕只我一人懂亦出彩。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/yangxiao.jpg!w700" alt="Yangxiao">

                        <div class="sub-title">
                            地中海上的一只旱鸭子
                        </div>
                    </div>
                    <div class="like-counter" data-id="30">
                        <div class="name">
                            定制师-杨晓
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1344</span>
                    </div>

                    <p class="bio">
                        生长于内陆城市的一只旱鸭子却对大山大水有着不一样的执着，用两年的时间游荡于板鸭的各个海滨城市，无论是海鲜饭发源地的瓦伦西亚，板鸭不夜城的巴塞罗那还热情似火的安达卢西亚；无论是游人如织的蓝旗海滩还是宁静无人的海岸全部留下过我曾经流窜的痕迹。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/lea.jpg!w700" alt="Lea">

                        <div class="sub-title">
                            请与我浪迹
                        </div>
                    </div>
                    <div class="like-counter" data-id="29">
                        <div class="name">
                            定制师-Lea
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1298</span>
                    </div>

                    <p class="bio">
                        我始终相信，心有多大，世界就有多大。在路上，让自己带着一颗敬仰传统而追求新奇的心，探寻每一寸神奇的土地和每一个湛蓝的海洋，尝试每一样新事物，珍惜每一份美食与每一种水果。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/xiaomi.jpg!w700" alt="Xiaomi">

                        <div class="sub-title">
                            地图搜罗狂
                        </div>
                    </div>
                    <div class="like-counter" data-id="26">
                        <div class="name">
                            定制师-刘莹
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1142</span>
                    </div>

                    <p class="bio">
                        早已不甘心拥有那些中规中矩的地图，寻找有意思的地图成了行走到每个地方的一件趣事，手绘出一张张地图等待出发，也期待收获更多旅行故事。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/xiaobei.JPG!w700" alt="Xiaobei">

                        <div class="sub-title">
                            我的朋友那么多
                        </div>
                    </div>
                    <div class="like-counter" data-id="10">
                        <div class="name">
                            定制师-马小蓓
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>4007</span>
                    </div>

                    <p class="bio">
                        过生日那天在苏格兰，收了到无数条祝福的短信，手机提醒我内存满了，坐在旁边的詹姆斯用我刚教会他的中文说：“哟！你朋友可真多”，旅途就是在认识一个又一个安排给我要做朋友的人，找寻一个又一个情节。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/uploads/aeae35bd-e35a-4aa7-a67c-9272488e94c1.jpg!w700"
                             alt="Aeae35bd e35a 4aa7 a67c 9272488e94c1">

                        <div class="sub-title">
                            我不是死板的英国绅士
                        </div>
                    </div>
                    <div class="like-counter" data-id="13">
                        <div class="name">
                            定制师-夏宇
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1616</span>
                    </div>

                    <p class="bio">
                        从哈德斯菲尔德出发，到曼彻斯特看一场球，乘火车往纽卡斯尔走，在约克与铁路博物馆不期而遇，去探寻从这里萌发的英国历史。骑上单车，穿梭于温德米尔湖区。普利茅斯的海岸，安静的威尔士，都是要去常住的地方。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/bella.jpg!w700" alt="Bella">

                        <div class="sub-title">
                            一只迷路的Bunny
                        </div>
                    </div>
                    <div class="like-counter" data-id="20">
                        <div class="name">
                            定制师-Bella
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>2741</span>
                    </div>

                    <p class="bio">
                        漫长飞行岁月，穿过高山，穿过海洋，穿过世界尽头的无边幻境。是的，你没看错，在三万英尺的高空有我的办公室，日月星辰在我抬手就可触及的前方。银河漫漫，告诉我，你的星座是哪个？
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/chendan.jpg!w700" alt="Chendan">

                        <div class="sub-title">
                            我的梦想清单
                        </div>
                    </div>
                    <div class="like-counter" data-id="34">
                        <div class="name">
                            定制师-陈琰
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>1280</span>
                    </div>

                    <p class="bio">
                        读了《心灵鸡汤》里的一个小故事，结果给自己列了一个梦想清单：去罗马的许愿池抛硬币；去巴黎圣母院的钟楼寻找卡西莫多；去伏尔塔瓦河边看布拉格城堡；去布达佩斯的自由山上看国会大厦；去马林斯基剧院看芭蕾；去哈尔施塔特寻找春天华尔兹。我的清单还在继续写，你的梦想清单呢？
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/gaoyuan.jpg!w700" alt="Gaoyuan">

                        <div class="sub-title">
                            Can't wait
                        </div>
                    </div>
                    <div class="like-counter" data-id="15">
                        <div class="name">
                            定制师-高原
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>5126</span>
                    </div>

                    <p class="bio">
                        旅行是简单而美好的事情，无论清晨午后，都是属于自己的一场又一场永不停歇的电影，也像是路途上那些没完没了的美味食物，总能让人上瘾，迫不及待。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com/travel_tailors/liumiao.JPG!w700" alt="Liumiao">

                        <div class="sub-title">
                            我有一座农场和几只小羊
                        </div>
                    </div>
                    <div class="like-counter" data-id="11">
                        <div class="name">
                            定制师-刘淼
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>4152</span>
                    </div>

                    <p class="bio">
                        我为自己建了一座农场，早晨我要牧马喂羊，中午我要让兔子和大狗晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。
                    </p>
                </div>

                <div class="travel-tailor-block col-xs-12 col-sm-6 col-md-4">
                    <div class="cover">
                        <img src="http://uniqueway.b0.upaiyun.com//travel_tailors/BOBO.jpg!w700" alt="Bobo">

                        <div class="sub-title">
                            因为山在那里
                        </div>
                    </div>
                    <div class="like-counter" data-id="24">
                        <div class="name">
                            定制师-BOBO
                        </div>
                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/like-icon-cdb461361562e84580836c53d87eebb7.png"
                             alt="Like icon">
                        <span>3544</span>
                    </div>

                    <p class="bio">
                        我坐在西伯利亚的火车上，五万里的旅行恍如梦中。
                        不断的翻山越岭，才发现，每一个脚步都如此的不同。是走的远了，才知道用脚步丈量世界。
                        要静下心来，才明白每一颗山石都有自己的心。我愿枕石而眠，听山的声音。
                    </p>
                </div>

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



</body>
</html>