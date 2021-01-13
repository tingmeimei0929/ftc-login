<template>
    <div class="content">
        <el-form class="login-type" :rules="rules" :model="ruleForm" ref="ruleForm">
            <el-form-item  class="smsItem" prop="tel" >
                <el-input type="text"
                    placeholder="请输入您的手机号码"
                    name="tel"
                    class="tel" v-model="ruleForm.tel">
                </el-input>
            </el-form-item>
            <el-form-item class="smsItem last"  prop="smsCode">
                <el-input type="text"
                    placeholder="短信验证码"
                    name="smsCode"
                    class="smsCode" v-model="ruleForm.smsCode">
                </el-input>
                <div class="smsBtn" >
                    <a @click="countDown" :class="{disabled: !this.canClick}" >{{ content }}</a>
                </div>
            </el-form-item>
            <el-form-item class="smsItem remember">
                <el-checkbox v-model="checked" class="sidentify">记住我</el-checkbox>
                <div class="manner">
                    <router-link to="">忘记密码</router-link>
                    <router-link to="">立即注册</router-link>
                </div>
            </el-form-item>
            <el-button class="button" @click="submitForm('ruleForm')">立即登录</el-button>
            <el-button class="button wxBtn"><a href="https://www.ftacademy.cn/wxlogin">微信登录</a></el-button>
        </el-form>
    </div>
</template>
<script>
export default {
    name: "Phone",
    data() {
          // <!--验证手机号是否合法-->
        const checkTel = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入手机号'))
            } else if (!this.checkMobile(value)) {
                callback(new Error('手机号格式不正确'))
            } else {
                callback()
            }
        }
        //  <!--验证码是否为空-->
        const checkSmsCode = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入短信验证码'))
            } else {
                callback()
            }
        }
        return {
            ruleForm: {
                tel: '',
                smsCode: ''
            },
            rules: {
                tel: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { validator: checkTel, trigger: 'blur' }
                ],
                smsCode: [
                    { required: true, message: '请输入短信验证码', trigger: 'blur' },
                    { validator: checkSmsCode, trigger: 'blur' }
                ]
            },
            content: '获取验证码',
            flag: true,
            totalTime: 60,
            canclick: true
        }
    },
    methods: {
        usercode () {
            this.$router.push({
                path: '/Login/Account'
            })
        },
        code () {
            this.$router.push({
                path: '/CodeRules'
            })
        },
        countDown () {
            if (!this.canclick) {
                return
            }
            this.canclick = false
            this.content = '重新发送(' + this.totalTime + ')'
            const clock = window.setInterval(() => {
                this.totalTime--
                this.content = '重新发送(' + this.totalTime + ')'
                if (this.totalTime < 0) {
                window.clearInterval(clock)
                this.content = '获取验证码'
                this.totalTime = 60
                this.canclick = true
                }
            }, 1000)
        },
        // 验证手机号
        checkMobile (str) {
            const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if (reg.test(str)) {
                return true
            } else {
                return false
            }
        },
        // <!--提交登录-->
        submitForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                setTimeout(() => {
                    this.$message({
                    message: '登录成功！',
                    type: 'success'
                    })
                }, 400)
                } else {
                console.log('error submit!!')
                return false
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>