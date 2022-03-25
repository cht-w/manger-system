/**
 * api管理
 */
import request from './../utils/request'
export default {
  // 登陆
  login (params) {
    return request({
      // url: 'user.json',
      url: '/users/login',
      data: params,
      method: 'post',
      mock: false
    })
  },
  // 消息
  notice (params) {
    return request({
      url: 'notice.json',
      // url: '/leave/count',
      data: params,
      method: 'get',
      mock: true
    })
  },
  // 菜单列表
  getMenuList (params) {
    return request({
      url: 'notice.json',
      // url: '/menu/list',
      data: params,
      method: 'get',
      mock: true
    })
  }

}