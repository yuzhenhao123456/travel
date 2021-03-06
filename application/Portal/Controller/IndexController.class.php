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
        /*$where=array(
            "a.is_top"=>1,
            'a.user_type'=>1,
            'a.user_status'=>1,
            'a.travel_maker'=>1
        );*/
        //$top_makers=M('users')->field('a.*,b.smeta')->alias('a')->join(C('DB_PREFIX').'posts b on a.story_id=b.id','left')->where($where)->order('a.get_like DESC')->limit('0,3')->select();
        //$this->assign('top_makers',$top_makers);
		$this->assign('nav_class','index');
    	$this->display(":index");
    }
	/**
	 * 定制旅行页
	 */
	public function trip() {
		$id=1;//美国
		$area=M('area')->where(array('id'=>$id))->find();
		$data=M("posts")->alias('a')->join(C('DB_PREFIX').'term_relationships b on a.id=b.object_id','left')->where(array('b.status'=>1,'a.area_id'=>$id,'b.term_id'=>3))->order('b.listorder asc')->select();
		foreach($data as $k=>$v)
		{
			$smeta=json_decode($v['smeta'],true);
			$data[$k]['photo']=sp_get_asset_upload_path($smeta['photo'][0]['url'],true);
		}
		$this->assign('area',$area);
		$this->assign('data',$data);
		$this->assign('nav_class','trip');
		$this->display(":trip");
	}
    //旅行定制师
	public function our_story() {
		$where=array(
			"a.is_top"=>1,
			'a.user_type'=>1,
			'a.user_status'=>1,
			'a.travel_maker'=>1
		);
		$top_makers=M('users')->field('a.*,b.smeta')->alias('a')->join(C('DB_PREFIX').'posts b on a.story_id=b.id','left')->where($where)->order('a.get_like DESC')->select();

		$where1=array(
			'is_top'=>0,
			'user_type'=>1,
			'user_status'=>1,
			'travel_maker'=>1
		);
		$makers=M('users')->where($where1)->order('get_like DESC')->select();
		$this->assign('top_makers',$top_makers);
		$this->assign('makers', $makers);
		$this->display(":our_story");
	}
    //案例故事
	function their_story()
	{
		$this->assign('nav_class','their_story');
		$this->display(":their_story");
	}

	//联系我们
	function contact_us()
	{
		$this->assign('nav_class','contact_us');
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

	/**
	 * Description: destination 精选目的地
	 * Author: Jason
	 */
	function destination()
	{
		$areas=M('area')->where(array('type'=>1))->select();
		$this->assign('areas',$areas);
		$this->display(":destination");
	}

    function wish_map()
    {
        $user=sp_get_current_userid();
        if(!$user)
        {
            $this->error("请先登录");
        }
        $where['a.user']=$user;
        $where['a.user']=$user;
        $list=M('destination_log')->alias('a')->field('a.*,b.area_id,b.city,b.lon,b.lat,b.title,b.smeta,b.excerpt,c.name,c.icon,c.full_name')
            ->join(C('DB_PREFIX').'destination b on a.dest_id=b.id')
            ->join(C('DB_PREFIX').'area c on b.area_id=c.id')
            ->where($where)->select();
        $areas_like=array();
        $areas_been=array();
        $like=0;
        $been=0;
        foreach($list as $k=>$v)
        {
            $smeta=json_decode($v['smeta'],true);
            $list[$k]['img']=sp_get_asset_upload_path($smeta['photo'][0]['url'],true);
            $list[$k]['excerpt']=msubstr($v['excerpt'],0,100);
            if($v['is_like'])
            {
                $like++;
                $areas_like[$v['area_id']]['like']++;
                $areas_like[$v['area_id']]['name']=$v['name'];
                $areas_like[$v['area_id']]['icon']=$v['icon'];
                $areas_like[$v['area_id']]['full_name']=$v['full_name'];
            }

            if($v['is_been'])
            {
                $been++;
                $areas_been[$v['area_id']]['full_name']=$v['full_name'];
                $areas_been[$v['area_id']]['name']=$v['name'];
                $areas_been[$v['area_id']]['icon']=$v['icon'];
                $areas_been[$v['area_id']]['been']++;
            }


        }
        $this->assign('list',$list);
        $this->assign('areas_like',$areas_like);
        $this->assign('areas_been',$areas_been);
        $this->assign('like',$like);
        $this->assign('been',$been);
        $this->display(":wish_map");
    }

    function destination_explore()
    {
		$ids=M("destination")->where(array('status'=>1))->getField('id',true);
		$key=array_rand($ids);
		$data=M("destination")->where('id='.$ids[$key])->find();
		$nation=M("area")->where('id='.$data['area_id'])->find();
		$smeta=json_decode($data['smeta'],true);
		$this->assign("data",$data);
		$this->assign("nation",$nation);
		$this->assign("photos",$smeta['photo']);
        $this->display(":destination_explore");
    }

	function like_destination($id='',$type='0')
	{
		if(!$id)
		{
			$this->error("参数错误");
		}
		$user=sp_get_current_userid();
		if(!$user)
		{
			$this->error("请先登录");
		}
		$where['user']=$user;
		$where['dest_id']=$id;
		$info=M('destination_log')->where($where)->find();
		if($info)
		{
			if($type==0)
			{
				if($info['is_like'])
				{
					$operation='-';
					$info['is_like']=0;
					M('destination_log')->save($info);
					M('users')->where('id='.$user)->setDec('like_num');
					$_SESSION['user']['like_num']--;
				}else{
					$operation='+';
					$info['is_like']=1;
					M('destination_log')->save($info);
					M('users')->where('id='.$user)->setInc('like_num');
					$_SESSION['user']['like_num']++;
				}
			}else{
				if($info['is_been'])
				{
					$operation='-';
					$info['is_been']=0;
					M('destination_log')->save($info);
					M('users')->where('id='.$user)->setDec('been_num');
					$_SESSION['user']['been_num']--;
				}else{
					$operation='+';
					$info['is_been']=1;
					M('destination_log')->save($info);
					M('users')->where('id='.$user)->setInc('been_num');
					$_SESSION['user']['been_num']++;
				}
			}
			$this->ajaxReturn(array('status'=>1,'operation'=>$operation,'type'=>$type));

		}else{
			if($type==0)
			{
				$data=$where;
				$data['is_like']=1;
				$operation='+';
				M('destination_log')->add($data);
				M('users')->where('id='.$user)->setInc('like_num');
				$_SESSION['user']['like_num']++;
			}else{
				$data=$where;
				$data['is_been']=1;
				$operation='+';
				M('destination_log')->add($data);
				M('users')->where('id='.$user)->setInc('been_num');
				$_SESSION['user']['been_num']++;
			}
			$this->ajaxReturn(array('status'=>1,'operation'=>$operation,'type'=>$type));
		}
	}

	function area_data()
	{
		$id=intval(I('get.id'));
		$data=M('area')->where(array('id'=>$id))->find();
		if($data)
		{
			$this->ajaxReturn(array('status'=>1,'data'=>$data));
		}else{
			$this->ajaxReturn(array('status'=>0,'info'=>"无数据，请添加数据"));
		}



	}

	function destination_data()
	{
		$id=intval(I('get.id'));
		$data=M("posts")->alias('a')->join(C('DB_PREFIX').'term_relationships b on a.id=b.object_id','left')->where(array('b.status'=>1,'a.area_id'=>$id,'b.term_id'=>3))->order('b.listorder asc')->select();
		foreach($data as $k=>$v)
		{
			$smeta=json_decode($v['smeta'],true);
			$data[$k]['photo']=sp_get_asset_upload_path($smeta['photo'][0]['url'],true);
		}
		if($data)
		{
			$this->ajaxReturn(array('status'=>1,'data'=>$data));
		}else{
			$this->ajaxReturn(array('status'=>0,'info'=>"无数据，请添加数据"));
		}
	}

	function poi_item()
	{
		$id=intval(I('get.id'));
		$data=M("destination")->where('id='.$id)->find();
		$nation=M('area')->where(array('id'=>$data['area_id']))->getField('name');
		$smeta=json_decode($data['smeta'],true);
		$image=array();
		foreach($smeta['photo'] as $photo)
		{
			$image[]=sp_get_asset_upload_path($photo['url'],true);
		}
		$return=array(
			'id'=>$data['id'],
			'name'=>$data['title'],
			'images'=>$image,
			'desc'=>$data['excerpt'],
			'location'=>$nation.','.$data['city']
		);
		if(sp_is_user_login())
		{
			$user=sp_get_current_userid();
			$info=M('destination_log')->where(array('user'=>$user,'dest_id'=>$id))->find();
			$return['like']=$info['is_like']?true:false;
			$return['been']=$info['is_been']?true:false;
		}else{
			$return['like']=false;
			$return['been']=false;
		}
		$this->ajaxReturn($return);
	}

	function arbitraria()
	{
		$ids=M("destination")->where(array('status'=>1))->getField('id',true);
		$key=array_rand($ids);
		$id=$ids[$key];
		$data=M("destination")->where('id='.$id)->find();
		$nation=M('area')->where(array('id'=>$data['area_id']))->getField('name');
		$smeta=json_decode($data['smeta'],true);
		$image=array();
		foreach($smeta['photo'] as $photo)
		{
			$image[]=sp_get_asset_upload_path($photo['url'],true);
		}
		$return=array(
			'id'=>$data['id'],
			'name'=>$data['title'],
			'images'=>$image,
			'desc'=>$data['excerpt'],
			'location'=>$nation.','.$data['city']
		);
		if(sp_is_user_login())
		{
			$user=sp_get_current_userid();
			$info=M('destination_log')->where(array('user'=>$user,'dest_id'=>$id))->find();
			$return['like']=$info['is_like']?true:false;
			$return['been']=$info['is_been']?true:false;
		}else{
			$return['like']=false;
			$return['been']=false;
		}
		$this->ajaxReturn($return);
	}


}


