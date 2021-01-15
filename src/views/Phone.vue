<template>
    <div class="content">
        <el-form class="login-type" :rules="rules" :model="ruleForm" ref="ruleForm">
            <el-form-item  class="smsItem" prop="phone" >
                <el-input type="text"
                    placeholder="请输入您的手机号码"
                    name="phone"
                    class="phone" v-model="ruleForm.phone">
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
                    <router-link to="/ForgetPsd">忘记密码</router-link>
                    <router-link to="/Registered">立即注册</router-link>
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
        const checkMobile = (rule, value, callback) => {
            const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if (!Number.isInteger(+value)) {
                callback(new Error('请输入数字值'))
            } else {
                if (phoneReg.test(value)) {
                    callback()
                } else {
                    callback(new Error("请输入正确的电话号码"))
                }
            }
        }
        return {
            ruleForm: {
                phone: '',
                smsCode: ''
            },
            rules: {
                phone: [
                    { required: true, message: "请输入手机号码", trigger: 'blur' },
                    { validator: checkMobile, trigger: 'blur'}
                ],
                smsCode: [
                    { required: true, message: "请输入验证码", trigger: 'blur' }
                ]
            },
            content: '获取验证码',
            flag: true,
            totalTime: 60,
            canclick: true
        }
    },
    methods: {
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