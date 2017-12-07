import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import MainTimeline from '@/components/MainTimeline'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
