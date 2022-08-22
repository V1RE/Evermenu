import { IUser } from "../types/api";
import { Api } from "./api";

export const useUser = () => {
  return Api.users.me.useFetch<IUser>();
};

export const useUserId = () => {
  const { data, ...rest } = useUser();

  return { id: data?.id, ...rest };
};
