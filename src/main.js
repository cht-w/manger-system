import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import config from './config'

console.log('获取环境变量', import.meta.env)

const app = createApp(App);

axios.get(config.mockApi).then((res)=> {
    console.log(res.data, '接口打印成功')
})
app.use(router).use(ElementPlus).mount('#app')
