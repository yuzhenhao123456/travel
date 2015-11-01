<?php
namespace Common\Model;
use Common\Model\CommonModel;
class AreaModel extends CommonModel {
	
	/*
	 * term_id category name description pid path status
	 */
	
	//自动验证
	protected $_validate = array(
			//array(验证字段,验证规则,错误提示,验证条件,附加规则,验证时间)
			array('name', 'require', '地区名称不能为空！', 1, 'regex', 3),
	);
	
	protected function _after_insert($data,$options){
		parent::_after_insert($data,$options);
		$id=$data['id'];
		$parent_id=$data['pid'];
		if($parent_id==0){
			$d['path']="0-$id";
		}else{
			$parent=$this->where("id=$parent_id")->find();
			$d['path']=$parent['path'].'-'.$id;
		}
		$this->where("id=$id")->save($d);
	}
	
	protected function _after_update($data,$options){
		parent::_after_update($data,$options);
		if(isset($data['pid'])){
			$id=$data['id'];
			$parent_id=$data['pid'];
			if($parent_id==0){
				$d['path']="0-$id";
			}else{
				$parent=$this->where("id=".$parent_id)->find();
				$d['path']=$parent['path'].'-'.$id;
			}
			$result=$this->where("id=$id")->save($d);
			if($result){
				$children=$this->where(array("pid"=>$id))->select();
				foreach ($children as $child){
					$this->where(array("id"=>$child['id']))->save(array("pid"=>$id,"id"=>$child['id']));
				}
			}
		}
	}
	
	protected function _before_write(&$data) {
		parent::_before_write($data);
	}
	

}