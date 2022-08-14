export interface ActiveTimer {
  status: "active" | "stopped";
  duration?: number;
  today?: number;
  startedAt?: string;
  userDate?: string;
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
    status?: "open" | "closed";
    time?: {
      total: number;
      users?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "(?:)".
         */
        [k: string]: number;
      };
      [k: string]: unknown;
    };
    estimate?: {
      total: number;
      type: "overall" | "users";
      users?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "(?:)".
         */
        [k: string]: number;
      };
      [k: string]: unknown;
    };
    attributes?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "(?:)".
       */
      [k: string]: string;
    };
    metrics?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "(?:)".
       */
      [k: string]: number;
    };
    unbillable?: boolean;
    [k: string]: unknown;
  };
  user?: {
    id: number;
    name: string;
    headline?: string;
    avatarUrl?: string;
    role: "admin" | "supervisor" | "member";
    status: "active" | "invited" | "pending" | "removed";
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
