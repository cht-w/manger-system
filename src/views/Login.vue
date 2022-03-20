<template>
  <div class="login-wrapper flex-center-all">
    <div class="modal">
      <div class="title">登陆</div>
      <el-form ref="userRef" :model="user" :rules="rules" status-icon>
        <el-form-item prop="userName">
          <!-- 用户名 -->
          <el-input v-model="user.userName" type="text" :prefix-icon="Avatar" />
        </el-form-item>
        <el-form-item prop="userPwd">
          <!-- 密码 -->
          <el-input
            v-model="user.userPwd"
            type="password"
            :prefix-icon="Eleme"
          />
        </el-form-item>
        <el-form-item>
          <!-- 登陆按钮 -->
          <el-button type="primary" class="btn-login" @click="login"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { Avatar, Eleme } from '@element-plus/icons-vue'
import { markRaw } from 'vue'
export default {
  name: 'login',
  data () {
    return {
      Avatar: markRaw(Avatar),
      Eleme: markRaw(Eleme),
      user: {
        userName: '',
        userPwd: ''
      },
      rules: {
        userName: [
          { required: true, message: 'Please input userName', trigger: 'blur' }
        ],
        userPwd: [
          { required: true, message: 'Please input userPwd', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.userRef.validate((valid) => {
        if (valid) {
          this.$api.login(this.user).then(res => {
            // 通过commit将用户信息保存到vuex中
            this.$store.commit('saveUserInfo', res)
            this.$router.push('/welcome')
          })
        }
      })
    }
  }
}
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
