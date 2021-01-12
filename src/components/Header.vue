<template>
   <div class="container header">
        <div class="logo">
            <a href="http://www.ftchinese.com/">
                <img src="http://static.ftacademy.cn/img/logoHD.gif" alt="FT中文网" >
            </a>
            <span>登录</span>
        </div>
        <div class="fastEntrance">
            <a href="">注册</a>
            <span class="step">|</span>
            <a href="http://www.ftchinese.com/">首页</a>
        </div>
   </div>
</template>
    
<script>
export default {
     name: "Header",
     data() {
         return {
            
         };
     }
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/scss/header.scss");
</style>