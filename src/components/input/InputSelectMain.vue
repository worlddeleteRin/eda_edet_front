<template>

<div class="flex items-center justify-between py-1 px-1 bg-[#E2E2E9] rounded-full">
        <div 
		v-for="select_value in selectValues"
		:key="select_value.name"	
		@click="setActiveSelect(select_value.name)"
		:class="['w-1/2 py-2 text-center cursor-pointer select-none',
				isActive(select_value.name) ? 'bg-white shadow-lg rounded-full': '']">
			{{ select_value.name_display }} 
		</div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
	name: "InputSelectMain",
	props: {
		selectValues: {
			type: Array,
			default: null,
		},
		activeValue: {
			type: String,
			default: null
		},
	},
	emits: ['select-value'],
	setup(props, {emit}) {

		var isActive = (select_value) => {
			if (props.activeValue == select_value) {
				return true
			}
			return false
		}
		var setActiveSelect = (select_value) => {
			emit('select-value', select_value)
		}
		return {
			// functions
			isActive,
			setActiveSelect,
		}
	}
});
</script>
