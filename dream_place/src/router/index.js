import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import WelcomeCard from "../views/WelcomeCard.vue";
import SearchResult from "../views/SearchResult.vue";
import PropertyDetails from "../views/PropertyDetails.vue";
import PaymentDetails from "../views/PaymentDetails.vue";
import UserTrips from "../views/UserTrips.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/welcom",
    name: "welcome",
    component: WelcomeCard,
  },
  {
    path: "/searchResult",
    name: "searchResult",
    component: SearchResult,
    props: true,
  },

  {
    path: "/propertyDetails/:id",
    name: "PropertyDetails",
    component: PropertyDetails,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  // {
  //   path: '/propertyDetails/:id',
  //   name: 'PropertyDetails',
  //   component: PropertyDetails,
  //   beforeEnter: (to, from, next) => {
  //     const hotelId = localStorage.getItem('hotelId');
  //     const arrivalDate = localStorage.getItem('arrivalDate');
  //     const departureDate = localStorage.getItem('departureDate');

  //     if (!hotelId || !arrivalDate || !departureDate) {

  //       next('/');
  //     } else {
  //       next();
  //     }
  //   }
  // },
  {
    path: "/paymentDetails",
    name: "PaymentDetails",
    component: PaymentDetails,
  },
  {
    path: "/userTrips",
    name: "UserTrips",
    component: UserTrips,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
