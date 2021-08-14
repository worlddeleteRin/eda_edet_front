<template>
<div>
	main page is here

	<div class="grid grid-cols-3">

	<product-card />
	<product-card
		:isInCart="true"
	/>

	</div>

	<router-view></router-view>

</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ProductCard from '@/components/product/ProductCard.vue';

export default defineComponent({
  name: "MainPage",
  props: {
  },
  components: {
	ProductCard,
  },
	setup () {
		return {
		}
	}
});
</script>

