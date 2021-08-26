<template>

<div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"
	@click="closeModalClick"
>
</div>

<transition 
	enter-active-class="transition ease-out duration-200" 
	enter-from-class="opacity-0 translate-y-1 scale-90" 
	enter-to-class="opacity-100 translate-y-0 scale-100" 
	leave-active-class="transition ease-in duration-1000" 
	leave-from-class="translate-y-0 scale-100" 
	leave-to-class="translate-y-1 scale-0"
>
	<div 
	v-if="is_mounted"
	class="absolute w-11/12 bg-white rounded-lg top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 max-w-[600px]">
		<div class="flex flex-col items-center px-5 py-8 md:px-12">

				
			<!-- user login -->
			<user-login-component
				v-if="user_login_info_local.user_authorize_state == userAuthorizeStates.NEED_LOGIN"
				@user-login="loginCheckAccount"
				@user-login-info="updateUserLoginInfo"
				:userLoginInfo="user_login_info_local"
				@toast-error="errorToast"
				@toast-success="successToast"
			/>
			<!-- eof user login -->

			<!-- user register -->
			<user-register-component
				v-if="user_login_info_local.user_authorize_state == userAuthorizeStates.NEED_REGISTER"
				@user-login-info="updateUserLoginInfo"
				@user-check-register="loginCheckRegister"
				:userLoginInfo="user_login_info_local"
				@toast-error="errorToast"
				@toast-success="successToast"
			/>
			<!-- user register -->

			<!-- need password -->
			<user-login-password-component
				v-if="user_login_info_local.user_authorize_state == userAuthorizeStates.NEED_PASSWORD"
				@user-login-info="updateUserLoginInfo"
				@login-check-password="loginCheckPassword"
				@go-restore-account="goLoginRestoreAccount"
				:userLoginInfo="user_login_info_local"
				@toast-error="errorToast"
				@toast-success="successToast"
			/>
			<!-- eof need password -->

			<!-- login restore account -->
			<user-login-restore-account-component
				v-if="user_login_info_local.user_authorize_state == userAuthorizeStates.RESTORE_ACCOUNT"
				:userLoginInfo="user_login_info_local"
				@user-login-info="updateUserLoginInfo"
				@login-check-restore="loginCheckRestore"
				@toast-error="errorToast"
				@toast-success="successToast"
				@go-login="goLoginAccount"
			/>
			<!-- eof login restore account -->

			<!-- login verify account -->
			<user-login-verify-account-component
				v-if="user_login_info_local.user_authorize_state == userAuthorizeStates.VERIFY_ACCOUNT"
				:userLoginInfo="user_login_info_local"
				@user-login-info="updateUserLoginInfo"
				@login-check-verify="loginCheckVerify"
				@toast-error="errorToast"
				@toast-success="successToast"
				@go-login="goLoginAccount"
			/>
			<!-- eof login verify account -->

		</div>
	</div>
		

</transition>
	

</template>
			}

<script lang="ts">
import { onMounted, ref, reactive, defineComponent } from 'vue';
import { useStore } from 'vuex';
// toast import
import { createToast } from 'mosha-vue-toastify';

// import user login component
import UserLoginComponent from '@/components/login/UserLoginComponent.vue';
import UserRegisterComponent from '@/components/login/UserRegisterComponent.vue';
import UserLoginPasswordComponent from '@/components/login/UserLoginPasswordComponent.vue';
import UserLoginRestoreAccountComponent from '@/components/login/UserLoginRestoreAccountComponent.vue';
import UserLoginVerifyAccountComponent from '@/components/login/UserLoginVerifyAccountComponent.vue';

export default defineComponent({
	name: "UserAuthorizeModal",
	components: {
		UserLoginComponent,
		UserRegisterComponent,
		UserLoginPasswordComponent,
		UserLoginRestoreAccountComponent,
		UserLoginVerifyAccountComponent,
	},
	props: {
		userLoginInfo: {
			type: Object,
			required: true,
			default: null,
		},
		userAuthorizeStates: {
			type: Object,
			required: true,
			default: null,
		},
	},
	emits: ['close-modal', 'user-login-info'],
	setup (props, {emit}) {
		// store
		const store = useStore()
		// toast 
		const inputErrorToast = (title: string) => {
			createToast(
				title, {
					'type': 'danger',
					'showIcon': true,
					'hideProgressBar': true,	
				}
			);
		};
		const inputSuccessToast = (title: string) => {
			createToast(
				title, {
					'type': 'success',
					'showIcon': true,
					'hideProgressBar': true,
				}
			);
		};

		var errorToast = (title: string) => inputErrorToast(title)
		var successToast =  (title: string) => inputSuccessToast(title)


		const is_mounted = ref(false)

		var user_login_info_local =  reactive(
			props.userLoginInfo
		)
		
		onMounted(() => {
			is_mounted.value = true
		})

		var closeModalClick = () => {
			// close modal and set modal state to NEED_LOGIN
			emit('close-modal')	
			user_login_info_local.user_authorize_state = props.userAuthorizeStates.NEED_LOGIN
			updateUserLoginInfo()
		}

		var updateUserLoginInfo = () => emit("user-login-info", user_login_info_local)

		var updateUserLoginInfoLocal = (new_user_login_info: Record<string,any>) => {
			user_login_info_local = { ...new_user_login_info }
			updateUserLoginInfo()
		}

		var goLoginRestoreAccount = () => {
			user_login_info_local.user_authorize_state = props.userAuthorizeStates.RESTORE_ACCOUNT
		}
		var goLoginAccount = () => {
			user_login_info_local.user_authorize_state = props.userAuthorizeStates.NEED_LOGIN
			updateUserLoginInfo()
		}

		var loginCheckRegister = async () => {
			const validate_info = await store.dispatch('validateCheckRegister')	
			if (!validate_info.is_valid) {
				return inputErrorToast(validate_info.v_msg)
			} else {
				// set modal state to VERIFY_ACCOUNT, to send and verify code
				user_login_info_local.user_authorize_state = props.userAuthorizeStates.VERIFY_ACCOUNT
				return successToast('register is valid, can go verify with sms code')
			}
		}


		var loginCheckAccount = async () => {
			const validate_info = await store.dispatch('validateCheckAccount')	
			if (!validate_info.is_valid) {
				return inputErrorToast(validate_info.v_msg)
			} else {
				// need to check, if accounts exist
				// go to register, if account exist
				const user_exist = await store.dispatch('checkUserExistAPI')
				console.log('user exist is', user_exist)
				if (user_exist) {
					user_login_info_local.user_authorize_state = props.userAuthorizeStates.NEED_PASSWORD
				} else {
					user_login_info_local.user_authorize_state = props.userAuthorizeStates.NEED_REGISTER
				}
				// go to type password, if accounts not exist
				updateUserLoginInfo()
				return successToast('login is valid, can go further')
			}
		}
		var loginCheckPassword = async () => {
			const validate_info = await store.dispatch('validateCheckPassword')	
			if (!validate_info.is_valid) {
				return inputErrorToast(validate_info.v_msg)
			} else {
				// need to send data on server and check, if password is corrent
				// login user and close modal, if password is corrent
				// display error, if password is not correct
				return successToast('password  verified, need to send on server')
			}
		}
		var loginCheckRestore = async () => {
			const validate_info = await store.dispatch('validateCheckRestore')
			if (!validate_info.is_valid) {
				return inputErrorToast(validate_info.v_msg)
			} else {
				// need to send code on server, and check, if it is right
				return successToast('code verified, need to send and check on server')
			}
		}

		var loginCheckVerify = async () => {
			const validate_info = await store.dispatch('validateCheckVerify')	
			if (!validate_info.is_valid) {
				return inputErrorToast(validate_info.v_msg)
			} else {
				// need to send verify code on server
				// create account and login user, if code is right
				// show errorToast, if code is not right
				return successToast('verify is valid, can send code to check on server')
			}
		}


		return {
			// reactive
			user_login_info_local,
			// computed
			is_mounted,
			// functions
			closeModalClick,
			updateUserLoginInfo,
			loginCheckRegister,
			loginCheckAccount,
			loginCheckPassword,
			loginCheckRestore,
			loginCheckVerify,
			goLoginRestoreAccount,
			goLoginAccount,
			errorToast,
			successToast,
		}
	}
});
</script>
