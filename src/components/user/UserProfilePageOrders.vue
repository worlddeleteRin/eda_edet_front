<template>
<div class="mt-5">

	<div
	v-for="order in 10"
	:key="order"
	>
		<UserProfileOrderCard
		:userOrderStatusColors="user_order_status_colors"
		class="mx-2 my-2"
		/>
	</div>

</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import UserProfileOrderCard from '@/components/user/UserProfileOrderCard.vue';

export default defineComponent({
	name: "UserProfilePageOrders",
	components: {
		UserProfileOrderCard,
	},
	setup(props, {emit}) {
		const store = useStore()
		// computed
		const user_orders = computed(() => store.state.user.user_orders)
		const user_order_status_colors = computed(() => store.state.user.user_order_status_colors)
		// functions
		onBeforeMount(async () => {
			// emit parent to get user orders from api
			await store.dispatch('loadUserOrdersAPI');
		});
		return {
			// computed
			user_orders,
			user_order_status_colors,
		}
	}
});
</script>
