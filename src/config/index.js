/**
 * 环境配置封装
 * @author haotian.chen
 */

const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
  // 开发环境
  dev: {
    baseApi: '/api',
    mockApi: './../../mockData/mockDev/'
  },
  // 测试环境
  test: {
    baseApi: '/api',
    mockApi: './../../mockData/mockTest/'
  },
  // 生产环境
  prod: {
    baseApi: '/api',
    mockApi: './../../mockData/mockProd/'
  }
}
export default {
  env,
  mock: false, //config中的mock开关，能够被api中的mock所覆盖。
  namespace: 'manager',
  ...EnvConfig[env]
}