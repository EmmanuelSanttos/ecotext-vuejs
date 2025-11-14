import { createStore } from 'vuex'
import auth from './modules/auth'
import tutoriais from './modules/tutoriais'

export default createStore({
  modules: {
    auth,
    tutoriais
  },
  strict: process.env.NODE_ENV !== 'production'
})
