import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'normalize.css'

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// 引入scss文件
import './assets/scss/header.scss'
import './assets/scss/login.scss'
import './assets/scss/common.scss'
import './assets/scss/footer.scss'
import './assets/scss/mixin.scss'
import './assets/scss/palette.scss'
import './assets/scss/registered.scss'
import './assets/scss/forgetPsd.scss'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
