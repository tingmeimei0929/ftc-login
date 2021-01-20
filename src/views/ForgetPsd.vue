<template>
    <div class="main">
        <navHeader :isRegistered=2></navHeader>
        <div class="container findPsd">
            <div class="content">
                <el-form class="findPsd-type" :rules="rules4" :model="ruleForm4" ref="ruleForm4"  label-width="100px">
                    <h2>输入注册时所填写的电子邮箱</h2>
                    <el-form-item  class="findPsdItem" prop="reg_email">
                        <el-input type="text"
                            placeholder="请输入您的邮箱"
                            name="reg_email"
                            class="email" v-model="ruleForm4.reg_email">
                        </el-input>
                    </el-form-item>
                    <el-button class="button" @click="findPsdForm('ruleForm4')">提交</el-button>
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
            ruleForm4: {
                reg_email: ''
            },
            rules4: {
                reg_email: [
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
    methods: {
         // <!--找回密码提交-->
        findPsdForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.axios.post('http://profile.ftchinese.com/users/findpassword', {reg_email: this.ruleForm4.reg_email}).then(res => {
                        if(res.data.code == 200) {
                            this.$message.success('系统已向您的邮箱发送了一封邮件，请按邮件中的链接重置密码')
                        } 
                    })
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>