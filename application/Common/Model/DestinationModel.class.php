<?php
namespace Common\Model;
use Common\Model\CommonModel;
class DestinationModel extends CommonModel {
	/*
	 * 目的地表
	 */
	
	protected $_auto = array (
		array ('date', 'mGetDate', 1, 'callback' ), 	// 增加的时候调用回调函数
		array ('modified', 'mGetDate', 2, 'callback' )
	);
	// 获取当前时间
	function mGetDate() {
		return date ( 'Y-m-d H:i:s' );
	}
	
	protected function _before_write(&$data) {
		parent::_before_write($data);
	}
}