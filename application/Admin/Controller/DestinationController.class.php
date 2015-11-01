<?php
// +----------------------------------------------------------------------
// | Author: jason <260658065@qq.com>
// +----------------------------------------------------------------------
namespace Admin\Controller;
use Common\Controller\AdminbaseController;
class DestinationController extends AdminbaseController {
	protected $destination_model;
	protected $area_model;
	
	function _initialize() {
		parent::_initialize();
		$this->destination_model = D("Common/Destination");
		$this->area_model = D("Common/Area");
	}
	function index(){
		$this->_lists();
		$this->_getTree();
		$this->display();
	}
	
	function add(){
		$areas = $this->area_model->order(array("listorder"=>"asc"))->select();
		$area_id = intval(I("get.area_id"));
		$this->_getTree();
		$area=$this->area_model->where("id=$area_id")->find();
		$this->assign("author","1");
		$this->assign("area",$area);
		$this->assign("areas",$areas);
		$this->display();
	}
	
	function add_post(){
		if (IS_POST) {
			if(empty($_POST['post']['area_id'])){
				$this->error("请至少选择一个区域！");
			}
			if(!empty($_POST['photos_alt']) && !empty($_POST['photos_url'])){
				foreach ($_POST['photos_url'] as $key=>$url){
					$photourl=sp_asset_relative_url($url);
					$_POST['smeta']['photo'][]=array("url"=>$photourl,"alt"=>$_POST['photos_alt'][$key]);
				}
			}
			$_POST['smeta']['thumb'] = sp_asset_relative_url($_POST['smeta']['thumb']);
			 
			$_POST['post']['date']=date("Y-m-d H:i:s",time());
			$_POST['post']['post_author']=get_current_admin_id();
			$article=I("post.post");
			$article['smeta']=json_encode($_POST['smeta']);
			$result=$this->destination_model->add($article);
			if ($result) {
				$this->success("添加成功！");
			} else {
				$this->error("添加失败！");
			}
			 
		}
	}
	
	public function edit(){
		$id=  intval(I("get.id"));
		$post=$this->destination_model->where("id=$id")->find();
		$_REQUEST['area_id']=$post['area_id'];
		$this->_getTree();
		$this->assign("post",$post);
		$this->assign("smeta",json_decode($post['smeta'],true));
		$this->display();
	}
	
	public function edit_post(){
		if (IS_POST) {
			if(empty($_POST['post']['area_id'])){
				$this->error("请至少选择一个区域！");
			}
			//$post_id=intval($_POST['post']['id']);
			
			if(!empty($_POST['photos_alt']) && !empty($_POST['photos_url'])){
				foreach ($_POST['photos_url'] as $key=>$url){
					$photourl=sp_asset_relative_url($url);
					$_POST['smeta']['photo'][]=array("url"=>$photourl,"alt"=>$_POST['photos_alt'][$key]);
				}
			}
			//$_POST['smeta']['thumb'] = sp_asset_relative_url($_POST['smeta']['thumb']);
			//unset($_POST['post']['post_author']);
			$article=I("post.post");
			$article['smeta']=json_encode($_POST['smeta']);
			//$article['post_content']=htmlspecialchars_decode($article['post_content']);
			$result=$this->destination_model->save($article);
			if ($result!==false) {
				$this->success("保存成功！");
			} else {
				$this->error("保存失败！");
			}
		}
	}
	
	//排序
	public function listorders() {
		$status = parent::_listorders($this->destination_model);
		if ($status) {
			$this->success("排序更新成功！");
		} else {
			$this->error("排序更新失败！");
		}
	}
	
	private  function _lists($status=1){
		$area_id=0;
		if(!empty($_REQUEST["area_id"])){
			$area_id=intval($_REQUEST["area_id"]);
			$area=$this->area_model->where("id=$area_id")->find();
			$this->assign("area",$area);
			$_GET['area_id']=$area_id;
		}
		
		$where_ands=empty($area_id)?array("a.status=$status"):array("a.area_id = $area_id and a.status=$status");
		
		$fields=array(
				'keyword'  => array("field"=>"city","operator"=>"like"),
		);
		if(IS_POST){
			
			foreach ($fields as $param =>$val){
				if (isset($_POST[$param]) && !empty($_POST[$param])) {
					$operator=$val['operator'];
					$field   =$val['field'];
					$get=$_POST[$param];
					$_GET[$param]=$get;
					if($operator=="like"){
						$get="%$get%";
					}
					array_push($where_ands, "$field $operator '$get'");
				}
			}
		}else{
			foreach ($fields as $param =>$val){
				if (isset($_GET[$param]) && !empty($_GET[$param])) {
					$operator=$val['operator'];
					$field   =$val['field'];
					$get=$_GET[$param];
					if($operator=="like"){
						$get="%$get%";
					}
					array_push($where_ands, "$field $operator '$get'");
				}
			}
		}
		
		$where= join(" and ", $where_ands);
			
			
		$count=$this->destination_model
		->alias("a")
		->join(C ( 'DB_PREFIX' )."area b ON a.area_id = b.id")
		->where($where)
		->count();
			
		$page = $this->page($count, 20);
			
			
		$posts=$this->destination_model
			->field('a.*,b.name')
		->alias("a")
		->join(C ( 'DB_PREFIX' )."area b ON a.area_id = b.id")
		->where($where)
		->limit($page->firstRow . ',' . $page->listRows)
		->order("a.listorder ASC,a.modified DESC")->select();
		$users_obj = M("Users");
		$users_data=$users_obj->field("id,user_nicename")->where("user_status=1 and user_type=1")->select();
		$users=array();
		foreach ($users_data as $u){
			$users[$u['id']]=$u;
		}
    	//$areas = $this->area_model->order(array("id = $area_id"))->getField("id,name",true);
		$this->assign("users",$users);
    	//$this->assign("area",$areas);
		$this->assign("Page", $page->show('Admin'));
		$this->assign("current_page",$page->GetCurrentPage());
		unset($_GET[C('VAR_URL_PARAMS')]);
		$this->assign("formget",$_GET);
		$this->assign("posts",$posts);
	}
	
	private function _getTree(){
		$area_id=empty($_REQUEST['area_id'])?0:intval($_REQUEST['area_id']);
		$result = $this->area_model->order(array("listorder"=>"asc"))->select();
		
		$tree = new \Tree();
		$tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
		$tree->nbsp = '&nbsp;&nbsp;&nbsp;';
		foreach ($result as $r) {
			$r['id']=$r['id'];
			$r['parentid']=$r['pid'];
			$r['selected']=$area_id==$r['id']?"selected":"";
			$array[] = $r;
		}
		
		$tree->init($array);
		$str="<option value='\$id' \$selected>\$spacer\$name</option>";
		$taxonomys = $tree->get_tree(0, $str);
		$this->assign("taxonomys", $taxonomys);
	}
	
	private function _getTermTree($term=array()){
		$result = $this->terms_model->order(array("listorder"=>"asc"))->select();
		
		$tree = new \Tree();
		$tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
		$tree->nbsp = '&nbsp;&nbsp;&nbsp;';
		foreach ($result as $r) {
			$r['str_manage'] = '<a href="' . U("AdminTerm/add", array("parent" => $r['term_id'])) . '">添加子类</a> | <a href="' . U("AdminTerm/edit", array("id" => $r['term_id'])) . '">修改</a> | <a class="J_ajax_del" href="' . U("AdminTerm/delete", array("id" => $r['term_id'])) . '">删除</a> ';
			$r['visit'] = "<a href='#'>访问</a>";
			$r['taxonomys'] = $this->taxonomys[$r['taxonomy']];
			$r['id']=$r['term_id'];
			$r['parentid']=$r['parent'];
			$r['selected']=in_array($r['term_id'], $term)?"selected":"";
			$r['checked'] =in_array($r['term_id'], $term)?"checked":"";
			$array[] = $r;
		}
		
		$tree->init($array);
		$str="<option value='\$id' \$selected>\$spacer\$name</option>";
		$taxonomys = $tree->get_tree(0, $str);
		$this->assign("taxonomys", $taxonomys);
	}
	
	function delete(){
		if(isset($_GET['id'])){
			$id = intval(I("get.id"));
			$data['status']=0;
			if ($this->destination_model->where("id=$id")->delete()) {
				$this->success("删除成功！");
			} else {
				$this->error("删除失败！");
			}
		}
		if(isset($_POST['ids'])){
			$tids=join(",",$_POST['ids']);
			$data['status']=0;
			if ($this->destination_model->where("id in ($tids)")->delete()) {
				$this->success("删除成功！");
			} else {
				$this->error("删除失败！");
			}
		}
	}
	
	function check(){
		if(isset($_POST['ids']) && $_GET["check"]){
			$data["post_status"]=1;
			
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)!==false) {
				$this->success("审核成功！");
			} else {
				$this->error("审核失败！");
			}
		}
		if(isset($_POST['ids']) && $_GET["uncheck"]){
			
			$data["post_status"]=0;
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)) {
				$this->success("取消审核成功！");
			} else {
				$this->error("取消审核失败！");
			}
		}
	}
	
	function top(){
		if(isset($_POST['ids']) && $_GET["top"]){
			$data["istop"]=1;
				
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)!==false) {
				$this->success("置顶成功！");
			} else {
				$this->error("置顶失败！");
			}
		}
		if(isset($_POST['ids']) && $_GET["untop"]){
				
			$data["istop"]=0;
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)) {
				$this->success("取消置顶成功！");
			} else {
				$this->error("取消置顶失败！");
			}
		}
	}
	
	function recommend(){
		if(isset($_POST['ids']) && $_GET["recommend"]){
			$data["recommended"]=1;
	
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)!==false) {
				$this->success("推荐成功！");
			} else {
				$this->error("推荐失败！");
			}
		}
		if(isset($_POST['ids']) && $_GET["unrecommend"]){
	
			$data["recommended"]=0;
			$tids=join(",",$_POST['ids']);
			$objectids=$this->term_relationships_model->field("object_id")->where("tid in ($tids)")->select();
			$ids=array();
			foreach ($objectids as $id){
				$ids[]=$id["object_id"];
			}
			$ids=join(",", $ids);
			if ( $this->posts_model->where("id in ($ids)")->save($data)) {
				$this->success("取消推荐成功！");
			} else {
				$this->error("取消推荐失败！");
			}
		}
	}
	
	function move(){
		if(IS_POST){
			if(isset($_GET['ids']) && isset($_POST['term_id'])){
				$tids=$_GET['ids'];
				if ( $this->term_relationships_model->where("tid in ($tids)")->save($_POST) !== false) {
					$this->success("移动成功！");
				} else {
					$this->error("移动失败！");
				}
			}
		}else{
			$parentid = intval(I("get.parent"));
			
			$tree = new \Tree();
			$tree->icon = array('&nbsp;&nbsp;&nbsp;│ ', '&nbsp;&nbsp;&nbsp;├─ ', '&nbsp;&nbsp;&nbsp;└─ ');
			$tree->nbsp = '&nbsp;&nbsp;&nbsp;';
			$terms = $this->terms_model->order(array("path"=>"asc"))->select();
			$new_terms=array();
			foreach ($terms as $r) {
				$r['id']=$r['term_id'];
				$r['parentid']=$r['parent'];
				$new_terms[] = $r;
			}
			$tree->init($new_terms);
			$tree_tpl="<option value='\$id'>\$spacer\$name</option>";
			$tree=$tree->get_tree(0,$tree_tpl);
			 
			$this->assign("terms_tree",$tree);
			$this->display();
		}
	}
	
	function recyclebin(){
		$this->_lists(0);
		$this->_getTree();
		$this->display();
	}
	
	function clean(){
		if(isset($_POST['ids'])){
			$ids = implode(",", $_POST['ids']);
			$tids= implode(",", array_keys($_POST['ids']));
			$data=array("post_status"=>"0");
			$status=$this->term_relationships_model->where("tid in ($tids)")->delete();
			if($status!==false){
				foreach ($_POST['ids'] as $post_id){
					$post_id=intval($post_id);
					$count=$this->term_relationships_model->where(array("object_id"=>$post_id))->count();
					if(empty($count)){
						$status=$this->posts_model->where(array("id"=>$post_id))->delete();
					}
				}
				
			}
			
			if ($status!==false) {
				$this->success("删除成功！");
			} else {
				$this->error("删除失败！");
			}
		}else{
			if(isset($_GET['id'])){
				$id = intval(I("get.id"));
				$tid = intval(I("get.tid"));
				$status=$this->term_relationships_model->where("tid = $tid")->delete();
				if($status!==false){
					$count=$this->term_relationships_model->where(array("object_id"=>$id))->count();
					if(empty($count)){
						$status=$this->posts_model->where("id=$id")->delete();
					}
					
				}
				if ($status!==false) {
					$this->success("删除成功！");
				} else {
					$this->error("删除失败！");
				}
			}
		}
	}
	
	function restore(){
		if(isset($_GET['id'])){
			$id = intval(I("get.id"));
			$data=array("tid"=>$id,"status"=>"1");
			if ($this->term_relationships_model->save($data)) {
				$this->success("还原成功！");
			} else {
				$this->error("还原失败！");
			}
		}
	}
	
}