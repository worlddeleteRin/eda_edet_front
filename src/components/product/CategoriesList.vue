<template>

<div v-if="categories"
	class=""
>
	<router-link
		:to="'/#' + category.slug"
		v-for="category in categories"
		:key="category.id"
	>
		
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
