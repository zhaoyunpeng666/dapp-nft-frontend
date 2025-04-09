import ApiClient from "../network/ApiClient";
import { GetAuthNonceResponse, AuthVerifyData, AuthVerifyResponse } from "./types";

export default class LoginService {
    private apiClient: ApiClient;

    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }
    
    // 获取登录签名信息
    async getAuthNonce(address: string): Promise<GetAuthNonceResponse> {
        return await this.apiClient.get(`/user/${address}/login-message`);
    }

    // 登录-接口返回token
    async postUserLogin(data: AuthVerifyData): Promise<AuthVerifyResponse> {
        return await this.apiClient.post<AuthVerifyData, AuthVerifyResponse>(`/user/login`, data);
    }

    // 获取用户签名状态
    async getUserAuthStatus(address: string) {
        return await this.apiClient.get(`/user/${address}/sig-status`);
    }

    // 上传文件（创建NFT）
    async uploadFile(file: File) {
        const formData = new FormData();
        formData.append('file', file);
        return await this.apiClient.post(`/uploadFile/creatNFT`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

