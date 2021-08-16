<template>
<div class="px-4 mx-auto mt-5">
	<div class="text-2xl font-semibold">
		Профиль
	</div>
	<!-- user name -->
		<div class="mt-4">
			<user-profile-input
				:canChange="true"
				:inputValue="'some name'"
				@save-value="updateUserName"	
			/>
		</div>
	<!-- eof user name -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
// local components
import UserProfileInput from '@/components/input/UserProfileInput.vue';
export default defineComponent({
	name: "UserProfilePagePersonalData",
	components: {
		UserProfileInput,
	},
	setup(props) {
		const store = useStore()
		// functions
		const updateUserName = (new_user_name) => {
			console.log('need to update user name to:', new_user_name)
			store.dispatch('updateUserNameAPI', new_user_name)
		}
		return {
			// functions
			updateUserName,
		}
	}
});
</script>
