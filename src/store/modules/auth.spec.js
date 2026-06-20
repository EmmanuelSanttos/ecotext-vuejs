import { describe, it, expect } from 'vitest'
import { mutations } from './auth'

describe('módulo auth mutations', () => {
  it('SET_USER_XP incrementa o XP e recalcula o nivel (CT01)', () => {
    const state = { pontos_xp: 50, nivel: 'Iniciante' }
    mutations.SET_USER_XP(state, 75)
    expect(state.pontos_xp).toBe(125)
    expect(state.nivel).toBe('Intermediário')
  })
})
