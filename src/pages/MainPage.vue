<template>
<div>

	<!-- products list -->
	<div class="px-4 mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-2 md:gap-y-12 grid-cols-1 max-w-screen-lg">
	<product-card
		v-for="product in 150"
		:key="product"
		:isInCart="true"
	/>
	<!-- products list -->

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

