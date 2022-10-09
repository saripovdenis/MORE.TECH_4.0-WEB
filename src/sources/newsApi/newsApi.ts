import axios, { AxiosInstance } from "axios";
import { newsApiUrls } from "@sources/urls";
import type {
  TrendsData,
  DigestData,
  RoleData,
  Roles,
  CreateRoleData,
  InsitesData,
} from "@sources/newsApi/types";

import { digestData } from "./mock/digest";
import { trendsData } from "./mock/trends";

const delay = <T>(ms: number, data: T) =>
  new Promise<T>((res) => setTimeout(res, ms, data as T));

class NewsApi {
  private readonly baseUrl: string;
  private readonly fetchInstance: AxiosInstance;

  private async getRequest<T>(url: string): Promise<T> {
    const data = await this.fetchInstance.get<T>(url);
    return data.data;
  }

  private async postRequest<T>(
    url: string,
    postData: any,
    signal?: AbortSignal
  ): Promise<T> {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    signal?.addEventListener("abort", () => {
      source.cancel("Query was cancelled by React Query");
    });
    const data = await this.fetchInstance.post<T>(url, postData, {
      cancelToken: source.token,
    });
    return data.data;
  }

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.fetchInstance = axios.create({
      baseURL: baseUrl,
      timeout: 100000,
    });
  }

  public getDigest(
    role: Roles,
    signal?: AbortSignal,
    isMock = false
  ): Promise<DigestData> {
    return isMock
      ? delay<DigestData>(2000, digestData)
      : this.postRequest<TrendsData>(
          newsApiUrls.digest,
          {
            role,
          } as RoleData,
          signal
        );
  }

  public getTrends(
    role: Roles,
    signal?: AbortSignal,
    isMock = false
  ): Promise<TrendsData> {
    return isMock
      ? delay<TrendsData>(5000, trendsData)
      : this.postRequest<TrendsData>(
          newsApiUrls.trends,
          { role } as RoleData,
          signal
        );
  }

  public createRole(title: string, description: string): Promise<undefined> {
    return this.postRequest<undefined>(newsApiUrls.role, {
      title,
      description,
    } as CreateRoleData);
  }

  public getInsites(): Promise<InsitesData> {
    return this.postRequest<InsitesData>(newsApiUrls.insites, {}, undefined);
  }
}

export const newsApi = new NewsApi(newsApiUrls.baseUrl);
