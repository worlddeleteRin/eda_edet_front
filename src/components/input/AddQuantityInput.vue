<template>
<div class="flex min-w-[120px] h-[40px] max-w-max bg-defaultGray text-defaultGrayText rounded-full
items-center">
	<div 
	@click="removeQuantityClick"
	class="flex items-center justify-center w-4/12 h-full cursor-pointer select-none hover:text-gray-900"
	>
		<Icon
		icon="bx:bx-minus"
		width="20"
		/>
	</div>
	<div 
	class="flex justify-center w-4/12">
		{{ productQuantity }}
	</div>
	<div 
	@click="addQuantityClick"
	class="flex items-center justify-center w-4/12 h-full cursor-pointer select-none hover:text-gray-900">
		<Icon
		icon="bx:bx-plus"
		width="20"
		/>
	</div>
</div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
	name: "AddQuantityInput",
	components: {
		Icon,
	},
	props: {
		productQuantity: {
			type: Number,
			required: true,
			default: 1,
		},
	},
	emits: ['add-quantity', 'remove-quantity'],
	setup (props, { emit }) {
		// functions
		var removeQuantityClick = () => emit('remove-quantity')
		var addQuantityClick = () => emit('add-quantity')
		return {
			// functions
			removeQuantityClick,
			addQuantityClick,
		}
	}
}
</script>
