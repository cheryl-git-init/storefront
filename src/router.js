import Vue from 'vue'
import Router from 'vue-router'
import StoreFront from '@/views/StoreFront.vue'
import ItemPage from '@/views/ItemPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'store',
      component: StoreFront
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemPage,
      props: route => ({
        id: route.params.id
      })
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
