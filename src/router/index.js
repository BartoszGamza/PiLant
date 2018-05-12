import Vue from 'vue'
import Router from 'vue-router'
import MyPlants from '@/components/MyPlants'
import Stats from '@/components/Stats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'My Plants',
      component: MyPlants
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
