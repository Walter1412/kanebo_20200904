export default {
  setDisplay({ commit }, value) {
    commit('SET_DISPLAY', value)
  },
  setComponentName({ commit }, value) {
    commit('SET_COMPONENT_NAME', value)
  },
  setData({ commit }, value) {
    commit('SET_DATA', value)
  },
  setConfig({ commit }, value) {
    commit('SET_CONFIG', value)
  },
}
