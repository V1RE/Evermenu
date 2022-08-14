import { Api } from "./api";

export const useCurrentUser = () => {
  return Api.users.me.useGet<{ id: number }>();
};
