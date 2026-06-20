import { describe, it, expect } from 'vitest'
import auth from './auth'

describe('módulo auth mutations', () => {
  it('SET_USER_XP incrementa o XP e recalcula o nivel (CT01)', () => {
    const state = { pontos_xp: 50, nivel: 'Iniciante' }
    
    // Acessamos as mutations através do módulo auth importado
    auth.mutations.SET_USER_XP(state, 75)
    
    expect(state.pontos_xp).toBe(125)
    expect(state.nivel).toBe('Intermediário')
  })
})
