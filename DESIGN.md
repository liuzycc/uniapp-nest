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
info: 详情页展示的详细内容,大图文本 'xxx',包括可扩展属性
sort1: 一级分类
sort2: 二级分类
config: 数组长文本(记录商品的可选属性) [{isMultiple:false,name:'颜色',list:['黄色','蓝色','绿色']},{isMultiple:true,name:'材料',list:['玻璃','塑料','皮革']}]
count: 库存
sellNum: 已售数量
isDelete: 是否删除
```

### sort 一级分类

id: 主
title: 名称
level1: 1 0 一级
level2: 0 1 二级并且所属id为1的一级标签

### shop 订单

id: 主
userId: userId
products: 商品索引列表 { productId,count,config }
remark: 订单备注
status: 订单状态 已下单待沟通，已完成，已删除
isDelete: 是否删除

### image 图片资源

id: 主
path: 存储绝对路径
url: 访问资源相对路径
name: 服务器图片名称 (包含后缀)
originName: 原始图片名称 (包含后缀)
isDelete: 是否删除

export class ImageDto {
readonly id?: number;
readonly path: string;
readonly url: string;
readonly isDelete: number;
}
