import { Api } from "./api";
import { ITimer } from "../types/api";
import { useUserId } from "./me";
import { useFetch } from "@raycast/utils";
import { API_BASE_URL, DEFAULT_HEADERS } from "../constants/api";

export const useActiveTimer = () => {
  const { data, ...state } = Api.timers.current.useFetch<ITimer>();

  const isActive = data?.status === "active";

  const title = isActive ? data?.task?.name : undefined;

  return { ...state, isActive, title };
};

export type ITimerRecords = ITimeRecord[];

export interface ITimeRecord {
  id: number;
  date: string;
  createdAt: string;
  user: number;
  time: number;
  task?: Task;
  history: History[];
  lockReasons: [];
  isLocked: boolean;
}

export interface Task {
  id: string;
  name: string;
  type: string;
  status: string;
  url: string;
  iteration: string;
  projects: string[];
  createdAt: string;
  labels: [];
  time: Time;
  completed: boolean;
  assignees: Assignee[];
  estimate?: Estimate;
  parentName?: string;
  parentId?: string;
  dueOn?: string;
  completedAt?: string;
}

export interface Time {
  total: number;
  users: Users;
  timerTime: number;
}

export interface Users {
  [key: string]: number;
}

export interface Assignee {
  accountId: string;
  accountName: string;
  userId: number;
}

export interface Estimate {
  type: string;
  total: number;
}

export interface History {
  id: number;
  createdAt: string;
  time: number;
  action: string;
  previousTime: number;
  createdBy: number;
  warning: unknown;
}

export const useRecentTimers = () => {
  const { id } = useUserId();

  return useFetch(`${API_BASE_URL}/users/${id}/time?limit=10`, {
    headers: {
      ...DEFAULT_HEADERS,
    },
    keepPreviousData: true,
    execute: !!id,
  });
};
