<template>
  <div class="tutorial-detalhes" v-if="tutorial">
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Navegação">
      <router-link to="/tutoriais">← Voltar para Tutoriais</router-link>
    </nav>

    <!-- Cabeçalho do Tutorial -->
    <header class="tutorial-header">
      <div class="tutorial-header-content">
        <div class="tutorial-badges">
          <span class="tutorial-badge" :class="`badge-${tutorial.dificuldade.toLowerCase()}`">
            {{ tutorial.dificuldade }}
          </span>
          <span class="tutorial-category-badge">{{ tutorial.categoria }}</span>
        </div>
        
        <h1 class="tutorial-main-title">{{ tutorial.titulo }}</h1>
        <p class="tutorial-main-description">{{ tutorial.descricao }}</p>

        <div class="tutorial-stats">
          <div class="stat-item">
            <span class="stat-icon">⏱️</span>
            <span class="stat-label">{{ tutorial.tempoDuracao }}</span>
          </div>
          <div class="stat-item">
            <span class="stat-icon">👁️</span>
            <span class="stat-label">{{ tutorial.visualizacoes }} visualizações</span>
          </div>
          <div class="stat-item">
            <button @click="handleLike" class="like-button">
              <span class="stat-icon">❤️</span>
              <span class="stat-label">{{ tutorial.curtidas }} curtidas</span>
            </button>
          </div>
        </div>
      </div>

      <div class="tutorial-header-image">
        <div class="tutorial-image-large">
          📐
        </div>
      </div>
    </header>

    <!-- Materiais Necessários -->
    <section class="materials-section">
      <div class="section-card card">
        <h2 class="section-title">🛠️ Materiais Necessários</h2>
        <ul class="materials-list">
          <li v-for="(material, index) in tutorial.materiaisNecessarios" :key="index">
            {{ material }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Passo a Passo -->
    <section class="steps-section">
      <h2 class="section-title text-center">📋 Passo a Passo</h2>
      <div class="steps-container">
        <div
          v-for="passo in tutorial.passos"
          :key="passo.numero"
          class="step-card card"
        >
          <div class="step-number">{{ passo.numero }}</div>
          <div class="step-content">
            <div class="step-image">
              <div class="step-image-placeholder">
                🖼️
              </div>
            </div>
            <div class="step-info">
              <h3 class="step-title">{{ passo.titulo }}</h3>
              <p class="step-description">{{ passo.descricao }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impacto Ambiental -->
    <section class="impact-section">
      <div class="impact-card card">
        <h2 class="section-title">🌍 Impacto Ambiental</h2>
        <p class="impact-text">{{ tutorial.impactoAmbiental }}</p>
        <div class="impact-highlight">
          <p>
            <strong>Parabéns!</strong> Ao completar este tutorial, você está contribuindo 
            ativamente para a redução de resíduos têxteis e para um planeta mais sustentável.
          </p>
        </div>
      </div>
    </section>

    <!-- Ação de Conclusão -->
    <section class="completion-section" v-if="isAuthenticated">
      <div class="completion-card card">
        <h3>Concluiu este tutorial?</h3>
        <p>Marque como concluído e ganhe pontos XP!</p>
        <button
          @click="marcarConcluido"
          class="btn btn-primary btn-large"
          :disabled="tutorialConcluido"
        >
          {{ tutorialConcluido ? '✅ Tutorial Concluído' : 'Marcar como Concluído' }}
        </button>
      </div>
    </section>

    <section class="completion-section" v-else>
      <div class="completion-card card">
        <h3>Faça login para salvar seu progresso</h3>
        <p>Crie uma conta gratuita e acompanhe todos os tutoriais que você completou!</p>
        <router-link to="/cadastro" class="btn btn-primary btn-large">
          Criar Conta Gratuita
        </router-link>
      </div>
    </section>

    <!-- Mais Tutoriais -->
    <section class="more-tutorials-section">
      <h2 class="section-title text-center">Outros Tutoriais</h2>
      <div class="more-tutorials-grid">
        <div
          v-for="outroTutorial in outrosTutoriais"
          :key="outroTutorial.id"
          class="mini-tutorial-card card"
        >
          <h4>{{ outroTutorial.titulo }}</h4>
          <p>{{ outroTutorial.descricao.substring(0, 80) }}...</p>
          <router-link :to="`/tutoriais/${outroTutorial.id}`" class="btn btn-secondary">
            Ver Tutorial
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="tutorial-not-found">
    <h2>Tutorial não encontrado</h2>
    <p>O tutorial que você está procurando não existe.</p>
    <router-link to="/tutoriais" class="btn btn-primary">
      Voltar para Tutoriais
    </router-link>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
  name: 'TutorialDetalhes',
  setup() {
    const store = useStore()
    const route = useRoute()
    
    const tutorialId = ref(route.params.id)
    const tutorial = computed(() => store.getters['tutoriais/getTutorialById'](tutorialId.value))
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
    const currentUser = computed(() => store.getters['auth/currentUser'])
    
    const tutorialConcluido = computed(() => {
      if (!currentUser.value) return false
      return currentUser.value.tutoriaisConcluidos?.includes(tutorialId.value) || false
    })
    
    const outrosTutoriais = computed(() => {
      return store.state.tutoriais.tutoriais
        .filter(t => t.id !== tutorialId.value)
        .slice(0, 3)
    })
    
    const handleLike = () => {
      store.dispatch('tutoriais/curtirTutorial', tutorialId.value)
    }
    
    const marcarConcluido = () => {
      if (!tutorialConcluido.value) {
        store.dispatch('auth/marcarTutorialConcluido', tutorialId.value)
        alert('🎉 Parabéns! Você ganhou 10 pontos XP!')
      }
    }
    
    onMounted(() => {
      if (tutorial.value) {
        store.dispatch('tutoriais/visualizarTutorial', tutorialId.value)
      }
    })
    
    return {
      tutorial,
      isAuthenticated,
      tutorialConcluido,
      outrosTutoriais,
      handleLike,
      marcarConcluido
    }
  }
}
</script>

<style scoped>
.tutorial-detalhes {
  width: 100%;
}

.breadcrumb {
  padding: var(--spacing-md) 0;
}

.breadcrumb a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.tutorial-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0;
  align-items: center;
}

.tutorial-header-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.tutorial-badges {
  display: flex;
  gap: var(--spacing-sm);
}

.tutorial-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}

.badge-fácil {
  background-color: #4caf50;
  color: white;
}

.badge-médio {
  background-color: #ff9800;
  color: white;
}

.badge-difícil {
  background-color: #f44336;
  color: white;
}

.tutorial-category-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
}

.tutorial-main-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin: 0;
}

.tutorial-main-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin: 0;
}

.tutorial-stats {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-label {
  color: var(--text-secondary);
  font-weight: 500;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs);
  transition: transform var(--transition-fast);
}

.like-button:hover {
  transform: scale(1.1);
}

.tutorial-header-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.tutorial-image-large {
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  box-shadow: var(--shadow-lg);
}

.materials-section {
  padding: var(--spacing-2xl) 0;
}

.section-card {
  padding: var(--spacing-2xl);
}

.section-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
}

.materials-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-sm);
  list-style: none;
  padding: 0;
}

.materials-list li {
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--background-subtle);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--secondary-color);
}

.steps-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--background-subtle);
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
  margin-top: var(--spacing-xl);
}

.step-card {
  padding: var(--spacing-xl);
  position: relative;
}

.step-number {
  position: absolute;
  top: -15px;
  left: var(--spacing-lg);
  width: 50px;
  height: 50px;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: var(--shadow-md);
}

.step-content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-md);
}

.step-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
  border-radius: var(--radius-md);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
}

.step-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.step-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 0;
}

.step-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.impact-section {
  padding: var(--spacing-2xl) 0;
}

.impact-card {
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, var(--background-light), var(--background-subtle));
}

.impact-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.impact-highlight {
  padding: var(--spacing-lg);
  background-color: var(--accent-color);
  border-radius: var(--radius-md);
  color: var(--primary-color);
}

.impact-highlight strong {
  font-size: 1.2rem;
}

.completion-section {
  padding: var(--spacing-2xl) 0;
}

.completion-card {
  padding: var(--spacing-2xl);
  text-align: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.completion-card h3 {
  font-size: 2rem;
  color: white;
  margin-bottom: var(--spacing-sm);
}

.completion-card p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
}

.completion-card .btn {
  background-color: white;
  color: var(--primary-color);
}

.completion-card .btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.more-tutorials-section {
  padding: var(--spacing-2xl) 0;
}

.more-tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.mini-tutorial-card {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.mini-tutorial-card h4 {
  color: var(--primary-color);
  margin: 0;
}

.mini-tutorial-card p {
  color: var(--text-secondary);
  flex: 1;
}

.tutorial-not-found {
  text-align: center;
  padding: var(--spacing-2xl);
}

.tutorial-not-found h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
  .tutorial-header {
    grid-template-columns: 1fr;
  }

  .tutorial-main-title {
    font-size: 2rem;
  }

  .tutorial-image-large {
    height: 300px;
    font-size: 6rem;
  }

  .step-content {
    grid-template-columns: 1fr;
  }

  .more-tutorials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
