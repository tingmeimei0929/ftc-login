<template>
    <div class="content">
        <el-form class="login-type"
                :rules="rules2"
                :model="ruleForm2"
                ref="ruleForm2">
            <el-form-item class="emailItem"
                            prop="email">
                <el-input type="text"
                        placeholder="请输入您的邮箱"
                        name="email"
                        class="email"
                        v-model="ruleForm2.email">
                </el-input>
            </el-form-item>
            <el-form-item class="smsItem last"
                            prop="password">
                <el-input type="password"
                        placeholder="请输入您的密码"
                        name="password"
                        class="smsCode"
                        v-model="ruleForm2.password">
                </el-input>
                <el-button class="smsBtn" type="button" @click="findPsd" >
                    找回密码
                </el-button>
            </el-form-item>
            <!-- <el-form-item class="emailItem remember">
                <el-checkbox v-model="checked"
                            class="sidentify">记住我</el-checkbox>
                <div class="manner">
                <a @click="forgetPsd">忘记密码</a>
                <a @click="registered">立即注册</a>
                </div>
            </el-form-item> -->
            <el-button class="button" type="primary"
                        @click="loginSubmit('ruleForm2'), rememberUser()">立即登录</el-button>
            <a class="button wxBtn" href="https://www.ftacademy.cn/wxlogin">微信登录</a>
        </el-form>
    </div>
</template>
<script>
import aixos from 'axios'
export default {
    name: "Email",
    data () {
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
        const checkPassword = (rule, value, callback) => {
            const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            if (passwordReg.test(value)) {
                callback()
            } else {
                callback(new Error("密码由6～20位英文字母和数字组成"))
            }
        }
        return {
            checked: true,
            ruleForm2: {
                email: '',
                password: ''
            },
            rules2: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: checkPassword, trigger: 'blur' }
                ]
            }
        };
    },
    mounted () {
        this.getCookie()
    },
    methods: {
        findPsd() {
            this.$router.push({
                path: 'ForgetPsd',
            })
        },
        // 记住再此电脑
        rememberUser () {
            const that = this;
            // 判断复选框是否勾选，勾选则调用配置cookie方法
            if (that.checked == true) {
                // 传入账号 密码 保存天数
                that.setCookie(that.ruleForm2.email, that.ruleForm2.password, 7)
            } else {
                // 清空cookie
                that.clearCookie()
            }
        },
        // 设置cookie
        setCookie (u_email, u_psd, s_days) {
            let s_day = new Date() //获取时间
            s_day.setTime(s_day.getTime() + 24 * 60 * 60 * 1000 * s_days) //保存天数
            // 字符串拼接cookie
            window.document.cookie = "email" + "=" + u_email + ";path=/;expires=" + s_day.toGMTString()
            window.document.cookie = "password" + "=" + u_psd + ";path=/;expires=" + s_day.toGMTString()
        },
        // 读取cookie
        getCookie: function () {
            let that = this;
            if (document.cookie.length > 0) {
                let arr = document.cookie.split(";")
                for (let i = 0; i < arr.length; i++) {
                let arr2 = arr[i].split("=")
                //判断查啊薅走啊相对应的值
                if (arr2[0] == "email") {
                    that.ruleForm.email = arr2[1]; //保存
                } else if (arr2[0] == "password") {
                    that.ruleForm.password = arr2[1]
                }
                }
            }
        },
        // 提交
        loginSubmit (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let formData = new FormData()
                    for(let key in this.ruleForm2) {
                        formData.append(key, this.ruleForm2[key])
                        console.log(formData.get[key])
                    }
                    this.axios.post('/login', formData).then(res => {
                        if (res.data.code == 200 && res.data.status == "success") {
                            this.$message.success('Login successful')
                            var userInfo = JSON.parse(res.data.data)
                            console.log(res.data.data)
                            //将邮箱和密码放入到sessionStorage
                            sessionStorage.setItem("userEmail", userInfo.email)
                            sessionStorage.setItem("userPassword", userInfo.password)
                            sessionStorage.setItem("emailLoginStatus", true)
                                // 将电话号码放入
                            this.$router.push('/Registered')
                        }
                    })
                }
            })
        },
        // 清除cookie
        clearCookie: function () {
            this.setCookie("", "", -1)
        }
    }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/login.scss");
</style>