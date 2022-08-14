import { useCachedPromise } from "@raycast/utils";
import { useRef } from "react";
import { ApiClient } from "../services/client";

type Methods = "get" | "post" | "put" | "delete" | "patch";

export const useApi = <T>(method: Methods, url: string) => {
  const abortable = useRef<AbortController>();

  return useCachedPromise(
    async (path: string) => ApiClient[method](path, { signal: abortable.current?.signal }).json<T>(),
    [url],
    {
      abortable,
    }
  );
};

export const Api = new Proxy({}, {});
