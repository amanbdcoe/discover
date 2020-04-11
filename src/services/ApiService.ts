import * as axios from "axios";
import { AxiosInstance } from "axios";

class ApiService {

  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.default.create();
  }

  static getInstance(): ApiService {
    return new ApiService();
  }

  get<T>(uri: string, queryParams?: { [key: string]: any }, responseType?: any): Promise<T> {
    return this.axiosInstance.get(this._fullyQualifiedUri(uri), {
      params: queryParams,
      headers: this._getHttpHeaders(),
      responseType: responseType || "json"
    }).then(response => response.data)
      .catch(err => {
        if (err.response && err.response.data) {
          throw err.response.data;
        } else {
          throw err;
        }
      });
  }

  private _getHttpHeaders(additionalHeaders?: {[key: string]: string}) {
    return {
      "Content-Type": "application/json",
      "Accept": "application/json",
      ...additionalHeaders
    };
  }

  private _fullyQualifiedUri(uri: string) {
    return `${process.env.REACT_APP_BACKEND_URL}${uri}`;
  }
}

export const apiService = ApiService.getInstance();
