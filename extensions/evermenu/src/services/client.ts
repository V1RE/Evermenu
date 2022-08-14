import got from "got";
import { token } from "../constants/preferences";

export const ApiClient = got.extend({
  prefixUrl: "https://api.everhour.com/",
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": token,
  },
});
