export enum TimerStatus {
  Active = "active",
  Stopped = "stopped",
}

export enum TaskStatus {
  Open = "Open",
  Closed = "Closed",
}

export interface IUser {
  id: number;
  name: string;
  headline?: string;
  avatarUrl?: string;
  role?: "admin" | "supervisor" | "member";
  status?: "active" | "invited" | "pending" | "removed";
  [k: string]: unknown;
}

export interface ITask {
  id: string;
  name: string;
  projects: string[];
  section?: number;
  labels?: unknown[];
  position?: number;
  description?: string;
  dueAt?: string;
  status?: TaskStatus;
  time?: {
    total: number;
    users?: {
      [k: string]: number;
    };
  };
  estimate?: {
    total: number;
    type: "overall" | "users";
    users?: {
      [k: string]: number;
    };
  };
  attributes?: {
    [k: string]: string;
  };
  metrics?: {
    [k: string]: number;
  };
  unbillable?: boolean;
}

export interface IRunningTimer {
  status: TimerStatus.Active;
  duration: number;
  today?: number;
  startedAt: string;
  userDate: string;
  comment?: string;
  task?: ITask;
  user: IUser;
}

export interface IStoppedTimer {
  status: TimerStatus.Stopped;
}

export type ITimer = (IStoppedTimer & Record<string, never>) | IRunningTimer;
