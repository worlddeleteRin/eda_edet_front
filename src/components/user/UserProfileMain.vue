<template>
<div class="mx-4 mt-4">
	<div class="text-xl font-semibold">
		Привет, Васяныч!
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "UserProfileMain",
	props: {
		userInfo: {
			type: Object,
			required: true,
			default: null,
		},
	},
	setup(props, {emit}) {
		return {
		}
	}
});
</script>
