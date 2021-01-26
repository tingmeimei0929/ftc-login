import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        children: [
            {
                path: '/',
                redirect: 'Phone'
            },
            {
                path: 'Email',
                name: 'Email',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Email.vue')
            },
            {
                path: 'Phone',
                name: 'Phone',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ '../views/Phone.vue')
            }
        ]
    },
    {
        path: '/Registered',
        name: 'Registered',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Registered.vue')
    },
    {
        path: '/ForgetPsd',
        name: 'ForgetPsd',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ForgetPsd.vue')
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
