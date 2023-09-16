import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IApiClient } from './types';

export class AxiosApiClient implements IApiClient {
  async request<Data, RawResponseData, ExpectedResponseData>(
    config: AxiosRequestConfig<Data>,
    transformFunc: (
      response: AxiosResponse<RawResponseData, Data>,
    ) => ExpectedResponseData,
  ): Promise<ExpectedResponseData> {
    const response = await axios.request(config);

    return transformFunc(response);
  }
}
