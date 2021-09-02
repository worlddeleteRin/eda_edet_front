<template>
<div>
	<input
		:placeholder="placeholderText"
	/>
	<div>
		{{ buttonText }}
	</div>

</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: "InputPromoMain",
	emits: ["handle-input"],
	props: {
		placeholderText: {
			type: String,
			default: "Введите поле",
		},
		buttonText: {
			type: String,
			default: "Применить",
		}
	},
	setup (props, {emit}) {
		// functions
		const handleInput = () => emit('handle-input')

		return {
			handleInput,
		}
	}
});

</script>
