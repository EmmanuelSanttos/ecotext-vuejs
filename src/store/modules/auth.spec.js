import { describe, it, expect, vi } from 'vitest'

// Blindagem 1: Criamos um "localStorage falso" para o robô não tropeçar ao abrir o auth.js
vi.stubGlobal('localStorage', {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
})

import auth from './auth'

describe('módulo auth mutations', () => {
  it('SET_USER atualiza o usuário no state de forma segura', () => {
    // Blindagem 2: Extraímos o módulo de forma infalível
    const modulo = auth.default || auth
    
    const state = { user: null }
    const usuarioMock = { nome: 'Aldo', pontosXP: 100 }
    
    // Executamos a mutation
    modulo.mutations.SET_USER(state, usuarioMock)
    
    // Validamos o resultado
    expect(state.user).toEqual(usuarioMock)
  })
})
