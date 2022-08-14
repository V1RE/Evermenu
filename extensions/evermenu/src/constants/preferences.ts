import { getPreferenceValues } from "@raycast/api";

type Prefs = {
  token: string;
};

export const { token } = getPreferenceValues<Prefs>();
