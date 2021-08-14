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
	class="absolute w-11/12 bg-white rounded-lg top-1/3 -translate-y-1/2 -translate-x-1/2 left-1/2 max-w-[600px]">
		<div class="px-12 py-8">

			<div class="text-3xl font-medium">
				Вход на сайт
			</div>

			<!-- user login form -->
			<div>

				<!-- user phone -->
				<input
				v-model="user_login_info_local.user_phone_mask"
				v-maska="'+7 (###)-###-##-##'"
				placeholder="+7 (xxx)-xxx-xx-xx"
				@maska="updateUserLoginPhone"
				class=""
				/>
				<!-- eof user phone -->

				<!-- user password -->
				<!-- eof user password -->
			</div>

			<!-- eof user login form -->	

		</div>
	</div>

</transition>
	

</template>

<script lang="ts">
import { onMounted, ref, reactive, defineComponent } from 'vue';
import { maska } from 'maska';

export default defineComponent({
	name: "UserAuthorizeModal",
	directives: {
		maska,
	},
	props: {
		userLoginInfo: {
			type: Object,
			default: null,
		},
	},
	emits: ['close-modal', 'user-login-info'],
	setup (props, {emit}) {
		const is_mounted = ref(false)
		var user_login_info_local =  reactive(
			props.userLoginInfo
		)
		
		onMounted(() => {
			is_mounted.value = true
		})
		var closeModalClick = () => emit('close-modal')	
		var updateUserLoginInfo = () => emit("user-login-info", user_login_info_local)
		var updateUserLoginPhone = (event: Record<string,any>) => {
			var user_phone = event.target.getAttribute('data-mask-raw-value')
	//		var user_phone_mask = event.target.getAttribute('data-mask')
			user_login_info_local.user_phone = user_phone
//			user_login_info.user_phone_mask = user_phone_mask
			updateUserLoginInfo()
		}

		return {
			// reactive
			user_login_info_local,
			// computed
			is_mounted,
			// functions
			closeModalClick,
			updateUserLoginInfo,
			updateUserLoginPhone,
		}
	}
});
</script>
