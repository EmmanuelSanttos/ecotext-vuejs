import { describe, it, expect } from 'vitest'
import auth from './auth'

describe('módulo auth mutations', () => {
  it('SET_USER atualiza o usuário no state com sucesso', () => {
    // 1. Preparamos o estado inicial (vazio) e um usuário de teste
    const state = { user: null }
    const usuarioMock = { nome: 'Aldo', pontosXP: 100 }
    
    // 2. Chamamos a mutation exata que existe no arquivo auth.js
    auth.mutations.SET_USER(state, usuarioMock)
    
    // 3. Verificamos se o teste funcionou e os dados foram salvos
    expect(state.user).toEqual(usuarioMock)
    expect(state.user.nome).toBe('Aldo')
    expect(state.user.pontosXP).toBe(100)
  })
})
