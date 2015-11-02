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
	<div class="wrap jj">
		<ul class="nav nav-tabs">
			<li><a href="<?php echo U('user/index');?>">管理员</a></li>
			<li><a href="<?php echo U('user/add');?>">添加管理员</a></li>
		</ul>
		<div class="common-form">
			<form method="post" class="form-horizontal J_ajaxForm" action="<?php echo U('User/edit_post');?>">
				<fieldset>
					<div class="control-group">
						<label class="control-label">用户名:</label>
						<div class="controls">
							<input type="text" class="input" name="user_login" value="<?php echo ($user_login); ?>">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">密码:</label>
						<div class="controls">
							<input type="password" class="input" name="user_pass" value="" placeholder="******">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">邮箱:</label>
						<div class="controls">
							<input type="text" class="input" name="user_email" value="<?php echo ($user_email); ?>">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">姓名:</label>
						<div class="controls">
							<input type="text" class="input" name="user_nicename" value="<?php echo ($user_nicename); ?>">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">性别:</label>
						<div class="controls">
							<input type="radio" class="input" name="sex" value="1" <?php if($sex == 1): ?>checked<?php endif; ?> />男 <input type="radio" class="input" name="sex" value="2" <?php if($sex == 2): ?>checked<?php endif; ?> />女
                        </div>
					</div>
					<div class="control-group">
						<label class="control-label">手机:</label>
						<div class="controls">
							<input type="text" class="input" name="mobile" value="<?php echo ($mobile); ?>">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">角色:</label>
						<div class="controls">
							<?php if(is_array($roles)): foreach($roles as $key=>$vo): ?><label class="checkbox inline">
								<?php $role_id_checked=in_array($vo['id'],$role_ids)?"checked":""; ?>
								<input value="<?php echo ($vo["id"]); ?>" type="checkbox" name="role_id[]" <?php echo ($role_id_checked); ?>><?php echo ($vo["name"]); ?>
							</label><?php endforeach; endif; ?>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">头像:</label>
						<div class="controls">
							<div  style="text-align: left;"><input type='hidden' name='avatar' id='thumb' value="<?php echo ((isset($avatar) && ($avatar !== ""))?($avatar):''); ?>">
								<a href='javascript:void(0);' onclick="flashupload('thumb_images', '附件上传','thumb',thumb_images,'1,jpg|jpeg|gif|png|bmp,1,,,1','','','');return false;">

									<?php if(empty($avatar)): ?><img src="/statics/images/icon/upload-pic.png" id='thumb_preview' width='135' height='113' style='cursor:hand' />
										<?php else: ?>
										<img src="<?php echo sp_get_asset_upload_path($avatar);?>" id='thumb_preview' width='135' height='113' style='cursor:hand' /><?php endif; ?>

								</a>
								<!-- <input type="button" class="btn" onclick="crop_cut_thumb($('#thumb').val());return false;" value="裁减图片">  -->
								<input type="button"  class="btn" onclick="$('#thumb_preview').attr('src','/statics/images/icon/upload-pic.png');$('#thumb').val('');return false;" value="取消图片">
							</div>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">定制师的标语:</label>
						<div class="controls">
							<input type="text" class="input" name="title" value="<?php echo ($title); ?>">
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">定制师的解说:</label>
						<div class="controls">
							<textarea name='word' id='description' class="input" required style='height:60px;' placeholder='请填写定制师的个性解说'><?php echo ($word); ?></textarea>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">是否置顶:</label>
						<div class="controls">
							<label class="radio"><input type="radio" name="is_top" value="1" <?php echo $is_top==1?"checked":"";?>><span>置顶</span></label>
							<label class="radio"><input type="radio" name="is_top" value="0" <?php echo $is_top==0?"checked":"";?>><span>未置顶</span></label>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label">定制师的故事ID:</label>
						<div class="controls">
							<input type="text" class="input" name="story_id" value="<?php echo ($story_id); ?>">
						</div>
					</div>
				</fieldset>
				<div class="form-actions">
					<input type="hidden" name="id" value="<?php echo ($id); ?>" />
					<button type="submit" class="btn btn-primary btn_submit J_ajax_submit_btn">更新</button>
					<a class="btn" href="/index.php/Admin/User">返回</a>
				</div>
			</form>
		</div>
	</div>
	<script src="/statics/js/common.js"></script>
	<script type="text/javascript" src="/statics/js/content_addtop.js"></script>
</body>
</html>