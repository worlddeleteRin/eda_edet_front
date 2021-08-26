<template>
<div class="text-3xl font-medium">
	Регистрация аккаунта	
</div>

<!-- user register form -->
<div>
	<!-- user password -->
	<div class="mt-5 text-center">
		Придумайте пароль	
	</div>
	<input
	type="password"
	v-model="user_login_info_local.user_password"
	placeholder="Ваш пароль"
	@input="updateUserLoginInfo"
	class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	<!-- eof user password -->

	<!-- user password repeat -->
	<div class="mt-2 text-center">
		Повторите пароль	
	</div>
	<input
	type="password"
	v-model="user_login_info_local.user_password_repeat"
	placeholder="Повторите пароль"
	@input="updateUserLoginInfo"
	class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	<!-- eof user password repeat -->

	<!-- register button -->
	<div class="mt-8">
		<Button
		@button-click="userRegisterClick"
		:title="'Продолжить'"
		rounded="full"
		class="flex justify-center px-5 py-3 text-white bg-default"
		/>
	</div>
	<!-- eof register button -->

</div>
<!-- eof user register form -->	
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Button from '@/components/buttons/Button.vue';

export default defineComponent({
	name: "UserRegisterComponent",
	components: {
		Button,
	},
	props: {
		userLoginInfo: {
			type: Object,
			default: null,
		}
	},
	emits: ['user-login-info', 'toast-error', 'toast-success', 'user-register'],
	setup(props, {emit}) {
		// user_login data from vuex
		var user_login_info_local =  reactive(
			props.userLoginInfo
		);
		// emit update user_login info from local to vuex through parent
		var updateUserLoginInfo = (event: Record<string,any>) => {
			emit('user-login-info', user_login_info_local)	
		}					
		// emit user register click button
		var userRegisterClick = () => emit('user-register')

		return {
			// reactive
			user_login_info_local,
			// functions
			updateUserLoginInfo,
			userRegisterClick,
		}
	}
});
</script>
