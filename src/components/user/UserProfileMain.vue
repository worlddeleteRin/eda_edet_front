<template>
<div class="flex items-center justify-between mx-4 mt-4">
	<div>
		<div class="text-xl font-semibold">
			Привет, Васяныч!
		</div>
		<div class="mt-1">
			+7 978-221-55-09			
		</div>
	</div>
	<div class="flex flex-col items-center">
		<div class="text-3xl select-none">
			&#x1F389;	
		</div>
		<div>
			<span class="text-2xl">
				96 
			</span>
			<span class="text-sm">
				бонусов
			</span>
		</div>
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
