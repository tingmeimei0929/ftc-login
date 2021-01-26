<template>
    <div class="main">
        <navHeader :isRegistered=1></navHeader>
        <div class="container registered">
        <div class="left">
            <el-form class="registered-type" :rules="rules" :model="ruleForm" ref="ruleForm"
                    label-width="100px">
                <el-form-item class="emailItem"
                                prop="email"
                                label="电子邮箱">
                    <el-input type="text"
                            placeholder="请输入您的邮箱"
                            name="email"
                            class="email"
                            :disabled="emailLoginStatus"
                            v-model="ruleForm.email">
                    </el-input>
                    <small>用于找回您遗忘的密码，请正确填写</small>
                </el-form-item>
                <el-form-item class="emailItem"
                                prop="password"
                                label="登录密码">
                    <el-input :type="passw"
                            placeholder="请输入您的密码"
                            name="password"
                            class="password"
                            :disabled="emailLoginStatus"
                            v-model="ruleForm.password">
                    <i slot="suffix"
                        @click="showPass"
                        :class="icon"></i>
                    </el-input>
                    <small>6-20位英文字母和数字</small>
                </el-form-item>
                <el-form-item class="emailItem"
                                prop="mobile_phone_no"
                                label="电话号码">
                    <el-input type="text"
                            placeholder="请输入您的手机号码"
                            name="phone"
                            class="phone"
                            :disabled="phoneLoginStatus"
                            v-model="ruleForm.mobile_phone_no">
                    </el-input>
                </el-form-item>
                <el-form-item class="emailItem"
                                label="电邮订阅">
                    <el-checkbox v-for="item in emailList "
                                checked
                                :label="item.model"
                                :key="item.id"
                                true-label="on"
                                false-label="off"
                                @change="checked=>handCheckEmail(checked,item)"></el-checkbox>
                </el-form-item>
                <el-form-item class="emailItem"
                                label="隐私设置">
                    <el-checkbox v-for="item in privacyList "
                                checked
                                :label="item.model"
                                :key="item.id"
                                true-label="on"
                                false-label="off"
                                @change="checked=>handCheckService(checked,item)"></el-checkbox>
                </el-form-item>
                <el-form-item class="emailItem info"
                                prop="service">
                    <p>请您阅读我们的<a href="http://www.ftchinese.com/m/corp/service.html">用户注册协议</a>和<a href="http://www.ftchinese.com/m/corp/service.html#privacy">隐私权保护政策</a>，点击下方按钮即视为您接受。</p>
                </el-form-item>
                <el-button class="button" @click="registerForm('ruleForm')">同意并绑定</el-button>
                <el-button class="button"><a href="http://www.ftchinese.com/">跳过此页</a></el-button>

            </el-form>
        </div>
        <div class="right">
            <div class="sectionTitle"
                title="联系方式">
            <p class="detail">如您在绑定时遇到任何问题或有任何建议, 请写邮件至:<br><a href="mailto:customer.service@ftchinese.com?subject=Help on Registration Form">customer.service@ftchinese.com</a>客服信箱，我们的工作人员将尽快为您解决。</p>
            </div>
            <div class="display-none">
            <div class="sectionTitle"
                title="关于FT中文网 (FTChinese.com)">
                <p class="detail">FT中文网(http://www.FTChinese.com) 是英国《金融时报》集团旗下唯一的中文商业财经网站，旨在为中国商业菁英和决策者们提供每日不可或缺的商业财经新闻、深度分析以及评论。凭借英国《金融时报》遍布全球的丰富报道资源，FT中文网深入分析对中国经济和全球商业具有影响力的重大事件，并揭示事件的来龙去脉，以真正富有国际视野的权威报道成为中国高级管理人员“必读”的商业财经资讯网站。FT中文网目前拥有逾270 万注册用户，移动产品已覆盖iOS、Android和Windows系统。2018年4月，FT中文网正式推出付费订阅业务，为专属会员提供精选资讯与个性化服务。</p>
            </div>
            </div>
        </div>
        </div>
        <navFooter></navFooter>
    </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
    name: "Registered",
    data () {
        // 自定义验证邮箱
        const checkEmail = (rule, value, callback) => {
            const emailReg = /^[0-9A-Za-z_][_.0-9A-Za-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/
            if (emailReg.test(value)) {
                // this.axios.post('/api/ajax/checkemail', { email: this.ruleForm.email })
                // .then(res => {
                //     if (res.data.code !== 0) {
                //         callback(new Error(res.data.msg))
                //     } else {
                //         console.log("邮箱校验通过")
                //         callback()
                //     }
                // })
                callback()
            } else {
                callback(new Error("请输入正确的邮箱"))
            }
        }
        // 自定义验证密码
        const checkPassword = (rule, value, callback) => {
            const passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
            if (passwordReg.test(value)) {
                // this.axios.post('/api/ajax/checkpassword', { password: this.ruleForm.password })
                // .then(res => {
                //     if (res.data.code !== 0) {
                //         callback(new Error(res.data.msg))
                //     } else {
                //         console.log("密码校验通过")
                //         callback()
                //     }
                // })
                callback()
            } else {
                callback(new Error("密码由数组和字母组成"))
            }
        }
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
            edit: true,
            passw: "password",
            icon: "el-icon-view",
            emailList: [
                { id: 'mail_sub_todayStory', model: '《今日焦点》邮件' },
                { id: 'mail_sub_fridayStory', model: '《一周精选》邮件' },
                { id: 'mail_sub_afStory', model: '《午后速递》邮件' },
            ],
            privacyList: [
                { id: 'service_acceptance', model: '我愿意接受FT中文网新服务和产品的通知' },
                { id: 'auth_email_sub', model: 'FT中文网及其慎重选择的第三方公司可以向我发送电子邮件' },
                { id: 'auth_letter_sub', model: 'FT中文网及其慎重选择的第三方公司可以向我寄送信件' },
            ],
            ruleForm: {
                email: '',
                password: '',
                mobile_phone_no: '',
                mail_sub_todayStory: 'on',
                mail_sub_fridayStory: 'on',
                mail_sub_afStory: 'on',
                service_acceptance: 'on',
                auth_email_sub: 'on',
                auth_letter_sub: 'on',
                service: 'on'
            },
            rules: {
                email: [
                    { required: true, message: '请输入邮箱', trigger: 'blur' },
                    { validator: checkEmail, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { validator: checkPassword, trigger: 'blur' }
                ],
                mobile_phone_no: [
                    { required: true, message: "请输入手机号码", trigger: 'blur' },
                    { validator: checkMobile, trigger: 'blur' }
                ],
            }
        };
    },
    components: {
        navHeader,
        navFooter
    },
    computed: {
        phoneLoginStatus() {
            this.ruleForm.mobile_phone_no = sessionStorage.getItem("userPhone")
            return sessionStorage.getItem("phoneLoginStatus") ? true : false;
        },
        emailLoginStatus() {
            this.ruleForm.email = sessionStorage.getItem("userEmail")
            this.ruleForm.password = sessionStorage.getItem("userPassword")
            return sessionStorage.getItem("emailLoginStatus") ? true : false;
        }
    },
    methods: {
        showPass () {
            if (this.passw == "text") {
                this.passw = "password"
                this.icon = "el-icon-view"
            } else {
                this.passw = "text"
                this.icon = "el-icon-magic-stick"
            }
        },
        handCheckEmail (checked, val) {
            console.log(val)
            if (val.id === 'mail_sub_todayStory') {
                this.ruleForm.mail_sub_todayStory = checked;
                console.log(this.ruleForm.mail_sub_todayStory)
            }
            if (val.id === 'mail_sub_fridayStory') {
                this.ruleForm.mail_sub_fridayStory = checked;
                console.log(this.ruleForm.mail_sub_fridayStory)
            }
            if (val.id === 'mail_sub_afStory') {
                this.ruleForm.mail_sub_afStory = checked;
                console.log(this.ruleForm.mail_sub_afStory)
            }
        },
        handCheckService (checked, val) {
            console.log(val)
            if (val.id === 'service_acceptance') {
                this.ruleForm.service_acceptance = checked;
                console.log(this.ruleForm.service_acceptance)
            }
            if (val.id === 'auth_email_sub') {
                this.ruleForm.auth_email_sub = checked;
                console.log(this.ruleForm.auth_email_sub)
            }
            if (val.id === 'auth_letter_sub') {
                this.ruleForm.auth_letter_sub = checked;
                console.log(this.ruleForm.auth_letter_sub)
            }
        },
        // <!--注册提交-->
        registerForm (formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    let formData = new FormData()
                    for(let key in this.ruleForm) {
                        formData.append(key, this.ruleForm[key])
                        console.log(formData.get[key])
                    }
                    this.axios.post('/api/users/register', formData).then(res => {
                        this.$message.success('注册成功')
                    })
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import url("../assets/scss/registered.scss");
</style>