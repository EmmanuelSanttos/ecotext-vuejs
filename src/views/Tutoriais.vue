<template>
  <div class="tutoriais">
    <!-- Hero -->
    <section class="page-hero">
      <h1 class="page-title">Tutoriais Práticos</h1>
      <p class="page-subtitle">
        Aprenda passo a passo como transformar resíduos têxteis em novos produtos
      </p>
    </section>

    <!-- Barra de Busca e Filtros -->
    <section class="filters-section">
      <div class="filters-container">
        <!-- Busca -->
        <div class="search-box">
          <input
            type="text"
            v-model="searchTerm"
            @input="handleSearch"
            placeholder="Buscar tutoriais..."
            class="input-field search-input"
            aria-label="Buscar tutoriais"
          />
        </div>

        <!-- Filtros -->
        <div class="filters-grid">
          <div class="filter-group">
            <label class="filter-label">Categoria:</label>
            <select
              v-model="selectedCategoria"
              @change="handleFilterCategoria"
              class="input-field filter-select"
              aria-label="Filtrar por categoria"
            >
              <option v-for="cat in categorias" :key="cat" :value="cat">
                {{ cat }}
              </option>
            </select>
          </div>

          <div class="filter-group">
            <label class="filter-label">Dificuldade:</label>
            <select
              v-model="selectedDificuldade"
              @change="handleFilterDificuldade"
              class="input-field filter-select"
              aria-label="Filtrar por dificuldade"
            >
              <option v-for="dif in dificuldades" :key="dif" :value="dif">
                {{ dif }}
              </option>
            </select>
          </div>

          <div class="filter-actions">
            <button @click="clearFilters" class="btn btn-outline">
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Lista de Tutoriais -->
    <section class="tutoriais-list-section">
      <div v-if="tutoriaisFiltrados.length === 0" class="no-results">
        <p class="no-results-icon">🔍</p>
        <h3>Nenhum tutorial encontrado</h3>
        <p>Tente ajustar os filtros ou buscar por outros termos.</p>
        <button @click="clearFilters" class="btn btn-primary">
          Limpar Filtros
        </button>
      </div>

      <div v-else class="tutoriais-grid">
        <div
          v-for="tutorial in tutoriaisFiltrados"
          :key="tutorial.id"
          class="tutorial-card card"
        >
          <div class="tutorial-image-placeholder">
            📐
          </div>
          <div class="tutorial-content">
            <div class="tutorial-header">
              <span class="tutorial-badge" :class="`badge-${tutorial.dificuldade.toLowerCase()}`">
                {{ tutorial.dificuldade }}
              </span>
              <span class="tutorial-category">{{ tutorial.categoria }}</span>
            </div>

            <h3 class="tutorial-title">{{ tutorial.titulo }}</h3>
            <p class="tutorial-description">{{ tutorial.descricao }}</p>

            <div class="tutorial-meta">
              <span class="meta-item">⏱️ {{ tutorial.tempoDuracao }}</span>
              <span class="meta-item">👁️ {{ tutorial.visualizacoes }}</span>
              <span class="meta-item">❤️ {{ tutorial.curtidas }}</span>
            </div>

            <div class="tutorial-materials">
              <strong>Materiais:</strong>
              <span>{{ tutorial.materiaisNecessarios.slice(0, 2).join(', ') }}...</span>
            </div>

            <router-link
              :to="`/tutoriais/${tutorial.id}`"
              class="btn btn-secondary btn-block"
            >
              Ver Tutorial Completo
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Tutoriais',
  setup() {
    const store = useStore()
    
    const searchTerm = ref('')
    const selectedCategoria = ref('Todos')
    const selectedDificuldade = ref('Todos')
    
    const tutoriaisFiltrados = computed(() => store.getters['tutoriais/tutoriaisFiltrados'])
    const categorias = computed(() => store.getters['tutoriais/categorias'])
    const dificuldades = computed(() => store.getters['tutoriais/dificuldades'])
    
    const handleSearch = () => {
      store.dispatch('tutoriais/buscarTutoriais', searchTerm.value)
    }
    
    const handleFilterCategoria = () => {
      store.dispatch('tutoriais/setFiltroCategoria', selectedCategoria.value)
    }
    
    const handleFilterDificuldade = () => {
      store.dispatch('tutoriais/setFiltroDificuldade', selectedDificuldade.value)
    }
    
    const clearFilters = () => {
      searchTerm.value = ''
      selectedCategoria.value = 'Todos'
      selectedDificuldade.value = 'Todos'
      store.dispatch('tutoriais/limparFiltros')
    }
    
    onMounted(() => {
      // Restaura filtros se houver
      selectedCategoria.value = store.state.tutoriais.filtroCategoria
      selectedDificuldade.value = store.state.tutoriais.filtroDificuldade
      searchTerm.value = store.state.tutoriais.termoBusca
    })
    
    return {
      searchTerm,
      selectedCategoria,
      selectedDificuldade,
      tutoriaisFiltrados,
      categorias,
      dificuldades,
      handleSearch,
      handleFilterCategoria,
      handleFilterDificuldade,
      clearFilters
    }
  }
}
</script>

<style scoped>
.tutoriais {
  width: 100%;
}

.page-hero {
  text-align: center;
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--background-subtle), white);
}

.page-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
}

.filters-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--background-subtle);
}

.filters-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.search-box {
  margin-bottom: var(--spacing-lg);
}

.search-input {
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.1rem;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.filter-label {
  font-weight: 600;
  color: var(--text-primary);
}

.filter-select {
  width: 100%;
}

.filter-actions {
  display: flex;
  align-items: flex-end;
}

.tutoriais-list-section {
  padding: var(--spacing-2xl) 0;
}

.no-results {
  text-align: center;
  padding: var(--spacing-2xl);
}

.no-results-icon {
  font-size: 5rem;
  margin-bottom: var(--spacing-md);
}

.no-results h3 {
  font-size: 1.75rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.no-results p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
}

.tutoriais-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.tutorial-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
  height: 100%;
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

.tutorial-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-sm);
}

.tutorial-badge {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
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

.tutorial-category {
  color: var(--text-secondary);
  font-size: 0.875rem;
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
  line-height: 1.6;
}

.tutorial-meta {
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--border-color);
}

.meta-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.tutorial-materials {
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: var(--spacing-sm);
  background-color: var(--background-subtle);
  border-radius: var(--radius-sm);
}

.tutorial-materials strong {
  color: var(--text-primary);
}

.btn-block {
  width: 100%;
  margin-top: var(--spacing-sm);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .filters-grid {
    grid-template-columns: 1fr;
  }

  .tutoriais-grid {
    grid-template-columns: 1fr;
  }
}
</style>
