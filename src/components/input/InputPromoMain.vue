<template>
<div class="flex items-center h-10 max-w-[400px] mx-auto sm:mx-1">
	<input
		v-model="promo_value"
		:placeholder="placeholderText"
		class="w-full h-full px-4 border-2 border-r-0 border-gray-300 rounded-l-full outline-none"
	/>
	<div 
		@click="submitPromoClick"
		class="flex items-center h-full px-4 text-white rounded-r-full select-none bg-default cursor-pointer"
	>
		{{ buttonText }}
	</div>

</div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
	name: "InputPromoMain",
	emits: ["submit-promo"],
	props: {
		promoValue: {
			type: String,
			default: null,
		},
		placeholderText: {
			type: String,
			default: "Введите промокод",
		},
		buttonText: {
			type: String,
			default: "Применить",
		}
	},
	setup (props, {emit}) {
		const promo_value = ref("")
		// functions
		const submitPromoClick = () => emit('submit-promo', promo_value.value) 
		return {
			promo_value,
			submitPromoClick,
		}
	}
});

</script>
