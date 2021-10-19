import apiClient from "./api_client";

class SiteDataServiceClass {
	async getSessionId(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"session", 
		).catch(() => {
			return response 
		});
		return response 
	}
	async getStocks(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"/site/stocks", 
		).catch(() => {
			return response 
		});
		return response 
	}
	async getCommonInfo(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"/site/common-info", 
		).catch(() => {
			return response 
		});
		return response 	
	}
}

export const SiteDataService = new SiteDataServiceClass()
