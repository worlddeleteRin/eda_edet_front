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
	async getMainSliders(): Promise<any> {
		const response: Record<string,any> = await apiClient.get(
		"/site/main-sliders", 
		).catch(() => {
			return response 
		});
		return response 	
	}
	async sendRequestCall(request_call_info: Record<string,any>): Promise<any> {
		const response: Record<string,any> = await apiClient.post(
		"/site/request-call", 
			{ ...request_call_info },
		).catch(() => {
			return response 
		});
		return response 	
	}
}

export const SiteDataService = new SiteDataServiceClass()
