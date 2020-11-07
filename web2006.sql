/*
SQLyog Ultimate v11.25 (64 bit)
MySQL - 10.1.28-MariaDB : Database - web2006
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`web2006` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `web2006`;

/*Table structure for table `carts` */

DROP TABLE IF EXISTS `carts`;

CREATE TABLE `carts` (
  `p_id` int(20) NOT NULL COMMENT '购物车中的商品id',
  `p_img` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '商品图片',
  `p_title` varchar(30) COLLATE utf8_bin NOT NULL COMMENT '商品名称',
  `p_price` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '商品价格'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `carts` */

LOCK TABLES `carts` WRITE;

insert  into `carts`(`p_id`,`p_img`,`p_title`,`p_price`) values (11,'/bed/item_2','双层边桌','289');

UNLOCK TABLES;

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `pid` bigint(30) NOT NULL COMMENT '导航栏id，主键且自增',
  `pname` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '导航栏名称',
  `sub_id` bigint(20) DEFAULT NULL COMMENT '导航栏的子栏目，可以为空'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `category` */

LOCK TABLES `category` WRITE;

insert  into `category`(`pid`,`pname`,`sub_id`) values (10,'客厅',NULL),(20,'卧室',NULL),(30,'餐厅',NULL),(40,'厨房',NULL),(50,'浴室',NULL),(60,'关于',61);

UNLOCK TABLES;

/*Table structure for table `products` */

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `p_id` int(30) NOT NULL AUTO_INCREMENT COMMENT '商品id，不能为空',
  `p_title` varchar(30) NOT NULL COMMENT '商品名称，不能为空',
  `p_price` varchar(20) NOT NULL COMMENT '商品价格，不能为空',
  `p_img` varchar(50) NOT NULL COMMENT '商品图片',
  `p_desc` varchar(30) DEFAULT NULL COMMENT '商品描述',
  `pname` varchar(30) NOT NULL COMMENT '商品所属类别',
  `p_number` varchar(10) NOT NULL COMMENT '商品编号',
  `p_class` varchar(10) DEFAULT NULL COMMENT '商品分类（颜色）',
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

/*Data for the table `products` */

LOCK TABLES `products` WRITE;

insert  into `products`(`p_id`,`p_title`,`p_price`,`p_img`,`p_desc`,`pname`,`p_number`,`p_class`) values (1,'布艺懒人沙发','2569','living/living_item_1','品牌: HOMGMA','客厅','005012 ',NULL),(2,'落地灯','299','living/living_item_2','品牌: HOMGMA','客厅','007022',NULL),(3,'休闲座椅','155','living/living_item_3','品牌: HOMGMA','客厅','007782',NULL),(4,'单人沙发','2999','living/living_item_4','品牌: HOMGMA','客厅','007078',NULL),(5,'台灯','219','living/living_item_5','品牌: HOMGMA','客厅','008713',NULL),(6,'边桌','399','living/living_item_6','品牌: HOMGMA','客厅','003510',NULL),(7,'单人沙发G','2499','living/living_item_7','品牌: HOMGMA','客厅','004007',NULL),(8,'真皮沙发','2999','living/living_item_8','品牌: HOMGMA','客厅','002006',NULL),(9,'落地灯F','315','living/living_item_9','品牌: HOMGMA','客厅','003325',NULL),(10,'扶手椅','59','bed/item_1','品牌: HOMGMA','卧室','003007',NULL),(11,'双层边桌','289','bed/item_2','品牌: HOMGMA','卧室','003022',NULL),(12,'靠背椅','599','bed/item_3','品牌: HOMGMA','卧室','004006',NULL),(13,'实木抽屉','1650','bed/item_4','','卧室','003005',NULL),(14,'休闲椅','69','bed/item_5',NULL,'卧室','020665',NULL),(15,'餐厅座椅','499','dining/item_1','品牌: HOMGMA','餐厅','003008',NULL),(16,'休闲椅','69','dining/item_2','品牌: HOMGMA','餐厅','020665',NULL),(17,'扶手椅','59','cooking/item_1','品牌: HOMGMA','卧室','003007',NULL),(18,'黑色置物架','205','cooking/item_2','品牌: HOMGMA','厨房','002100 ',NULL),(19,'收纳盆','45','cooking/item_3','品牌: HOMGMA','厨房','002193 ',NULL),(20,'洁具套件','366','cooking/item_4','品牌: HOMGMA','浴室','005336',NULL),(21,'布艺懒人沙发','2655','cooking/item_5','品牌: HOMGMA','客厅','005012 ',NULL),(22,'单人镜柜','895','cooking/item_6','品牌: HOMGMA','浴室','002161 ',NULL),(23,'置物挂件','69','cooking/item_7','品牌: HOMGMA','浴室','005242 ',NULL),(24,'衣物收纳','69','cooking/item_8','品牌: HOMGMA','浴室','003375',NULL),(25,'门把手','8','cooking/item_9','品牌: HOMGMA','浴室','009193',NULL),(26,'洁具套件','366','bath/item_1','品牌: HOMGMA','浴室','005336',NULL),(27,'单门镜柜','865','bath/item_2','品牌: HOMGMA','浴室','002161',NULL),(28,'化妆镜','69','bath/item_3','品牌: HOMGMA','浴室','003375 ',NULL),(29,'衣物收纳','69','bath/item_4','品牌: HOMGMA','浴室','003375 ',NULL),(30,'置物挂件','69','bath/item_5','品牌: HOMGMA','浴室','005242 ',NULL),(31,'置物架','49','bath/item_6','品牌: HOMGMA','浴室','002161 ',NULL),(32,'','','bath/item_7',NULL,'','',NULL);

UNLOCK TABLES;

/*Table structure for table `subtopic` */

DROP TABLE IF EXISTS `subtopic`;

CREATE TABLE `subtopic` (
  `pid` bigint(30) DEFAULT '60' COMMENT '导航栏id',
  `sub_name` varchar(20) DEFAULT NULL COMMENT '子栏目名称',
  `sub_id` bigint(10) DEFAULT NULL COMMENT '子栏目id'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `subtopic` */

LOCK TABLES `subtopic` WRITE;

insert  into `subtopic`(`pid`,`sub_name`,`sub_id`) values (60,'常见问题',61),(60,'支付方式',62),(60,'加盟方式',63),(60,'联系我们',64);

UNLOCK TABLES;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `uid` varchar(50) COLLATE utf8_bin NOT NULL COMMENT '用户id',
  `uname` varchar(20) COLLATE utf8_bin DEFAULT NULL COMMENT '用户名',
  `password` varchar(20) COLLATE utf8_bin NOT NULL COMMENT '用户密码',
  `u_nickname` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT '用户昵称',
  `u_phone` char(20) COLLATE utf8_bin DEFAULT NULL COMMENT '用户电话',
  `u_addr` varchar(50) COLLATE utf8_bin DEFAULT NULL COMMENT '用户地址',
  `u_sex` char(10) COLLATE utf8_bin DEFAULT NULL COMMENT '用户性别'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `user` */

LOCK TABLES `user` WRITE;

insert  into `user`(`uid`,`uname`,`password`,`u_nickname`,`u_phone`,`u_addr`,`u_sex`) values ('1','xiaoxiao','123456','小小','13898988989','重庆市江北区观音桥北城天街','0'),('2','dongdong','123456','李晓东','15838384848','北京市朝阳区','1');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
