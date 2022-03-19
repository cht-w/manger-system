<template>
  <div>Login页面</div>
  <el-button @click="goHome">回首页1</el-button>
</template>
<script setup>
// 使用vue3的钩子函数方式实现路由跳转
import { useRouter } from 'vue-router';
import { getCurrentInstance } from 'vue'
const router = useRouter();
const goHome = () => {
  router.push("/");
}
const cxt = getCurrentInstance();
console.log(cxt)
</script>

<style scoped>
</style>
