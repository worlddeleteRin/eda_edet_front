<template>

<div v-if="categories"
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-1"
>
	<router-link
		:to="'/#' + category.slug"
		v-for="category in categories"
		:key="category.id"
		class="py-2 px-2 shadow-lg rounded-lg"
	>
		<div class="flex items-center">	
			<img :src="'http://placehold.it/300x300'"
				class="w-[80px]"
			/>
			<div class="flex flex-1 justify-center font-semibold">
				{{ category.name }}
			</div>
		</div>
	</router-link>
</div>


<!--
<component :is="component" />
-->

</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: "CategoriesList",
	props: {
		categories: {
			type: Array,
			default: null,
		}
	},
	setup () {
		return {
		}
	}
});
</script>
