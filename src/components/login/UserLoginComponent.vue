<template>
<!-- user login modal -->			
<div class="text-3xl font-medium">
	Вход на сайт
</div>

<!-- user login form -->
<div>
	<!-- user phone -->

	<div class="mt-5 text-center">
		Номер телефона
	</div>
	<input
	v-model="user_login_info_local.user_phone_mask"
	v-maska="'+7 ###-###-##-##'"
	placeholder="+7 999-999-99-99"
	@maska="updateUserLoginPhone"
	class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	<!-- eof user phone -->

	<!-- user password-->
	<!--
	<div class="mt-3 text-center">
		Пароль
	</div>
	<input
	type="password"
	v-model="user_login_info_local.user_password"
	placeholder="Ваш пароль"
	@input="updateUserLoginInfo"
	class="w-full px-4 py-3 mt-2 text-lg rounded-md bg-defaultGray focus:outline-none focus:ring-2 ring-default"
	/>
	-->
	<!-- eof user password -->
	
	<!-- login button -->
	<div class="mt-8">
		<Button
		@button-click="userLoginClick"
		:title="'Войти'"
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
import { maska } from 'maska';
import { defineComponent, reactive } from 'vue';
import Button from '@/components/buttons/Button.vue';

export default defineComponent({
	name: "UserLoginComponent",
	directives: {
		maska,
	},
	components: {
		Button,
	},
	props: {
		userLoginInfo: {
			type: Object,
			default: null,
		}
	},
	emits: ['user-login-info', 'toast-error', 'toast-success'],
	setup(props, {emit}) {

		var user_login_info_local =  reactive(
			props.userLoginInfo
		);

		var updateUserLoginPhone = (event: Record<string,any>) => {
			user_login_info_local.user_phone = event.target.getAttribute('data-mask-raw-value')
			emit('user-login-info', user_login_info_local)	
		}					

		var validateUserLogin = () => {
			var validate_info = {
				is_valid: false,
				v_msg: '',
			}
			if (user_login_info_local.user_phone.length != 10) {	
				validate_info.v_msg = 'Корректно введите номер телефона'	
				return validate_info
			}
			validate_info.is_valid = true
			return validate_info
		}

		var userLoginClick = () => {
			// validate user login and password to trigger action	
			var validate_info = validateUserLogin();
			if (!validate_info.is_valid) {
				return emit('toast-error', validate_info.v_msg)
			} else {
				return emit('toast-success', 'Все норм, можно продолжать') 
			}
		}

		return {
			// reactive
			user_login_info_local,
			// functions
			updateUserLoginPhone,
			userLoginClick,
		}
	}
});
</script>
