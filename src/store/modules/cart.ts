// import { Store } from 'vuex';
import { Dispatch } from 'vuex';

export default {
	namespaced: true,
  state: {
	products: null,
  },
  mutations: {
  },
  actions: {
	async addProductToCart(
		{state, dispatch}: {state: Record<string, any>, dispatch: Dispatch},
		{product}: {product: Record<string,any>}
	) {
		const id = product.id
		console.log('is Authorized', await dispatch("isAuthorized", {}, {root: true}))
		console.log('product is', id)
		return state
	},
  },
}
