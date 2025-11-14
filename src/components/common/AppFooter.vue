<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">🌱 EcoText</h3>
          <p class="footer-description">
            Transformando resíduos têxteis em novas possibilidades. 
            Juntos por um planeta mais sustentável.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Navegação</h4>
          <ul class="footer-links">
            <li><router-link to="/">Início</router-link></li>
            <li><router-link to="/conscientizacao">Conscientização</router-link></li>
            <li><router-link to="/tutoriais">Tutoriais</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Sobre o Projeto</h4>
          <p class="footer-text">
            Projeto Integrador em Tecnologia da Informação<br>
            Universidade Federal de Mato Grosso do Sul (UFMS)<br>
            Campo Grande - MS
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Contato</h4>
          <p class="footer-text">
            Email: ecotext@exemplo.com<br>
            Desenvolvido com 💚 para um futuro sustentável
          </p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} EcoText. Todos os direitos reservados.
        </p>
        <p class="footer-author">
          Desenvolvido por Aldo Emanuel dos Santos
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())
    
    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--primary-color);
  color: white;
  margin-top: auto;
  padding: var(--spacing-2xl) 0 var(--spacing-md);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-title {
  font-size: 1.5rem;
  margin: 0 0 var(--spacing-sm) 0;
  color: white;
}

.footer-subtitle {
  font-size: 1.1rem;
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--accent-color);
  font-weight: 600;
}

.footer-description,
.footer-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: var(--accent-color);
}

.footer-links a:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.footer-copyright,
.footer-author {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-xl) 0 var(--spacing-md);
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
