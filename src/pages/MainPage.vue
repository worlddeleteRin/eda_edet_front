<template>
<div>
	<product-card
	/>
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

