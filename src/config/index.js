/**
 * 环境配置封装* 
 */

const env = import.meta.env.MODE || 'pord';
const EnvConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://dog.ceo/api/breeds/image/random'
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