<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<!-- Set render engine for 360 browser -->
	<meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- HTML5 shim for IE8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->

	<link href="/statics/simpleboot/themes/<?php echo C('SP_ADMIN_STYLE');?>/theme.min.css" rel="stylesheet">
    <link href="/statics/simpleboot/css/simplebootadmin.css" rel="stylesheet">
    <link href="/statics/js/artDialog/skins/default.css" rel="stylesheet" />
    <link href="/statics/simpleboot/font-awesome/4.2.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css">
    <style>
		.length_3{width: 180px;}
		form .input-order{margin-bottom: 0px;padding:3px;width:40px;}
		.table-actions{margin-top: 5px; margin-bottom: 5px;padding:0px;}
		.table-list{margin-bottom: 0px;}
	</style>
	<!--[if IE 7]>
	<link rel="stylesheet" href="/statics/simpleboot/font-awesome/4.2.0/css/font-awesome-ie7.min.css">
	<![endif]-->
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
    <script src="/statics/simpleboot/bootstrap/js/bootstrap.min.js"></script>
<?php if(APP_DEBUG): ?><style>
		#think_page_trace_open{
			z-index:9999;
		}
	</style><?php endif; ?>
</head>
<body class="J_scroll_fixed">
	<div class="wrap J_check_wrap">
		<ul class="nav nav-tabs">
			<li class="active"><a href="javascript:;">所有目的地</a></li>
			<li><a href="<?php echo U('Destination/add',array('area_id'=>empty($area['id'])?'':$area['id']));?>" target="_self">添加目的地</a></li>
		</ul>
		<form class="well form-search" method="post" action="<?php echo U('Destination/index');?>">
			<div class="search_type cc mb10">
				<div class="mb10">
					<span class="mr20">分类： 
						<select class="select_2" name="area_id">
							<option value='0'>全部</option><?php echo ($taxonomys); ?>
						</select> &nbsp;&nbsp;
						目的地：
						<input type="text" name="keyword" style="width: 200px;" value="<?php echo ($formget["keyword"]); ?>" placeholder="请输入关键字...">
						<input type="submit" class="btn btn-primary" value="搜索" />
					</span>
				</div>
			</div>
		</form>
		<form class="J_ajaxForm" action="" method="post">
			<div class="table-actions">
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/listorders');?>">排序</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/check',array('check'=>1));?>" data-subcheck="true">审核</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/check',array('uncheck'=>1));?>" data-subcheck="true">取消审核</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/delete');?>" data-subcheck="true" data-msg="你确定删除吗？">删除</button>
				<button class="btn btn-primary btn-small J_articles_move" type="button">批量移动</button>
			</div>
			<table class="table table-hover table-bordered table-list">
				<thead>
					<tr>
						<th width="15"><label><input type="checkbox" class="J_check_all" data-direction="x" data-checklist="J_check_x"></label></th>
						<th width="30">ID</th>
						<th width="50">区域</th>
						<th width="50">目的地</th>
						<th>标题</th>
						<th width="80">发布人</th>
						<th width="70">发布时间</th>
						<th width="50">状态</th>
						<th width="60">操作</th>
					</tr>
				</thead>
				<?php $status=array("1"=>"已审核","0"=>"未审核"); ?>
				<?php if(is_array($posts)): foreach($posts as $key=>$vo): ?><tr>
					<td><input type="checkbox" class="J_check" data-yid="J_check_y" data-xid="J_check_x" name="ids[]" value="<?php echo ($vo["id"]); ?>" title="ID:<?php echo ($vo["id"]); ?>"></td>
					<td><?php echo ($vo["id"]); ?></td>
					<td><?php echo ($vo["name"]); ?></td>
					<td><?php echo ($vo["city"]); ?></td>
					<td><span><?php echo ($vo["title"]); ?></span></td>
					<td><?php echo ($users[$vo['post_author']]['user_nicename']); ?></td>
					<td><?php echo ($vo["date"]); ?></td>
					<td><?php echo ($status[$vo['status']]); ?>
					</td>
					<td>
						<a href="<?php echo U('Destination/edit',array('id'=>$vo['id']));?>">修改</a> |
						<a href="<?php echo U('Destination/delete',array('id'=>$vo['id']));?>" class="J_ajax_del">删除</a></td>
				</tr><?php endforeach; endif; ?>
				<tfoot>
					<tr>
						<th width="15"><label><input type="checkbox" class="J_check_all" data-direction="x" data-checklist="J_check_x"></label></th>
						<th width="30">ID</th>
						<th width="50">区域</th>
						<th width="50">目的地</th>
						<th>标题</th>
						<th width="80">发布人</th>
						<th width="70">发布时间</th>
						<th width="50">状态</th>
						<th width="60">操作</th>
					</tr>
				</tfoot>
			</table>
			<div class="table-actions">
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/listorders');?>">排序</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/check',array('check'=>1));?>" data-subcheck="true">审核</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('Destination/check',array('uncheck'=>1));?>" data-subcheck="true">取消审核</button>
				<button class="btn btn-primary btn-small J_ajax_submit_btn" type="submit" data-action="<?php echo U('AdminPost/delete');?>" data-subcheck="true" data-msg="你确定删除吗？">删除</button>
				<button class="btn btn-primary btn-small J_articles_move" type="button">批量移动</button>
			</div>
			<div class="pagination"><?php echo ($Page); ?></div>

		</form>
	</div>
	<script src="/statics/js/common.js"></script>
	<script>
		function refersh_window() {
			var refersh_time = getCookie('refersh_time');
			if (refersh_time == 1) {
				window.location = "<?php echo U('Destination/index',$formget);?>";
			}
		}
		setInterval(function() {
			refersh_window();
		}, 2000);
		$(function() {
			setCookie("refersh_time", 0);
			Wind.use('ajaxForm', 'artDialog', 'iframeTools', function() {
				//批量移动
				$('.J_articles_move').click(
						function(e) {
							var str = 0;
							var id = tag = '';
							$("input[name='ids[]']").each(function() {
								if ($(this).attr('checked')) {
									str = 1;
									id += tag + $(this).val();
									tag = ',';
								}
							});
							if (str == 0) {
								art.dialog.through({
									id : 'error',
									icon : 'error',
									content : '您没有勾选信息，无法进行操作！',
									cancelVal : '关闭',
									cancel : true
								});
								return false;
							}
							var $this = $(this);
							art.dialog.open(
									"/index.php?g=portal&m=Destination&a=move&ids="
											+ id, {
										title : "批量移动",
										width : "80%"
									});
						});
			});
		});
	</script>
</body>
</html>