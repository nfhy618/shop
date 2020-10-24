//包含接口函数的模块

import ajax from "./ajax"
const BASE_URL='/api'
//根据经纬度获取位置详情
export const reqAddress=(geohash)=>ajax(BASE_URL+'/position/'+geohash)
//获取食品分类列表
export const reqFoodCategorys=()=>ajax(BASE_URL+'/index_category')
//根据经纬度获取商铺列表
export const reqShops=(longitude,latitude)=>ajax(BASE_URL+'/shops',{longitude:a,latitude:b})

