/**
 * api管理
 */
import request from './../utils/request'
export default {
  login (params) {
    return request({
      // url: 'user.json',
      url: '/users/login',
      data: params,
      method: 'post',
      mock: false
    })
  }
}