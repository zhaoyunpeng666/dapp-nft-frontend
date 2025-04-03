import { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class ApiClient {
  public client: AxiosInstance;

  constructor(alient: AxiosInstance) {
    this.client = alient;
  }

  async post<TRequest, TResponse>(path: string, payload: TRequest, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await this.client.post(path, payload, config);
    return response.data;
  }

  async patch<TRequest, TResponse>(path: string, payload: TRequest, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await this.client.patch<TResponse>(path, payload, config);
    return response.data;
  }

  async delete<TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await this.client.delete<TResponse>(path, config);
    return response.data;
  }

  async put<TRequest, TResponse>(path: string, payload: TRequest): Promise<TResponse> {
    const response = await this.client.put<TResponse>(path, payload);
    return response.data;
  }

  async get<TResponse>(path: string, config?: AxiosRequestConfig): Promise<TResponse> {
    const response = await this.client.get<TResponse>(path, config);
    return response.data;
  }
}
