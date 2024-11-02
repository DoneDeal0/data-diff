export enum ObjectStatus {
  ADDED = "added",
  EQUAL = "equal",
  DELETED = "deleted",
  UPDATED = "updated",
}

export enum Granularity {
  BASIC = "basic",
  DEEP = "deep",
}

export type ObjectData = Record<string, unknown> | undefined | null;

export type ObjectDiffOptions = {
  ignoreArrayOrder?: boolean;
  showOnly?: {
    statuses: `${ObjectStatus}`[];
    granularity?: `${Granularity}`;
  };
};

export const DEFAULT_OBJECT_DIFF_OPTIONS = {
  ignoreArrayOrder: false,
  showOnly: { statuses: [], granularity: Granularity.BASIC },
};

/** recursive diff in case of subproperties */
export type Diff = {
  property: string;
  previousValue: unknown;
  currentValue: unknown;
  status: `${ObjectStatus}`;
  diff?: Diff[];
};

export type ObjectDiff = {
  type: "object";
  status: `${ObjectStatus}`;
  diff: Diff[];
};
