import { getPreferenceValues } from "@raycast/api";

type Prefs = {
  token: string;
};

export const { token: API_TOKEN } = getPreferenceValues<Prefs>();
