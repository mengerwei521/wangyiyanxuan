import Vue from 'vue'
import Router from 'vue-router'
import FooterIndex from '../pages/FooterIndex/FooterIndex.vue'

import Fengmian from '../components/Fengmian/Fengmian.vue'
import HomePage from '../pages/HomePage/HomePage.vue'
import Sense from '../pages/Sense/Sense.vue'
import ClassIfication from '../pages/ClassIfication/ClassIfication.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/fengmian',
      component:Fengmian
    },
    {
      path:'/footer',
      component:FooterIndex,
      children:[
        {
          path: '/homepage',
          component: HomePage
        },
        {
          path: '/sense',
          component: Sense
        },
        {
          path: '/classification',
          component: ClassIfication
        },
        {
          path: '/shoppingcart',
          component: ShoppingCart
        },
        {
          path: '/personal',
          component: Personal
        },
        {
          path: '/',
          redirect: '/homepage'
        }
      ]
    }

  ]
})
