const user_authorize_states = {
	NEED_LOGIN: "NEED_LOGIN",
	NEED_PASSWORD: "NEED_PASSWORD",
	NEED_REGISTER: "NEED_REGISTER",
	RESTORE_ACCOUNT: "RESTORE_ACCOUNT",
	VERIFY_ACCOUNT: "VERIFY_ACCOUNT",
}
const user_login_info_default = {
	user_authorize_state: user_authorize_states.NEED_LOGIN,
	user_phone: '',
	user_phone_mask: '+7',
	user_password: '',
	user_password_repeat: '',
	restore_code: '',
}

export default {
  state: {
	user_authorized: true,
	user_authorize_states: user_authorize_states,
	user_login_info: user_login_info_default,
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
	validateCheckAccount({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.user_phone.length != 10) {	
				v_info.v_msg = 'Корректно введите номер телефона'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info;
	},
	validateCheckPassword({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.user_password.length == 0) {	
				v_info.v_msg = 'Введите Ваш пароль'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info;
	},
	validateCheckRegister({state}: Record<string,any>) {
		const password = state.user_login_info.user_password
		const password_repeat = state.user_login_info.user_password_repeat
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (password.length  == 0 || password_repeat.length == 0) {	
			v_info.v_msg = 'Заполните поля паролей'	
			return v_info 
		}
		if (password != password_repeat) {
			v_info.v_msg = 'Введенные пароли на совпадают'
			return v_info
		}
		if (password.length < 6 || password_repeat.length < 6) {
			v_info.v_msg = "Длина пароля должна быть не менее 6 символов"
			return v_info 
		}
		v_info.is_valid = true
		return v_info
	},
	validateCheckRestore({ state }: Record<string,any>) {
		const v_info = {
			is_valid: false,
			v_msg: '',
		}
		if (state.user_login_info.restore_code.length == 0) {	
				v_info.v_msg = 'Введите код, высланный Вам по смс'	
				return v_info 
		}
		v_info.is_valid = true
		return v_info
	},
  },
}
