import { Icon, MenuBarExtra } from "@raycast/api";
import { useCurrentTimer } from "./hooks/timers";

export default function Command() {
  const { isLoading, title, isActive } = useCurrentTimer();

  const icon = isActive ? Icon.Pause : Icon.Stopwatch;

  return (
    <MenuBarExtra icon={icon} title={title} isLoading={isLoading}>
      <></>
      {!!title && <MenuBarExtra.Item title={title} />}
    </MenuBarExtra>
  );
}
