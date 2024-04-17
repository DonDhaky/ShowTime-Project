import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CardPage from '../views/CardPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import WishlistPage from '../views/WishlistPage.vue'
import AdminPage from '../views/AdminPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterPage    
    },

    {
      path: '/card',
      name: 'card',
      component: CardPage    
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfilePage    
    },

    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistPage    
    },

    {
      path: '/admindashboard',
      name: 'admindashboard',
      component: AdminPage    
    }
  ]
})


export default router;
