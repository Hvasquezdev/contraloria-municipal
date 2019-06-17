import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('./views/home/Dashboard.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./views/home/Profile.vue')
        },
        {
          path: '/messages',
          name: 'messages',
          component: () => import('./views/home/Messages.vue')
        },
        {
          path: '/messagesSent',
          name: 'messages-sent',
          component: () => import('./views/home/MessagesSent.vue')
        },
        {
          path: '/newMessage',
          name: 'new-message',
          component: () => import('./views/home/MessageNew.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login-page',
      component: () => import('./views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register-page',
      component: () => import('./views/RegisterPage.vue')
    }
  ]
})
