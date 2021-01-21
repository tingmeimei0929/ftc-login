import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        phone: '' || localStorage.getItem('phone')
    },
    mutations: {
        handlePhone: (state, phone) => {
            state.phone = phone
            // 帮登录的信息保存到localStorage中，防止页面刷新，导致vuex重新启动
            localStorage.setItem('phone', phone)
        }
    },
    actions: {
    },
    // getters只会依赖state中的成员去更新
    getters: {
        mobile_phone_no: (state) => state.phone
    }
})
