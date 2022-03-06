/**
 * 环境配置封装* 
 */

const env = import.meta.env.MODE || 'pord';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api/'
    },
    test: {
        baseApi: '',
        mockApi: ''
    },
    pord: {
        baseApi: '',
        mockApi: ''
    }
}
export default {
    env,
    mock: true,
    ...EnvConfig[env]
}