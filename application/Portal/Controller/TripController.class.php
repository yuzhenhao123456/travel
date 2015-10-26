<?php

// Author: jason.yu
namespace Portal\Controller;
use Common\Controller\HomeBaseController; 
/**
 * 定制旅行页
 */
class TripController extends HomeBaseController {
	

	public function index() {
    	$this->display(":trip");
    }   

}


