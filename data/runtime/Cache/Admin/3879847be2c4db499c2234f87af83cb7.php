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
<style type="text/css">
.col-auto { overflow: auto; _zoom: 1;_float: left;}
.col-right { float: right; width: 210px; overflow: hidden; margin-left: 6px; }
.table th, .table td {vertical-align: middle;}
.picList li{margin-bottom: 5px;}
</style>
</head>
<body class="J_scroll_fixed">
<div class="wrap J_check_wrap">
  <ul class="nav nav-tabs">
     <li><a href="<?php echo U('Destination/index');?>">所有目的地</a></li>
     <li><a href="<?php echo U('Destination/add',array('term'=>empty($term['term_id'])?'':$term['term_id']));?>"  target="_self">添加目的地</a></li>
     <li class="active"><a href="#">目的地编辑</a></li>
  </ul>
  <form name="myform" id="myform" action="<?php echo u('Destination/edit_post');?>" method="post" class="form-horizontal J_ajaxForms" enctype="multipart/form-data">
  <div class="col-auto">
    <div class="table_full">
      <table class="table table-bordered">
            <tr>
              <th width="80">栏目</th>
              <td>
				  <input type="hidden" name="post[id]" value="<?php echo ($post["id"]); ?>">
				<select style="max-height: 100px;" name="post[area_id]">
					<?php echo ($taxonomys); ?>
				</select>
              </td>
            </tr>
		  <tr>
			  <th width="80">城市</th>
			  <td><input type='text' name='post[city]' id='keywords' value='<?php echo ($post["city"]); ?>' style='width:400px'   class='input' placeholder='请输入城市'> 多城市之间用空格或者英文逗号隔开</td>
		  </tr>
		  <tr>
			  <th width="80">标题 </th>
			  <td>
				  <input type="text" style="width:400px;" name="post[title]" id="title"  required value="<?php echo ($post["title"]); ?>" style="color:" class="input input_hd J_title_color" placeholder="请输入标题" onkeyup="strlen_verify(this, 'title_len', 160)" />
				  <span class="must_red">*</span>
			  </td>
		  </tr>
		  <tr>
			  <th width="80">经度</th>
			  <td><input type='text' name='post[lon]' id='lon' value='<?php echo ($post["lon"]); ?>' style='width:200px'   class='input' placeholder='请输入经度'><span class="must_red">*</span></td>
		  </tr>
		  <tr>
			  <th width="80">纬度</th>
			  <td><input type='text' name='post[lat]' id='lat' value='<?php echo ($post["lat"]); ?>' style='width:200px'   class='input' placeholder='请输入纬度'><span class="must_red">*</span></td>
		  </tr>
            <tr>
              <th width="80">摘要 </th>
              <td><textarea name='post[excerpt]' id='description' required style='width:98%;height:50px;'  placeholder='请填写摘要'><?php echo ($post["excerpt"]); ?></textarea><span class="must_red">*</span></td>
            </tr>
		  <tr>
			  <td width="80">状态</td>
			  <td>
          	<span class="switch_list cc">
			<label class="radio"><input type="radio" name="post[status]" value="1" <?php if($post['status'] == 1): ?>checked<?php endif; ?> ><span>审核通过</span></label>
			<label class="radio"><input type="radio" name="post[status]" value="0" <?php if($post['status'] == 0): ?>checked<?php endif; ?> ><span>待审核</span></label>
		 	</span>
			  </td>
		  </tr>
            <tr>
              <th width="80">相册图集 </th>
              <td>
				<fieldset class="blue pad-10">
		        <legend>图片列表</legend>
					<p>注:名称为icon的图片作为地点案例的图标</p>
		        <ul id="photos" class="picList unstyled">
			        <?php if(is_array($smeta['photo'])): foreach($smeta['photo'] as $key=>$vo): ?><li id="savedimage<?php echo ($key); ?>">
				        	<input type="text" name="photos_url[]" value="<?php echo sp_get_asset_upload_path($vo['url']);?>" title='双击查看' style="width:310px;" ondblclick="image_priview(this.value);" class="input">
				        	<input type="text" name="photos_alt[]" value="<?php echo ($vo["alt"]); ?>" style="width:160px;" class="input" onfocus="if(this.value == this.defaultValue) this.value = ''" onblur="if(this.value.replace(' ','') == '') this.value = this.defaultValue;">
				        	<a href="javascript:remove_div('savedimage<?php echo ($key); ?>')">移除</a>
				        </li><?php endforeach; endif; ?>
		        </ul>
				</fieldset>
				<a href="javascript:;" style="margin: 5px 0;" onclick="javascript:flashupload('albums_images', '图片上传','photos',change_images,'10,gif|jpg|jpeg|png|bmp,0','','','')" class="btn">选择图片 </a>
			  </td>
            </tr>
                        
        </tbody>
      </table>
    </div>
  </div>
  <div class="form-actions">
        <button class="btn btn-primary btn_submit J_ajax_submit_btn"type="submit">提交</button>
        <a class="btn" href="<?php echo U('Destination/index');?>">返回</a>
  </div>
 </form>
</div>
<script type="text/javascript" src="/statics/js/common.js"></script>
<script type="text/javascript" src="/statics/js/content_addtop.js"></script>
<script type="text/javascript"> 
$(function () {
	//setInterval(function(){public_lock_renewal();}, 10000);
	$(".J_ajax_close_btn").on('click', function (e) {
	    e.preventDefault();
	    Wind.use("artDialog", function () {
	        art.dialog({
	            id: "question",
	            icon: "question",
	            fixed: true,
	            lock: true,
	            background: "#CCCCCC",
	            opacity: 0,
	            content: "您确定需要关闭当前页面嘛？",
	            ok:function(){
					setCookie("refersh_time",1);
					window.close();
					return true;
				}
	        });
	    });
	});
	/////---------------------
	 Wind.use('validate', 'ajaxForm', 'artDialog', function () {
			//javascript
	        
	            //编辑器
	            editorcontent = new baidu.editor.ui.Editor();
	            editorcontent.render( 'content' );
	            try{editorcontent.sync();}catch(err){};
	            //增加编辑器验证规则
	            jQuery.validator.addMethod('editorcontent',function(){
	                try{editorcontent.sync();}catch(err){};
	                return editorcontent.hasContents();
	            });
	            var form = $('form.J_ajaxForms');
	        //ie处理placeholder提交问题
	        if ($.browser.msie) {
	            form.find('[placeholder]').each(function () {
	                var input = $(this);
	                if (input.val() == input.attr('placeholder')) {
	                    input.val('');
	                }
	            });
	        }
	        //表单验证开始
	        form.validate({
				//是否在获取焦点时验证
				onfocusout:false,
				//是否在敲击键盘时验证
				onkeyup:false,
				//当鼠标掉级时验证
				onclick: false,
	            //验证错误
	            showErrors: function (errorMap, errorArr) {
					//errorMap {'name':'错误信息'}
					//errorArr [{'message':'错误信息',element:({})}]
					try{
						$(errorArr[0].element).focus();
						art.dialog({
							id:'error',
							icon: 'error',
							lock: true,
							fixed: true,
							background:"#CCCCCC",
							opacity:0,
							content: errorArr[0].message,
							cancelVal: '确定',
							cancel: function(){
								$(errorArr[0].element).focus();
							}
						});
					}catch(err){
					}
	            },
	            //验证规则
	            rules: {'post[post_title]':{required:1},'post[post_content]':{editorcontent:true}},
	            //验证未通过提示消息
	            messages: {'post[post_title]':{required:'请输入标题'},'post[post_content]':{editorcontent:'内容不能为空'}},
	            //给未通过验证的元素加效果,闪烁等
	            highlight: false,
	            //是否在获取焦点时验证
	            onfocusout: false,
	            //验证通过，提交表单
	            submitHandler: function (forms) {
	                $(forms).ajaxSubmit({
	                    url: form.attr('action'), //按钮上是否自定义提交地址(多按钮情况)
	                    dataType: 'json',
	                    beforeSubmit: function (arr, $form, options) {
	                        
	                    },
	                    success: function (data, statusText, xhr, $form) {
	                        if(data.status){
								setCookie("refersh_time",1);
								//添加成功
								Wind.use("artDialog", function () {
								    art.dialog({
								        id: "succeed",
								        icon: "succeed",
								        fixed: true,
								        lock: true,
								        background: "#CCCCCC",
								        opacity: 0,
								        content: data.info,
										button:[
											{
												name: '继续编辑？',
												callback:function(){
													//reloadPage(window);
													return true;
												},
												focus: true
											},{
    											name: '返回列表页',
												callback:function(){
													location='<?php echo U('Destination/index');?>';
													return true;
												}
											}
										]
								    });
								});
							}else{
								isalert(data.info);
							}
	                    }
	                });
	            }
	        });
	    });
	////-------------------------
});
</script>
</body>
</html>