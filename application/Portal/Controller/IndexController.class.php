<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2014 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Dean <zxxjjforever@163.com>
// +----------------------------------------------------------------------
namespace Portal\Controller;
use Common\Controller\HomeBaseController; 
/**
 * 首页
 */
class IndexController extends HomeBaseController {

	/**
	 * Description: index 首页
	 * Author: Jason
	 */
	public function index() {
    	$this->display(":index");
    }
	/**
	 * 定制旅行页
	 */
	public function trip() {
		$this->display(":trip");
	}
    //旅行定制师
	public function our_story() {
		$where=array(
			'a.is_top'=>1,
			'a.user_type'=>1,
			'a.user_status'=>1
		);
		$top_makers=M('users')->field('a.*,b.smeta')->alias('a')->join(C('DB_PREFIX').'posts b on a.story_id=b.id','left')->where($where)->order('a.get_like DESC')->select();
		$where1=array(
			'is_top'=>0,
			'user_type'=>1,
			'user_status'=>1
		);
		$makers=M('users')->where($where)->order('get_like DESC')->select();
		$this->assign('top_makers',$top_makers);
		$this->assign('makers', $makers);
		$this->display(":our_story");
	}
    //案例故事
	function their_story()
	{

		$this->display(":their_story");
	}

	//联系我们
	function contact_us()
	{
		$this->display(":contact_us");
	}

	//故事详情页
	function stories()
	{
		$id=intval($_GET['id']);
		$article=sp_sql_post($id,'');
		if(empty($article)){
			header('HTTP/1.1 404 Not Found');
			header('Status:404 Not Found');
			if(sp_template_file_exists(MODULE_NAME."/404")){
				$this->display(":404");
			}

			return ;
		}
		$article_id=$article['object_id'];

		$should_change_post_hits=sp_check_user_action("posts$article_id",1,true);
		if($should_change_post_hits){
			$posts_model=M("Posts");
			$posts_model->save(array("id"=>$article_id,"post_hits"=>array("exp","post_hits+1")));
		}
		$termid=$article['term_id'];
		$smeta=json_decode($article['smeta'],true);
		$content_data=sp_content_page($article['post_content']);
		$article['post_content']=$content_data['content'];
		$this->assign("page",$content_data['page']);
		$this->assign($article);
		$this->assign("smeta",$smeta);

		$this->display(":stories");
	}

}


