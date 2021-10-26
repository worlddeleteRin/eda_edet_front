<template>

<div v-if="categories"
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-1"
>
	<a :href="'/#' + category.slug"
		v-for="category in categories"
		:key="category.id"
		class="py-2 px-2 shadow-lg rounded-lg"
	>
		<div class="flex items-center justify-center h-full min-h-[80px] max-h-[90px] overflow-hidden">	
			<img :src="category?.imgsrc[0]"
				class="w-[80px] w-full h-full object-contain"
			/>
			<div class="flex flex-1 justify-center font-semibold">
				{{ category.name }}
			</div>
		</div>
	</a>
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
		const goToCategory = (category_slug: string)  => {
			return
//			var c = document.querySelector("#" + category_slug)
//			c?.scrollIntoView()
		}
		return {
			goToCategory
		}
	}
});
</script>
