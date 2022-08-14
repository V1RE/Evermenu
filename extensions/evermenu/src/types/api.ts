export enum TimerStatus {
  Active = "active",
  Stopped = "stopped",
}

export enum TaskStatus {
  Open = "Open",
  Closed = "Closed",
}

export interface IRunningTimer {
  status: `${TimerStatus.Active}`;
  duration: number;
  today?: number;
  startedAt: string;
  userDate: string;
  comment?: string;
  task?: {
    id: string;
    name: string;
    projects: unknown[];
    section?: number;
    labels?: unknown[];
    position?: number;
    description?: string;
    dueAt?: string;
    status?: `${TaskStatus}`;
    time?: {
      total: number;
      users?: {
        [k: string]: number;
      };
      [k: string]: unknown;
    };
    estimate?: {
      total: number;
      type: "overall" | "users";
      users?: {
        [k: string]: number;
      };
      [k: string]: unknown;
    };
    attributes?: {
      [k: string]: string;
    };
    metrics?: {
      [k: string]: number;
    };
    unbillable?: boolean;
    [k: string]: unknown;
  };
  user: {
    id: number;
    name: string;
    headline?: string;
    avatarUrl?: string;
    role?: "admin" | "supervisor" | "member";
    status?: "active" | "invited" | "pending" | "removed";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}

export interface IStoppedTimer {
  status: `${TimerStatus.Stopped}`;
}

export type ITimer = (IStoppedTimer & Record<string, never>) | IRunningTimer;
