import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'

// https://yq.aliyun.com/articles/646349

export default function axios(config: AxiosRequestConfig): void {
  // processConfig(config);
  let { url, params } = config
  config.url = buildURL(url, params)
  xhr(config)
}

/*function processConfig(config:AxiosRequestConfig) :void {
  config.url = transformUrl(config);
}

function transformUrl(config:AxiosRequestConfig) :string {
  const{url, params} = config;
  return buildURL(url,params);
}*/
