import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import request from './utils/request'

console.log('获取环境变量', import.meta.env)

const app = createApp(App);


// 挂载全局的变量(和vue2稍有不同)
app.config.globalProperties.$request = request;
app.use(router).use(ElementPlus).mount('#app')
