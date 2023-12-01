import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SignIn from '../views/SignIn.vue';
import WelcomeCard from '../views/WelcomeCard.vue';
import SearchResult from '../views/SearchResult.vue';
import PropertyDetails from '../views/PropertyDetails.vue';
import PaymentDetails from '../views/PaymentDetails.vue';
import UserTrips from '../views/UserTrips.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path: '/signin',
   name: 'signin',
   component: SignIn
  },
  {
    path: '/welcom',
    name: 'welcome',
    component: WelcomeCard
  },
  {
    path: '/searchResult',
    name: 'searchResult',
    component: SearchResult,
    props: true, 
  },
  {
    path: '/propertyDetails',
    name: 'PropertyDetails',
    component: PropertyDetails
  },
  {
    path: '/paymentDetails',
    name: 'PaymentDetails',
    component: PaymentDetails
  },
  {
    path: '/userTrips',
    name: 'UserTrips',
    component: UserTrips
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
 // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: function () {
    //   return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }