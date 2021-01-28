<template>
    <div class="content">
        <el-form class="login-type" :rules="rules3" :model="ruleForm3" ref="ruleForm3">
            <el-form-item  class="smsItem" prop="mobile_phone_no" >
                <el-input type="text"
                    placeholder="请输入您的手机号码"
                    name="mobile_phone_no"
                    class="phone" v-model="ruleForm3.mobile_phone_no">
                </el-input>
            </el-form-item>
            <el-form-item class="smsItem last">
                <el-input
                    oninput="value=value.replace(/[^\d]/g, '')"
                    maxlength="6"
                    placeholder="输入6位短信验证码"
                    name="smsCode"
                    class="smsCode" v-model="verify_code" >
                </el-input>
                <el-button class="smsBtn" type="button" @click="sendCode" :disabled="disabled" v-if="disabled==false" >
                    发送验证码
                </el-button>
                <el-button class="smsBtn" type="button" @click="sendCode" :disabled="disabled" v-if="disabled==true" >
                    {{ btntxt }}
                </el-button>
                <div class="el-form-item__error">{{ message }}</div>
            </el-form-item>
            <!-- <el-form-item class="smsItem remember">
                <div  class="sidentify"></div>
                <div class="manner">
                    <router-link to="/ForgetPsd">忘记密码</router-link>
                    <router-link to="/Registered">立即注册</router-link>
                </div>
            </el-form-item> -->
            <el-button class="button" @click="submitForm('ruleForm3')">立即登录</el-button>
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
            verify_code: '',
            message: '',
            ruleForm3: {
                mobile_phone_no: ''
            },
            rules3: {
                mobile_phone_no: [
                    { required: true, message: "请输入手机号码", trigger: 'blur' },
                    { validator: checkMobile, trigger: 'blur'}
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
            if(this.ruleForm3.mobile_phone_no == '') {
                this.$message({
                    message: '手机号不能为空',
                    center: true
                })
                return
            }
            const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if (reg.test(this.ruleForm3.mobile_phone_no)) {
                this.axios.post('/users/login/captcha', {
                    // tpl_id: '',
                    // key: '',
                    mobile_phone_no: this.ruleForm3.mobile_phone_no
                }).then(res => {
                    if (res.data.code == 200 && res.data.status == "success"){
                        this.$message("Sent")
                        this.time = 60
                        this.disabled = true
                        this.timer()
                    }
                })
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
        // <!--提交登录-->
        submitForm (formName) {
            this.$refs[formName].validate(valid => {
                const codeReg = /^\d{6}$/
                if (valid && codeReg.test(this.verify_code)) {
                    this.axios.post('/users/login', {
                        mobile_phone_no: this.ruleForm3.mobile_phone_no,
                        verify_code: this.verify_code
                    },{
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
                        }
                    }).then(res => {
                        if (res.data.code == 200 && res.data.status == "success") {
                            this.$message.success('Login successful')
                            var phoneInfo = JSON.parse(res.data.data)
                            //将电话号码放入到sessionStorage
                            sessionStorage.setItem("userPhone", phoneInfo.mobile_phone_no)
                            sessionStorage.setItem("phoneLoginStatus", true)
                                // 将电话号码放入
                            console.log(phoneInfo.mobile_phone_no)
                            this.$router.push('/Registered')
                            console.log(this.$store.state.isPhoneLogin)
                        }else if(res.data.code == 500 && res.data.status == "error"){
                            this.$message.success('Verification not passed')
                            sessionStorage.setItem("phoneLoginStatus", false)
                        }
                    })
                } else {
                    this.message = '请输入短信验证码'
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>
