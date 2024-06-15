type errorObj = {
  message: string;
  row: number;
  column: number;
  severity: "warning" | "critical";
};

export type errors = errorObj[];
