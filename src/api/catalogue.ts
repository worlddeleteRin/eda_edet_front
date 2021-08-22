import apiClient from "./api_client";

export class ProductsDataService {		
	async getAll(): Promise<any> {
		const response: Record<string,any> = await apiClient.get("/products/");
		return response.data.products;
	}
}


export const ProductsDataSevice = new ProductsDataService()
/* 
export async function APIgetProducts () {
	let products = []
	await axios.get(
		api_url+'/products',
	).then((response) => {
		products = response.data.products
	}).catch((error) => {
		console.log('error APIgetProducts', error)
	})
	return products 
}
*/
