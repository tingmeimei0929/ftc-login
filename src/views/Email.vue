<template>
    <div class="content">
        <el-form class="login-type" :rules="rules" :model="ruleForm" ref="ruleForm"  label-width="80px">
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
                <div @click="refreshCode" class="identifyCode">
                    <s-identify :identifyCode="identifyCode"></s-identify>
                </div>
            </el-form-item>
            <el-form-item class="emailItem remember">
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
import SIdentify from '../components/Sldentify'
export default {
    name: "Email",
    data() {
        return {
            ruleForm: {
                email: '',
                password: '',
                verification: ''
            },
            rules: [

            ],
            identifyCodes: '1234567890abcdefggijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVUWXYZ',
            identifyCode: ''
        };
    },
    components: {
        SIdentify
    },
    mounted () {
        //   验证码初始化
        this.identifyCode = ''
        this.makeCode(this.identifyCodes, 3)
    },
    methods: {
         // 生成随机数
        randomNum (min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        },
        // 切换验证码
        refreshCode () {
            this.identifyCode = ''
            this.makeCode(this.identifyCodes, 3)
        },
        // 生成四位随机验证码
        makeCode (o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ]
            }
            console.log(this.identifyCode)
        },
    }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>