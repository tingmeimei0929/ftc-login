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
            <el-form-item class="smsItem last" prop="captcha">
                <el-input
                    oninput="value=value.replace(/[^\d]/g, '')"
                    maxlength="6"
                    placeholder="输入6位短信验证码"
                    name="smsCode"
                    class="smsCode" v-model="ruleForm3.captcha" >
                </el-input>
                <el-button @click="sendCode()" class="smsBtn" :class="{'disabled-style':getCodeBtnDisable}" :disabled="getCodeBtnDisable">{{btntxt}}</el-button>
            </el-form-item>
            <el-button class="button" @click="submitForm('ruleForm3')">立即登录</el-button>
            <a class="button wxBtn" href="https://www.ftacademy.cn/wxlogin">微信登录</a>
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
            ruleForm3: {
                mobile_phone_no: '',
                captcha: ''
            },
            rules3: {
                mobile_phone_no: [
                    { required: true, message: "请输入手机号码", trigger: 'blur' },
                    { validator: checkMobile, trigger: 'blur'}
                ],
                captcha: [
                    {required: true,message: "请输入短信验证码",trigger: "blur"}
                ]
            },
            btntxt: '获取验证码',
            waitTime: 61
        }
    },
    computed: {
        phoneNumberStyle () {
            let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
            if (!reg.test(this.ruleForm3.mobile_phone_no)) {
                return false
            }
            return true
        },
        // 用于获取验证码按钮是否可点击
        getCodeBtnDisable: {
            get () {
                if(this.waitTime == 61) {
                    if(this.ruleForm3.mobile_phone_no) {
                        return false
                    }
                    return true
                }
                return true
            },
            set() {}
        }
    },
    methods: {
        // 手机验证发送验证码
        sendCode() {
            if(this.phoneNumberStyle) {
                let params = {}
                params.mobile_phone_no = this.ruleForm3.mobile_phone_no
                this.axios.post('/users/login/captcha',params).then(res => {
                    if (res.data.code == 200 && res.data.status == "success"){
                        this.$message("Sent")
                    }
                })
                let that = this
                that.waitTime--
                that.getCodeBtnDisable = true
                this.btntxt = `${this.waitTime}s后重新获取`
                let timer = setInterval(() => {
                    if(that.waitTime > 1){
                        that.waitTime--
                        that.btntxt = `${that.waitTime}s后重新获取`
                    }else {
                        clearInterval(timer)
                        that.btntxt = '获取验证码'
                        that.getCodeBtnDisable = false
                        that.waitTime = 61
                    }
                }, 1000)
            }
        },
        // <!--提交登录-->
        submitForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.axios.post('/users/login', {
                        mobile_phone_no: this.ruleForm3.mobile_phone_no,
                        captcha: this.ruleForm3.captcha
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
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>
