import{
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
}from './mutations-types'

import{
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'

export default{
//异步获取地址
async getAddress({commit,state}){
    const geohash = state.latitude+','+state.longitude
    //发送异步ajax请求
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code===0){
        const address = result.data
        commit(RECEIVE_ADDRESS,{address})
    }
},
//异步获取食品分类列表
async getCategorys({commit}){
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if(result.code===0){
        const categorys = result.data
        commit(RECEIVE_CATEGORYS,{categorys})
    }
},
//异步获取商家列表
async getShops({commit,state}){
    const {longitude,latitude} = state
    //发送异步ajax请求
    const result = await reqShops(longitude,latitude)
    //提交一个mutation
    if(result.code===0){
        const shops = result.data
        commit(RECEIVE_SHOPS,{shops})
    }
}
}