import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'
import About from '@/views/About.vue'
import ShopView from '@/views/Shop.vue'
import ProductView from '@/views/Product.vue'
import AllProductView from '@/views/AllProduct.vue'
import ContestView from '@/views/Contest.vue'
import InformationView from '@/views/Information.vue'
import SearchView from '@/views/Search.vue'
import SignInView from '@/views/SignIn.vue'
import SignUpView from '@/views/SignUp.vue'
import GiftView from '@/views/Gift.vue'
import { supabase } from '../lib/supabaseClient'

// Add this before your router configuration
const requireAuth = async (to, from, next) => {
  const user = await supabase.auth.getUser()
  if (!user.data.user) {
    next('/')
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
    },
    {
      path: '/all-product/',
      name: 'all-product',
      component: AllProductView,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/contest',
      name: 'contest',
      component: ContestView,
    },
    {
      path: '/information',
      name: 'information',
      component: InformationView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/gift',
      name: 'gift',
      component: GiftView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/login',
      redirect: '/signin'
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account.vue'),
      beforeEnter: requireAuth
    },
  ],
})

export default router
