<template>
    <div class="main">
        <navHeader></navHeader>
        <div class="container middle">
        </div>
        <navFooter></navFooter>
    </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
    name: "ForgetPsd",
    data() {
        return {
        
        };
    },
    components: {
        navHeader,
        navFooter
    },
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>