/**
 * axios二次封装
 * @author haotian.chen
 */
import axios from 'axios'
import config from '../config'
import router from '../router'
import { ElMessage } from 'element-plus'

const TOKEN_INVALID = 'Token认证失败';
const NETWORK_ERROR = '网络异常，请检查网络';
// 创建axios实例对象
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use((req) => {
  // TO-DO
  const headers = req.headers;
  if (!headers.Authorization) headers.Authorization = 'Jack'
  return req;
}, err => {
  return Promise.reject();
})

// 响应拦截
service.interceptors.response.use((res) => {
  // TO-DO
  const { code, data, msg } = res.data;
  if (code === 200) {
    // 请求成功，返回数据
    return data;
  } else if (code === 40001) {
    ElMessage.error(TOKEN_INVALID);
    // Token验证失败，跳转至登陆页面
    setTimeout(() => {
      router.push('/login');
    }, 3000)
    return Promise.reject(TOKEN_INVALID);
  } else {
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(NETWORK_ERROR);
  }
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request (options) {
  options.method = options.method || 'get';
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data;
  }
  if (typeof options.mock != 'undefind') {
    config.mock = options.mock
  }
  if (config.env === 'prod') {
    // 如果是生产环境,保证URL为生产路径
    service.defaults.baseURL = config.baseApi;
  } else {
    // 如果是开发环境/测试环境 则判断mock开关，来判断使用哪个域名
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return service(options);
}
/**
 * 调用方式一
 */
// request({
//     method: 'get',
//     url: 'xxxxxxxx',
//     data: {

//     }
// })

['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      method: item,
      data,
      ...options
    })
  }
})

/**
 * 调用方式二
 * */

// request.get('/login', {name:'jack'}, {}).then(res=> {
//     console.log(res);
// })

export default request;