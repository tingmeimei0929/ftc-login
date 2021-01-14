<template>
    <div class="container header">
        <div class="logo">
            <a href="http://www.ftchinese.com/">
                <img src="http://static.ftacademy.cn/img/logoHD.gif" alt="FT中文网" >
            </a>
            <span>登录</span>
            <span v-show="isShow">新用户注册</span>
        </div>
        <div class="fastEntrance">
            <span @click="goRegistered" >注册</span>
            <span v-show="isShow" @click="goLogin">登录</span>
            <a href="http://www.ftchinese.com/">首页</a>
        </div>
    </div>
</template>
    
<script>
export default {
    name: "Header",
    data() {
        return {
            isShow: false,
            dynamicSegment: ''
        };
    },
    methods: {
        goRegistered() {
            this.$router.push({
                path: 'Registered',
            })
        },
        goLogin() {
            this.$router.push({
                path: 'Phone',
            })
        }
    },
    watch: {
        $route(to, from) {
            console.log(to)
            console.log(from)
            this.dynamicSegment = to.query.id
            this.isShow = true
        }
    }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/header.scss");
</style>