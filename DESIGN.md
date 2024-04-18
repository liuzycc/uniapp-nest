## 表

### users

```text
id: 主
name: 用户昵称
phone: 手机号
avatar: 用户头像
remake: 备注信息
openid: 微信openid
unionid: 微信unionid
address: 地址
```

### products 商品

```text
id: 主
title: 商品名称
showTitle: 详情页展示名称
subTitle: 商品描述
tags: 标签枚举 [0,1,2]
thum: 商品缩略图 'xxx'
imgs: 详情页展示的图片套图 ['xxx','xxx','xxx']
info: 详情页展示的详细内容,大图文本 'xxx'
sort1: 一级分类
sort2: 二级分类
isDelete: 是否删除
```

### sort 一级分类

id: 主
title: 名称
level1: 一级分类| 二级分类 ---- 1 | 2
level2

### shop 购物车

id: 主
userId: userId
products: 商品索引列表

### shop 订单

id: 主
userId: userId
products: 商品索引列表 { productId,count }
remark: 订单备注
status: 订单状态 已下单待沟通，已完成，已删除
isDelete: 是否删除
