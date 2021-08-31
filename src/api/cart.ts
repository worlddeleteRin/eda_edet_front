import apiClient from "./api_client";

class CartDataServiceClass {
	async getCart(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"carts/", 
		).catch(() => {
			return response 
		});
		return response 
	}
	async createCart(cart_items: Array<Record<string,any>>): Promise<any> {
		const response: Record<string,any> = await apiClient.post(
		"carts/", 
		{
			"line_items": cart_items
		},
		).catch(() => {
			return response 
		});
		return response 
	}
	async addCartItems(cart_id: string, cart_items: Array<Record<string,any>>): Promise<any> {
		const response: Record<string,any> = await apiClient.post(
		"carts/" + cart_id + "/items/",
	//	`"carts/${cart_id}/items"`, 
		{
			"line_items": cart_items
		},
		).catch(() => {
			return response 
		});
		return response 	
	}
	async removeCartItem(cart_id: string, item_id: string): Promise<any> {
		const response: Record<string,any> = await apiClient.delete(
		"carts/" + cart_id + "/items/" + item_id, 
		).catch(() => {
			return response 
		});
		return response 	
	}
	async updateCartItem(cart_id: string, item_id: string, new_item: Record<string,any>): Promise<any> {
		const response: Record<string,any> = await apiClient.patch(
		"carts/" + cart_id + "/items/" + item_id, 
		{
			"line_item": new_item
		}
		).catch(() => {
			return response 
		});
		return response 	
	}
}

export const CartDataService = new CartDataServiceClass()
