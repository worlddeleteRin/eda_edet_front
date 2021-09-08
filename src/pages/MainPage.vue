<template> <div>

	<!-- main page slider -->
	<div class="my-8 text-center">
		slider will be here
	</div>

	<!-- eof main page slider -->

	<!-- 
	<div class="text-3xl p-9">
		cart is {{ cart }}
	</div>
	-->
	
	<!-- products list -->
	<div v-if="products">
		<div class="px-4 mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-2 md:gap-y-12 grid-cols-1 max-w-screen-lg">
		<product-card
			v-for="product in products"
			:product="product"
			:key="product"
			:cartItem="getProductCartItem(product.id)"
			@add-item-quantity="addProductQuantity"
			@remove-item-quantity="removeProductQuantity"
			@add-to-cart="addProductToCart"
			@remove-from-cart="removeProductFromCart"
		/>
		</div>
	</div>
	<MainLoadingContainer 
		v-else
		:title="'Загрузка товаров...'"
	/>
	<!-- products list -->



	<router-view></router-view>

</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from 'vuex';

import { createToast } from 'mosha-vue-toastify';
// local components
import ProductCard from '@/components/product/ProductCard.vue';
import MainLoadingContainer from '@/components/loaders/MainLoadingContainer.vue';

export default defineComponent({
  name: "MainPage",
  props: {
  },
  components: {
	ProductCard,
	MainLoadingContainer
  },
	setup () {
		const store = useStore()
		// computed
		// cart
		const cart = computed(() => store.state.cart.cart);
		// products
		const products = computed(() => store.state.catalogue.products);
		// functions
		const addProductToCart = async (product: Record<string,any>) => {
			const is_added = await store.dispatch("cart/addLineItemAPI", {product: product})
			if (is_added) { return productAddedToast("Добавлено:", product.name); }
			return errorToast("Ошибка в процессе добавления товара");
		}
		const removeProductFromCart = async (line_item: Record<string,any>) => {
			const is_removed = await store.dispatch("cart/removeLineItemAPI", {line_item: line_item})
			if (is_removed) { return productRemovedToast("Удалено:", line_item.product.name); }
			return errorToast("Ошибка в процессе добавления товара");
		}
		const addProductQuantity = async(line_item: Record<string,any>) => {
			const is_added = await store.dispatch("cart/addLineItemQuantityAPI", {line_item: line_item})
			if (is_added) { return true;}
			//{ return productAddedToast("Добавлено:", line_item.product.name); }
			return errorToast("Ошибка в процессе добавления товара");
		}
		const removeProductQuantity = async(line_item: Record<string,any>) => {
			const is_removed = await store.dispatch("cart/removeLineItemQuantityAPI", {line_item: line_item})
			if (is_removed) { return true;}
			//{ return productRemovedToast("Удалено:", line_item.product.name); }
			return errorToast("Ошибка в процессе добавления товара");
		}
		const getProductCartItem = (product_id: string) => {
			const cartItem = store.getters["cart/getProductCartItem"]({product_id: product_id})
			console.log('cart item is', cartItem)
			if (cartItem) {return cartItem}
			return null
		};
		onMounted(() => {
			// get products from api
			store.dispatch("catalogue/getProductsAPI")
		});


		// toast 
		const inputErrorToast = (title: string) => {
			createToast(
				title, {
					'type': 'danger',
					'showIcon': true,
					'hideProgressBar': true,	
				}
			);
		};
		const inputSuccessToast = (title: string, description: string) => {
			createToast(
				{title: title, description: description,},
				{
					'type': 'success',
					'showIcon': true,
					'hideProgressBar': true,
					'toastBackgroundColor': 'black',
				}
			);
		};
		var errorToast = (title: string) => inputErrorToast(title)
		var productAddedToast =  (title: string, description: string) => inputSuccessToast(title, description)
		var productRemovedToast = (title: string, description: string) => inputSuccessToast(title, description)

		return {
			cart,
			products,
			// functions
			addProductToCart,
			removeProductFromCart,
			addProductQuantity,
			removeProductQuantity,
			getProductCartItem,
		}
	}
});
</script>

