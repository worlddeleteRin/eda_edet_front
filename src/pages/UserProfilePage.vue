<template> 
<div class="mx-auto max-w-screen-lg">

	<UserProfileMain 
		:userInfo="user_info"
		class="max-w-[500px]"
	/>

	<UserProfileLinks
		:profileLinks="user_profile_links"
		:currentPath="current_path"
		class="mt-6"
	/>

	<router-view></router-view>

</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
// local components 
import UserProfileMain from '@/components/user/UserProfileMain.vue';
import UserProfileLinks from '@/components/user/UserProfileLinks.vue';

export default defineComponent({
	name: "UserProfilePage",	
	components: {
		UserProfileMain,
		UserProfileLinks,
	},
	setup(props, {emit}) {
		const route = useRoute()
		const store = useStore()
		// computed
		var current_path = computed(() => route.path)
		var user_info = computed(() => store.state.user.user)

		const user_profile_links = [
			{
				link_name: "Профиль",
				link_path: "/profile",
			},
			{
				link_name: "Заказы",
				link_path: "/profile/orders",
			},
		];
		return {
			user_profile_links,
			// computed
			current_path,
			user_info,
		}
	}
});

</script>
