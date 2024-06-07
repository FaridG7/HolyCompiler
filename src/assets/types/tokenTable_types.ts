export type idType =
  | "keyWord" // program var begin end integer show
  | "number" // 1 2 3 4 5 6 6 7 8 9 0
  | "operator" // = + - * /
  | "identifier" // a b c d e
  | "literal" // " , ;  < >
  | "delimiters"; // ")" "("

export type token = {
  rowNumber: number;
  columnNumber: number;
  blockNumber: number;
  outerBlockNumber: number;
  idType: idType;
  value: string;
};

export type tokenTable = token[];
