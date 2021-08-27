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
	emits: ['user-login-info', 'toast-error', 'toast-success', 'user-login'],
	setup(props, {emit}) {

		// user_login info from vuex, inherited by parent
		var user_login_info_local =  reactive(
			props.userLoginInfo
		);
		// emit user_login_local changes to parent
		var updateUserLoginPhone = (event: Record<string,any>) => {
			user_login_info_local.user_phone = "7" + event.target.getAttribute('data-mask-raw-value')
			emit('user-login-info', user_login_info_local)	
		}					
		// emit user login button click
		var userLoginClick = () => emit('user-login')

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
