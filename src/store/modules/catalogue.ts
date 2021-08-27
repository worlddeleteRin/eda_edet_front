import { Commit } from 'vuex';
import {
	ProductsDataSevice
} from '@/api/catalogue';


export default {
	namespaced: true,
  state: {
	categories: [],
	products: null,
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
		const categories: Array<Record<string,any>> = []	
		commit('setCategories', categories)
	},
	async getProductsAPI({commit}: {commit: Commit}) {
		// get all products	
		const products: Array<Record<string,any>> = await ProductsDataSevice.getAll()	
		commit('setProducts', products)
	},
  },
}