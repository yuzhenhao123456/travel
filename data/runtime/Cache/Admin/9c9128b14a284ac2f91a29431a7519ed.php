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
			<li ><a href="<?php echo U('Area/index');?>">区域管理</a></li>
			<li class="active" ><a href="<?php echo U('Area/edit');?>">编辑区域</a></li>
	    </ul>
		<form class="form-horizontal J_ajaxForm" name="myform" id="myform" action="<?php echo u('Area/edit_post');?>" method="post">
		 <input type="hidden" name="id" value="<?php echo ($data["id"]); ?>" />
		 	<div class="tabbable">
		        <div class="tab-content">
		          <div class="tab-pane active" id="A">
		          	<table cellpadding="2" cellspacing="2" width="100%">
							<tbody>
								<tr>
									<td width="180">上级:</td>
									<td>
										<select name="pid">
												<option value="0">作为一级菜单</option>
												<?php echo ($terms_tree); ?>
										</select>
									</td>
								</tr>
								<tr>
									<td>名称:</td>
									<td><input type="text" class="input" name="name" value="<?php echo ($data["name"]); ?>"><span class="must_red">*</span></td>
								</tr>
								<tr>
									<td>英文名称:</td>
									<td><input type="text" class="input" name="full_name" value="<?php echo ($data["full_name"]); ?>"><span class="must_red">*</span></td>
								</tr>
								<tr>
									<td>推荐天数:</td>
									<td><input type="text" class="input" name="day" value="<?php echo ($data["day"]); ?>"><span class="must_red">*</span></td>
								</tr>
								<tr>
									<td>推荐季节:</td>
									<td><input type="text" class="input" name="season" value="<?php echo ($data["season"]); ?>"><span class="must_red">*</span></td>
								</tr>
								<tr>
									<td>平均花费:</td>
									<td><input type="text" class="input" name="cost" value="<?php echo ($data["cost"]); ?>"><span class="must_red">*</span></td>
								</tr>
								<tr>
									<td>经度:</td>
									<td><input type="text" class="input" name="lon" value="<?php echo ($data["lon"]); ?>"><span class="must_red">*</span> 纬度: <input type="text" class="input" name="lat" value="<?php echo ($data["lat"]); ?>"><span class="must_red">*</span> <a href="http://api.map.baidu.com/lbsapi/getpoint/index.html">查找经纬度</a></td>
								</tr>
								<tr>
									<td><b>图标</b></td>
									<td>
										<div  style="text-align: center;"><input type='hidden' name='icon' id='thumb' value="<?php echo ((isset($data["icon"]) && ($data["icon"] !== ""))?($data["icon"]):''); ?>">
											<a href='javascript:void(0);' onclick="flashupload('thumb_images', '附件上传','thumb',thumb_images,'1,jpg|jpeg|gif|png|bmp,1,,,1','','','');return false;">

												<?php if(empty($data['icon'])): ?><img src="/statics/images/icon/upload-pic.png" id='thumb_preview' width='135' height='113' style='cursor:hand' />
													<?php else: ?>
													<img src="<?php echo sp_get_asset_upload_path($data['icon']);?>" id='thumb_preview' width='135' height='113' style='cursor:hand' /><?php endif; ?>

											</a>
											<!-- <input type="button" class="btn" onclick="crop_cut_thumb($('#thumb').val());return false;" value="裁减图片">  -->
											<input type="button"  class="btn" onclick="$('#thumb_preview').attr('src','/statics/images/icon/upload-pic.png');$('#thumb').val('');return false;" value="取消图片">
										</div>
							        </td>
							    </tr>
							</tbody>
						</table>
		          </div>
		        </div>
	        </div>
			
			
		      <div class="form-actions">
		           <button class="btn btn-primary btn_submit J_ajax_submit_btn"type="submit">提交</button>
		      		<a class="btn" href="<?php echo U('Area/index');?>">返回</a>
		      </div>
		</form>
	</div>
	<script type="text/javascript" src="/statics/js/common.js"></script>
</body>
</html>