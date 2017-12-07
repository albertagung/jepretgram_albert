let mutations = {
  setShare (state, payload) {
    state.shares = payload
  },
  setLoginCredentials (state, payload) {
    state.loginCredentials = payload
  },
  setNewShare (state, payload) {
    state.shares.push(payload)
  }
}

export default mutations
