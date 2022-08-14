import { Api } from "./api";
import { ITimer } from "../types/api";

export const useCurrentTimer = () => {
  const { data, ...state } = Api.timers.current.useGet<ITimer>();

  const isActive = data?.status === "active";

  const title = isActive ? data?.task?.name : undefined;

  return { ...state, isActive, title };
};
