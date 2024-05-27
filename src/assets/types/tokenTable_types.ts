import { terminal } from "./grammer_types";

type idType =
  | "kayWord"
  | "number"
  | "operator"
  | "identifier"
  | "literal"
  | "delimiters";

export type token = {
  rowNumber: number;
  columnNumber: number;
  blockNumber: number;
  outerBlockNumber: number;
  idType: idType;
  value: terminal;
};

export type tokenTable = token[];
