import apiClient from "./api_client";

class UserDataServiceClass {		
	async getUserMe(user_access_token: string): Promise<any> {
		const response_info: Record<string,any> = {
			"token_valid": false,
			"user_data": null,
			"error_msg": null
		}
		const response: Record<string,any> = await apiClient.get("users/me", {
			headers: {
				"Authorization": `Bearer ${user_access_token}`
			}
		}).catch((error) => {
			response_info.error_msg = error.response.statusText
			return response_info
		});
		if (response.status == 200) {
			response_info.token_valid = true
			response_info.user_data = response.data
		}
		return response_info
	}
	async checkExistVerifiedUser(username: string): Promise<any> {
		const response: Record<string,any> = await apiClient.post("users/exist-verified", {
			"username": username
		}).catch(() => {
			return {}
		});
		return response
	}
}

export const UserDataService = new UserDataServiceClass()
