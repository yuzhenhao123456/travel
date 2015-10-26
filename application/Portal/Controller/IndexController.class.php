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
		$term=1;
		$this->assign($term);
		$this->assign('cat_id', intval($_GET['id']));
		$this->display(":our_story");
	}
    //案例故事
	function their_story()
	{
		$term=2;
		$this->assign($term);
		$this->assign('cat_id', intval($_GET['id']));
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
		$this->display(":stories");
	}

}


