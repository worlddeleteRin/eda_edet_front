import { Commit } from 'vuex';


export default {
	namespaced: true,
  state: {
	categories: [],
	products: [],
  },
  mutations: {
	setCategories(state: Record<string, any>, categories: Array<Record<string,any>>) {
		state.categories = categories;
	},
	setProducts(state: Record<string, any>, products: Array<Record<string,any>>) {
		state.products = products;
	},
  },
  actions: {
	getCategoriesAPI({commit}: {commit: Commit}) {
		let categories: Array<Record<string,any>> = []	
		commit('setCategories', categories)
	},
	getProductsAPI({commit}: {commit: Commit}) {
		let products: Array<Record<string,any>> = []	
		commit('setProducts', products)
	},
  },
}
