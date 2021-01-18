<template>
    <div class="main">
        <navHeader :isRegistered=2></navHeader>
        <div class="container findPsd">
            <div class="content">
                <el-form class="findPsd-type" :rules="rules" :model="ruleForm" ref="ruleForm"  label-width="100px">
                    <h2>输入注册时所填写的电子邮箱</h2>
                    <el-form-item  class="findPsdItem" prop="email">
                        <el-input type="text"
                            placeholder="请输入您的邮箱"
                            name="email"
                            class="email" v-model="ruleForm.email">
                        </el-input>
                    </el-form-item>
                    <el-button class="button" @click="submitForm('ruleForm')">提交</el-button>
                </el-form>
            </div>
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
        return {
            ruleForm: {
                email: ''
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ]
            }
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