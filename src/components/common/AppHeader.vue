<template>
  <header class="header" role="banner">
    <div class="header-container">
      <div class="header-logo">
        <router-link to="/" aria-label="Ir para página inicial">
          <h1 class="logo-text">🌱 EcoText</h1>
        </router-link>
      </div>
      
      <button 
        class="mobile-menu-toggle" 
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
        aria-label="Menu de navegação"
      >
        <span class="menu-icon"></span>
      </button>
      
      <nav class="header-nav" :class="{ 'mobile-open': mobileMenuOpen }" role="navigation">
        <ul class="nav-list">
          <li><router-link to="/" @click="closeMobileMenu">Início</router-link></li>
          <li><router-link to="/conscientizacao" @click="closeMobileMenu">Conscientização</router-link></li>
          <li><router-link to="/tutoriais" @click="closeMobileMenu">Tutoriais</router-link></li>
          
          <li v-if="isAuthenticated" class="user-menu">
            <router-link to="/perfil" @click="closeMobileMenu">
              <span class="user-icon">👤</span> {{ currentUser.nome }}
            </router-link>
          </li>
          
          <li v-if="!isAuthenticated">
            <router-link to="/login" class="btn-nav-login" @click="closeMobileMenu">Entrar</router-link>
          </li>
          
          <li v-if="isAuthenticated">
            <button @click="handleLogout" class="btn-nav-logout">Sair</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'AppHeader',
  setup() {
    const store = useStore()
    const router = useRouter()
    const mobileMenuOpen = ref(false)
    
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
    const currentUser = computed(() => store.getters['auth/currentUser'])
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    const handleLogout = () => {
      store.dispatch('auth/logout')
      closeMobileMenu()
      router.push('/')
    }
    
    return {
      isAuthenticated,
      currentUser,
      mobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu,
      handleLogout
    }
  }
}
</script>

<style scoped>
.header {
  background-color: var(--primary-color);
  color: white;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.header-logo {
  flex-shrink: 0;
}

.logo-text {
  font-size: 1.75rem;
  margin: 0;
  color: white;
  font-weight: 700;
}

.header-logo a {
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
}

.header-logo a:focus {
  outline: 2px solid white;
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

.mobile-menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.menu-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  position: relative;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: white;
  left: 0;
  transition: transform 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

.header-nav {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-list a,
.btn-nav-logout {
  color: white;
  text-decoration: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  font-weight: 500;
  display: block;
}

.nav-list a:hover,
.btn-nav-logout:hover {
  background-color: var(--secondary-color);
}

.nav-list a.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
}

.btn-nav-login {
  background-color: var(--accent-color);
  color: var(--primary-color) !important;
}

.btn-nav-login:hover {
  background-color: white !important;
}

.btn-nav-logout {
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  font-size: 1rem;
  font-family: inherit;
}

.user-menu .user-icon {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: block;
  }
  
  .header-nav {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--primary-color);
    padding: var(--spacing-md);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .header-nav.mobile-open {
    max-height: 400px;
    box-shadow: var(--shadow-md);
  }
  
  .nav-list {
    flex-direction: column;
    gap: var(--spacing-xs);
    align-items: stretch;
  }
  
  .nav-list li {
    width: 100%;
  }
  
  .nav-list a,
  .btn-nav-logout {
    width: 100%;
    text-align: center;
    padding: var(--spacing-md);
  }
}
</style>
