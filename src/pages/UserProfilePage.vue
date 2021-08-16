<template> 
<div class="mx-auto max-w-screen-lg">

	<UserProfileMain 
	/>

	<UserProfileLinks
		:profileLinks="user_profile_links"
		:currentPath="current_path"
		class="mt-4"
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
		var current_path = computed(() => route.path)

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
		}
	}
});

</script>
