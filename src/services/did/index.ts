import ApiClient from "../network/ApiClient";
import { AuthVerifyRequest, AuthVerifyResponse, GetAuthNonceResponse } from "./types";

export default class LoginService {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }
    
    // 获取登录签名信息
    async getAuthNonce(address: string) {
        return await this.apiClient.get(`/user/${address}/login-message}`);
    }

    // 登录
    async postUserLogin(data: AuthVerifyRequest): Promise<AuthVerifyResponse> {
        return await this.apiClient.post(`/user/login`, data);
    }

    // 获取用户签名状态
    async getUserAuthStatus(address: string) {
        return await this.apiClient.get(`/user/${address}/sig-status`);
    }
}

