import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import MainTimeline from '@/components/MainTimeline'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main-page',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'MainTimeline',
          component: MainTimeline
        }
      ]
    }
  ]
})
