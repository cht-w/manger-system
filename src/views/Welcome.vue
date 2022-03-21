<template>
  <div class="welcome flex-center-all">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">通用后台管理系统</div>
      <div class="desc text-left">
        -Vue3 + koa2 + ElementPlus + MongoDB技术栈
      </div>
    </div>
    <div class="img">
      <img src="./../assets/images/welcome.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "welcome"
}
</script>
<style lang="scss" scoped>
.welcome {
  height: 100%;
  .content {
    position: relative;
    bottom: 40px;
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }
    .desc {
      font-size: 14px;
      color: #999;
    }
  }
  .img {
    width: 371px;
    height: 438px;
    margin-left: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
