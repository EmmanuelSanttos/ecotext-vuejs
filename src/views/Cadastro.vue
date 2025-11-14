<template>
  <div class="cadastro-page">
    <div class="cadastro-container">
      <div class="cadastro-card card">
        <div class="cadastro-header">
          <h1 class="cadastro-title">🌱 Junte-se a Nós!</h1>
          <p class="cadastro-subtitle">Crie sua conta e comece sua jornada sustentável</p>
        </div>

        <form @submit.prevent="handleCadastro" class="cadastro-form">
          <div class="input-group">
            <label for="nome" class="input-label">Nome Completo</label>
            <input
              id="nome"
              type="text"
              v-model="formData.nome"
              class="input-field"
              placeholder="Seu nome completo"
              required
              aria-required="true"
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
              required
              minlength="6"
              aria-required="true"
            />
            <small class="input-hint">A senha deve ter no mínimo 6 caracteres</small>
          </div>

          <div class="input-group">
            <label for="confirmarSenha" class="input-label">Confirmar Senha</label>
            <input
              id="confirmarSenha"
              type="password"
              v-model="formData.confirmarSenha"
              class="input-field"
              placeholder="Digite a senha novamente"
              required
              aria-required="true"
            />
          </div>

          <div v-if="errorMessage" class="error-message" role="alert">
            {{ errorMessage }}
          </div>

          <div v-if="successMessage" class="success-message" role="alert">
            {{ successMessage }}
          </div>

          <button type="submit" class="btn btn-primary btn-full" :disabled="isLoading">
            {{ isLoading ? 'Criando conta...' : 'Criar Conta Gratuita' }}
          </button>
        </form>

        <div class="cadastro-footer">
          <p>
            Já tem uma conta?
            <router-link to="/login" class="link-primary">Fazer login</router-link>
          </p>
        </div>
      </div>

      <div class="cadastro-info">
        <div class="info-card card">
          <h3>O que você vai ganhar:</h3>
          <ul class="benefits-list">
            <li>
              <span class="benefit-icon">📚</span>
              <div>
                <strong>Acesso Completo</strong>
                <p>Todos os tutoriais disponíveis gratuitamente</p>
              </div>
            </li>
            <li>
              <span class="benefit-icon">⭐</span>
              <div>
                <strong>Sistema de Pontos</strong>
                <p>Ganhe XP por cada tutorial concluído</p>
              </div>
            </li>
            <li>
              <span class="benefit-icon">💾</span>
              <div>
                <strong>Progresso Salvo</strong>
                <p>Acompanhe sua evolução e tutoriais favoritos</p>
              </div>
            </li>
            <li>
              <span class="benefit-icon">🌍</span>
              <div>
                <strong>Impacto Real</strong>
                <p>Veja quanto você está ajudando o planeta</p>
              </div>
            </li>
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
  name: 'Cadastro',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const formData = ref({
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    })
    
    const errorMessage = ref('')
    const successMessage = ref('')
    const isLoading = ref(false)
    
    const handleCadastro = async () => {
      errorMessage.value = ''
      successMessage.value = ''
      
      // Validações
      if (formData.value.senha.length < 6) {
        errorMessage.value = 'A senha deve ter no mínimo 6 caracteres'
        return
      }
      
      if (formData.value.senha !== formData.value.confirmarSenha) {
        errorMessage.value = 'As senhas não coincidem'
        return
      }
      
      isLoading.value = true
      
      try {
        await store.dispatch('auth/register', {
          nome: formData.value.nome,
          email: formData.value.email,
          senha: formData.value.senha
        })
        
        successMessage.value = 'Conta criada com sucesso! Redirecionando...'
        
        setTimeout(() => {
          router.push('/perfil')
        }, 1500)
      } catch (error) {
        errorMessage.value = error.message || 'Erro ao criar conta'
      } finally {
        isLoading.value = false
      }
    }
    
    return {
      formData,
      errorMessage,
      successMessage,
      isLoading,
      handleCadastro
    }
  }
}
</script>

<style scoped>
.cadastro-page {
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
}

.cadastro-container {
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.cadastro-card {
  padding: var(--spacing-2xl);
}

.cadastro-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.cadastro-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.cadastro-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.cadastro-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.input-hint {
  display: block;
  margin-top: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: 0.875rem;
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

.success-message {
  padding: var(--spacing-md);
  background-color: #efe;
  color: #3c3;
  border-radius: var(--radius-md);
  border-left: 4px solid #3c3;
}

.cadastro-footer {
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

.cadastro-info {
  position: sticky;
  top: 90px;
}

.info-card {
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, var(--background-subtle), white);
}

.info-card h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
}

.benefits-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.benefits-list li {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefits-list strong {
  display: block;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
}

.benefits-list p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .cadastro-container {
    grid-template-columns: 1fr;
  }

  .cadastro-info {
    position: static;
  }
}
</style>
