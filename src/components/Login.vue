<template>
    <div>Login页面</div>
    <el-button @click="goHome">回首页</el-button>
</template>
<script setup>
    // 使用vue3的钩子函数方式实现路由跳转
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const goHome = ()=> {
        router.push('/');
    }
</script>

<style scoped>
</style>
