/*!
 * As multations altera um estado
 */
export default {
  'CHANGE_USER' (state, payload) {
    state.user = payload
  },
  'CHANGE_TOKEN' (state, payload) {
    state.token = payload
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  'CLEAR_USER_SESSION' (state, payload) {
    state.user = {
      role: {
        permissions: {}
      }
    }
    state.token = ''
  }
}
