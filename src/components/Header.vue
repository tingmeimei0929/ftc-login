<template>
  <div class="container header">
    <div class="logo">
      <a href="http://www.ftchinese.com/">
        <img src="http://static.ftacademy.cn/img/logoHD.gif"
             alt="FT中文网">
      </a>
      <span v-if="isRegistered === 0">登录</span>
      <span v-if="isRegistered === 1">新用户注册</span>
    </div>
    <div class="fastEntrance">
      <span @click="goRegistered"
            v-if="isRegistered === 0">注册</span>
      <span v-if="isRegistered === 1"
            @click="goLogin">登录</span>
      <a href="http://www.ftchinese.com/">首页</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data () {
    return {
      isShow: false,
      show: true
    }
  },
  props: ['isRegistered'],
  methods: {
    goRegistered () {
      this.$router.push({
        path: 'Registered',
      })
    },
    goLogin () {
      this.$router.push({
        path: 'Phone',
      })
    }
  }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/header.scss");
</style>