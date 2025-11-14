<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card card">
        <div class="login-header">
          <h1 class="login-title">🌱 Bem-vindo de Volta!</h1>
          <p class="login-subtitle">Entre para continuar sua jornada sustentável</p>
        </div>

        <form @submit.prevent="handleLogin" class="login-form">
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <input
              id="email"
              type="email"
              v-model="formData.email"
              class="input-field"
              placeholder="seu@email.com"
              required
              aria-required="true"
            />
          </div>

          <div class="input-group">
            <label for="senha" class="input-label">Senha</label>
            <input
              id="senha"
              type="password"
              v-model="formData.senha"
              class="input-field"
              placeholder="••••••••"
              required
              aria-required="true"
            />
          </div>

          <div v-if="errorMessage" class="error-message" role="alert">
            {{ errorMessage }}
          </div>

          <button type="submit" class="btn btn-primary btn-full" :disabled="isLoading">
            {{ isLoading ? 'Entrando...' : 'Entrar' }}
          </button>
        </form>

        <div class="login-footer">
          <p>
            Não tem uma conta?
            <router-link to="/cadastro" class="link-primary">Criar conta gratuita</router-link>
          </p>
        </div>
      </div>

      <div class="login-info">
        <div class="info-card card">
          <h3>Por que criar uma conta?</h3>
          <ul class="benefits-list">
            <li>✅ Salve seus tutoriais favoritos</li>
            <li>🎯 Acompanhe seu progresso</li>
            <li>⭐ Ganhe pontos XP por tutoriais concluídos</li>
            <li>🌱 Contribua para um futuro sustentável</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const formData = ref({
      email: '',
      senha: ''
    })
    
    const errorMessage = ref('')
    const isLoading = ref(false)
    
    const handleLogin = async () => {
      errorMessage.value = ''
      isLoading.value = true
      
      try {
        await store.dispatch('auth/login', {
          email: formData.value.email,
          senha: formData.value.senha
        })
        
        router.push('/perfil')
      } catch (error) {
        errorMessage.value = error.message || 'Erro ao fazer login'
      } finally {
        isLoading.value = false
      }
    }
    
    return {
      formData,
      errorMessage,
      isLoading,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
}

.login-container {
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.login-card {
  padding: var(--spacing-2xl);
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.login-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.login-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.btn-full {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.1rem;
}

.error-message {
  padding: var(--spacing-md);
  background-color: #fee;
  color: #c33;
  border-radius: var(--radius-md);
  border-left: 4px solid #c33;
}

.login-footer {
  margin-top: var(--spacing-xl);
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
}

.link-primary {
  color: var(--secondary-color);
  font-weight: 600;
  text-decoration: none;
}

.link-primary:hover {
  color: var(--primary-color);
}

.login-info {
  position: sticky;
  top: 90px;
}

.info-card {
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, var(--background-subtle), white);
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.benefits-list li {
  font-size: 1.05rem;
  color: var(--text-secondary);
  padding: var(--spacing-sm) 0;
}

@media (max-width: 768px) {
  .login-container {
    grid-template-columns: 1fr;
  }

  .login-info {
    position: static;
  }
}
</style>
