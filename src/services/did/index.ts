import ApiClient from "../network/ApiClient";
import { UserInfoDataResponse } from "./types";

export default class LoginService {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async getUserInfo(address: string): Promise<UserInfoDataResponse> {
        return await this.apiClient.get<UserInfoDataResponse>(`/did/${address}`);
      }
}

