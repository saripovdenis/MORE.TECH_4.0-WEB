import axios, { AxiosInstance } from "axios";
import { newsApiUrls } from "@sources/urls";
import type {
  TrendsData,
  DigestData,
  RoleData,
  Roles,
} from "@sources/newsApi/types";

import { digestData } from "./mock/digest";
import { trendsData } from "./mock/trends";

const delay = <T>(ms: number, data: T) =>
  new Promise<T>((res) => setTimeout(res, ms, data as T));

class NewsApi {
  private readonly baseUrl: string;
  private readonly fetchInstance: AxiosInstance;

  private async postRequest<T>(
    url: string,
    postData: RoleData,
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
      timeout: 10000,
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
          },
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
      : this.postRequest<TrendsData>(newsApiUrls.trends, { role }, signal);
  }
}

export const newsApi = new NewsApi(newsApiUrls.baseUrl);
