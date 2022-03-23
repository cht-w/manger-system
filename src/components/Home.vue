<template>
  <div class="basic-layout">
    <div class="nav-side">
      <div class="logo flex-center-all">
        <img src="./../assets/logo.png" alt="" />
        <span>Manager </span>
      </div>
      <!-- 导航栏 -->
      <el-menu
        active-text-color="#ffd04b"
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
    <div class="content-right">
      <div class="nav-top flex-between">
        <div class="left-item">
          <el-icon class="menu-flag" color="black" size="14px"
            ><setting
          /></el-icon>
          <span class="bread">面包屑</span>
        </div>
        <div class="right-item">退出</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Setting, Location } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isCollapse = ref(true);
</script>

<style lang="scss" scoped>
.basic-layout {
  position: relative;
  .nav-side {
    position: fixed;
    width: 200px;
    height: 100vh;
    background-color: #001529;
    color: #fff;
    overflow-y: auto;
    transition: width 0.5s;
    .logo {
      height: 50px;
      font-size: 18px;
      img {
        width: 32px;
        height: 32px;
        margin-right: 30px;
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
    .nav-top {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      .left-item {
        .menu-flag {
          margin-left: -15px;
        }
        .bread {
          margin-left: 20px;
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
