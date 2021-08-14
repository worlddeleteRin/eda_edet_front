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
	class="absolute bg-white rounded-lg top-1/3 -translate-y-1/2 -translate-x-1/2 left-1/2">
		<div class="px-12 py-8">

			{{ user_login_info }}
			<div class="text-3xl font-medium">
				Заказать звонок
			</div>

			<!-- user login form -->
			<div>

				<!-- user phone -->
				<input
				v-model="user_login_info.user_phone"
				@change="updateUserLoginInfo"
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

<script>
import { onMounted, ref, reactive } from 'vue';
export default {
	name: "RequestCallModal",
	emits: ['close-modal', 'user-login-info'],
	setup (props, {emit}) {
		const is_mounted = ref(false)
		const user_login_info = reactive({
			user_phone: '',
		})
		onMounted(() => {
			is_mounted.value = true
		})
		var closeModalClick = () => emit('close-modal')		
		var updateUserLoginInfo = (value) => emit('user-login-info')


		return {
			// reactive
			user_login_info,
			// computed
			is_mounted,
			// functions
			closeModalClick,
			updateUserLoginInfo,
		}
	}
}
</script>
