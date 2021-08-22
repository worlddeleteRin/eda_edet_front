<template>
<div>

	<!-- main page slider -->
	<div class="my-8 text-center">
		slider will be here
	</div>

	<!-- eof main page slider -->

	products are
	{{ products }}



	
	<!-- products list -->
	<div v-if="products">
		<div class="px-4 mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-2 md:gap-y-12 grid-cols-1 max-w-screen-lg">
		<product-card
			v-for="product in products"
			:product="product"
			:key="product"
			:isInCart="true"
		/>
		</div>
	</div>
	<div v-else>
			Загрузка товара...
	</div>
	<!-- products list -->



	<router-view></router-view>

</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from 'vuex';
// local components
import ProductCard from '@/components/product/ProductCard.vue';

export default defineComponent({
  name: "MainPage",
  props: {
  },
  components: {
	ProductCard,
  },
	setup () {
		const store = useStore()
		// computed
		// products
		const products = computed(() => store.state.catalogue.products);
		// functions
		onMounted(() => {
			// get products from api
			store.dispatch("catalogue/getProductsAPI")
		});
		return {
			products,
		}
	}
});
</script>

