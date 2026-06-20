import { describe, it, expect } from 'vitest'
// A importação com asterisco força o Vite a carregar o módulo inteiro sem dar "undefined"
import * as authModule from './auth.js'

describe('módulo auth', () => {
  it('SET_USER atualiza o usuário no state com sucesso', () => {
    // Acesso blindado que garante a leitura correta das mutations
    const auth = authModule.default || authModule
    
    const state = { user: null }
    const usuarioMock = { nome: 'Aldo', pontosXP: 100 }
    
    // Executa a função verdadeira que mapeamos no seu código
    auth.mutations.SET_USER(state, usuarioMock)
    
    // Verifica se os dados foram atualizados
    expect(state.user).toEqual(usuarioMock)
    expect(state.user.nome).toBe('Aldo')
  })
})
