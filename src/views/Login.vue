<template>
    <div class="main">
        <navHeader></navHeader>
        <div class="container middle">
            <div class="title">
                <router-link to="/Phone">手机号登录</router-link>
                <router-link to="/Email">用户名登录</router-link>
            </div>
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
     data() {
         return {
            
         };
     },
     components: {
         navHeader,
         navFooter
     }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>