/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : travel

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2015-10-30 07:52:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for y_ad
-- ----------------------------
DROP TABLE IF EXISTS `y_ad`;
CREATE TABLE `y_ad` (
  `ad_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '广告id',
  `ad_name` varchar(255) NOT NULL,
  `ad_content` text,
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1显示，0不显示',
  PRIMARY KEY (`ad_id`),
  KEY `ad_name` (`ad_name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_ad
-- ----------------------------

-- ----------------------------
-- Table structure for y_asset
-- ----------------------------
DROP TABLE IF EXISTS `y_asset`;
CREATE TABLE `y_asset` (
  `aid` bigint(20) NOT NULL AUTO_INCREMENT,
  `key` varchar(50) NOT NULL,
  `filename` varchar(50) DEFAULT NULL,
  `filesize` int(11) DEFAULT NULL,
  `filepath` varchar(200) NOT NULL,
  `uploadtime` int(11) NOT NULL,
  `status` int(2) NOT NULL DEFAULT '1',
  `meta` text,
  `suffix` varchar(50) DEFAULT NULL,
  `download_times` int(6) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_asset
-- ----------------------------

-- ----------------------------
-- Table structure for y_auth_access
-- ----------------------------
DROP TABLE IF EXISTS `y_auth_access`;
CREATE TABLE `y_auth_access` (
  `role_id` mediumint(8) unsigned NOT NULL COMMENT '角色',
  `rule_name` varchar(255) NOT NULL COMMENT '规则唯一英文标识,全小写',
  `type` varchar(30) DEFAULT NULL COMMENT '权限规则分类，请加应用前缀,如admin_',
  KEY `role_id` (`role_id`),
  KEY `rule_name` (`rule_name`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_auth_access
-- ----------------------------
INSERT INTO `y_auth_access` VALUES ('2', 'admin/content/default', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'api/guestbookadmin/index', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'api/guestbookadmin/delete', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/index', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/listorders', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/top', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/recommend', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/move', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/check', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/delete', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/edit', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/edit_post', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/add', 'admin_url');
INSERT INTO `y_auth_access` VALUES ('2', 'portal/adminpost/add_post', 'admin_url');

-- ----------------------------
-- Table structure for y_auth_rule
-- ----------------------------
DROP TABLE IF EXISTS `y_auth_rule`;
CREATE TABLE `y_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '规则id,自增主键',
  `module` varchar(20) NOT NULL COMMENT '规则所属module',
  `type` varchar(30) NOT NULL DEFAULT '1' COMMENT '权限规则分类，请加应用前缀,如admin_',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '规则唯一英文标识,全小写',
  `param` varchar(255) DEFAULT NULL COMMENT '额外url参数',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '规则中文描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有效(0:无效,1:有效)',
  `condition` varchar(300) NOT NULL DEFAULT '' COMMENT '规则附加条件',
  PRIMARY KEY (`id`),
  KEY `module` (`module`,`status`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=162 DEFAULT CHARSET=utf8 COMMENT='权限规则表';

-- ----------------------------
-- Records of y_auth_rule
-- ----------------------------
INSERT INTO `y_auth_rule` VALUES ('1', 'Admin', 'admin_url', 'admin/content/default', null, '内容管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('2', 'Api', 'admin_url', 'api/guestbookadmin/index', null, '所有留言', '1', '');
INSERT INTO `y_auth_rule` VALUES ('3', 'Api', 'admin_url', 'api/guestbookadmin/delete', null, '删除网站留言', '1', '');
INSERT INTO `y_auth_rule` VALUES ('4', 'Comment', 'admin_url', 'comment/commentadmin/index', null, '评论管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('5', 'Comment', 'admin_url', 'comment/commentadmin/delete', null, '删除评论', '1', '');
INSERT INTO `y_auth_rule` VALUES ('6', 'Comment', 'admin_url', 'comment/commentadmin/check', null, '评论审核', '1', '');
INSERT INTO `y_auth_rule` VALUES ('7', 'Portal', 'admin_url', 'portal/adminpost/index', null, '文章管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('8', 'Portal', 'admin_url', 'portal/adminpost/listorders', null, '文章排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('9', 'Portal', 'admin_url', 'portal/adminpost/top', null, '文章置顶', '1', '');
INSERT INTO `y_auth_rule` VALUES ('10', 'Portal', 'admin_url', 'portal/adminpost/recommend', null, '文章推荐', '1', '');
INSERT INTO `y_auth_rule` VALUES ('11', 'Portal', 'admin_url', 'portal/adminpost/move', null, '批量移动', '1', '');
INSERT INTO `y_auth_rule` VALUES ('12', 'Portal', 'admin_url', 'portal/adminpost/check', null, '文章审核', '1', '');
INSERT INTO `y_auth_rule` VALUES ('13', 'Portal', 'admin_url', 'portal/adminpost/delete', null, '删除文章', '1', '');
INSERT INTO `y_auth_rule` VALUES ('14', 'Portal', 'admin_url', 'portal/adminpost/edit', null, '编辑文章', '1', '');
INSERT INTO `y_auth_rule` VALUES ('15', 'Portal', 'admin_url', 'portal/adminpost/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('16', 'Portal', 'admin_url', 'portal/adminpost/add', null, '添加文章', '1', '');
INSERT INTO `y_auth_rule` VALUES ('17', 'Portal', 'admin_url', 'portal/adminpost/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('18', 'Portal', 'admin_url', 'portal/adminterm/index', null, '分类管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('19', 'Portal', 'admin_url', 'portal/adminterm/listorders', null, '文章分类排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('20', 'Portal', 'admin_url', 'portal/adminterm/delete', null, '删除分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('21', 'Portal', 'admin_url', 'portal/adminterm/edit', null, '编辑分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('22', 'Portal', 'admin_url', 'portal/adminterm/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('23', 'Portal', 'admin_url', 'portal/adminterm/add', null, '添加分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('24', 'Portal', 'admin_url', 'portal/adminterm/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('25', 'Portal', 'admin_url', 'portal/adminpage/index', null, '页面管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('26', 'Portal', 'admin_url', 'portal/adminpage/listorders', null, '页面排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('27', 'Portal', 'admin_url', 'portal/adminpage/delete', null, '删除页面', '1', '');
INSERT INTO `y_auth_rule` VALUES ('28', 'Portal', 'admin_url', 'portal/adminpage/edit', null, '编辑页面', '1', '');
INSERT INTO `y_auth_rule` VALUES ('29', 'Portal', 'admin_url', 'portal/adminpage/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('30', 'Portal', 'admin_url', 'portal/adminpage/add', null, '添加页面', '1', '');
INSERT INTO `y_auth_rule` VALUES ('31', 'Portal', 'admin_url', 'portal/adminpage/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('32', 'Admin', 'admin_url', 'admin/recycle/default', null, '回收站', '1', '');
INSERT INTO `y_auth_rule` VALUES ('33', 'Portal', 'admin_url', 'portal/adminpost/recyclebin', null, '文章回收', '1', '');
INSERT INTO `y_auth_rule` VALUES ('34', 'Portal', 'admin_url', 'portal/adminpost/restore', null, '文章还原', '1', '');
INSERT INTO `y_auth_rule` VALUES ('35', 'Portal', 'admin_url', 'portal/adminpost/clean', null, '彻底删除', '1', '');
INSERT INTO `y_auth_rule` VALUES ('36', 'Portal', 'admin_url', 'portal/adminpage/recyclebin', null, '页面回收', '1', '');
INSERT INTO `y_auth_rule` VALUES ('37', 'Portal', 'admin_url', 'portal/adminpage/clean', null, '彻底删除', '1', '');
INSERT INTO `y_auth_rule` VALUES ('38', 'Portal', 'admin_url', 'portal/adminpage/restore', null, '页面还原', '1', '');
INSERT INTO `y_auth_rule` VALUES ('39', 'Admin', 'admin_url', 'admin/extension/default', null, '扩展工具', '1', '');
INSERT INTO `y_auth_rule` VALUES ('40', 'Admin', 'admin_url', 'admin/backup/default', null, '备份管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('41', 'Admin', 'admin_url', 'admin/backup/restore', null, '数据还原', '1', '');
INSERT INTO `y_auth_rule` VALUES ('42', 'Admin', 'admin_url', 'admin/backup/index', null, '数据备份', '1', '');
INSERT INTO `y_auth_rule` VALUES ('43', 'Admin', 'admin_url', 'admin/backup/index_post', null, '提交数据备份', '1', '');
INSERT INTO `y_auth_rule` VALUES ('44', 'Admin', 'admin_url', 'admin/backup/download', null, '下载备份', '1', '');
INSERT INTO `y_auth_rule` VALUES ('45', 'Admin', 'admin_url', 'admin/backup/del_backup', null, '删除备份', '1', '');
INSERT INTO `y_auth_rule` VALUES ('46', 'Admin', 'admin_url', 'admin/backup/import', null, '数据备份导入', '1', '');
INSERT INTO `y_auth_rule` VALUES ('47', 'Admin', 'admin_url', 'admin/plugin/index', null, '插件管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('48', 'Admin', 'admin_url', 'admin/plugin/toggle', null, '插件启用切换', '1', '');
INSERT INTO `y_auth_rule` VALUES ('49', 'Admin', 'admin_url', 'admin/plugin/setting', null, '插件设置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('50', 'Admin', 'admin_url', 'admin/plugin/setting_post', null, '插件设置提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('51', 'Admin', 'admin_url', 'admin/plugin/install', null, '插件安装', '1', '');
INSERT INTO `y_auth_rule` VALUES ('52', 'Admin', 'admin_url', 'admin/plugin/uninstall', null, '插件卸载', '1', '');
INSERT INTO `y_auth_rule` VALUES ('53', 'Admin', 'admin_url', 'admin/slide/default', null, '幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('54', 'Admin', 'admin_url', 'admin/slide/index', null, '幻灯片管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('55', 'Admin', 'admin_url', 'admin/slide/listorders', null, '幻灯片排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('56', 'Admin', 'admin_url', 'admin/slide/toggle', null, '幻灯片显示切换', '1', '');
INSERT INTO `y_auth_rule` VALUES ('57', 'Admin', 'admin_url', 'admin/slide/delete', null, '删除幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('58', 'Admin', 'admin_url', 'admin/slide/edit', null, '编辑幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('59', 'Admin', 'admin_url', 'admin/slide/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('60', 'Admin', 'admin_url', 'admin/slide/add', null, '添加幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('61', 'Admin', 'admin_url', 'admin/slide/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('62', 'Admin', 'admin_url', 'admin/slidecat/index', null, '幻灯片分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('63', 'Admin', 'admin_url', 'admin/slidecat/delete', null, '删除分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('64', 'Admin', 'admin_url', 'admin/slidecat/edit', null, '编辑分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('65', 'Admin', 'admin_url', 'admin/slidecat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('66', 'Admin', 'admin_url', 'admin/slidecat/add', null, '添加分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('67', 'Admin', 'admin_url', 'admin/slidecat/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('68', 'Admin', 'admin_url', 'admin/ad/index', null, '网站广告', '1', '');
INSERT INTO `y_auth_rule` VALUES ('69', 'Admin', 'admin_url', 'admin/ad/toggle', null, '广告显示切换', '1', '');
INSERT INTO `y_auth_rule` VALUES ('70', 'Admin', 'admin_url', 'admin/ad/delete', null, '删除广告', '1', '');
INSERT INTO `y_auth_rule` VALUES ('71', 'Admin', 'admin_url', 'admin/ad/edit', null, '编辑广告', '1', '');
INSERT INTO `y_auth_rule` VALUES ('72', 'Admin', 'admin_url', 'admin/ad/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('73', 'Admin', 'admin_url', 'admin/ad/add', null, '添加广告', '1', '');
INSERT INTO `y_auth_rule` VALUES ('74', 'Admin', 'admin_url', 'admin/ad/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('75', 'Admin', 'admin_url', 'admin/link/index', null, '友情链接', '1', '');
INSERT INTO `y_auth_rule` VALUES ('76', 'Admin', 'admin_url', 'admin/link/listorders', null, '友情链接排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('77', 'Admin', 'admin_url', 'admin/link/toggle', null, '友链显示切换', '1', '');
INSERT INTO `y_auth_rule` VALUES ('78', 'Admin', 'admin_url', 'admin/link/delete', null, '删除友情链接', '1', '');
INSERT INTO `y_auth_rule` VALUES ('79', 'Admin', 'admin_url', 'admin/link/edit', null, '编辑友情链接', '1', '');
INSERT INTO `y_auth_rule` VALUES ('80', 'Admin', 'admin_url', 'admin/link/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('81', 'Admin', 'admin_url', 'admin/link/add', null, '添加友情链接', '1', '');
INSERT INTO `y_auth_rule` VALUES ('82', 'Admin', 'admin_url', 'admin/link/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('83', 'Api', 'admin_url', 'api/oauthadmin/setting', null, '第三方登陆', '1', '');
INSERT INTO `y_auth_rule` VALUES ('84', 'Api', 'admin_url', 'api/oauthadmin/setting_post', null, '提交设置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('85', 'Admin', 'admin_url', 'admin/menu/default', null, '菜单管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('86', 'Admin', 'admin_url', 'admin/navcat/default1', null, '前台菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('87', 'Admin', 'admin_url', 'admin/nav/index', null, '菜单管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('88', 'Admin', 'admin_url', 'admin/nav/listorders', null, '前台导航排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('89', 'Admin', 'admin_url', 'admin/nav/delete', null, '删除菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('90', 'Admin', 'admin_url', 'admin/nav/edit', null, '编辑菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('91', 'Admin', 'admin_url', 'admin/nav/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('92', 'Admin', 'admin_url', 'admin/nav/add', null, '添加菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('93', 'Admin', 'admin_url', 'admin/nav/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('94', 'Admin', 'admin_url', 'admin/navcat/index', null, '菜单分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('95', 'Admin', 'admin_url', 'admin/navcat/delete', null, '删除分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('96', 'Admin', 'admin_url', 'admin/navcat/edit', null, '编辑分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('97', 'Admin', 'admin_url', 'admin/navcat/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('98', 'Admin', 'admin_url', 'admin/navcat/add', null, '添加分类', '1', '');
INSERT INTO `y_auth_rule` VALUES ('99', 'Admin', 'admin_url', 'admin/navcat/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('100', 'Admin', 'admin_url', 'admin/menu/index', null, '后台菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('101', 'Admin', 'admin_url', 'admin/menu/add', null, '添加菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('102', 'Admin', 'admin_url', 'admin/menu/add_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('103', 'Admin', 'admin_url', 'admin/menu/listorders', null, '后台菜单排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('104', 'Admin', 'admin_url', 'admin/menu/export_menu', null, '菜单备份', '1', '');
INSERT INTO `y_auth_rule` VALUES ('105', 'Admin', 'admin_url', 'admin/menu/edit', null, '编辑菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('106', 'Admin', 'admin_url', 'admin/menu/edit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('107', 'Admin', 'admin_url', 'admin/menu/delete', null, '删除菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('108', 'Admin', 'admin_url', 'admin/menu/lists', null, '所有菜单', '1', '');
INSERT INTO `y_auth_rule` VALUES ('109', 'Admin', 'admin_url', 'admin/setting/default', null, '设置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('110', 'Admin', 'admin_url', 'admin/setting/userdefault', null, '个人信息', '1', '');
INSERT INTO `y_auth_rule` VALUES ('111', 'Admin', 'admin_url', 'admin/user/userinfo', null, '修改信息', '1', '');
INSERT INTO `y_auth_rule` VALUES ('112', 'Admin', 'admin_url', 'admin/user/userinfo_post', null, '修改信息提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('113', 'Admin', 'admin_url', 'admin/setting/password', null, '修改密码', '1', '');
INSERT INTO `y_auth_rule` VALUES ('114', 'Admin', 'admin_url', 'admin/setting/password_post', null, '提交修改', '1', '');
INSERT INTO `y_auth_rule` VALUES ('115', 'Admin', 'admin_url', 'admin/setting/site', null, '网站信息', '1', '');
INSERT INTO `y_auth_rule` VALUES ('116', 'Admin', 'admin_url', 'admin/setting/site_post', null, '提交修改', '1', '');
INSERT INTO `y_auth_rule` VALUES ('117', 'Admin', 'admin_url', 'admin/route/index', null, '路由列表', '1', '');
INSERT INTO `y_auth_rule` VALUES ('118', 'Admin', 'admin_url', 'admin/route/add', null, '路由添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('119', 'Admin', 'admin_url', 'admin/route/add_post', null, '路由添加提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('120', 'Admin', 'admin_url', 'admin/route/edit', null, '路由编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('121', 'Admin', 'admin_url', 'admin/route/edit_post', null, '路由编辑提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('122', 'Admin', 'admin_url', 'admin/route/delete', null, '路由删除', '1', '');
INSERT INTO `y_auth_rule` VALUES ('123', 'Admin', 'admin_url', 'admin/route/ban', null, '路由禁止', '1', '');
INSERT INTO `y_auth_rule` VALUES ('124', 'Admin', 'admin_url', 'admin/route/open', null, '路由启用', '1', '');
INSERT INTO `y_auth_rule` VALUES ('125', 'Admin', 'admin_url', 'admin/route/listorders', null, '路由排序', '1', '');
INSERT INTO `y_auth_rule` VALUES ('126', 'Admin', 'admin_url', 'admin/mailer/default', null, '邮箱配置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('127', 'Admin', 'admin_url', 'admin/mailer/index', null, 'SMTP配置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('128', 'Admin', 'admin_url', 'admin/mailer/index_post', null, '提交配置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('129', 'Admin', 'admin_url', 'admin/mailer/active', null, '邮件模板', '1', '');
INSERT INTO `y_auth_rule` VALUES ('130', 'Admin', 'admin_url', 'admin/mailer/active_post', null, '提交模板', '1', '');
INSERT INTO `y_auth_rule` VALUES ('131', 'Admin', 'admin_url', 'admin/setting/clearcache', null, '清除缓存', '1', '');
INSERT INTO `y_auth_rule` VALUES ('132', 'User', 'admin_url', 'user/indexadmin/default', null, '用户管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('133', 'User', 'admin_url', 'user/indexadmin/default1', null, '用户组', '1', '');
INSERT INTO `y_auth_rule` VALUES ('134', 'User', 'admin_url', 'user/indexadmin/index', null, '本站用户', '1', '');
INSERT INTO `y_auth_rule` VALUES ('135', 'User', 'admin_url', 'user/indexadmin/ban', null, '拉黑会员', '1', '');
INSERT INTO `y_auth_rule` VALUES ('136', 'User', 'admin_url', 'user/indexadmin/cancelban', null, '启用会员', '1', '');
INSERT INTO `y_auth_rule` VALUES ('137', 'User', 'admin_url', 'user/oauthadmin/index', null, '第三方用户', '1', '');
INSERT INTO `y_auth_rule` VALUES ('138', 'User', 'admin_url', 'user/oauthadmin/delete', null, '第三方用户解绑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('139', 'User', 'admin_url', 'user/indexadmin/default3', null, '管理组', '1', '');
INSERT INTO `y_auth_rule` VALUES ('140', 'Admin', 'admin_url', 'admin/rbac/index', null, '角色管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('141', 'Admin', 'admin_url', 'admin/rbac/member', null, '成员管理', '1', '');
INSERT INTO `y_auth_rule` VALUES ('142', 'Admin', 'admin_url', 'admin/rbac/authorize', null, '权限设置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('143', 'Admin', 'admin_url', 'admin/rbac/authorize_post', null, '提交设置', '1', '');
INSERT INTO `y_auth_rule` VALUES ('144', 'Admin', 'admin_url', 'admin/rbac/roleedit', null, '编辑角色', '1', '');
INSERT INTO `y_auth_rule` VALUES ('145', 'Admin', 'admin_url', 'admin/rbac/roleedit_post', null, '提交编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('146', 'Admin', 'admin_url', 'admin/rbac/roledelete', null, '删除角色', '1', '');
INSERT INTO `y_auth_rule` VALUES ('147', 'Admin', 'admin_url', 'admin/rbac/roleadd', null, '添加角色', '1', '');
INSERT INTO `y_auth_rule` VALUES ('148', 'Admin', 'admin_url', 'admin/rbac/roleadd_post', null, '提交添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('149', 'Admin', 'admin_url', 'admin/user/index', null, '管理员', '1', '');
INSERT INTO `y_auth_rule` VALUES ('150', 'Admin', 'admin_url', 'admin/user/delete', null, '删除管理员', '1', '');
INSERT INTO `y_auth_rule` VALUES ('151', 'Admin', 'admin_url', 'admin/user/edit', null, '管理员编辑', '1', '');
INSERT INTO `y_auth_rule` VALUES ('152', 'Admin', 'admin_url', 'admin/user/edit_post', null, '编辑提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('153', 'Admin', 'admin_url', 'admin/user/add', null, '管理员添加', '1', '');
INSERT INTO `y_auth_rule` VALUES ('154', 'Admin', 'admin_url', 'admin/user/add_post', null, '添加提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('155', 'Admin', 'admin_url', 'admin/plugin/update', null, '插件更新', '1', '');
INSERT INTO `y_auth_rule` VALUES ('156', 'Admin', 'admin_url', 'admin/storage/index', null, '文件存储', '1', '');
INSERT INTO `y_auth_rule` VALUES ('157', 'Admin', 'admin_url', 'admin/storage/setting_post', null, '文件存储设置提交', '1', '');
INSERT INTO `y_auth_rule` VALUES ('158', 'Admin', 'admin_url', 'admin/slide/ban', null, '禁用幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('159', 'Admin', 'admin_url', 'admin/slide/cancelban', null, '启用幻灯片', '1', '');
INSERT INTO `y_auth_rule` VALUES ('160', 'Admin', 'admin_url', 'admin/user/ban', null, '禁用管理员', '1', '');
INSERT INTO `y_auth_rule` VALUES ('161', 'Admin', 'admin_url', 'admin/user/cancelban', null, '启用管理员', '1', '');

-- ----------------------------
-- Table structure for y_comments
-- ----------------------------
DROP TABLE IF EXISTS `y_comments`;
CREATE TABLE `y_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_table` varchar(100) NOT NULL COMMENT '评论内容所在表，不带表前缀',
  `post_id` int(11) unsigned NOT NULL DEFAULT '0',
  `url` varchar(255) DEFAULT NULL COMMENT '原文地址',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '发表评论的用户id',
  `to_uid` int(11) NOT NULL DEFAULT '0' COMMENT '被评论的用户id',
  `full_name` varchar(50) DEFAULT NULL COMMENT '评论者昵称',
  `email` varchar(255) DEFAULT NULL COMMENT '评论者邮箱',
  `createtime` datetime NOT NULL DEFAULT '2000-01-01 00:00:00',
  `content` text NOT NULL COMMENT '评论内容',
  `type` smallint(1) NOT NULL DEFAULT '1' COMMENT '评论类型；1实名评论',
  `parentid` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '被回复的评论id',
  `path` varchar(500) DEFAULT NULL,
  `status` smallint(1) NOT NULL DEFAULT '1' COMMENT '状态，1已审核，0未审核',
  PRIMARY KEY (`id`),
  KEY `comment_post_ID` (`post_id`),
  KEY `comment_approved_date_gmt` (`status`),
  KEY `comment_parent` (`parentid`),
  KEY `table_id_status` (`post_table`,`post_id`,`status`),
  KEY `createtime` (`createtime`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_comments
-- ----------------------------

-- ----------------------------
-- Table structure for y_common_action_log
-- ----------------------------
DROP TABLE IF EXISTS `y_common_action_log`;
CREATE TABLE `y_common_action_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` bigint(20) DEFAULT '0' COMMENT '用户id',
  `object` varchar(100) DEFAULT NULL COMMENT '访问对象的id,格式：不带前缀的表名+id;如posts1表示xx_posts表里id为1的记录',
  `action` varchar(50) DEFAULT NULL COMMENT '操作名称；格式规定为：应用名+控制器+操作名；也可自己定义格式只要不发生冲突且惟一；',
  `count` int(11) DEFAULT '0' COMMENT '访问次数',
  `last_time` int(11) DEFAULT '0' COMMENT '最后访问的时间戳',
  `ip` varchar(15) DEFAULT NULL COMMENT '访问者最后访问ip',
  PRIMARY KEY (`id`),
  KEY `user_object_action` (`user`,`object`,`action`),
  KEY `user_object_action_ip` (`user`,`object`,`action`,`ip`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_common_action_log
-- ----------------------------
INSERT INTO `y_common_action_log` VALUES ('1', '0', 'posts1', 'Portal-Article-index', '1', '1446122118', '127.0.0.1');
INSERT INTO `y_common_action_log` VALUES ('2', '0', 'posts1', 'Portal-Index-stories', '3', '1446140256', '127.0.0.1');

-- ----------------------------
-- Table structure for y_guestbook
-- ----------------------------
DROP TABLE IF EXISTS `y_guestbook`;
CREATE TABLE `y_guestbook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) NOT NULL COMMENT '留言者姓名',
  `email` varchar(100) NOT NULL COMMENT '留言者邮箱',
  `title` varchar(255) DEFAULT NULL COMMENT '留言标题',
  `msg` text NOT NULL COMMENT '留言内容',
  `createtime` datetime NOT NULL,
  `status` smallint(2) NOT NULL DEFAULT '1',
  `mobile` varchar(15) DEFAULT NULL COMMENT '手机号',
  `day` int(5) DEFAULT '0' COMMENT '天数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_guestbook
-- ----------------------------
INSERT INTO `y_guestbook` VALUES ('1', '俞震浩', '', '法国、巴黎', '', '2015-10-28 21:06:24', '1', '15858177440', '0');
INSERT INTO `y_guestbook` VALUES ('2', 'jason', '', '英国', '', '2015-10-28 22:04:35', '1', '15858177440', '8');

-- ----------------------------
-- Table structure for y_links
-- ----------------------------
DROP TABLE IF EXISTS `y_links`;
CREATE TABLE `y_links` (
  `link_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `link_url` varchar(255) NOT NULL COMMENT '友情链接地址',
  `link_name` varchar(255) NOT NULL COMMENT '友情链接名称',
  `link_image` varchar(255) DEFAULT NULL COMMENT '友情链接图标',
  `link_target` varchar(25) NOT NULL DEFAULT '_blank' COMMENT '友情链接打开方式',
  `link_description` text NOT NULL COMMENT '友情链接描述',
  `link_status` int(2) NOT NULL DEFAULT '1',
  `link_rating` int(11) NOT NULL DEFAULT '0' COMMENT '友情链接评级',
  `link_rel` varchar(255) DEFAULT '',
  `listorder` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`link_id`),
  KEY `link_visible` (`link_status`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_links
-- ----------------------------

-- ----------------------------
-- Table structure for y_menu
-- ----------------------------
DROP TABLE IF EXISTS `y_menu`;
CREATE TABLE `y_menu` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `parentid` smallint(6) unsigned NOT NULL DEFAULT '0',
  `app` char(20) NOT NULL COMMENT '应用名称app',
  `model` char(20) NOT NULL COMMENT '控制器',
  `action` char(20) NOT NULL COMMENT '操作名称',
  `data` char(50) NOT NULL COMMENT '额外参数',
  `type` tinyint(1) NOT NULL DEFAULT '0' COMMENT '菜单类型  1：权限认证+菜单；0：只作为菜单',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '状态，1显示，0不显示',
  `name` varchar(50) NOT NULL COMMENT '菜单名称',
  `icon` varchar(50) DEFAULT NULL COMMENT '菜单图标',
  `remark` varchar(255) NOT NULL COMMENT '备注',
  `listorder` smallint(6) unsigned NOT NULL DEFAULT '0' COMMENT '排序ID',
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `parentid` (`parentid`),
  KEY `model` (`model`)
) ENGINE=MyISAM AUTO_INCREMENT=162 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_menu
-- ----------------------------
INSERT INTO `y_menu` VALUES ('1', '0', 'Admin', 'Content', 'default', '', '0', '1', '内容管理', 'th', '', '30');
INSERT INTO `y_menu` VALUES ('2', '1', 'Api', 'Guestbookadmin', 'index', '', '1', '1', '所有留言', '', '', '0');
INSERT INTO `y_menu` VALUES ('3', '2', 'Api', 'Guestbookadmin', 'delete', '', '1', '0', '删除网站留言', '', '', '0');
INSERT INTO `y_menu` VALUES ('4', '1', 'Comment', 'Commentadmin', 'index', '', '1', '0', '评论管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('5', '4', 'Comment', 'Commentadmin', 'delete', '', '1', '0', '删除评论', '', '', '0');
INSERT INTO `y_menu` VALUES ('6', '4', 'Comment', 'Commentadmin', 'check', '', '1', '0', '评论审核', '', '', '0');
INSERT INTO `y_menu` VALUES ('7', '1', 'Portal', 'AdminPost', 'index', '', '1', '1', '文章管理', '', '', '1');
INSERT INTO `y_menu` VALUES ('8', '7', 'Portal', 'AdminPost', 'listorders', '', '1', '0', '文章排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('9', '7', 'Portal', 'AdminPost', 'top', '', '1', '0', '文章置顶', '', '', '0');
INSERT INTO `y_menu` VALUES ('10', '7', 'Portal', 'AdminPost', 'recommend', '', '1', '0', '文章推荐', '', '', '0');
INSERT INTO `y_menu` VALUES ('11', '7', 'Portal', 'AdminPost', 'move', '', '1', '0', '批量移动', '', '', '1000');
INSERT INTO `y_menu` VALUES ('12', '7', 'Portal', 'AdminPost', 'check', '', '1', '0', '文章审核', '', '', '1000');
INSERT INTO `y_menu` VALUES ('13', '7', 'Portal', 'AdminPost', 'delete', '', '1', '0', '删除文章', '', '', '1000');
INSERT INTO `y_menu` VALUES ('14', '7', 'Portal', 'AdminPost', 'edit', '', '1', '0', '编辑文章', '', '', '1000');
INSERT INTO `y_menu` VALUES ('15', '14', 'Portal', 'AdminPost', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('16', '7', 'Portal', 'AdminPost', 'add', '', '1', '0', '添加文章', '', '', '1000');
INSERT INTO `y_menu` VALUES ('17', '16', 'Portal', 'AdminPost', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('18', '1', 'Portal', 'AdminTerm', 'index', '', '0', '1', '分类管理', '', '', '2');
INSERT INTO `y_menu` VALUES ('19', '18', 'Portal', 'AdminTerm', 'listorders', '', '1', '0', '文章分类排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('20', '18', 'Portal', 'AdminTerm', 'delete', '', '1', '0', '删除分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('21', '18', 'Portal', 'AdminTerm', 'edit', '', '1', '0', '编辑分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('22', '21', 'Portal', 'AdminTerm', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('23', '18', 'Portal', 'AdminTerm', 'add', '', '1', '0', '添加分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('24', '23', 'Portal', 'AdminTerm', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('25', '1', 'Portal', 'AdminPage', 'index', '', '1', '0', '页面管理', '', '', '3');
INSERT INTO `y_menu` VALUES ('26', '25', 'Portal', 'AdminPage', 'listorders', '', '1', '0', '页面排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('27', '25', 'Portal', 'AdminPage', 'delete', '', '1', '0', '删除页面', '', '', '1000');
INSERT INTO `y_menu` VALUES ('28', '25', 'Portal', 'AdminPage', 'edit', '', '1', '0', '编辑页面', '', '', '1000');
INSERT INTO `y_menu` VALUES ('29', '28', 'Portal', 'AdminPage', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('30', '25', 'Portal', 'AdminPage', 'add', '', '1', '0', '添加页面', '', '', '1000');
INSERT INTO `y_menu` VALUES ('31', '30', 'Portal', 'AdminPage', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('32', '1', 'Admin', 'Recycle', 'default', '', '1', '1', '回收站', '', '', '4');
INSERT INTO `y_menu` VALUES ('33', '32', 'Portal', 'AdminPost', 'recyclebin', '', '1', '1', '文章回收', '', '', '0');
INSERT INTO `y_menu` VALUES ('34', '33', 'Portal', 'AdminPost', 'restore', '', '1', '0', '文章还原', '', '', '1000');
INSERT INTO `y_menu` VALUES ('35', '33', 'Portal', 'AdminPost', 'clean', '', '1', '0', '彻底删除', '', '', '1000');
INSERT INTO `y_menu` VALUES ('36', '32', 'Portal', 'AdminPage', 'recyclebin', '', '1', '0', '页面回收', '', '', '1');
INSERT INTO `y_menu` VALUES ('37', '36', 'Portal', 'AdminPage', 'clean', '', '1', '0', '彻底删除', '', '', '1000');
INSERT INTO `y_menu` VALUES ('38', '36', 'Portal', 'AdminPage', 'restore', '', '1', '0', '页面还原', '', '', '1000');
INSERT INTO `y_menu` VALUES ('39', '0', 'Admin', 'Extension', 'default', '', '0', '1', '扩展工具', 'cloud', '', '40');
INSERT INTO `y_menu` VALUES ('40', '39', 'Admin', 'Backup', 'default', '', '1', '1', '备份管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('41', '40', 'Admin', 'Backup', 'restore', '', '1', '1', '数据还原', '', '', '0');
INSERT INTO `y_menu` VALUES ('42', '40', 'Admin', 'Backup', 'index', '', '1', '1', '数据备份', '', '', '0');
INSERT INTO `y_menu` VALUES ('43', '42', 'Admin', 'Backup', 'index_post', '', '1', '0', '提交数据备份', '', '', '0');
INSERT INTO `y_menu` VALUES ('44', '40', 'Admin', 'Backup', 'download', '', '1', '0', '下载备份', '', '', '1000');
INSERT INTO `y_menu` VALUES ('45', '40', 'Admin', 'Backup', 'del_backup', '', '1', '0', '删除备份', '', '', '1000');
INSERT INTO `y_menu` VALUES ('46', '40', 'Admin', 'Backup', 'import', '', '1', '0', '数据备份导入', '', '', '1000');
INSERT INTO `y_menu` VALUES ('47', '39', 'Admin', 'Plugin', 'index', '', '1', '1', '插件管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('48', '47', 'Admin', 'Plugin', 'toggle', '', '1', '0', '插件启用切换', '', '', '0');
INSERT INTO `y_menu` VALUES ('49', '47', 'Admin', 'Plugin', 'setting', '', '1', '0', '插件设置', '', '', '0');
INSERT INTO `y_menu` VALUES ('50', '49', 'Admin', 'Plugin', 'setting_post', '', '1', '0', '插件设置提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('51', '47', 'Admin', 'Plugin', 'install', '', '1', '0', '插件安装', '', '', '0');
INSERT INTO `y_menu` VALUES ('52', '47', 'Admin', 'Plugin', 'uninstall', '', '1', '0', '插件卸载', '', '', '0');
INSERT INTO `y_menu` VALUES ('53', '39', 'Admin', 'Slide', 'default', '', '1', '1', '幻灯片', '', '', '1');
INSERT INTO `y_menu` VALUES ('54', '53', 'Admin', 'Slide', 'index', '', '1', '1', '幻灯片管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('55', '54', 'Admin', 'Slide', 'listorders', '', '1', '0', '幻灯片排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('56', '54', 'Admin', 'Slide', 'toggle', '', '1', '0', '幻灯片显示切换', '', '', '0');
INSERT INTO `y_menu` VALUES ('57', '54', 'Admin', 'Slide', 'delete', '', '1', '0', '删除幻灯片', '', '', '1000');
INSERT INTO `y_menu` VALUES ('58', '54', 'Admin', 'Slide', 'edit', '', '1', '0', '编辑幻灯片', '', '', '1000');
INSERT INTO `y_menu` VALUES ('59', '58', 'Admin', 'Slide', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('60', '54', 'Admin', 'Slide', 'add', '', '1', '0', '添加幻灯片', '', '', '1000');
INSERT INTO `y_menu` VALUES ('61', '60', 'Admin', 'Slide', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('62', '53', 'Admin', 'Slidecat', 'index', '', '1', '1', '幻灯片分类', '', '', '0');
INSERT INTO `y_menu` VALUES ('63', '62', 'Admin', 'Slidecat', 'delete', '', '1', '0', '删除分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('64', '62', 'Admin', 'Slidecat', 'edit', '', '1', '0', '编辑分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('65', '64', 'Admin', 'Slidecat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('66', '62', 'Admin', 'Slidecat', 'add', '', '1', '0', '添加分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('67', '66', 'Admin', 'Slidecat', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('68', '39', 'Admin', 'Ad', 'index', '', '1', '1', '网站广告', '', '', '2');
INSERT INTO `y_menu` VALUES ('69', '68', 'Admin', 'Ad', 'toggle', '', '1', '0', '广告显示切换', '', '', '0');
INSERT INTO `y_menu` VALUES ('70', '68', 'Admin', 'Ad', 'delete', '', '1', '0', '删除广告', '', '', '1000');
INSERT INTO `y_menu` VALUES ('71', '68', 'Admin', 'Ad', 'edit', '', '1', '0', '编辑广告', '', '', '1000');
INSERT INTO `y_menu` VALUES ('72', '71', 'Admin', 'Ad', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('73', '68', 'Admin', 'Ad', 'add', '', '1', '0', '添加广告', '', '', '1000');
INSERT INTO `y_menu` VALUES ('74', '73', 'Admin', 'Ad', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('75', '39', 'Admin', 'Link', 'index', '', '0', '1', '友情链接', '', '', '3');
INSERT INTO `y_menu` VALUES ('76', '75', 'Admin', 'Link', 'listorders', '', '1', '0', '友情链接排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('77', '75', 'Admin', 'Link', 'toggle', '', '1', '0', '友链显示切换', '', '', '0');
INSERT INTO `y_menu` VALUES ('78', '75', 'Admin', 'Link', 'delete', '', '1', '0', '删除友情链接', '', '', '1000');
INSERT INTO `y_menu` VALUES ('79', '75', 'Admin', 'Link', 'edit', '', '1', '0', '编辑友情链接', '', '', '1000');
INSERT INTO `y_menu` VALUES ('80', '79', 'Admin', 'Link', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('81', '75', 'Admin', 'Link', 'add', '', '1', '0', '添加友情链接', '', '', '1000');
INSERT INTO `y_menu` VALUES ('82', '81', 'Admin', 'Link', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('83', '39', 'Api', 'Oauthadmin', 'setting', '', '1', '1', '第三方登陆', 'leaf', '', '4');
INSERT INTO `y_menu` VALUES ('84', '83', 'Api', 'Oauthadmin', 'setting_post', '', '1', '0', '提交设置', '', '', '0');
INSERT INTO `y_menu` VALUES ('85', '0', 'Admin', 'Menu', 'default', '', '1', '1', '菜单管理', 'list', '', '20');
INSERT INTO `y_menu` VALUES ('86', '85', 'Admin', 'Navcat', 'default1', '', '1', '0', '前台菜单', '', '', '0');
INSERT INTO `y_menu` VALUES ('87', '86', 'Admin', 'Nav', 'index', '', '1', '1', '菜单管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('88', '87', 'Admin', 'Nav', 'listorders', '', '1', '0', '前台导航排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('89', '87', 'Admin', 'Nav', 'delete', '', '1', '0', '删除菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('90', '87', 'Admin', 'Nav', 'edit', '', '1', '0', '编辑菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('91', '90', 'Admin', 'Nav', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('92', '87', 'Admin', 'Nav', 'add', '', '1', '0', '添加菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('93', '92', 'Admin', 'Nav', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('94', '86', 'Admin', 'Navcat', 'index', '', '1', '1', '菜单分类', '', '', '0');
INSERT INTO `y_menu` VALUES ('95', '94', 'Admin', 'Navcat', 'delete', '', '1', '0', '删除分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('96', '94', 'Admin', 'Navcat', 'edit', '', '1', '0', '编辑分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('97', '96', 'Admin', 'Navcat', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('98', '94', 'Admin', 'Navcat', 'add', '', '1', '0', '添加分类', '', '', '1000');
INSERT INTO `y_menu` VALUES ('99', '98', 'Admin', 'Navcat', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('100', '85', 'Admin', 'Menu', 'index', '', '1', '1', '后台菜单', '', '', '0');
INSERT INTO `y_menu` VALUES ('101', '100', 'Admin', 'Menu', 'add', '', '1', '0', '添加菜单', '', '', '0');
INSERT INTO `y_menu` VALUES ('102', '101', 'Admin', 'Menu', 'add_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('103', '100', 'Admin', 'Menu', 'listorders', '', '1', '0', '后台菜单排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('104', '100', 'Admin', 'Menu', 'export_menu', '', '1', '0', '菜单备份', '', '', '1000');
INSERT INTO `y_menu` VALUES ('105', '100', 'Admin', 'Menu', 'edit', '', '1', '0', '编辑菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('106', '105', 'Admin', 'Menu', 'edit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('107', '100', 'Admin', 'Menu', 'delete', '', '1', '0', '删除菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('108', '100', 'Admin', 'Menu', 'lists', '', '1', '0', '所有菜单', '', '', '1000');
INSERT INTO `y_menu` VALUES ('109', '0', 'Admin', 'Setting', 'default', '', '0', '1', '设置', 'cogs', '', '0');
INSERT INTO `y_menu` VALUES ('110', '109', 'Admin', 'Setting', 'userdefault', '', '0', '1', '个人信息', '', '', '0');
INSERT INTO `y_menu` VALUES ('111', '110', 'Admin', 'User', 'userinfo', '', '1', '1', '修改信息', '', '', '0');
INSERT INTO `y_menu` VALUES ('112', '111', 'Admin', 'User', 'userinfo_post', '', '1', '0', '修改信息提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('113', '110', 'Admin', 'Setting', 'password', '', '1', '1', '修改密码', '', '', '0');
INSERT INTO `y_menu` VALUES ('114', '113', 'Admin', 'Setting', 'password_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `y_menu` VALUES ('115', '109', 'Admin', 'Setting', 'site', '', '1', '1', '网站信息', '', '', '0');
INSERT INTO `y_menu` VALUES ('116', '115', 'Admin', 'Setting', 'site_post', '', '1', '0', '提交修改', '', '', '0');
INSERT INTO `y_menu` VALUES ('117', '115', 'Admin', 'Route', 'index', '', '1', '0', '路由列表', '', '', '0');
INSERT INTO `y_menu` VALUES ('118', '115', 'Admin', 'Route', 'add', '', '1', '0', '路由添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('119', '118', 'Admin', 'Route', 'add_post', '', '1', '0', '路由添加提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('120', '115', 'Admin', 'Route', 'edit', '', '1', '0', '路由编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('121', '120', 'Admin', 'Route', 'edit_post', '', '1', '0', '路由编辑提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('122', '115', 'Admin', 'Route', 'delete', '', '1', '0', '路由删除', '', '', '0');
INSERT INTO `y_menu` VALUES ('123', '115', 'Admin', 'Route', 'ban', '', '1', '0', '路由禁止', '', '', '0');
INSERT INTO `y_menu` VALUES ('124', '115', 'Admin', 'Route', 'open', '', '1', '0', '路由启用', '', '', '0');
INSERT INTO `y_menu` VALUES ('125', '115', 'Admin', 'Route', 'listorders', '', '1', '0', '路由排序', '', '', '0');
INSERT INTO `y_menu` VALUES ('126', '109', 'Admin', 'Mailer', 'default', '', '1', '1', '邮箱配置', '', '', '0');
INSERT INTO `y_menu` VALUES ('127', '126', 'Admin', 'Mailer', 'index', '', '1', '1', 'SMTP配置', '', '', '0');
INSERT INTO `y_menu` VALUES ('128', '127', 'Admin', 'Mailer', 'index_post', '', '1', '0', '提交配置', '', '', '0');
INSERT INTO `y_menu` VALUES ('129', '126', 'Admin', 'Mailer', 'active', '', '1', '1', '邮件模板', '', '', '0');
INSERT INTO `y_menu` VALUES ('130', '129', 'Admin', 'Mailer', 'active_post', '', '1', '0', '提交模板', '', '', '0');
INSERT INTO `y_menu` VALUES ('131', '109', 'Admin', 'Setting', 'clearcache', '', '1', '1', '清除缓存', '', '', '1');
INSERT INTO `y_menu` VALUES ('132', '0', 'User', 'Indexadmin', 'default', '', '1', '1', '用户管理', 'group', '', '10');
INSERT INTO `y_menu` VALUES ('133', '132', 'User', 'Indexadmin', 'default1', '', '1', '1', '用户组', '', '', '0');
INSERT INTO `y_menu` VALUES ('134', '133', 'User', 'Indexadmin', 'index', '', '1', '1', '本站用户', 'leaf', '', '0');
INSERT INTO `y_menu` VALUES ('135', '134', 'User', 'Indexadmin', 'ban', '', '1', '0', '拉黑会员', '', '', '0');
INSERT INTO `y_menu` VALUES ('136', '134', 'User', 'Indexadmin', 'cancelban', '', '1', '0', '启用会员', '', '', '0');
INSERT INTO `y_menu` VALUES ('137', '133', 'User', 'Oauthadmin', 'index', '', '1', '0', '第三方用户', 'leaf', '', '0');
INSERT INTO `y_menu` VALUES ('138', '137', 'User', 'Oauthadmin', 'delete', '', '1', '0', '第三方用户解绑', '', '', '0');
INSERT INTO `y_menu` VALUES ('139', '132', 'User', 'Indexadmin', 'default3', '', '1', '1', '管理组', '', '', '0');
INSERT INTO `y_menu` VALUES ('140', '139', 'Admin', 'Rbac', 'index', '', '1', '1', '角色管理', '', '', '0');
INSERT INTO `y_menu` VALUES ('141', '140', 'Admin', 'Rbac', 'member', '', '1', '0', '成员管理', '', '', '1000');
INSERT INTO `y_menu` VALUES ('142', '140', 'Admin', 'Rbac', 'authorize', '', '1', '0', '权限设置', '', '', '1000');
INSERT INTO `y_menu` VALUES ('143', '142', 'Admin', 'Rbac', 'authorize_post', '', '1', '0', '提交设置', '', '', '0');
INSERT INTO `y_menu` VALUES ('144', '140', 'Admin', 'Rbac', 'roleedit', '', '1', '0', '编辑角色', '', '', '1000');
INSERT INTO `y_menu` VALUES ('145', '144', 'Admin', 'Rbac', 'roleedit_post', '', '1', '0', '提交编辑', '', '', '0');
INSERT INTO `y_menu` VALUES ('146', '140', 'Admin', 'Rbac', 'roledelete', '', '1', '1', '删除角色', '', '', '1000');
INSERT INTO `y_menu` VALUES ('147', '140', 'Admin', 'Rbac', 'roleadd', '', '1', '1', '添加角色', '', '', '1000');
INSERT INTO `y_menu` VALUES ('148', '147', 'Admin', 'Rbac', 'roleadd_post', '', '1', '0', '提交添加', '', '', '0');
INSERT INTO `y_menu` VALUES ('149', '139', 'Admin', 'User', 'index', '', '1', '1', '管理员', '', '', '0');
INSERT INTO `y_menu` VALUES ('150', '149', 'Admin', 'User', 'delete', '', '1', '0', '删除管理员', '', '', '1000');
INSERT INTO `y_menu` VALUES ('151', '149', 'Admin', 'User', 'edit', '', '1', '0', '管理员编辑', '', '', '1000');
INSERT INTO `y_menu` VALUES ('152', '151', 'Admin', 'User', 'edit_post', '', '1', '0', '编辑提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('153', '149', 'Admin', 'User', 'add', '', '1', '0', '管理员添加', '', '', '1000');
INSERT INTO `y_menu` VALUES ('154', '153', 'Admin', 'User', 'add_post', '', '1', '0', '添加提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('155', '47', 'Admin', 'Plugin', 'update', '', '1', '0', '插件更新', '', '', '0');
INSERT INTO `y_menu` VALUES ('156', '39', 'Admin', 'Storage', 'index', '', '1', '1', '文件存储', '', '', '0');
INSERT INTO `y_menu` VALUES ('157', '156', 'Admin', 'Storage', 'setting_post', '', '1', '0', '文件存储设置提交', '', '', '0');
INSERT INTO `y_menu` VALUES ('158', '54', 'Admin', 'Slide', 'ban', '', '1', '0', '禁用幻灯片', '', '', '0');
INSERT INTO `y_menu` VALUES ('159', '54', 'Admin', 'Slide', 'cancelban', '', '1', '0', '启用幻灯片', '', '', '0');
INSERT INTO `y_menu` VALUES ('160', '149', 'Admin', 'User', 'ban', '', '1', '0', '禁用管理员', '', '', '0');
INSERT INTO `y_menu` VALUES ('161', '149', 'Admin', 'User', 'cancelban', '', '1', '0', '启用管理员', '', '', '0');

-- ----------------------------
-- Table structure for y_nav
-- ----------------------------
DROP TABLE IF EXISTS `y_nav`;
CREATE TABLE `y_nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `parentid` int(11) NOT NULL,
  `label` varchar(255) NOT NULL,
  `target` varchar(50) DEFAULT NULL,
  `href` varchar(255) NOT NULL,
  `icon` varchar(255) NOT NULL,
  `status` int(2) NOT NULL DEFAULT '1',
  `listorder` int(6) DEFAULT '0',
  `path` varchar(255) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_nav
-- ----------------------------
INSERT INTO `y_nav` VALUES ('1', '1', '0', '首页', '', 'home', '', '1', '0', '0-1');
INSERT INTO `y_nav` VALUES ('2', '1', '0', '列表演示', '', 'a:2:{s:6:\"action\";s:17:\"Portal/List/index\";s:5:\"param\";a:1:{s:2:\"id\";s:1:\"1\";}}', '', '1', '0', '0-2');
INSERT INTO `y_nav` VALUES ('3', '1', '0', '瀑布流', '', 'a:2:{s:6:\"action\";s:17:\"Portal/List/index\";s:5:\"param\";a:1:{s:2:\"id\";s:1:\"2\";}}', '', '1', '0', '0-3');

-- ----------------------------
-- Table structure for y_nav_cat
-- ----------------------------
DROP TABLE IF EXISTS `y_nav_cat`;
CREATE TABLE `y_nav_cat` (
  `navcid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `active` int(1) NOT NULL DEFAULT '1',
  `remark` text,
  PRIMARY KEY (`navcid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_nav_cat
-- ----------------------------
INSERT INTO `y_nav_cat` VALUES ('1', '主导航', '1', '主导航');

-- ----------------------------
-- Table structure for y_oauth_user
-- ----------------------------
DROP TABLE IF EXISTS `y_oauth_user`;
CREATE TABLE `y_oauth_user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `from` varchar(20) NOT NULL COMMENT '用户来源key',
  `name` varchar(30) NOT NULL COMMENT '第三方昵称',
  `head_img` varchar(200) NOT NULL COMMENT '头像',
  `uid` int(20) NOT NULL COMMENT '关联的本站用户id',
  `create_time` datetime NOT NULL COMMENT '绑定时间',
  `last_login_time` datetime NOT NULL COMMENT '最后登录时间',
  `last_login_ip` varchar(16) NOT NULL COMMENT '最后登录ip',
  `login_times` int(6) NOT NULL COMMENT '登录次数',
  `status` tinyint(2) NOT NULL,
  `access_token` varchar(60) NOT NULL,
  `expires_date` int(12) NOT NULL COMMENT 'access_token过期时间',
  `openid` varchar(40) NOT NULL COMMENT '第三方用户id',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_oauth_user
-- ----------------------------

-- ----------------------------
-- Table structure for y_options
-- ----------------------------
DROP TABLE IF EXISTS `y_options`;
CREATE TABLE `y_options` (
  `option_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `option_name` varchar(64) NOT NULL DEFAULT '',
  `option_value` longtext NOT NULL,
  `autoload` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_name` (`option_name`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_options
-- ----------------------------
INSERT INTO `y_options` VALUES ('1', 'member_email_active', '{\"title\":\"ThinkCMF\\u90ae\\u4ef6\\u6fc0\\u6d3b\\u901a\\u77e5.\",\"template\":\"<p>\\u672c\\u90ae\\u4ef6\\u6765\\u81ea<a href=\\\"http:\\/\\/www.thinkcmf.com\\\">ThinkCMF<\\/a><br\\/><br\\/>&nbsp; &nbsp;<strong>---------------<\\/strong><br\\/>&nbsp; &nbsp;<strong>\\u5e10\\u53f7\\u6fc0\\u6d3b\\u8bf4\\u660e<\\/strong><br\\/>&nbsp; &nbsp;<strong>---------------<\\/strong><br\\/><br\\/>&nbsp; &nbsp; \\u5c0a\\u656c\\u7684<span style=\\\"FONT-SIZE: 16px; FONT-FAMILY: Arial; COLOR: rgb(51,51,51); LINE-HEIGHT: 18px; BACKGROUND-COLOR: rgb(255,255,255)\\\">#username#\\uff0c\\u60a8\\u597d\\u3002<\\/span>\\u5982\\u679c\\u60a8\\u662fThinkCMF\\u7684\\u65b0\\u7528\\u6237\\uff0c\\u6216\\u5728\\u4fee\\u6539\\u60a8\\u7684\\u6ce8\\u518cEmail\\u65f6\\u4f7f\\u7528\\u4e86\\u672c\\u5730\\u5740\\uff0c\\u6211\\u4eec\\u9700\\u8981\\u5bf9\\u60a8\\u7684\\u5730\\u5740\\u6709\\u6548\\u6027\\u8fdb\\u884c\\u9a8c\\u8bc1\\u4ee5\\u907f\\u514d\\u5783\\u573e\\u90ae\\u4ef6\\u6216\\u5730\\u5740\\u88ab\\u6ee5\\u7528\\u3002<br\\/>&nbsp; &nbsp; \\u60a8\\u53ea\\u9700\\u70b9\\u51fb\\u4e0b\\u9762\\u7684\\u94fe\\u63a5\\u5373\\u53ef\\u6fc0\\u6d3b\\u60a8\\u7684\\u5e10\\u53f7\\uff1a<br\\/>&nbsp; &nbsp; <a title=\\\"\\\" href=\\\"http:\\/\\/#link#\\\" target=\\\"_self\\\">http:\\/\\/#link#<\\/a><br\\/>&nbsp; &nbsp; (\\u5982\\u679c\\u4e0a\\u9762\\u4e0d\\u662f\\u94fe\\u63a5\\u5f62\\u5f0f\\uff0c\\u8bf7\\u5c06\\u8be5\\u5730\\u5740\\u624b\\u5de5\\u7c98\\u8d34\\u5230\\u6d4f\\u89c8\\u5668\\u5730\\u5740\\u680f\\u518d\\u8bbf\\u95ee)<br\\/>&nbsp; &nbsp; \\u611f\\u8c22\\u60a8\\u7684\\u8bbf\\u95ee\\uff0c\\u795d\\u60a8\\u4f7f\\u7528\\u6109\\u5feb\\uff01<br\\/><br\\/>&nbsp; &nbsp; \\u6b64\\u81f4<br\\/>&nbsp; &nbsp; ThinkCMF \\u7ba1\\u7406\\u56e2\\u961f.<\\/p>\"}', '1');
INSERT INTO `y_options` VALUES ('2', 'site_options', '            {\n            		\"site_name\":\"全球旅行\",\n            		\"site_host\":\"http://travel.jason.com/\",\n            		\"site_root\":\"\",\n            		\"site_icp\":\"\",\n            		\"site_admin_email\":\"260658065@qq.com\",\n            		\"site_tongji\":\"\",\n            		\"site_copyright\":\"\",\n            		\"site_seo_title\":\"全球旅行\",\n            		\"site_seo_keywords\":\"\",\n            		\"site_seo_description\":\"全球旅行为华人提供全球定制旅行方案\"\n        }', '1');

-- ----------------------------
-- Table structure for y_plugins
-- ----------------------------
DROP TABLE IF EXISTS `y_plugins`;
CREATE TABLE `y_plugins` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(50) NOT NULL COMMENT '插件名，英文',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '插件名称',
  `description` text COMMENT '插件描述',
  `type` tinyint(2) DEFAULT '0' COMMENT '插件类型, 1:网站；8;微信',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态；1开启；',
  `config` text COMMENT '插件配置',
  `hooks` varchar(255) DEFAULT NULL COMMENT '实现的钩子;以“，”分隔',
  `has_admin` tinyint(2) DEFAULT '0' COMMENT '插件是否有后台管理界面',
  `author` varchar(50) DEFAULT '' COMMENT '插件作者',
  `version` varchar(20) DEFAULT '' COMMENT '插件版本号',
  `createtime` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '插件安装时间',
  `listorder` smallint(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='插件表';

-- ----------------------------
-- Records of y_plugins
-- ----------------------------

-- ----------------------------
-- Table structure for y_posts
-- ----------------------------
DROP TABLE IF EXISTS `y_posts`;
CREATE TABLE `y_posts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `post_author` bigint(20) unsigned DEFAULT '0' COMMENT '发表者id',
  `post_keywords` varchar(150) NOT NULL COMMENT 'seo keywords',
  `post_source` varchar(150) DEFAULT NULL COMMENT '人均花费',
  `post_date` datetime DEFAULT '2000-01-01 00:00:00' COMMENT 'post创建日期，永久不变，一般不显示给用户',
  `post_content` longtext COMMENT 'post内容',
  `post_title` text COMMENT 'post标题',
  `post_excerpt` text COMMENT 'post摘要',
  `post_status` int(2) DEFAULT '1' COMMENT 'post状态，1已审核，0未审核',
  `comment_status` int(2) DEFAULT '1' COMMENT '评论状态，1允许，0不允许',
  `post_modified` datetime DEFAULT '2000-01-01 00:00:00' COMMENT 'post更新时间，可在前台修改，显示给用户',
  `post_content_filtered` longtext,
  `post_parent` bigint(20) unsigned DEFAULT '0' COMMENT 'post的父级post id,表示post层级关系',
  `post_type` int(2) DEFAULT NULL,
  `post_mime_type` varchar(100) DEFAULT '',
  `comment_count` bigint(20) DEFAULT '0',
  `smeta` text COMMENT 'post的扩展字段，保存相关扩展属性，如缩略图；格式为json',
  `post_hits` int(11) DEFAULT '0' COMMENT 'post点击数，查看数',
  `post_like` int(11) DEFAULT '0' COMMENT 'post赞数',
  `istop` tinyint(1) NOT NULL DEFAULT '0' COMMENT '置顶 1置顶； 0不置顶',
  `recommended` tinyint(1) NOT NULL DEFAULT '0' COMMENT '推荐 1推荐 0不推荐',
  `day` smallint(6) unsigned DEFAULT '0' COMMENT '天数',
  `people_num` tinyint(3) unsigned DEFAULT '1' COMMENT '游玩人数',
  PRIMARY KEY (`id`),
  KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`id`),
  KEY `post_parent` (`post_parent`),
  KEY `post_author` (`post_author`),
  KEY `post_date` (`post_date`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_posts
-- ----------------------------
INSERT INTO `y_posts` VALUES ('1', '1', '芬兰', '27350', '2015-10-29 20:18:15', '<p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\">我们终偿所愿，亲手接过圣诞老人的礼物，并依偎在他的身边；</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\">我们体验着雪地摩托的超快感，一览萨利瑟尔地区特色地貌；</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\">我们驾驭着西伯利亚雪橇犬，肆意驰骋在茫茫林海雪原上，圣诞老人的铃声，还一直回荡在耳畔；</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\">我们为了追寻欧若拉的裙摆，在北欧亲眼见到醉美极光，一同见证那醉美的梦幻。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/0f088f1f-4547-4ce4-9846-7fb3d6d1163f.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>初到芬兰，我们在赫尔辛基市内参观，这座白色的教堂参观以俯视的姿态屹立在亚历山大二世的广场上，尽显庄重。 小伙伴们出镜啦，我的同事圆圆和她的爱人沙桐、还有我的爱人申方剑。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/2f5a8d4e-cf12-4442-bc5e-a9b0ffb5dc78.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>这是白色教堂内部虽没有金碧辉煌的精美装饰，却简单圣洁。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/77a35dc3-c3e5-4b11-935c-694c31133032.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我们一行人继续参观赫尔辛基又一特色的岩石教堂，其建造在掏空的岩石中，芬兰人的奇思妙想可见一斑。步入其中，自然光芒下的岩石教堂与光芒的相互辉映，尽显神圣。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/f6796b6f-32e3-43bc-845f-2295b0de1514.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>在孩童时代，有谁不想亲自接过圣诞老人的礼物呢？这一刻我等了十几年。圣诞邮局里满是童话色彩的邮票、贺卡和礼品，北极圣诞老人还会盖上这里的邮戳，等待这一时刻的过程是甜蜜而幸福的，小伙伴们依偎在圣岛老人身边。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/8f43c5b6-c0a7-47c2-8473-fa5051477fac.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>木屋，圣诞树，驯鹿，满满的礼物，满满的幸福，从这里出发，童话般的现实就在眼前。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/9b30427b-0a0b-4c30-96e7-8d9444966e9d.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我站在雪地里，看着美不胜收的雪景。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/2a9ff250-de2d-41bb-b5d8-e00a6a758615.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>北上，嘿！又一位小伙伴汇合！她就是我的同事经纬大美女！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/bd0e815a-63cf-4eb5-85b6-242c5451e7f7.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我们准备体验一把雪地摩托的快感，一览萨利瑟尔地区最有特色的费尔地貌－－高地、岩石、岩崖，go,go,go!出发！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/35d10d7d-4c1d-4e36-ac25-21318c4da962.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>雪地摩托结束了！闺蜜们，让我们开启疯狂自拍模式！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/3c30074f-1a7a-4555-8aea-635c949fe540.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>沙大哥拉着圆圆姐的场景，仿佛一下就让我们回到了小时候的快乐时光。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/f568f06a-9c5c-4a3a-b80f-fb32bb3a8029.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>夜幕降临在Kakslauttanen度假村梦幻的玻璃穹顶小屋，我们一起亲睹极光，感受的极致之美，激动不已。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/fb5b7ea0-ad5c-4123-bcd5-2d22ebb465a9.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我特意带来拍摄的衣服，于是！女神出场！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/183ec36d-5af9-4fee-bf46-dfd6ffb33574.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>次日，我们一路向北，夜间繁星伴月，与爱人、朋友继续追寻女神的裙摆。守候不多时，那条越来越亮的淡绿色带状极光，伴随着时而划过的几颗流星，终于如期而至。数分钟之内，极光蜿蜒跳跃着骤散分合，亮度成倍变强</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/ae5846b4-b3c9-4817-b85e-19370dd8ab0e.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>看！眼前这道如梦似幻的极光，让本就壮美的星空更多了一份神秘的妩媚。极光边缘的些许暗红也转变成如狐狸尾巴般耀眼的火红。沙桐大哥兴奋的大叫，我们大家争相恐后在极光下合影。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/ffc03baa-5f80-494b-9058-fd60d04148e0.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我们来北极还有一件一定要做的事情，就是驾驭着西伯利亚雪橇犬拉的雪橇，感受在茫茫林海雪原上快速行进的。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/fffb5eae-136b-45e8-90f8-44609ba86a7a.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>站在狗狗们拉着的雪撬上，在雪原上肆意驰骋。</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/e645f827-d9d0-4e21-a919-2ac9b6d527ba.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>还可以参观雪村Ice Bar&amp;Hotel，当我亲自走在这样的隧道里的时候，感受着一种在异度空间的错落感</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/ce593808-7ff0-432d-8236-c61642de31dc.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>我们来到此行最后一站：凯米！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/f10eb6db-8bd0-4333-977f-71089149ab1d.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>这里有地球上唯一的破冰船探险旅游项目，我们可以参加破冰船之旅，在冰海浮潜，亦或在冬季冰封的海面上驾着雪地摩托狂驰！</p><p style=\"box-sizing: border-box; border: 0px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/976fc5c5-2ae3-48f9-b20d-97f0e8ab655d.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/>3年的梦想终于实现，见到最奇妙最震撼的北极光。朋友们，下次继续探索世界吧！</p><p><br/></p>', '醉美芬兰极光之旅', '亲爱的，我们说好一起携男眷去旅行，说了3年了，也没见个动静。\r\n这一次，年假都给我交出来，咱们必须说走就走！\r\n不但要说走就走，还要去世界上最奇妙的地方，看最奇妙的北极光！', '1', '1', '2015-10-29 20:06:40', null, '0', null, '', '0', '{\"thumb\":\"563228d60aab5.jpg\"}', '2', '0', '1', '0', '5', '1');
INSERT INTO `y_posts` VALUES ('2', '1', '新西兰', '28530', '2015-10-29 23:08:47', '', '新西兰', '“指环王里称这片土地为中土世界，来过的人说它是世界上最后一片净土，当我站在Eden Mountain，从山顶看着奥克兰，我就信了，多谢无二告诉我这个地方，犹如梦中”   By 安小乔', '1', '1', '2015-10-29 22:44:18', null, '0', null, '', '0', '{\"thumb\":\"563234b7c9951.jpg\",\"photo\":[{\"url\":\"56323dd724ed6.png\",\"alt\":\"icon\"},{\"url\":\"56323df58c9fb.png\",\"alt\":\"info\"}]}', '0', '0', '0', '0', '7', '2');
INSERT INTO `y_posts` VALUES ('3', '1', '加拿大 维也纳 拉普兰德', '30000', '2015-10-30 01:43:15', '<p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我从来都珍视亲情、友情，我永远珍惜生活与热爱我身边的人们；我充满活力、细致、开朗，永远精力充沛。一直以来，最简单而又复杂的愿望就是带着妈妈走遍世界，这也是妈妈简单而又宏远的梦想。去过很多国家，也有各样的人问我的信仰是什么，我的信仰很简单，就是旅行。</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/64cc12a9-cff1-4280-9bc3-e80c2d3699bc.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾带着妈妈在布达佩斯的英雄广场上纵情跳跃</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/9817b0ee-7173-4137-ae76-ef226b360465.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">也曾带着妈妈在维也纳的美泉宫前暴走到精疲力尽</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/6b90e52b-b328-4d23-b877-cac18c7f965c.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾和妈妈在南亚40℃的酷暑中热到几乎虚脱</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/30be5af1-6ce1-4365-95b9-494571a8ef54.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">也曾和妈妈在施皮茨小镇畔的山腰上冻到相拥取暖</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/75444440-1a2a-4a16-b2d9-77044c5804be.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾带着妈妈在浪中岛的海滩上High到爆炸</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/2b475329-c4fa-4a5f-98d0-aa835717f01e.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">也曾带着妈妈在卢塞恩的湖畔安安静静的喂天鹅</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/8e1014dd-dfc0-427c-a609-53adf9d6a1c0.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾和妈妈一起在吴哥窟前画暖暖的爱心</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/67028b18-23e5-4294-ae13-2d59db046a81.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">也曾和妈妈一起在阿姆斯特丹的郁金香前Cosplay花儿朵朵开</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/38538690-3d83-4a74-ac20-5c4ce9da4a20.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾带着妈妈在最壮丽的大峡谷畔一起双人兔子跳</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/2f6c390a-86be-4030-aaa3-8c16de271704.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">也曾带着妈妈在大提顿秀美的湖畔牵着手跳天鹅舞</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/c821fe1b-72e6-4a61-99f2-85a625d41e80.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">我曾带着妈妈从赛里木湖到莱芒湖畔晒太阳，从敦煌跑去埃及的金字塔，从千户苗寨跑去毛利人的家里、从内蒙的大草原跑去普罗旺斯的薰衣草海、从吉林的雪原跑去黄石公园看北美野牛、从南京的秦淮河去塞纳河畔的那家咖啡馆、从青岛的红房子去慕尼黑十月啤酒节、从海南的椰林去看军舰岛的海龟……旅行常变，不变的，是我和妈妈，还有向着前方的路。</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/f0eae929-e75e-4bc3-91d6-264edcc75e23.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\">从18岁那年踏出国门的一刻，从带着妈妈，到带着父母，带着奶奶，再后来整个家族的成员都加入了我的旅行。从最开始的初涉亚洲，到最后的欧洲环绕，在一次次的旅程中，不断地成长，不断地认识自己。感谢旅行，让我学会感恩。</p><p style=\"box-sizing: border-box; border: 0px; font-size: 14px; vertical-align: baseline; margin-top: 20px; margin-bottom: 20px; padding: 0px; color: rgb(153, 153, 153); font-family: &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, &#39;WenQuanYi Micro Hei&#39;, sans-serif; line-height: 20px; white-space: normal; background-color: rgb(240, 240, 240);\"><img src=\"http://uniqueway.b0.upaiyun.com/uploads/a6d1a0a2-498b-4398-bf62-e0447c0a84a1.jpg!w700\" alt=\"\" style=\"box-sizing: border-box; border: 0px; margin: 10px 0px; padding: 0px; vertical-align: middle; width: 670px;\"/></p><p><br/></p>', '暖男的旅行箱', '每趟旅行都在帮妈妈完成一个又一个旅行心愿，\r\n她说要去加拿大看枫叶，我说跟我走吧！\r\n她说要去新西兰看星空，我说跟我走吧！\r\n他说要去维也纳听音乐会，我说跟我走吧！\r\n她说要去拉普兰德看北极光，我说，跟我走吧！', '1', '1', '2015-10-30 01:37:28', null, '0', null, '', '0', '{\"thumb\":\"563259b658b65.jpg\"}', '0', '0', '0', '0', '10', '2');

-- ----------------------------
-- Table structure for y_role
-- ----------------------------
DROP TABLE IF EXISTS `y_role`;
CREATE TABLE `y_role` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '角色名称',
  `pid` smallint(6) DEFAULT NULL COMMENT '父角色ID',
  `status` tinyint(1) unsigned DEFAULT NULL COMMENT '状态',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `listorder` int(3) NOT NULL DEFAULT '0' COMMENT '排序字段',
  PRIMARY KEY (`id`),
  KEY `parentId` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_role
-- ----------------------------
INSERT INTO `y_role` VALUES ('1', '超级管理员', '0', '1', '拥有网站最高管理员权限！', '1329633709', '1329633709', '0');
INSERT INTO `y_role` VALUES ('2', '旅行定制师', null, '1', '旅行定制师', '1446133680', '1446135622', '0');

-- ----------------------------
-- Table structure for y_role_user
-- ----------------------------
DROP TABLE IF EXISTS `y_role_user`;
CREATE TABLE `y_role_user` (
  `role_id` mediumint(9) unsigned DEFAULT NULL,
  `user_id` char(32) DEFAULT NULL,
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_role_user
-- ----------------------------
INSERT INTO `y_role_user` VALUES ('2', '4');
INSERT INTO `y_role_user` VALUES ('2', '5');
INSERT INTO `y_role_user` VALUES ('1', '5');

-- ----------------------------
-- Table structure for y_route
-- ----------------------------
DROP TABLE IF EXISTS `y_route`;
CREATE TABLE `y_route` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '路由id',
  `full_url` varchar(255) DEFAULT NULL COMMENT '完整url， 如：portal/list/index?id=1',
  `url` varchar(255) DEFAULT NULL COMMENT '实际显示的url',
  `listorder` int(5) DEFAULT '0' COMMENT '排序，优先级，越小优先级越高',
  `status` tinyint(1) DEFAULT '1' COMMENT '状态，1：启用 ;0：不启用',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_route
-- ----------------------------

-- ----------------------------
-- Table structure for y_slide
-- ----------------------------
DROP TABLE IF EXISTS `y_slide`;
CREATE TABLE `y_slide` (
  `slide_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `slide_cid` bigint(20) NOT NULL,
  `slide_name` varchar(255) NOT NULL,
  `slide_pic` varchar(255) DEFAULT NULL,
  `slide_url` varchar(255) DEFAULT NULL,
  `slide_des` varchar(255) DEFAULT NULL,
  `slide_content` text,
  `slide_status` int(2) NOT NULL DEFAULT '1',
  `listorder` int(10) DEFAULT '0',
  PRIMARY KEY (`slide_id`),
  KEY `slide_cid` (`slide_cid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_slide
-- ----------------------------

-- ----------------------------
-- Table structure for y_slide_cat
-- ----------------------------
DROP TABLE IF EXISTS `y_slide_cat`;
CREATE TABLE `y_slide_cat` (
  `cid` bigint(20) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) NOT NULL,
  `cat_idname` varchar(255) NOT NULL,
  `cat_remark` text,
  `cat_status` int(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`cid`),
  KEY `cat_idname` (`cat_idname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_slide_cat
-- ----------------------------

-- ----------------------------
-- Table structure for y_terms
-- ----------------------------
DROP TABLE IF EXISTS `y_terms`;
CREATE TABLE `y_terms` (
  `term_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `name` varchar(200) DEFAULT NULL COMMENT '分类名称',
  `slug` varchar(200) DEFAULT '',
  `taxonomy` varchar(32) DEFAULT NULL COMMENT '分类类型',
  `description` longtext COMMENT '分类描述',
  `parent` bigint(20) unsigned DEFAULT '0' COMMENT '分类父id',
  `count` bigint(20) DEFAULT '0' COMMENT '分类文章数',
  `path` varchar(500) DEFAULT NULL COMMENT '分类层级关系路径',
  `seo_title` varchar(500) DEFAULT NULL,
  `seo_keywords` varchar(500) DEFAULT NULL,
  `seo_description` varchar(500) DEFAULT NULL,
  `list_tpl` varchar(50) DEFAULT NULL COMMENT '分类列表模板',
  `one_tpl` varchar(50) DEFAULT NULL COMMENT '分类文章页模板',
  `listorder` int(5) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1发布，0不发布',
  PRIMARY KEY (`term_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_terms
-- ----------------------------
INSERT INTO `y_terms` VALUES ('1', '案例故事', '', 'article', '', '0', '0', '0-1', '', '', '', 'list', 'article', '0', '1');
INSERT INTO `y_terms` VALUES ('2', '定制师的故事', '', 'article', '', '0', '0', '0-2', '', '', '', 'list_masonry', 'article', '0', '1');
INSERT INTO `y_terms` VALUES ('3', '地点案例', '', 'article', '', '0', '0', '0-3', '', '', '', 'list', 'article', '0', '1');

-- ----------------------------
-- Table structure for y_term_relationships
-- ----------------------------
DROP TABLE IF EXISTS `y_term_relationships`;
CREATE TABLE `y_term_relationships` (
  `tid` bigint(20) NOT NULL AUTO_INCREMENT,
  `object_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'posts表里文章id',
  `term_id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '分类id',
  `listorder` int(10) NOT NULL DEFAULT '0' COMMENT '排序',
  `status` int(2) NOT NULL DEFAULT '1' COMMENT '状态，1发布，0不发布',
  PRIMARY KEY (`tid`),
  KEY `term_taxonomy_id` (`term_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_term_relationships
-- ----------------------------
INSERT INTO `y_term_relationships` VALUES ('1', '1', '1', '0', '1');
INSERT INTO `y_term_relationships` VALUES ('2', '2', '3', '0', '1');
INSERT INTO `y_term_relationships` VALUES ('3', '3', '2', '0', '1');

-- ----------------------------
-- Table structure for y_users
-- ----------------------------
DROP TABLE IF EXISTS `y_users`;
CREATE TABLE `y_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_login` varchar(60) NOT NULL DEFAULT '' COMMENT '用户名',
  `user_pass` varchar(64) NOT NULL DEFAULT '' COMMENT '登录密码；y_password加密',
  `user_nicename` varchar(50) NOT NULL DEFAULT '' COMMENT '用户美名',
  `user_email` varchar(100) NOT NULL DEFAULT '' COMMENT '登录邮箱',
  `user_url` varchar(100) NOT NULL DEFAULT '' COMMENT '用户个人网站',
  `avatar` varchar(255) DEFAULT NULL COMMENT '用户头像，相对于upload/avatar目录',
  `sex` smallint(1) DEFAULT '0' COMMENT '性别；0：保密，1：男；2：女',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `signature` varchar(255) DEFAULT NULL COMMENT '个性签名',
  `last_login_ip` varchar(16) NOT NULL COMMENT '最后登录ip',
  `last_login_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '最后登录时间',
  `create_time` datetime NOT NULL DEFAULT '2000-01-01 00:00:00' COMMENT '注册时间',
  `user_activation_key` varchar(60) NOT NULL DEFAULT '' COMMENT '激活码',
  `user_status` int(11) NOT NULL DEFAULT '1' COMMENT '用户状态 0：禁用； 1：正常 ；2：未验证',
  `score` int(11) NOT NULL DEFAULT '0' COMMENT '用户积分',
  `user_type` smallint(1) DEFAULT '1' COMMENT '用户类型，1:admin ;2:会员',
  `mobile` varchar(15) DEFAULT NULL COMMENT '手机号',
  `title` varchar(50) DEFAULT NULL COMMENT '标语',
  `word` varchar(255) DEFAULT NULL COMMENT '定制师的解说',
  `travel_maker` tinyint(1) DEFAULT '0' COMMENT '是否定制师',
  `story_id` int(11) DEFAULT '0' COMMENT '关联的故事ID',
  `is_top` tinyint(1) DEFAULT '0' COMMENT '是否置顶',
  `get_like` int(11) DEFAULT '0' COMMENT '获赞',
  PRIMARY KEY (`id`),
  KEY `user_login_key` (`user_login`),
  KEY `user_nicename` (`user_nicename`),
  KEY `mobile` (`mobile`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_users
-- ----------------------------
INSERT INTO `y_users` VALUES ('1', 'admin', 'ff108b961a8421232f297a57a5a743894a0e4a801fc36f8e', 'admin', '260658065@qq.com', '', null, '0', null, null, '127.0.0.1', '2015-10-29 20:06:10', '2015-09-26 06:17:41', '', '1', '0', '1', null, null, null, '0', '0', '0', '0');
INSERT INTO `y_users` VALUES ('2', 'jason', 'ff108b961a848eaf0c1868ecfec5c792c61ca6a47ec16f8e', 'jason', '', '', null, '0', null, null, '127.0.0.1', '2015-10-27 23:42:47', '2015-10-27 23:18:34', '', '1', '0', '2', '15858177440', null, null, '0', '0', '0', '0');
INSERT INTO `y_users` VALUES ('3', 'jason123', 'ff108b961a848eaf0c1868ecfec5c792c61ca6a47ec16f8e', 'jason123', '', '', null, '0', null, null, '127.0.0.1', '2015-10-27 23:26:44', '2015-10-27 23:26:44', '', '1', '0', '2', '15858177441', null, null, '0', '0', '0', '0');
INSERT INTO `y_users` VALUES ('4', 'Bella', 'ff108b961a84e10adc3949ba59abbe56e057f20f883e6f8e', 'Bella', '2606580651@qq.com', '', '/data/upload/56325166219a6.jpg', '2', null, null, '', '2000-01-01 00:00:00', '2000-01-01 00:00:00', '', '1', '0', '1', '15858177440', '一只迷路的Bunny', '漫长飞行岁月，穿过高山，穿过海洋，穿过世界尽头的无边幻境。是的，你没看错，在三万英尺的高空有我的办公室，日月星辰在我抬手就可触及的前方。银河漫漫，告诉我，你的星座是哪个？', '0', '0', '0', '0');
INSERT INTO `y_users` VALUES ('5', 'liboyuan', 'ff108b961a84e10adc3949ba59abbe56e057f20f883e6f8e', '李博渊', 'liboyuan@qq.com', '', '/data/upload/5632589f652ca.png', '1', null, null, '', '2000-01-01 00:00:00', '2000-01-01 00:00:00', '', '1', '0', '1', '13581111123', '暖男的旅行箱', '每趟旅行都在帮妈妈完成一个又一个旅行心愿，她说要去加拿大看枫叶，我说跟我走吧！\n她说要去新西兰看星空，我说跟我走吧！她说要去维也纳听音乐会，我说跟我走吧！\n她说要去拉普兰德看北极光，我说，那就跟着我走吧...', '0', '3', '1', '0');

-- ----------------------------
-- Table structure for y_user_favorites
-- ----------------------------
DROP TABLE IF EXISTS `y_user_favorites`;
CREATE TABLE `y_user_favorites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '收藏内容的标题',
  `url` varchar(255) DEFAULT NULL COMMENT '收藏内容的原文地址，不带域名',
  `description` varchar(500) DEFAULT NULL COMMENT '收藏内容的描述',
  `table` varchar(50) DEFAULT NULL COMMENT '收藏实体以前所在表，不带前缀',
  `object_id` int(11) DEFAULT NULL COMMENT '收藏内容原来的主键id',
  `createtime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of y_user_favorites
-- ----------------------------
