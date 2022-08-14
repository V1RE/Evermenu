import { AsyncStateFromFunctionReturningPromise } from "@raycast/utils/dist/types";
import { useApi } from "./api";

export type ClientBuilder = {
  [key: string]: ClientBuilder;
} & {
  useGet: <T>() => AsyncStateFromFunctionReturningPromise<() => Promise<T>> & {
    data: T | undefined;
    revalidate: () => void;
  };
};

export const generateHooks = (url?: string): ClientBuilder => {
  return new Proxy({} as unknown as ClientBuilder, {
    get(_, propKey: string) {
      if (propKey === "useGet") {
        return <T>() => useApi<T>("get", url as unknown as string);
      }

      return generateHooks(url ? `${url}/${propKey}` : propKey);
    },
  });
};
