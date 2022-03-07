<template>
    <div>Login页面</div>
    <el-button @click="goHome">回首页</el-button>
</template>
<script setup>
    // 使用vue3的钩子函数方式实现路由跳转
    import { useRouter } from 'vue-router';
    import { getCurrentInstance } from 'vue'
    const router = useRouter();
    const goHome = ()=> {
        router.push('/');
    }
    const cxt = getCurrentInstance();
    console.log(cxt)
    // 方式一:
    cxt.appContext.config.globalProperties.$request({
        method: 'get',
        // url: 'imgList.json',
        url: '/comments'
    }).then(res=> {
        console.log(res, '======')
    })
    // 方式二：
    // cxt.appContext.config.globalProperties.$request.get('/login', {name:'jack'}, {}).then(res=> {
    //     console.log(res);
    // })
</script>

<style scoped>
</style>
