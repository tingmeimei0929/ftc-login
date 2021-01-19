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
            <el-form-item class="smsItem last"  prop="验证码">
                <el-input type="text"
                    placeholder="短信验证码"
                    name="smsCode"
                    class="smsCode" v-model="ruleForm.sendCode">
                </el-input>
                <el-button class="smsBtn" type="button" @click="sendCode" :disabled="disabled" v-if="disabled==false" >
                    发送验证码
                </el-button>
                <el-button class="smsBtn" type="button" @click="sendCode" :disabled="disabled" v-if="disabled==true" >
                    {{ btntxt }}
                </el-button>
            </el-form-item>
            <el-form-item class="smsItem remember">
                <div  class="sidentify"></div>
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
            disabled: false,
            time: 0,
            btntxt: '重新发送',
            ruleForm: {
                phone: '',
                sendCode: ''
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
        // 手机验证发送验证码
        sendCode() {
            const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if (reg.test(this.ruleForm.phone)) {
                console.log(this.ruleForm.phone)
                this.$message({
                    message: '发送成功',
                    type: 'success',
                    center: true
                })
                this.time = 60
                this.disabled = true
                this.timer()
            }
        },
        // 60秒倒计时 
        timer(){
            if (this.time > 0) {
                this.time--
                this.btntxt = this.time + "s后重新发送"
                setTimeout(this.timer, 1000)
            } else {
                this.time = 0
                this.btntxt = "发送验证码"
                this.disabled = false
            }
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