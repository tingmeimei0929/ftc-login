<template>
  <div class="main">
    <navHeader></navHeader>
    <div class="container middle">
      <ul class="title">
        <li v-for="(item, index) in tagList"
            :key="index"
            @click="gotoAddress({path: item.path}, index)"
            :class="{active: activeIndex == index }">{{ item.name }}</li>
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
          name: '手机号登录',
          path: '/Phone'
        },
        {
          name: '电子邮箱登录',
          path: '/Email'
        }
      ],
      activeIndex: 0,
    }
  },
  components: {
    navHeader,
    navFooter
  },
  methods: {
    gotoAddress (path, index) {
      this.$router.push(path);
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>