<template>
    <div class="container footer">
        <div class="list">
            <a href="http://www.ftchinese.com/m/corp/aboutus.html">关于我们</a>
            <a href="https://ft.wd3.myworkdayjobs.com/FT_Chinese_External_Careers">加入我们</a>
            <a href="http://www.ftchinese.com/m/corp/faq.html">问题回馈</a>
            <a href="http://www.ftchinese.com/m/corp/contact.html">联系方式</a>
            <a href="http://www.ftchinese.com/m/corp/partner.html">合作伙伴</a>
            <a href="http://www.ftchinese.com/m/corp/service.html">服务条款</a>
            <a href="http://www.ftchinese.com/m/corp/sales.html">广告业务</a>
            <a href="http://www.ftchinese.com/m/corp/copyright.html">版权声明</a>
            <a href="http://www.ftchinese.com/m/marketing/ftc.html">最新动态</a>
            <br style='clear:both'/>
        </div>
        <div class="present">
            <p>© The Financial Times Ltd<span>{{ times }}</span></p>
            <p>FT  and 'Financial Times' are trademarks of The Financial Times Ltd.</p>
            <br style='clear:both'/>
        </div>
    </div>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return { 
        times: '', //格式化之后的当前时间
        currentTime: new Date() //当前时间

        };
    },
    created() {
        this.getTimes()
    },
    beforeDestroy() {
        //  在Vue实例销毁前，清除定时器
        if (this.times) {
            clearInterval(this.getTimesInterval)
        }
    },
    methods: {
        getTimes() {
            setInterval(this.getTimesInterval, 1000)
        },
        getTimesInterval: function () {
            let _this = this
            let year = new Date().getFullYear() //获取当前时间的年份
            // 拼接格式化当前时间
            _this.times = year
        }
    }
}
</script>
  
<style lang="scss" scoped>
@import url('../assets/scss/footer.scss');
</style>