import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignUp from '../views/SignUp.vue';
import WelcomeCard from '../views/WelcomeCard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/signup',
   name: 'signup',
   component: SignUp
  },
  {
    path: '/welcom',
    name: 'welcome',
    component: WelcomeCard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
 // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }