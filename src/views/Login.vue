<template>
  <div class="login-wrapper flex-center-all">
    <div class="modal">
      <div class="title">登陆</div>
      <el-form-item>
        <el-input :prefix-icon="Avatar" type="text" />
      </el-form-item>
      <el-form-item>
        <el-input :prefix-icon="Eleme" type="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn-login">登陆</el-button>
      </el-form-item>
    </div>
  </div>
</template>
<script setup>
import { Avatar, Eleme } from '@element-plus/icons-vue'
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

<style lang="scss" scoped>
.login-wrapper {
  height: 100vh;
  width: 100vw;
  background-color: #15293d;
  .modal {
    width: 400px;
    padding: 50px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .title {
      margin-bottom: 30px;
      text-align: center;
      font-size: 30px;
      color: #fff;
    }
    .btn-login {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
