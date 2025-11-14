import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

// Views
import Home from '../views/Home.vue'
import Conscientizacao from '../views/Conscientizacao.vue'
import Tutoriais from '../views/Tutoriais.vue'
import TutorialDetalhes from '../views/TutorialDetalhes.vue'
import Login from '../views/Login.vue'
import Cadastro from '../views/Cadastro.vue'
import Perfil from '../views/Perfil.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'EcoText - Início' }
  },
  {
    path: '/conscientizacao',
    name: 'Conscientizacao',
    component: Conscientizacao,
    meta: { title: 'EcoText - Conscientização' }
  },
  {
    path: '/tutoriais',
    name: 'Tutoriais',
    component: Tutoriais,
    meta: { title: 'EcoText - Tutoriais' }
  },
  {
    path: '/tutoriais/:id',
    name: 'TutorialDetalhes',
    component: TutorialDetalhes,
    meta: { title: 'EcoText - Tutorial' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'EcoText - Login' }
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
    meta: { title: 'EcoText - Cadastro' }
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil,
    meta: { 
      title: 'EcoText - Perfil',
      requiresAuth: true 
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Guard de navegação para rotas protegidas
router.beforeEach((to, from, next) => {
  // Atualiza o título da página
  document.title = to.meta.title || 'EcoText'
  
  // Verifica autenticação
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = store.getters['auth/isAuthenticated']
  
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
