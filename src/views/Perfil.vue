<template>
  <div class="perfil-page" v-if="currentUser">
    <!-- Header do Perfil -->
    <section class="perfil-header">
      <div class="perfil-avatar">
        <div class="avatar-circle">
          {{ currentUser.nome.charAt(0).toUpperCase() }}
        </div>
      </div>
      <div class="perfil-info">
        <h1 class="perfil-nome">{{ currentUser.nome }}</h1>
        <p class="perfil-email">{{ currentUser.email }}</p>
        <p class="perfil-membro">Membro desde {{ formatarData(currentUser.dataCadastro) }}</p>
      </div>
      <div class="perfil-xp">
        <div class="xp-badge">
          <span class="xp-icon">⭐</span>
          <div class="xp-info">
            <span class="xp-number">{{ currentUser.pontosXP }}</span>
            <span class="xp-label">Pontos XP</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Estatísticas -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card card">
          <div class="stat-icon">✅</div>
          <div class="stat-content">
            <div class="stat-number">{{ tutoriaisConcluidos.length }}</div>
            <div class="stat-label">Tutoriais Concluídos</div>
          </div>
        </div>

        <div class="stat-card card">
          <div class="stat-icon">📚</div>
          <div class="stat-content">
            <div class="stat-number">{{ totalTutoriais }}</div>
            <div class="stat-label">Total de Tutoriais</div>
          </div>
        </div>

        <div class="stat-card card">
          <div class="stat-icon">🌍</div>
          <div class="stat-content">
            <div class="stat-number">{{ impactoAmbiental }}</div>
            <div class="stat-label">Peças Reutilizadas</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Progresso -->
    <section class="progress-section">
      <div class="section-card card">
        <h2 class="section-title">📊 Seu Progresso</h2>
        <div class="progress-bar-container">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
          </div>
          <div class="progress-text">
            {{ progressPercentage }}% concluído ({{ tutoriaisConcluidos.length }} de {{ totalTutoriais }})
          </div>
        </div>

        <div class="progress-message">
          <p v-if="progressPercentage === 100">
            🎉 Parabéns! Você completou todos os tutoriais disponíveis!
          </p>
          <p v-else-if="progressPercentage >= 50">
            👏 Ótimo trabalho! Continue assim!
          </p>
          <p v-else>
            💪 Você está no começo de uma jornada incrível!
          </p>
        </div>
      </div>
    </section>

    <!-- Tutoriais Concluídos -->
    <section class="tutoriais-concluidos-section">
      <h2 class="section-title">✅ Tutoriais Concluídos</h2>
      
      <div v-if="tutoriaisConcluidos.length === 0" class="empty-state">
        <p class="empty-icon">📚</p>
        <h3>Você ainda não concluiu nenhum tutorial</h3>
        <p>Explore nossos tutoriais e comece sua jornada sustentável!</p>
        <router-link to="/tutoriais" class="btn btn-primary">
          Ver Tutoriais
        </router-link>
      </div>

      <div v-else class="tutoriais-grid">
        <div
          v-for="tutorial in tutoriaisConcluidosDetalhes"
          :key="tutorial.id"
          class="tutorial-card card"
        >
          <div class="tutorial-image-placeholder">
            ✅
          </div>
          <div class="tutorial-content">
            <span class="tutorial-badge badge-concluido">Concluído</span>
            <h3 class="tutorial-title">{{ tutorial.titulo }}</h3>
            <p class="tutorial-description">{{ tutorial.descricao }}</p>
            <router-link :to="`/tutoriais/${tutorial.id}`" class="btn btn-secondary">
              Rever Tutorial
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Próximos Tutoriais -->
    <section class="proximos-tutoriais-section">
      <h2 class="section-title">🎯 Continue Aprendendo</h2>
      
      <div class="tutoriais-grid">
        <div
          v-for="tutorial in proximosTutoriais"
          :key="tutorial.id"
          class="tutorial-card card"
        >
          <div class="tutorial-image-placeholder">
            📐
          </div>
          <div class="tutorial-content">
            <span class="tutorial-badge" :class="`badge-${tutorial.dificuldade.toLowerCase()}`">
              {{ tutorial.dificuldade }}
            </span>
            <h3 class="tutorial-title">{{ tutorial.titulo }}</h3>
            <p class="tutorial-description">{{ tutorial.descricao }}</p>
            <router-link :to="`/tutoriais/${tutorial.id}`" class="btn btn-primary">
              Começar Tutorial
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Configurações -->
    <section class="configuracoes-section">
      <div class="config-card card">
        <h2 class="section-title">⚙️ Configurações</h2>
        <div class="config-actions">
          <button @click="handleLogout" class="btn btn-outline">
            Sair da Conta
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Perfil',
  setup() {
    const store = useStore()
    const router = useRouter()
    
    const currentUser = computed(() => store.getters['auth/currentUser'])
    const totalTutoriais = computed(() => store.state.tutoriais.tutoriais.length)
    
    const tutoriaisConcluidos = computed(() => {
      return currentUser.value?.tutoriaisConcluidos || []
    })
    
    const tutoriaisConcluidosDetalhes = computed(() => {
      return store.state.tutoriais.tutoriais.filter(t => 
        tutoriaisConcluidos.value.includes(t.id)
      )
    })
    
    const proximosTutoriais = computed(() => {
      return store.state.tutoriais.tutoriais
        .filter(t => !tutoriaisConcluidos.value.includes(t.id))
        .slice(0, 3)
    })
    
    const progressPercentage = computed(() => {
      if (totalTutoriais.value === 0) return 0
      return Math.round((tutoriaisConcluidos.value.length / totalTutoriais.value) * 100)
    })
    
    const impactoAmbiental = computed(() => {
      // Cada tutorial concluído = aproximadamente 1 peça reutilizada
      return tutoriaisConcluidos.value.length
    })
    
    const formatarData = (isoDate) => {
      const data = new Date(isoDate)
      return data.toLocaleDateString('pt-BR', { 
        month: 'long', 
        year: 'numeric' 
      })
    }
    
    const handleLogout = () => {
      if (confirm('Tem certeza que deseja sair?')) {
        store.dispatch('auth/logout')
        router.push('/')
      }
    }
    
    return {
      currentUser,
      totalTutoriais,
      tutoriaisConcluidos,
      tutoriaisConcluidosDetalhes,
      proximosTutoriais,
      progressPercentage,
      impactoAmbiental,
      formatarData,
      handleLogout
    }
  }
}
</script>

<style scoped>
.perfil-page {
  width: 100%;
  padding-bottom: var(--spacing-2xl);
}

.perfil-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  padding: var(--spacing-2xl);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  border-radius: var(--radius-lg);
  color: white;
  margin-bottom: var(--spacing-2xl);
}

.perfil-avatar {
  flex-shrink: 0;
}

.avatar-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  box-shadow: var(--shadow-lg);
}

.perfil-info {
  flex: 1;
}

.perfil-nome {
  font-size: 2.5rem;
  margin: 0 0 var(--spacing-xs) 0;
  color: white;
}

.perfil-email {
  font-size: 1.1rem;
  margin: 0 0 var(--spacing-xs) 0;
  opacity: 0.9;
}

.perfil-membro {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.8;
}

.perfil-xp {
  flex-shrink: 0;
}

.xp-badge {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
}

.xp-icon {
  font-size: 3rem;
}

.xp-info {
  display: flex;
  flex-direction: column;
}

.xp-number {
  font-size: 2.5rem;
  font-weight: 700;
}

.xp-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.stats-section {
  margin-bottom: var(--spacing-2xl);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
}

.stat-icon {
  font-size: 3rem;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
}

.progress-section {
  margin-bottom: var(--spacing-2xl);
}

.section-card {
  padding: var(--spacing-2xl);
}

.section-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
}

.progress-bar-container {
  margin-bottom: var(--spacing-md);
}

.progress-bar {
  height: 30px;
  background-color: var(--background-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: var(--spacing-sm);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--secondary-color), var(--accent-color));
  transition: width 0.5s ease;
}

.progress-text {
  text-align: center;
  color: var(--text-secondary);
  font-weight: 600;
}

.progress-message {
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: var(--accent-color);
  border-radius: var(--radius-md);
  text-align: center;
}

.progress-message p {
  margin: 0;
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: 600;
}

.tutoriais-concluidos-section,
.proximos-tutoriais-section {
  margin-bottom: var(--spacing-2xl);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-2xl);
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: var(--spacing-md);
}

.empty-state h3 {
  font-size: 1.75rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.empty-state p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.tutoriais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.tutorial-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

.tutorial-image-placeholder {
  height: 150px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
}

.tutorial-content {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex: 1;
}

.tutorial-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  align-self: flex-start;
}

.badge-concluido {
  background-color: #4caf50;
  color: white;
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

.tutorial-title {
  font-size: 1.25rem;
  color: var(--primary-color);
  margin: 0;
}

.tutorial-description {
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
}

.configuracoes-section {
  margin-top: var(--spacing-2xl);
}

.config-card {
  padding: var(--spacing-2xl);
}

.config-actions {
  display: flex;
  gap: var(--spacing-md);
}

@media (max-width: 768px) {
  .perfil-header {
    flex-direction: column;
    text-align: center;
  }

  .perfil-nome {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .tutoriais-grid {
    grid-template-columns: 1fr;
  }
}
</style>
