<template>

<div class="text-3xl font-medium">
	Вход в аккаунт		
</div>

<!-- check user password form -->
<div>
	<!-- password input -->
	<div class="mt-5 text-center">
		Введите Ваш пароль	
	</div>
	<input
	type="password"
	v-model="user_login_info_local.user_password"
	placeholder="Ваш пароль"
	@input="updateUserLoginInfo"
	class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	<!-- eof password input -->

	<!-- submit check password button -->
	<div class="mt-8">
		<Button
		@button-click="loginCheckPasswordClicked"
		:title="'Войти'"
		rounded="full"
		class="flex justify-center px-5 py-3 text-white bg-default"
		/>
	</div>
	<!-- eof submit check password button -->

	<!-- forget password button -->
	<div class="mt-3">
		<Button
		@button-click="goRestoreAccountClicked"
		:title="'Забыли пароль?'"
		rounded="full"
		class="flex justify-center px-3 py-2 text-white text-red-500"
		/>
	</div>
	<!-- eof forget password button -->
	<!-- register button -->
	<!--
	<div class="mt-3">
		<Button
		:title="'Забыли пароль?'"
		rounded="full"
		class="flex justify-center px-5 py-3 text-white bg-defaultDim text-defaultText"
		/>
	</div>
	-->
	<!-- eof register button -->

</div>
<!-- check user password form -->
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Button from '@/components/buttons/Button.vue';

export default defineComponent({
	name: "UserLoginPasswordComponent",
	components: {
		Button,
	},
	props: {
		userLoginInfo: {
			type: Object,
			default: null,
		}
	},
	emits: ['user-login-info', 'toast-error', 'toast-success', 'login-check-password', 'go-restore-account'],
	setup(props, {emit}) {

		// user_login data
		var user_login_info_local =  reactive(
			props.userLoginInfo
		);

		// emit user login data from local, when local changes
		var updateUserLoginInfo = (event: Record<string,any>) => {
			emit('user-login-info', user_login_info_local)	
		}					

		// emit user check password, when button clicked
		var loginCheckPasswordClicked = () => emit('login-check-password')
		var goRestoreAccountClicked = () => emit('go-restore-account')

		return {
			// reactive
			user_login_info_local,
			// functions
			updateUserLoginInfo,
			loginCheckPasswordClicked,
			goRestoreAccountClicked,
		}
	}
});
</script>
