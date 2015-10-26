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
        <div id="trip-page-slide" class="carousel slide trip-slide">

            <ol class="carousel-indicators">
                <li data-target="#trip-page-slide" data-slide-to="0" class=""></li>
                <li data-target="#trip-page-slide" data-slide-to="1" class="active"></li>
            </ol>

            <div class="carousel-inner">
                <div class="item slide-one active left">
                    <div class="container">
                        <h3 class="slide-title">定制旅行，新的旅行</h3>
                        <p class="slide-desc">你的旅行，我来定制</p>
                        <p class="slide-desc">这是属于全新一代的，全新的旅行方式</p>
                        <a href="/contact_us" class="tailor-for-me ga-hook" data-ga-title="trip-slide-1">定制你的旅行</a>
                        <img class="slide-img" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/slide-1-img-780ee01f4a0f23094a3b6631fb33a785.png" alt="Slide 1 img">
                    </div>
                    <iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></div>
                <div class="item slide-two next left">
                    <div class="container">

                        <h3 class="slide-title">路书，只属于你的旅行家</h3>
                        <p class="slide-desc">该去哪里？怎么走？要做些什么？该怎么办？</p>
                        <p class="slide-desc">旅行中的所有问题，只要翻开路书，你都能得到解答</p>
                        <p class="slide-desc">他是贴身的路书，更是你贴心的专属旅行家</p>
                        <a href="/contact_us" class="tailor-for-me ga-hook" data-ga-title="trip-slide-2">定制你的旅行</a>
                        <div class="slider-images-box">
                            <img class="slide-book book-one" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/book_one-69b67a106194f63d02ad5bd44683ce66.png" alt="Book one">
                            <img class="slide-book book-two" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/book_two-47e1e794e73c6c236903cd0aeb9aa5f5.png" alt="Book two">
                            <img class="slide-book book-three" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/book_three-d1941c65eb266f2ee2d985da86e7c0f0.png" alt="Book three">
                        </div>
                    </div>
                </div>
            </div>

            <a class="slide-control left" href="#trip-page-slide" role="button" data-slide="prev">
                <img src="http://uniqueway-assets.b0.upaiyun.com/assets/left-arrow-thin-517798dac3e8f65fa25fae07aab979cf.png" alt="Left arrow thin">
            </a>
            <a class="slide-control right" href="#trip-page-slide" role="button" data-slide="next">
                <img src="http://uniqueway-assets.b0.upaiyun.com/assets/right-arrow-thin-e13fadfa7dc12535fc35cc7a0fc53c49.png" alt="Right arrow thin">
            </a>

        </div>
        <div class="container trip-introduction">
            <div role="tabpanel">

                <ul class="introduction-tabs clearfix" role="tablist">
                    <li role="presentation" class="active"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">关于</a></li>
                    <li role="presentation"><a href="#guidebook" aria-controls="guidebook" role="tab" data-toggle="tab">路书</a></li>
                    <li role="presentation"><a href="#price" aria-controls="price" role="tab" data-toggle="tab">价格</a></li>
                    <li role="presentation"><a href="#qna" aria-controls="qna" role="tab" data-toggle="tab">Q&amp;A</a></li>
                </ul>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="about">

                        <div id="trip-page-about" class="carousel slide about-slide">
                            <ol class="carousel-indicators">
                                <li data-target="#trip-page-about" data-slide-to="0" class="active"></li>
                                <li data-target="#trip-page-about" data-slide-to="1"></li>
                                <li data-target="#trip-page-about" data-slide-to="2"></li>
                                <li data-target="#trip-page-about" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <h1>什么是定制旅行</h1>
                                    <p>定制是一种全新的旅行方式，</p>
                                    <p>不跟团，不用导游，没有固定线路</p>
                                    <p>定制师根据您的需求为您量身设计线路，并帮您解决采买、预定等所有麻烦事</p>
                                    <p>为您制作专属路书，您拿着路书，就可以出行</p>
                                    <p>像自由行一样自由，却简单到了极致</p>
                                    <img class="about-1" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_1-ee8f5be0870c97396b1f9ce2ca95be39.png" alt="About 1">
                                </div>
                                <div class="item">
                                    <h1>定制旅行结合了跟团游和自由行的全部优点</h1>
                                    <p>不愿跟团却又没时间自己做攻略？</p>
                                    <p>那就试试定制旅行吧，你一定会爱上它</p>
                                    <div class="about-2-1">
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_2_1-35959392bc494c56f43fb90cbb8723e6.png" alt="About 2 1">
                                        <h2>跟团游</h2>
                                        <p>品质差、千篇一律&nbsp;<img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/icon_false-fec3cdfe67ecf7bd8b923023fda6924f.png" alt="Icon false"></p>
                                        <p>省心&nbsp;<img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/icon_true-95562303528abc05c6155a76a77876c5.png" alt="Icon true"></p>
                                    </div>
                                    <div class="about-2-2">
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_2_2-f3c4ce893dbe2b8f157c9cc8b2086e58.png" alt="About 2 2">
                                        <h2>自由行</h2>
                                        <p>麻烦、费时间&nbsp;<img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/icon_false-fec3cdfe67ecf7bd8b923023fda6924f.png" alt="Icon false"></p>
                                        <p>个性化，自由自在&nbsp;<img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/icon_true-95562303528abc05c6155a76a77876c5.png" alt="Icon true"></p>
                                    </div>
                                </div>
                                <div class="item pt-50">
                                    <h1>我们帮您解决旅行中的难题</h1>
                                    <p>旅行中有那么多难题，我们让它简单到极致</p>
                                    <p>有什么想法，尽管跟定制师说吧</p>
                                    <p>他来帮您解决所有的困难，为您打造愉快的旅行</p>
                                    <div class="about-3">
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_3_1-5c810d844031e16bf7f4d379e23cc3c5.png" alt="About 3 1">
                                            <p>客户</p>
                                        </div>
                                        <img class="hidden-xs" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_3_arrow-7659151c7c96a43648cc49c6d8c6bc2d.png" alt="About 3 arrow">
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_3_2-16dd10ccec60a6f3ac85dabee52438e0.png" alt="About 3 2">
                                            <p>定制师帮您解决<br>不用你费心</p>
                                            <p></p>
                                        </div>
                                        <img class="hidden-xs" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_3_arrow-7659151c7c96a43648cc49c6d8c6bc2d.png" alt="About 3 arrow">
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_3_3-a5d1198db678ea7b90777ea0e003f8dd.png" alt="About 3 3">
                                            <p>就这么<br>愉快的去旅行</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="item pt-50">
                                    <h1>定制流程</h1>
                                    <p><span>简单的4步</span> = <span>一次有温度的旅行</span> </p>
                                    <p>不会有比这更简单的方式了</p>
                                    <div class="about-4">
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_4_1-868d226fda2aac39e6c44d304befc08f.png" alt="About 4 1">
                                            <p>选择你喜欢的定制师</p>
                                        </div>
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_4_2-94986ddabaeb81534b4df46a6e34d701.png" alt="About 4 2">
                                            <p>我们为您定制行程</p>
                                        </div>
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_4_3-d2e4e416a1c2d10849467b5080be9429.png" alt="About 4 3">
                                            <p>您携带路书旅行我们为您全程保障</p>
                                        </div>
                                        <div>
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/about_4_4-bb41f32157c501611943b8f3ff1b0028.png" alt="About 4 4">
                                            <p>下次再见</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a class="slide-control left" href="#trip-page-about" role="button" data-slide="prev">

                            </a>
                            <a class="slide-control right" href="#trip-page-about" role="button" data-slide="next">

                            </a>

                        </div>

                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="guidebook">

                        <div class="flipbook-viewport hidden-xs">
                            <div class="flipbook" style="position: relative; width: 660px; height: 500px; transform: translate3d(0px, 0px, 0px); margin-left: -165px;">














                                <div class="bookmark overview" data-page="2" ignore="1">整体这么玩</div>
                                <div class="bookmark meal" data-page="4" ignore="1">每天的安排</div>
                                <div class="bookmark atm" data-page="7" ignore="1">具体这么玩</div>
                                <div class="bookmark tax-refund" data-page="10" ignore="1">路线怎么走</div>
                                <div class="bookmark car-rental" data-page="12" ignore="1">其他要注意的</div>
                                <div class="page-wrapper" page="1" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; right: 0px; left: auto; z-index: 14;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/1-4a243ba14c6bf110da2ad8b217d4ba76.png);" class="page p1 odd"></div></div><div style="top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div><div style="pointer-events: none; display: none; position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 14; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 0; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 13; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 0; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 0; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 0; display: none; width: 599px; height: 599px;"><div style="position: absolute; top: 0px; left: 0px; overflow: visible; z-index: auto; cursor: default; width: 330px; height: 500px;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div></div></div><div class="page-wrapper" page="2" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; left: 0px; right: auto; z-index: 0; display: none;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/2_overview-18b00cf0c48bbec9d8ab794e8b0fca33.png);" class="page p2 even"></div></div></div><div class="page-wrapper" page="3" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; right: 0px; left: auto; z-index: 13;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/3-15657584c439654fc7b46f624736f72b.png);" class="page p3 odd"></div></div><div style="top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div><div class="page-wrapper" page="4" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; left: 0px; right: auto; z-index: 0; display: none;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/4_flight-508595a277797f790037c22908b0424a.png);" class="page p4 even"></div></div><div style="top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div><div class="page-wrapper" page="5" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; right: 0px; left: auto; z-index: 0; display: none;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/5-7cfed4b3a03b7ad36cd86b2e5b6a89a5.png);" class="page p5 odd"></div></div><div style="top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div><div class="page-wrapper" page="6" style="position: absolute; overflow: hidden; width: 330px; height: 500px; top: 0px; left: 0px; right: auto; z-index: 0; display: none;"><div style="position: absolute; top: 0px; left: 0px; overflow: hidden; z-index: auto; width: 599px; height: 599px;"><div style="float: left; width: 330px; height: 500px; position: absolute; top: 0px; left: 0px; bottom: auto; right: auto; background-image: url(http://uniqueway-assets.b0.upaiyun.com/assets/pages/6-ab7811a4d8ff28834557dde7ed381c82.png);" class="page p6 even"></div></div><div style="top: 0px; left: 0px; overflow: hidden; z-index: 1; width: 330px; height: 500px;"></div></div><div class="shadow" style="position: absolute; top: 0px; left: 330px; overflow: hidden; z-index: auto; width: 330px; height: 500px;"></div></div>
                        </div>

                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="price">
                        <div id="trip-page-price" class="carousel slide price-slide">
                            <ol class="carousel-indicators">
                                <li data-target="#trip-page-price" data-slide-to="0" class="active"></li>
                                <li data-target="#trip-page-price" data-slide-to="1"></li>
                                <li data-target="#trip-page-price" data-slide-to="2"></li>
                                <li data-target="#trip-page-price" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="item active pt-50">
                                    <h1>完全透明的收费方式</h1>
                                    <p>总费用由旅费与服务费构成</p>
                                    <p>给您最真实的旅费，不添加任何水分</p>
                                    <p>我们收取合理的服务费，让您放心又舒心</p>
                                    <div class="price-structure">
                                        <h3>旅费</h3>
                                        <ul>
                                            <li>真实机票、酒店、活动等，</li>
                                            <li>全部原始票据计价</li>
                                            <li>每一分钱都花在您自己身上</li>
                                            <li>可以很贵，也可以便宜到不敢相信</li>
                                            <li>丰俭由己</li>
                                        </ul>
                                    </div>
                                    <span class="price-plus"></span>
                                    <div class="price-structure">
                                        <h3>服务费</h3>
                                        <ul>
                                            <li>合理的服务费，完全透明</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="item pt-50">
                                    <h1>最具性价比</h1>
                                    <p>您支付的服务费，看似增加了开销</p>
                                    <p>但细细一算，这才是最有性价比的收费模式</p>
                                    <div class="way-trip group hidden-sm hidden-xs">
                                        <span class="way">跟团游：</span>
                                        <div class="fee">看似低的费用</div>
                                        <span class="plus">+</span>
                                        <div class="more">购物陷阱、模糊住宿标准、团餐提成、景点佣金</div>
                                        <span class="eq">=</span>
                                        <div class="result">钱没少花<br>气没少生</div>
                                    </div>
                                    <div class="way-trip self hidden-sm hidden-xs">
                                        <span class="way">自助游：</span>
                                        <div class="fee">最真实的费用</div>
                                        <span class="plus">+</span>
                                        <div class="more">巨大的时间成本</div>
                                        <span class="eq">=</span>
                                        <div class="result">没吃亏<br>但没少受罪</div>
                                    </div>
                                    <div class="way-trip our hidden-sm hidden-xs">
                                        <span class="way">定制旅行：</span>
                                        <div class="fee">
                                            <span class="fee-1 popover-link">最真实的费用<div class="spec-popover fee-popover">完全透明<br>全部提供原始票据</div></span>&nbsp;+&nbsp;
                                            <span class="fee-discount popover-link">B2B折扣<div class="spec-popover discount-popover">比自己订便宜5%-30%</div></span>
                                        </div>
                                        <span class="plus">+</span>
                                        <div class="more">
                                            <span class="service-fee popover-link">服务费<div class="spec-popover service-popover">专业定制师各种贴心服务</div></span>
                                        </div>
                                        <span class="eq">=</span>
                                        <div class="result">虽然交了服务费，但旅费省了钱<br>总体来看，又省心，又没多花钱</div>
                                    </div>
                                    <div class="trip-mobile visible-sm visible-xs">
                                        <div class="group">
                                            <h4>跟团游</h4>
                                            <p>看似低的团费 &nbsp;＋ &nbsp;购物陷阱、模糊住宿标准、团餐提成、景点佣金 &nbsp;＝ &nbsp;钱没少花 气没少生</p>
                                        </div>
                                        <div class="self">
                                            <h4>自助游</h4>
                                            <p>最真实的费用 &nbsp;＋ &nbsp;巨大的时间成本 &nbsp;＝ &nbsp;没吃亏 但没少受罪
                                            </p></div>
                                        <div class="our">
                                            <h4>定制旅行</h4>
                                            <p>最真实的费用 + B2B折扣 &nbsp;＋ &nbsp;合理服务费 &nbsp;＝ &nbsp;虽然交了服务费，但旅费省了钱 总体来看，又省心，又没多花钱</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item plan pt-50">
                                    <h1>服务费收取标准</h1>
                                    <p>我们提供3个不同套系的服务</p>
                                    <p>对于不同的套系，收取不同标准的服务费</p>
                                    <a href="/plan#plus" target="_blank"><img class="icon" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/plus_icon-df8657284f8569b8d8ad9cd02cc0971c.png" alt="Plus icon"><h3>Plus套系</h3><p>1200元/天</p></a>
                                    <a href="/plan#standard" target="_blank"><img class="icon" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/standard_icon-91e0c3778c9a6e0be3726cd9a7ac890c.png" alt="Standard icon"><h3>Standard套系</h3><p>600元/天</p></a>
                                    <a href="/plan#limited" target="_blank"><img class="icon" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/limited_icon-836a0f5d16ac79d470a4640115fc1534.png" alt="Limited icon"><h3>Limited套系</h3><p>500元/天</p></a>
                                </div>
                                <div class="item pt-50">
                                    <h1>差价补偿原则</h1>
                                    <p>无二之旅承诺</p>
                                    <p>如我们为用户预订的项目，费用高出了市场基准价，我们不但退还差额部分，并且进行双倍差额赔偿</p>
                                    <div class="logo-container">
                                        <div class="flight">
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/skyscanner-4bbf784772b7dd1d6fb28540c13ad763.png" alt="Skyscanner">
                                            <p>机票基准价</p>
                                        </div>
                                        <div class="rentalcars">
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/rentalcars-743e74f05851b3dd019a78781f6b7be1.png" alt="Rentalcars">
                                            <p>租车基准价</p>
                                        </div>
                                        <div class="hotel">
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/hotel-site-851e218aa0836326e3c59b7db7b3acf2.png" alt="Hotel site">
                                            <p>酒店基准价</p>
                                        </div>
                                        <div class="activity">
                                            <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/official-site-ec05575eca11bd8c332c9f37ba12e586.png" alt="Official site">
                                            <p>活动基准价</p>
                                        </div>
                                    </div>
                                    <ul class="price-notice">
                                        <li>市场基准价指可查询到，并可顺利成交的价格</li>
                                        <li>市场基准价与我们的报价，需在同一日期进行查询比较</li>
                                    </ul>
                                </div>
                            </div>

                            <a class="slide-control left" href="#trip-page-price" role="button" data-slide="prev">

                            </a>
                            <a class="slide-control right" href="#trip-page-price" role="button" data-slide="next">

                            </a>

                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="qna">
                        <div id="trip-page-qna" class="carousel slide qna-slide">
                            <ol class="carousel-indicators">
                                <li data-target="#trip-page-qna" data-slide-to="0" class="active"></li>
                                <li data-target="#trip-page-qna" data-slide-to="1"></li>
                                <li data-target="#trip-page-qna" data-slide-to="2"></li>
                                <li data-target="#trip-page-qna" data-slide-to="3"></li>
                            </ol>

                            <div class="carousel-inner" role="listbox">
                                <div class="item active pt-30">
                                    <h1>定制旅行有标准化产品吗？</h1>
                                    <p>当然没有。每个人的喜好都不一样，所以每个人的旅行也都应该按需定制。</p>
                                    <p>凡是卖标准化产品的，那都是伪定制。如果不能做到让你的旅行，在世界上是独一无二没重样的，</p>
                                    <p>那还算什么定制旅行？我们还叫什么无二之旅？ </p>
                                    <div class="traditional">
                                        <span>传统旅行社</span>
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/traditional-agency-56b9e2cf70e48d505d1077339c085fe8.png" alt="Traditional agency">
                                    </div>
                                    <div class="uniqueway">
                                        <span>无二之旅</span>
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/uniqueway-0f541f231f8532897469d7db9051326a.png" alt="Uniqueway">
                                    </div>
                                </div>
                                <div class="item">
                                    <h1>没有团、没有导游地陪，我怎么出行？</h1>
                                    <p>自由行怎么走，咱就怎么走。</p>
                                    <p>我们会根据您的喜好，在充分沟通后，落实每一天的行程，为您精心设计并做成一本独一无二的专属 路书 。</p>
                                    <p> 拿着它，你再也不用费心，一路上所有的交通、住宿、活动，我们都为您安排妥当，您一路玩下去就行。</p>
                                    <p>有问题，拿出路书看一看，旅行，就这么简单。</p>
                                    <h3 class="guidebook-do">路书帮你搞定</h3>
                                    <div class="guidebook-done">
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/transport-bf645d2e1b4da94dbafa59bfe901be31.png" alt="Transport">
                                        <h4>交通</h4>
                                    </div>
                                    <div class="guidebook-done">
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/hotel-7c2fee0b7ce8bf05331c972ebdcaf428.png" alt="Hotel">
                                        <h4>住宿</h4>
                                    </div>
                                    <div class="guidebook-done">
                                        <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/activity-1ab45d9287a72699219d73afa73b8c69.png" alt="Activity">
                                        <h4>活动</h4>
                                    </div>
                                </div>
                                <div class="item">
                                    <h1>我英语不怎么样，自己出去能行吗？</h1>
                                    <p>完全没问题，根据我们服务上千名用户的经验来看只要您有<span class="em">最基本的英文能力</span> 。</p>
                                    <img class="english" src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/english-7d57480cee3893b008f56b7c7f34a62a.png" alt="English">
                                    <p>会说food, how much, where to park</p>
                                    <p>会用手势比划</p><br>
                                    <p>剩下的，就交给万能的路书解决吧</p>
                                    <p>真要有什么问题，给我们打电话，我们24小时为您提供支持。</p>
                                </div>
                                <div class="item pt-50">
                                    <h1>在国外，没人带着，各种交通怎么衔接呀？</h1>
                                    <p>如果您<span class="em">自驾</span>的话，我们会帮您把所有的坐标标在路书上，通过GPS，您可以很容易地完成全部旅程。</p>
                                    <p>如果您选择<span class="em">公共交通</span> ，我们会帮您把所有的衔接点示意图及指南标注在路书上，配合Google Map的实时导航。</p>
                                    <p>不用问路，一样想去哪儿就去哪儿。</p>
                                    <img src="http://uniqueway-assets.b0.upaiyun.com/assets/trip/transport-way-ad0de73ec615cdb475fb0ccfd8e46aa1.png" alt="Transport way">
                                </div>
                            </div>

                            <a class="slide-control left" href="#trip-page-qna" role="button" data-slide="prev">

                            </a>
                            <a class="slide-control right" href="#trip-page-qna" role="button" data-slide="next">

                            </a>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <script src="http://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js"></script>
    <script src="http://uniqueway-assets.b0.upaiyun.com/assets/application-fb2a1479b1a0af2acdeb37734f030c24.js"></script>
    <script src="http://uniqueway-assets.b0.upaiyun.com/assets/turn.min-c5d03ac1efafc8f9a027400b505872c9.js"></script>
    <script src="http://uniqueway-assets.b0.upaiyun.com/assets/trip-3a6d63872239bfe8fe7edfaff4032976.js"></script>


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