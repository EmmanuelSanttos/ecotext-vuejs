<template>
  <div class="conscientizacao">
    <!-- Hero -->
    <section class="page-hero">
      <h1 class="page-title">Conscientização Ambiental</h1>
      <p class="page-subtitle">
        Entenda o impacto dos resíduos têxteis e por que a reutilização é essencial
      </p>
    </section>

    <!-- Problema -->
    <section class="content-section">
      <div class="section-card card">
        <h2 class="section-heading">🌍 O Problema dos Resíduos Têxteis</h2>
        <p>
          A indústria têxtil é uma das mais poluentes do mundo. Em Campo Grande/MS e no Brasil, 
          toneladas de roupas e tecidos são descartadas inadequadamente todos os dias, causando 
          sérios impactos ambientais e sociais.
        </p>
        <div class="highlight-box">
          <h3>Dados Alarmantes:</h3>
          <ul>
            <li>🗑️ <strong>85%</strong> dos têxteis produzidos vão para aterros sanitários ou são incinerados</li>
            <li>⏰ Tecidos sintéticos levam até <strong>200 anos</strong> para se decompor</li>
            <li>💧 São necessários <strong>2.700 litros</strong> de água para produzir uma única camiseta</li>
            <li>🌊 A lavagem de roupas libera <strong>500.000 toneladas</strong> de microfibras nos oceanos anualmente</li>
            <li>🏭 A indústria têxtil é responsável por <strong>10%</strong> das emissões globais de carbono</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Impactos Ambientais -->
    <section class="content-section impact-section">
      <h2 class="section-heading text-center">Impactos Ambientais</h2>
      <div class="impact-grid">
        <div class="impact-card card">
          <div class="impact-icon">💧</div>
          <h3>Poluição da Água</h3>
          <p>
            Corantes e produtos químicos dos tecidos contaminam lençóis freáticos e rios. 
            As microfibras plásticas liberadas na lavagem chegam aos oceanos, afetando a vida marinha.
          </p>
        </div>

        <div class="impact-card card">
          <div class="impact-icon">🏔️</div>
          <h3>Ocupação de Aterros</h3>
          <p>
            Toneladas de roupas ocupam espaço valioso em aterros sanitários, onde levam décadas 
            para se decompor e liberam gases de efeito estufa durante o processo.
          </p>
        </div>

        <div class="impact-card card">
          <div class="impact-icon">🌡️</div>
          <h3>Emissões de CO2</h3>
          <p>
            A produção, transporte e descarte de têxteis geram enormes quantidades de gases 
            de efeito estufa, contribuindo para o aquecimento global.
          </p>
        </div>

        <div class="impact-card card">
          <div class="impact-icon">🐠</div>
          <h3>Microplásticos</h3>
          <p>
            Tecidos sintéticos liberam microplásticos que entram na cadeia alimentar, 
            afetando desde plâncton até seres humanos.
          </p>
        </div>
      </div>
    </section>

    <!-- Impactos Sociais -->
    <section class="content-section">
      <div class="section-card card">
        <h2 class="section-heading">👥 Impactos Sociais</h2>
        <p>
          Além dos danos ambientais, o descarte inadequado de resíduos têxteis afeta 
          diretamente comunidades locais:
        </p>
        <ul class="social-impacts-list">
          <li>
            <strong>Desigualdade:</strong> Enquanto toneladas de roupas são descartadas, 
            muitas pessoas não têm acesso a vestuário adequado.
          </li>
          <li>
            <strong>Saúde Pública:</strong> Aterros irregulares de resíduos têxteis podem 
            contaminar áreas residenciais e afetar a saúde da população.
          </li>
          <li>
            <strong>Perda de Oportunidades:</strong> Materiais que poderiam gerar renda 
            através de reciclagem e upcycling são desperdiçados.
          </li>
          <li>
            <strong>Educação:</strong> Falta de conscientização sobre alternativas sustentáveis 
            perpetua o ciclo de desperdício.
          </li>
        </ul>
      </div>
    </section>

    <!-- A Solução -->
    <section class="content-section solution-section">
      <h2 class="section-heading text-center">✨ A Solução: Reutilização Criativa</h2>
      <div class="solution-grid">
        <div class="solution-card card">
          <h3>♻️ Reduzir o Descarte</h3>
          <p>
            Ao reutilizar tecidos velhos, evitamos que toneladas de material cheguem aos aterros. 
            Cada peça transformada é uma vitória para o meio ambiente.
          </p>
        </div>

        <div class="solution-card card">
          <h3>💡 Economia Criativa</h3>
          <p>
            A reutilização pode gerar renda através da venda de produtos artesanais, 
            criando oportunidades econômicas sustentáveis.
          </p>
        </div>

        <div class="solution-card card">
          <h3>🎓 Educação e Mudança</h3>
          <p>
            Compartilhar conhecimento sobre reutilização cria uma cultura de consumo 
            consciente e responsabilidade ambiental.
          </p>
        </div>

        <div class="solution-card card">
          <h3>🤝 Comunidade</h3>
          <p>
            Projetos de reutilização fortalecem laços comunitários e promovem a 
            colaboração em prol de um objetivo comum.
          </p>
        </div>
      </div>
    </section>

    <!-- Ações Práticas -->
    <section class="content-section actions-section">
      <div class="actions-card card">
        <h2 class="section-heading">🎯 Como Você Pode Fazer a Diferença</h2>
        <div class="actions-list">
          <div class="action-item">
            <div class="action-number">1</div>
            <div class="action-content">
              <h3>Aprenda a Reutilizar</h3>
              <p>Explore nossos tutoriais e aprenda técnicas simples de transformação têxtil.</p>
              <router-link to="/tutoriais" class="btn btn-secondary">Ver Tutoriais</router-link>
            </div>
          </div>

          <div class="action-item">
            <div class="action-number">2</div>
            <div class="action-content">
              <h3>Compartilhe Conhecimento</h3>
              <p>Ensine amigos e familiares sobre a importância da reutilização.</p>
            </div>
          </div>

          <div class="action-item">
            <div class="action-number">3</div>
            <div class="action-content">
              <h3>Doe ou Troque</h3>
              <p>Roupas em bom estado podem ter nova vida com outras pessoas.</p>
            </div>
          </div>

          <div class="action-item">
            <div class="action-number">4</div>
            <div class="action-content">
              <h3>Consuma Conscientemente</h3>
              <p>Pense antes de comprar: você realmente precisa? Escolha qualidade sobre quantidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>Pronto para Começar?</h2>
        <p>Explore nossos tutoriais práticos e comece sua jornada sustentável hoje!</p>
        <router-link to="/tutoriais" class="btn btn-primary btn-large">
          Explorar Tutoriais
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Conscientizacao'
}
</script>

<style scoped>
.conscientizacao {
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

.content-section {
  padding: var(--spacing-2xl) 0;
}

.section-card {
  padding: var(--spacing-2xl);
}

.section-heading {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-lg);
}

.section-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
}

.highlight-box {
  background-color: var(--background-subtle);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-lg);
  border-left: 4px solid var(--secondary-color);
}

.highlight-box h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.highlight-box ul {
  list-style: none;
  padding: 0;
}

.highlight-box li {
  padding: var(--spacing-sm) 0;
  font-size: 1.05rem;
  color: var(--text-primary);
}

.impact-section {
  background-color: var(--background-subtle);
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.impact-card {
  text-align: center;
  padding: var(--spacing-xl);
}

.impact-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
}

.impact-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.impact-card p {
  font-size: 1rem;
  line-height: 1.6;
}

.social-impacts-list {
  list-style: none;
  padding: 0;
  margin-top: var(--spacing-lg);
}

.social-impacts-list li {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  background-color: var(--background-subtle);
  border-radius: var(--radius-md);
  font-size: 1.05rem;
  line-height: 1.7;
}

.social-impacts-list strong {
  color: var(--primary-color);
}

.solution-section {
  background-color: var(--background-subtle);
}

.solution-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.solution-card {
  padding: var(--spacing-xl);
  text-align: center;
}

.solution-card h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-md);
}

.actions-section {
  padding: var(--spacing-2xl) 0;
}

.actions-card {
  padding: var(--spacing-2xl);
}

.actions-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.action-item {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
}

.action-number {
  width: 60px;
  height: 60px;
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.action-content {
  flex: 1;
}

.action-content h3 {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.action-content p {
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
}

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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1.1rem;
  }

  .section-heading {
    font-size: 1.75rem;
  }

  .impact-grid,
  .solution-grid {
    grid-template-columns: 1fr;
  }

  .action-item {
    flex-direction: column;
    text-align: center;
  }

  .action-number {
    margin: 0 auto;
  }
}
</style>
