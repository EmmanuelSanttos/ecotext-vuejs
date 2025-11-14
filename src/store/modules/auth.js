// Módulo Vuex para autenticação de usuários
// Nota: Esta é uma implementação MVP com localStorage
// Em produção, deve-se usar JWT tokens e API backend

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  users: JSON.parse(localStorage.getItem('users')) || []
}

const getters = {
  isAuthenticated: state => !!state.user,
  currentUser: state => state.user,
  getUserById: state => id => {
    return state.users.find(user => user.id === id)
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  },
  
  ADD_USER(state, user) {
    state.users.push(user)
    localStorage.setItem('users', JSON.stringify(state.users))
  },
  
  UPDATE_USER(state, updatedUser) {
    const index = state.users.findIndex(u => u.id === updatedUser.id)
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser)
      localStorage.setItem('users', JSON.stringify(state.users))
      
      // Atualiza usuário logado se for o mesmo
      if (state.user && state.user.id === updatedUser.id) {
        state.user = updatedUser
        localStorage.setItem('user', JSON.stringify(updatedUser))
      }
    }
  }
}

const actions = {
  login({ commit, state }, { email, senha }) {
    return new Promise((resolve, reject) => {
      const user = state.users.find(u => u.email === email && u.senha === senha)
      
      if (user) {
        const userSemSenha = { ...user }
        delete userSemSenha.senha
        commit('SET_USER', userSemSenha)
        resolve(user)
      } else {
        reject(new Error('Email ou senha inválidos'))
      }
    })
  },
  
  register({ commit, state }, userData) {
    return new Promise((resolve, reject) => {
      // Verifica se email já existe
      const emailExiste = state.users.some(u => u.email === userData.email)
      
      if (emailExiste) {
        reject(new Error('Email já cadastrado'))
        return
      }
      
      // Cria novo usuário
      const newUser = {
        id: Date.now().toString(),
        ...userData,
        dataCadastro: new Date().toISOString(),
        tutoriaisConcluidos: [],
        pontosXP: 0
      }
      
      commit('ADD_USER', newUser)
      
      // Faz login automático
      const userSemSenha = { ...newUser }
      delete userSemSenha.senha
      commit('SET_USER', userSemSenha)
      
      resolve(newUser)
    })
  },
  
  logout({ commit }) {
    commit('SET_USER', null)
  },
  
  updateProfile({ commit }, userData) {
    commit('UPDATE_USER', userData)
  },
  
  marcarTutorialConcluido({ commit, state }, tutorialId) {
    if (!state.user) return
    
    const updatedUser = {
      ...state.user,
      tutoriaisConcluidos: [...state.user.tutoriaisConcluidos, tutorialId],
      pontosXP: state.user.pontosXP + 10
    }
    
    commit('UPDATE_USER', updatedUser)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
