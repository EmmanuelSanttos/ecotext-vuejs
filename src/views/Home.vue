<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title fade-in">Transforme Resíduos Têxteis em Novas Possibilidades</h1>
        <p class="hero-subtitle fade-in">
          Aprenda a reutilizar tecidos e contribua para um futuro mais sustentável em Campo Grande/MS
        </p>
        <div class="hero-actions fade-in">
          <router-link to="/tutoriais" class="btn btn-primary btn-large">
            Explorar Tutoriais
          </router-link>
          <router-link to="/conscientizacao" class="btn btn-outline btn-large">
            Saiba Mais
          </router-link>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-placeholder">
          🌱♻️🧵
        </div>
      </div>
    </section>

    <!-- Estatísticas de Impacto -->
    <section class="stats-section">
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-icon">🌍</div>
          <div class="stat-number">12 Anos</div>
          <div class="stat-label">Tempo de decomposição de tecidos sintéticos</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">♻️</div>
          <div class="stat-number">85%</div>
          <div class="stat-label">Dos têxteis vão para aterros sanitários</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">💧</div>
          <div class="stat-number">2.700L</div>
          <div class="stat-label">De água para produzir uma camiseta</div>
        </div>
      </div>
    </section>

    <!-- Funcionalidades Principais -->
    <section class="features-section">
      <h2 class="section-title">Como Podemos Ajudar</h2>
      <div class="features-grid">
        <div class="feature-card card">
          <div class="feature-icon">📚</div>
          <h3>Conscientização</h3>
          <p>Entenda o impacto ambiental e social do descarte inadequado de resíduos têxteis.</p>
          <router-link to="/conscientizacao" class="feature-link">
            Saiba mais →
          </router-link>
        </div>

        <div class="feature-card card">
          <div class="feature-icon">🎓</div>
          <h3>Tutoriais Práticos</h3>
          <p>Aprenda passo a passo como transformar tecidos velhos em novos produtos úteis.</p>
          <router-link to="/tutoriais" class="feature-link">
            Ver tutoriais →
          </router-link>
        </div>

        <div class="feature-card card">
          <div class="feature-icon">👥</div>
          <h3>Comunidade</h3>
          <p>Cadastre-se para salvar seus tutoriais favoritos e acompanhar seu progresso.</p>
          <router-link to="/cadastro" class="feature-link" v-if="!isAuthenticated">
            Criar conta →
          </router-link>
          <router-link to="/perfil" class="feature-link" v-else>
            Meu perfil →
          </router-link>
        </div>
      </div>
    </section>

    <!-- Tutoriais em Destaque -->
    <section class="featured-tutorials">
      <h2 class="section-title">Tutoriais em Destaque</h2>
      <div class="tutorials-grid">
        <div 
          v-for="tutorial in tutoriaisDestaque" 
          :key="tutorial.id" 
          class="tutorial-card card"
        >
          <div class="tutorial-image-placeholder">
            📐
          </div>
          <div class="tutorial-content">
            <span class="tutorial-badge">{{ tutorial.dificuldade }}</span>
            <h3 class="tutorial-title">{{ tutorial.titulo }}</h3>
            <p class="tutorial-description">{{ tutorial.descricao }}</p>
            <div class="tutorial-meta">
              <span>⏱️ {{ tutorial.tempoDuracao }}</span>
              <span>👁️ {{ tutorial.visualizacoes }}</span>
            </div>
            <router-link 
              :to="`/tutoriais/${tutorial.id}`" 
              class="btn btn-secondary"
            >
              Ver Tutorial
            </router-link>
          </div>
        </div>
      </div>
      <div class="text-center mt-4">
        <router-link to="/tutoriais" class="btn btn-outline">
          Ver Todos os Tutoriais
        </router-link>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Pronto para Fazer a Diferença?</h2>
        <p>Junte-se a nós e comece sua jornada sustentável hoje mesmo!</p>
        <router-link to="/cadastro" class="btn btn-primary btn-large" v-if="!isAuthenticated">
          Criar Conta Gratuita
        </router-link>
        <router-link to="/tutoriais" class="btn btn-primary btn-large" v-else>
          Começar Agora
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    
    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated'])
    const tutoriais = computed(() => store.state.tutoriais.tutoriais)
    
    // Pega os 3 tutoriais mais visualizados
    const tutoriaisDestaque = computed(() => {
      return [...tutoriais.value]
        .sort((a, b) => b.visualizacoes - a.visualizacoes)
        .slice(0, 3)
    })
    
    return {
      isAuthenticated,
      tutoriaisDestaque
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  padding: var(--spacing-2xl) 0;
  min-height: 500px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.hero-title {
  font-size: 3rem;
  line-height: 1.2;
  margin: 0;
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn-large {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.1rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--accent-color), var(--secondary-color));
  border-radius: var(--radius-lg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  box-shadow: var(--shadow-lg);
}

/* Stats Section */
.stats-section {
  background-color: var(--background-subtle);
  padding: var(--spacing-2xl) 0;
  margin: var(--spacing-2xl) 0;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.stat-card {
  text-align: center;
  padding: var(--spacing-lg);
}

.stat-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-sm);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  color: var(--text-secondary);
  font-size: 1rem;
}

/* Features Section */
.features-section {
  padding: var(--spacing-2xl) 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: var(--spacing-2xl);
  color: var(--primary-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.feature-card {
  text-align: center;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.feature-icon {
  font-size: 4rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin: 0;
}

.feature-card p {
  flex: 1;
  margin: 0;
  color: var(--text-secondary);
}

.feature-link {
  color: var(--secondary-color);
  font-weight: 600;
  text-decoration: none;
  transition: color var(--transition-fast);
}

.feature-link:hover {
  color: var(--primary-color);
}

/* Featured Tutorials */
.featured-tutorials {
  padding: var(--spacing-2xl) 0;
  background-color: var(--background-subtle);
}

.tutorials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.tutorial-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

.tutorial-image-placeholder {
  height: 200px;
  background: linear-gradient(135deg, var(--secondary-color), var(--accent-color));
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
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
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  font-weight: 600;
  align-self: flex-start;
}

.tutorial-title {
  font-size: 1.25rem;
  margin: 0;
}

.tutorial-description {
  color: var(--text-secondary);
  margin: 0;
  flex: 1;
}

.tutorial-meta {
  display: flex;
  gap: var(--spacing-md);
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  margin-top: var(--spacing-2xl);
}

.cta-content {
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: white;
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xl);
}

.cta-content .btn {
  background-color: white;
  color: var(--primary-color);
}

.cta-content .btn:hover {
  background-color: var(--accent-color);
}

/* Responsividade */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-placeholder {
    width: 100%;
    height: 300px;
    font-size: 5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid,
  .tutorials-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .cta-content p {
    font-size: 1.1rem;
  }
}
</style>
