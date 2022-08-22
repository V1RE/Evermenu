import { CachedPromiseOptions, Response, useFetch as useFetchHook } from "@raycast/utils";
import { OptionsOfTextResponseBody } from "got";
import { RequestInit } from "undici";
import { API_BASE_URL, DEFAULT_HEADERS } from "../constants/api";
import { ApiClient } from "../services/client";

export const useFetch =
  (url: string) =>
  <T>(
    options?:
      | RequestInit & { parseResponse?: ((response: Response) => Promise<T>) | undefined } & Omit<
            CachedPromiseOptions<() => Promise<T>, undefined>,
            "abortable"
          >
  ) => {
    console.log(url);
    return useFetchHook<T>(url, { ...options, headers: { ...DEFAULT_HEADERS, ...options?.headers } });
  };

const hooks = {
  useFetch,
  usePost:
    (url: string) =>
    <T>(data: OptionsOfTextResponseBody | undefined) =>
      ApiClient.post(url, data).json<T>(),
};

export type Hooks = typeof hooks;
export type ApiHooks = { [K in keyof Hooks]: ReturnType<Hooks[K]> } & { [k: string]: ApiHooks };

export const generateHooks = (url: string): ApiHooks => {
  return new Proxy(hooks as unknown as ApiHooks, {
    get(obj, propKey) {
      if (!Reflect.has(obj, propKey)) {
        return generateHooks(`${url}/${propKey.toString()}`);
      }

      const key = propKey.toString() as keyof Hooks;

      const test = hooks[key](url);

      return test;
    },
  });
};
export const Api = generateHooks(API_BASE_URL);
