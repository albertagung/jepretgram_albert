let mutations = {
  setShare (state, payload) {
    state.shares = payload
  },
  setLoginCredentials (state, payload) {
    state.loginCredentials = payload
  },
  setNewShare (state, payload) {
    state.shares.push(payload)
  },
  setShareById (state, payload) {
    state.shareById = payload
  },
  setCommentByShareId (state, payload) {
    state.commentsByShareId = payload
  },
  setNewComment (state, payload) {
    state.comments = payload
  }
}

export default mutations
