
export default {
  state: {
	user_authorized: true,
	user_login_info: {
		user_phone: '',
		user_phone_mask: '+7',
		user_password: '',
		user_code: '',
	}
  },
  mutations: {
	setUserAuthorized(state: Record<string, any>, is_authorized: boolean) {
		state.user_authorized = is_authorized 
	},
	setUserLoginInfo(state: Record<string, any>, new_user_login_info: Record<string, any>) {
		state.user_login_info = { ...new_user_login_info }
	},
  },
  actions: {
  },
}
