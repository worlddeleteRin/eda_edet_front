<template>
<!-- user login modal -->			
<div class="text-3xl font-medium">
	Восстановление доступа	
</div>

<!-- user login form -->
<div>
	<!-- user phone -->

	<div class="mt-5 text-center">
		Номер телефона
	</div>
	<input
		disabled
		v-model="user_login_info_local.user_phone_mask"
		placeholder="+7 999-999-99-99"
		class="w-full px-4 py-3 mt-2 text-lg text-gray-400 select-none rounded-md bg-defaultGray"
	/>
	<!-- eof user phone -->

	<div class="mt-3 text-center">
		Код из смс	
	</div>
	<input
		v-model="user_login_info_local.restore_code"
		placeholder="Ваш код"
		@input="updateUserLoginInfo"
		class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	<!-- eof user phone -->
	
	<!-- login button -->
	<div class="mt-8">
		<Button
		@button-click="loginCheckRestoreClicked"
		:title="'Продолжить'"
		rounded="full"
		class="flex justify-center px-5 py-3 text-white bg-default"
		/>
	</div>
	<!-- eof login button -->
	<!-- register button -->
	<!--
	<div class="mt-3">
		<Button
		:title="'Регистрация'"
		rounded="full"
		class="flex justify-center px-5 py-3 text-white bg-defaultDim text-defaultText"
		/>
	</div>
	-->
	<!-- eof register button -->
	<!-- forget password button -->
	<!--
	<div class="mt-3">
		<Button
		:title="'Забыли пароль?'"
		rounded="full"
		class="flex justify-center px-3 py-2 text-white text-red-500"
		/>
	</div>
	-->
	<!-- eof forget password button -->
</div>
<!-- eof user login form -->	
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Button from '@/components/buttons/Button.vue';

export default defineComponent({
	name: "UserLoginRestoreAccountComponent",
	components: {
		Button,
	},
	props: {
		userLoginInfo: {
			type: Object,
			default: null,
		}
	},
	emits: ['user-login-info', 'toast-error', 'toast-success', 'login-check-restore'],
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
		var loginCheckRestoreClicked = () => emit('login-check-restore')


		return {
			// reactive
			user_login_info_local,
			// functions
			updateUserLoginInfo,
			loginCheckRestoreClicked,
		}
	}
});
</script>
