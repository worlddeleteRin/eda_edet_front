<template>
<div class="flex">
	<div
	v-for="profile_link in profileLinks"
	:key="profile_link"
	class=""
	>
		<router-link 
			:to="profile_link.link_path"
			:class="[isRouteActive(profile_link.link_path) ? 'bg-defaultDim text-defaultTextBg': '', 'px-4 py-1 rounded-full']"	
		>
			{{ profile_link.link_name }}
		</router-link>
	</div>
	<!-- user profile link here -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "UserProfileLinks",
	props: {
		profileLinks: {
			type: Array,
			required: true,
			default: null,
		},
		currentPath: {
			type: String,
			default: "",
		},
	},	
	setup(props, {emit}) {
		const isRouteActive = (profile_link: string) => {
			console.log(profile_link, props.currentPath)
			return profile_link == props.currentPath 
		}
		//console.log('route is', route.path)
		
		return {
			isRouteActive,
		}
	}
});
</script>
