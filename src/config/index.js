/**
 * 环境配置封装* 
 */

const env = import.meta.env.MODE || 'pord';
const EnvConfig = {
    // 开发环境
    dev: {
        baseApi: '/api',
        mockApi: './../../mockDev/'
    },
    // 测试环境
    test: {
        baseApi: '',
        mockApi: ''
    },
    // 生产环境
    pord: {
        baseApi: '',
        mockApi: ''
    }
}
export default {
    env,
    mock: false,
    namespace:'manager',
    ...EnvConfig[env]
}