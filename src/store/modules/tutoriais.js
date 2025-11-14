// Módulo Vuex para gerenciamento de tutoriais

const tutoriaisIniciais = [
  {
    id: '1',
    titulo: 'Ecobag de Camiseta Velha',
    descricao: 'Transforme suas camisetas velhas em ecobags práticas e sustentáveis',
    categoria: 'Básico',
    dificuldade: 'Fácil',
    tempoDuracao: '20 minutos',
    materiaisNecessarios: [
      'Camiseta velha',
      'Tesoura',
      'Régua ou fita métrica',
      'Giz ou marcador lavável'
    ],
    passos: [
      {
        numero: 1,
        titulo: 'Preparação',
        descricao: 'Lave e seque bem a camiseta. Estique sobre uma superfície plana.',
        imagem: 'placeholder-passo1.jpg'
      },
      {
        numero: 2,
        titulo: 'Corte as Mangas',
        descricao: 'Corte as mangas da camiseta, criando as alças da ecobag.',
        imagem: 'placeholder-passo2.jpg'
      },
      {
        numero: 3,
        titulo: 'Corte o Decote',
        descricao: 'Remova o decote para ampliar a abertura da sacola.',
        imagem: 'placeholder-passo3.jpg'
      },
      {
        numero: 4,
        titulo: 'Feche a Base',
        descricao: 'Corte franjas na base (cerca de 8cm) e amarre par a par.',
        imagem: 'placeholder-passo4.jpg'
      },
      {
        numero: 5,
        titulo: 'Finalização',
        descricao: 'Sua ecobag está pronta! Opcionalmente, decore com patches ou bordados.',
        imagem: 'placeholder-passo5.jpg'
      }
    ],
    impactoAmbiental: 'Evita o descarte de uma peça têxtil e reduz o uso de sacolas plásticas.',
    videoUrl: null,
    dataCriacao: '2025-11-01',
    visualizacoes: 245,
    curtidas: 89
  },
  {
    id: '2',
    titulo: 'Almofada Decorativa com Retalhos',
    descricao: 'Crie lindas almofadas usando retalhos de tecidos variados',
    categoria: 'Intermediário',
    dificuldade: 'Médio',
    tempoDuracao: '2 horas',
    materiaisNecessarios: [
      'Retalhos de tecido (vários tamanhos)',
      'Linha e agulha ou máquina de costura',
      'Enchimento (fibra siliconada ou retalhos)',
      'Tesoura',
      'Alfinetes',
      'Fita métrica'
    ],
    passos: [
      {
        numero: 1,
        titulo: 'Seleção dos Tecidos',
        descricao: 'Escolha retalhos que combinem em cores e texturas. Lave e passe todos os tecidos.',
        imagem: 'placeholder-passo1.jpg'
      },
      {
        numero: 2,
        titulo: 'Corte e Planejamento',
        descricao: 'Corte os retalhos em quadrados de 10x10cm. Planeje o layout da sua almofada.',
        imagem: 'placeholder-passo2.jpg'
      },
      {
        numero: 3,
        titulo: 'Costura dos Quadrados',
        descricao: 'Costure os quadrados em tiras, depois una as tiras para formar o painel frontal.',
        imagem: 'placeholder-passo3.jpg'
      },
      {
        numero: 4,
        titulo: 'Montagem',
        descricao: 'Una o painel frontal ao tecido de fundo, deixando uma abertura.',
        imagem: 'placeholder-passo4.jpg'
      },
      {
        numero: 5,
        titulo: 'Enchimento e Finalização',
        descricao: 'Vire do avesso, encha com fibra siliconada e feche a abertura com costura invisível.',
        imagem: 'placeholder-passo5.jpg'
      }
    ],
    impactoAmbiental: 'Reutiliza múltiplos retalhos têxteis que seriam descartados.',
    videoUrl: null,
    dataCriacao: '2025-11-03',
    visualizacoes: 178,
    curtidas: 64
  },
  {
    id: '3',
    titulo: 'Tapete de Tiras de Camisetas',
    descricao: 'Aprenda a fazer um tapete confortável usando tiras de camisetas velhas',
    categoria: 'Básico',
    dificuldade: 'Fácil',
    tempoDuracao: '1 hora',
    materiaisNecessarios: [
      '5-7 camisetas velhas',
      'Tesoura',
      'Agulha de crochê (opcional)',
      'Fita adesiva ou clipes'
    ],
    passos: [
      {
        numero: 1,
        titulo: 'Preparação das Tiras',
        descricao: 'Corte as camisetas em tiras de cerca de 3cm de largura.',
        imagem: 'placeholder-passo1.jpg'
      },
      {
        numero: 2,
        titulo: 'União das Tiras',
        descricao: 'Una as pontas das tiras fazendo pequenos nós ou costuras.',
        imagem: 'placeholder-passo2.jpg'
      },
      {
        numero: 3,
        titulo: 'Trançado',
        descricao: 'Separe em 3 seções e faça uma trança longa. Prenda a ponta inicial.',
        imagem: 'placeholder-passo3.jpg'
      },
      {
        numero: 4,
        titulo: 'Enrolar a Trança',
        descricao: 'Enrole a trança em formato circular ou oval, costurando conforme avança.',
        imagem: 'placeholder-passo4.jpg'
      },
      {
        numero: 5,
        titulo: 'Acabamento',
        descricao: 'Finalize escondendo a ponta e reforçando a costura nas bordas.',
        imagem: 'placeholder-passo5.jpg'
      }
    ],
    impactoAmbiental: 'Reutiliza até 7 camisetas velhas que iriam para o lixo.',
    videoUrl: null,
    dataCriacao: '2025-11-05',
    visualizacoes: 312,
    curtidas: 127
  },
  {
    id: '4',
    titulo: 'Porta-Lápis de Jeans',
    descricao: 'Transforme uma perna de calça jeans em organizador de mesa',
    categoria: 'Básico',
    dificuldade: 'Fácil',
    tempoDuracao: '30 minutos',
    materiaisNecessarios: [
      'Calça jeans velha',
      'Tesoura',
      'Cola quente ou cola para tecido',
      'Papelão ou base rígida',
      'Decorações (opcional): botões, patches, fitas'
    ],
    passos: [
      {
        numero: 1,
        titulo: 'Corte da Perna',
        descricao: 'Corte uma perna da calça jeans com cerca de 15cm de comprimento.',
        imagem: 'placeholder-passo1.jpg'
      },
      {
        numero: 2,
        titulo: 'Preparação da Base',
        descricao: 'Corte um círculo de papelão que caiba dentro da perna do jeans.',
        imagem: 'placeholder-passo2.jpg'
      },
      {
        numero: 3,
        titulo: 'Montagem',
        descricao: 'Cole o papelão na base interna do jeans para criar o fundo.',
        imagem: 'placeholder-passo3.jpg'
      },
      {
        numero: 4,
        titulo: 'Acabamento da Borda',
        descricao: 'Dobre a borda superior para dentro e cole ou costure.',
        imagem: 'placeholder-passo4.jpg'
      },
      {
        numero: 5,
        titulo: 'Decoração',
        descricao: 'Decore com botões, patches ou deixe com o visual natural do jeans.',
        imagem: 'placeholder-passo5.jpg'
      }
    ],
    impactoAmbiental: 'Reutiliza parte de uma calça jeans, material de alta durabilidade.',
    videoUrl: null,
    dataCriacao: '2025-11-07',
    visualizacoes: 189,
    curtidas: 71
  }
]

const state = {
  tutoriais: JSON.parse(localStorage.getItem('tutoriais')) || tutoriaisIniciais,
  filtroCategoria: 'Todos',
  filtroDificuldade: 'Todos',
  termoBusca: ''
}

const getters = {
  tutoriaisFiltrados: state => {
    let resultado = [...state.tutoriais]
    
    // Filtro por categoria
    if (state.filtroCategoria !== 'Todos') {
      resultado = resultado.filter(t => t.categoria === state.filtroCategoria)
    }
    
    // Filtro por dificuldade
    if (state.filtroDificuldade !== 'Todos') {
      resultado = resultado.filter(t => t.dificuldade === state.filtroDificuldade)
    }
    
    // Busca por termo
    if (state.termoBusca) {
      const termo = state.termoBusca.toLowerCase()
      resultado = resultado.filter(t => 
        t.titulo.toLowerCase().includes(termo) ||
        t.descricao.toLowerCase().includes(termo)
      )
    }
    
    return resultado
  },
  
  getTutorialById: state => id => {
    return state.tutoriais.find(t => t.id === id)
  },
  
  categorias: state => {
    const cats = new Set(state.tutoriais.map(t => t.categoria))
    return ['Todos', ...Array.from(cats)]
  },
  
  dificuldades: () => {
    return ['Todos', 'Fácil', 'Médio', 'Difícil']
  }
}

const mutations = {
  SET_TUTORIAIS(state, tutoriais) {
    state.tutoriais = tutoriais
    localStorage.setItem('tutoriais', JSON.stringify(tutoriais))
  },
  
  SET_FILTRO_CATEGORIA(state, categoria) {
    state.filtroCategoria = categoria
  },
  
  SET_FILTRO_DIFICULDADE(state, dificuldade) {
    state.filtroDificuldade = dificuldade
  },
  
  SET_TERMO_BUSCA(state, termo) {
    state.termoBusca = termo
  },
  
  INCREMENT_VISUALIZACOES(state, tutorialId) {
    const tutorial = state.tutoriais.find(t => t.id === tutorialId)
    if (tutorial) {
      tutorial.visualizacoes++
      localStorage.setItem('tutoriais', JSON.stringify(state.tutoriais))
    }
  },
  
  TOGGLE_CURTIDA(state, tutorialId) {
    const tutorial = state.tutoriais.find(t => t.id === tutorialId)
    if (tutorial) {
      tutorial.curtidas++
      localStorage.setItem('tutoriais', JSON.stringify(state.tutoriais))
    }
  }
}

const actions = {
  setFiltroCategoria({ commit }, categoria) {
    commit('SET_FILTRO_CATEGORIA', categoria)
  },
  
  setFiltroDificuldade({ commit }, dificuldade) {
    commit('SET_FILTRO_DIFICULDADE', dificuldade)
  },
  
  buscarTutoriais({ commit }, termo) {
    commit('SET_TERMO_BUSCA', termo)
  },
  
  visualizarTutorial({ commit }, tutorialId) {
    commit('INCREMENT_VISUALIZACOES', tutorialId)
  },
  
  curtirTutorial({ commit }, tutorialId) {
    commit('TOGGLE_CURTIDA', tutorialId)
  },
  
  limparFiltros({ commit }) {
    commit('SET_FILTRO_CATEGORIA', 'Todos')
    commit('SET_FILTRO_DIFICULDADE', 'Todos')
    commit('SET_TERMO_BUSCA', '')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
