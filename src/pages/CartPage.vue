<template>
<!-- checking, if cart is not null and line_items length not equals 0 -->
<div 
v-if="cart && cart.line_items.length != 0"
class="bg-gray-100">
<div class="flex flex-col py-3 mx-auto md:items-start md:flex-row md:px-4 max-w-screen-xl">
	<cart-products
		:lineItems="cart.line_items"
		@add-quantity="addProductQuantity"
		@remove-quantity="removeProductQuantity"
		@remove-from-cart="removeProductFromCart"
		class="flex flex-col items-center justify-center w-11/12 mx-auto md:w-7/12"
	/>


	<cart-summary
		:cart="cart"
		@go-checkout="goCheckoutPage"
		class="w-11/12 mx-auto bg-white md:ml-5 md:w-5/12"
	/>


</div>
</div>


<!-- cart empty block -->
<div 
v-else
class="">
	Корзина пуста. Добавьте в нее что-нибудь
</div>
<!-- eof cart empty block -->

cart is {{ cart }}


</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

import { createToast } from 'mosha-vue-toastify';

// local components
import CartProducts from '@/components/cart/CartProducts.vue';
import CartSummary from '@/components/cart/CartSummary.vue';
export default defineComponent({
	name: "CartPage",
	components: {
		CartProducts,
		CartSummary,
	},
	setup () {
		const store = useStore()
		const router = useRouter()
		// computed
		const user_authorized = computed(() => store.state.user.user_authorized)
		const cart = computed(() => store.state.cart.cart)

		// functions
		const goCheckoutPage = () => {
			// go to checkout page, if use is already authorized
			if (user_authorized.value) {
				router.push("/checkout")
			} else {
				// open authorization form, if user is not authorized yet
				store.commit('modals/setUserAuthorizeOpen', {is_open: true, after_authorized_route_to: "/checkout"})
			}
		}
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
		//	{ return productRemovedToast("Удалено:", line_item.product.name); }
			return errorToast("Ошибка в процессе добавления товара");
		}

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
			// functions
			goCheckoutPage,
			addProductToCart,
			removeProductFromCart,
			addProductQuantity,
			removeProductQuantity,
		}
	}
});
</script>

