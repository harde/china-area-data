# 中国行政区域数据 导入

 跟您想的不太一样，这并不是一个真正的省市区划的库，这个库是用来将[`airyland`]( https://github.com/airyland)的[`china-area-data`]( https://github.com/airyland/china-area-data)倒入到MySQL数据库的。
 
有需要的朋友自行拿去。
需要

#环境需求
1. node
2. npm

#使用
提前建立表

```
CREATE TABLE `tmp_area` (
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`parent` varchar(255),
	PRIMARY KEY (`code`)
) ENGINE=`InnoDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC COMMENT='';
```
	
1. 参考`.env.example`创建`.env`文件
2. 执行`npm i`安装依赖。
3. 执行`npm run start`



