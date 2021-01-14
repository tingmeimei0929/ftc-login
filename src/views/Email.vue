<template>
    <div class="content">
        <el-form class="login-type" :rules="rules" :model="ruleForm" ref="ruleForm"  label-width="100px">
            <el-form-item  class="emailItem" prop="email" label="登录邮箱">
                <el-input type="text"
                    placeholder="请输入您的邮箱"
                    name="email"
                    class="email" v-model="ruleForm.email">
                </el-input>
            </el-form-item>
            <el-form-item class="emailItem"  prop="password" label="登录密码">
                <el-input type="text"
                    placeholder="请输入您的密码"
                    name="password"
                    class="password" v-model="ruleForm.password">
                </el-input>
            </el-form-item>
            <el-form-item class="emailItem"  prop="verification" label="验证码">
                <el-input type="text"
                    placeholder="请输入您的密码"
                    name="verification"
                    class="verification" v-model="ruleForm.verification">
                </el-input>
                <div class="identifyCode">
                    <img :src="imgCode">
                    <i class="el-icon-refresh" @click="refreshCode"></i>
                </div>
            </el-form-item>
            <el-form-item class="emailItem remember">
                <el-checkbox v-model="ruleForm.checked" class="sidentify">记住我</el-checkbox>
                <div class="manner">
                    <a @click="forgetPsd">忘记密码</a>
                    <a @click="registered">立即注册</a>
                </div>
            </el-form-item>
            <el-button class="button" @click="submitForm('ruleForm')">立即登录</el-button>
            <el-button class="button wxBtn"><a href="https://www.ftacademy.cn/wxlogin">微信登录</a></el-button>
        </el-form>
    </div>
</template>
<script>
import aixos from 'axios'
export default {
    name: "Email",
    data() {
        // 自定义验证邮箱
        const checkEmail = (rule, value, callback) => {
            const emailReg = /^[0-9A-Za-z_][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/
            if (emailReg.test(value)) {
                console.log(emailReg.test(value))
                callback()
            } else {
                callback(new Error("请输入正确的邮箱"))
            }
        }
        // 自定义验证密码
        // const checkPassword = (rule, value, callback) => {
        //     const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        //     if (passwordReg.test(value)) {
        //         callback()
        //     } else {
        //         callback(new Error("6～20位英文字母和数字"))
        //     }
        // }
        return {
            ruleForm: {
                email: '',
                password: '',
                verification: '',
                imgCode: '',
                ckecked: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, maxi: 18, message: '6～20位英文字母和数字', trigger: 'blur' }
                ]

            }
        };
    },
    created () {
        this.refreshCode()
    },
    methods: {
        refreshCode: function () {
            axios.post("api/captchacode").then(res => {
                this.imgCode = res.data;
                console.log(imgCode)
            })
        },
        forgetPsd() {
            this.$router.push({
                path: 'ForgetPsd'
            })
        },
        registered() {
            this.$router.push({
                path: 'Registered'
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>