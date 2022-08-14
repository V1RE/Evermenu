import { ITimer } from "../types/api";
import { useApi } from "./api";

export const useCurrentTimer = () => {
  const { data, ...state } = useApi<ITimer>("get", "timers/current");

  const isActive = data?.status === "active";

  const title = isActive ? data?.task?.name : undefined;

  return { ...state, isActive, title };
};
