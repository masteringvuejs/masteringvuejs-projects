import actions from './actions'
import {mutations, state} from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
