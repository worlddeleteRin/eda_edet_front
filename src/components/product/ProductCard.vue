<template>
<div>
	product card is here	
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
	name: "ProductCard",
	props: {
	},
	emits: [''],
	components: {
		Icon,
	},
	setup (props, { emit }) {
		return {
		}
	}
});
</script>
