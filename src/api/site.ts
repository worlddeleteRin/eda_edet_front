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
}

export const SiteDataService = new SiteDataServiceClass()
