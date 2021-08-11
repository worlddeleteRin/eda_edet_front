
export default {
  state: {
	user_authorized: true,
  },
  mutations: {
	setUserAuthorized(state: Record<string, any>, is_authorized: boolean) {
		state.user_authorized = is_authorized 
	},
  },
  actions: {
  },
}
