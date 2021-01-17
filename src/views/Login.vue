<template>
  <div class="main">
    <navHeader :isRegistered=0></navHeader>
    <div class="container middle">
      <ul class="title">
        <li v-for="(item, index) in tagList"
            :key="index"
            @click="gotoAddress({path: item.path}, index)"
            :class="{active: $route.name === item.name}">{{ item.title }}</li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <navFooter></navFooter>
  </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
  name: "Login",
  data () {
    return {
      tagList: [
        {
          title: '手机号登录',
          path: '/Phone',
          name: 'Phone'
        },
        {
          title: '电子邮箱登录',
          path: '/Email',
          name: 'Email'
        }
      ]
    }
  },
  components: {
    navHeader,
    navFooter
  },
  methods: {
    gotoAddress (path, index) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>