import { terminal } from "./grammer_types";

export type tokenType =
  | "keyWord"
  | "number"
  | "operator"
  | "identifier"
  | "literal"
  | "delimiters"
  | "invalid";

export type token = {
  rowNumber: number;
  columnNumber: number;
  blockNumber: number;
  outerBlockNumber: number | undefined;
  type: tokenType;
  value: terminal;
};

export type tokenTable = token[];
