<template>
  <div class="basic-layout">
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <div class="logo">
        <img src="./../assets/logo.png" alt="" />
        <span>Manager </span>
      </div>
      <!-- 导航栏 -->
      <el-menu
        background-color="#001529"
        class="el-menu"
        default-active="2"
        text-color="#fff"
        :collapse="isCollapse"
        router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon color="#fff" size="14px"><location /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
          <el-menu-item index="1-2">菜单管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon color="#fff" size="14px"><setting /></el-icon>
            <span>审批管理</span>
          </template>
          <el-menu-item index="2-1">休假申请</el-menu-item>
          <el-menu-item index="2-2">待我审批</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top flex-between">
        <div class="left-item" @click="handleOpenOrClose">
          <el-icon class="menu-flag" color="black" size="14px"
            ><setting
          /></el-icon>
          <span class="bread">面包屑</span>
        </div>
        <div class="right-item flex-between-all">
          <el-badge class="notice" :is-dot="notice > 0 ? true : false">
            <el-icon class="bell"><bell-filled /></el-icon>
          </el-badge>
          <div class="userInfo">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                Admin
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="email">邮箱：</el-dropdown-item>
                  <el-dropdown-item command="logout">退出：</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Setting, Location, BellFilled, ArrowDown } from '@element-plus/icons-vue'
import { getCurrentInstance, ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  components: {
    Setting,
    Location,
    BellFilled,
    ArrowDown
  },
  setup () {
    const $router = useRouter()
    const isCollapse = ref(false) // 控制菜单栏展开收起
    const notice = ref(0) // 消息提示数量(如果大于0则有消息提示)
    const { proxy } = getCurrentInstance();
    const handleOpenOrClose = () => {
      isCollapse.value = !isCollapse.value
    }
    onMounted(() => {
      proxy.getNotice()
      proxy.getMenuList()
    })
    // 获取消息提示数量
    const getNotice = () => {
      const params = {
        userName: 'admin'
      }
      proxy.$api.notice(params).then(res => {
        notice.value = res.notice
        console.log(res)
      })
    }
    // 退出功能实现
    const handleCommand = (command) => {
      if (command === 'logout') {
        $router.push('/login')
      }
    }
    // 获取菜单数量
    const getMenuList = async () => { }
    return {
      isCollapse,
      notice,
      handleOpenOrClose,
      handleCommand,
      getNotice,
      getMenuList
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    color: #fff;
    overflow: hidden;
    overflow-y: auto;
    transition: width 0.5s;
    background-color: #001529;
    &.fold {
      width: 80px;
    }
    &.unfold {
      width: 200px;
    }
    .logo {
      height: 50px;
      font-size: 18px;
      display: flex;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin-right: 30px;
        margin-left: 20px;
      }
    }
    .el-menu {
      height: calc(100vh - 50px);
      border-right: none;
    }
  }
  .content-right {
    margin-left: 200px;
    height: 100vh;
    transition: margin 0.5s;
    &.fold {
      margin-left: 80px;
    }
    &.unfold {
      margin-left: 200px;
    }
    .nav-top {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      .left-item {
        .menu-flag {
          cursor: pointer;
          // margin-left: 10px;
        }
        .bread {
          margin-left: 20px;
        }
      }
      .right-item {
        height: 100%;
        .notice {
          line-height: 30px;
          margin-right: 30px;
          .bell {
            padding: 5px;
          }
        }
        .userInfo {
          display: flex;
          justify-content: flex-end;
          cursor: pointer;
          .el-dropdown-link {
            color: #409;
          }
        }
      }
    }
    .wrapper {
      background-color: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      .main-page {
        background: #fff;
        padding: 20px;
        height: 100%;
      }
    }
  }
}
</style>
