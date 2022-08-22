import { Icon, MenuBarExtra, open } from "@raycast/api";
import { useActiveTimer, useRecentTimers } from "./hooks/timers";

const Timers = () => {
  /* console.log(data); */

  return null;

  return (
    <MenuBarExtra isLoading={isLoading}>
      {(data ?? []).map((record) => (
        <MenuBarExtra.Item
          title={record.task?.name ?? ""}
          key={record.id}
          onAction={() => open(record.task?.url ?? "")}
        />
      ))}
    </MenuBarExtra>
  );
};

export default function Command() {
  const { isLoading, title, isActive } = useActiveTimer();

  const icon = isActive ? Icon.Pause : Icon.Stopwatch;

  return (
    <MenuBarExtra icon={icon} title={title} isLoading={isLoading}>
      {!!title && <MenuBarExtra.Item title={title} />}

      <Timers />
    </MenuBarExtra>
  );
}
