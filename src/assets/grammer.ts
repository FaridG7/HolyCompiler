import { grammer } from "./types/grammer_types";

export const Grammer: grammer = [
  {
    variable: { value: "<prog>", type: "variable" },
    rightSide: [
      { value: "program", type: "terminal" },
      { value: "<id>", type: "variable" },
      { value: ";", type: "terminal" },
      { value: "var", type: "terminal" },
      { value: "<dec-list>", type: "variable" },
      { value: "begin", type: "terminal" },
      { value: "<stat-list>", type: "variable" },
      { value: "end", type: "terminal" },
    ],
  },
  {
    variable: { value: "<id>", type: "variable" },
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<dec-list>", type: "variable" },
    rightSide: [
      { value: "<dec>", type: "variable" },
      { value: ":", type: "terminal" },
      { value: "<type>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: { value: "<dec>", type: "variable" },
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "<moreDec>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreDec>", type: "variable" },
    rightSide: [{ value: "<dec>", type: "variable" }],
  },
  {
    variable: { value: "<moreDec>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<type>", type: "variable" },
    rightSide: [{ value: "integer", type: "terminal" }],
  },
  {
    variable: { value: "<stat-list>", type: "variable" },
    rightSide: [
      { value: "<stat>", type: "variable" },
      { value: "<moreStat>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreStat>", type: "variable" },
    rightSide: [{ value: "<stat-list>", type: "variable" }],
  },
  {
    variable: { value: "<moreStat>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<stat>", type: "variable" },
    rightSide: [{ value: "<write>", type: "variable" }],
  },
  {
    variable: { value: "<stat>", type: "variable" },
    rightSide: [{ value: "<assign>", type: "variable" }],
  },
  {
    variable: { value: "<write>", type: "variable" },
    rightSide: [
      { value: "show", type: "terminal" },
      { value: "(", type: "terminal" },
      { value: "<id>", type: "variable" },
      { value: ")", type: "terminal" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: { value: "<assign>", type: "variable" },
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "=", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: { value: "<expr>", type: "variable" },
    rightSide: [
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: [
      { value: "+", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: [
      { value: "-", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<term>", type: "variable" },
    rightSide: [{ value: "<factor>", type: "variable" }],
  },
  {
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: [
      { value: "*", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: [
      { value: "/", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<factor>", type: "variable" },
    rightSide: [{ value: "<id>", type: "variable" }],
  },
  {
    variable: { value: "<factor>", type: "variable" },
    rightSide: [{ value: "<number>", type: "variable" }],
  },
  {
    variable: { value: "<factor>", type: "variable" },
    rightSide: [
      { value: "(", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ")", type: "terminal" },
    ],
  },
  {
    variable: { value: "<number>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: { value: "<number>", type: "variable" },
    rightSide: [
      { value: "<sign>", type: "variable" },
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreDigits>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreDigits>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<sign>", type: "variable" },
    rightSide: [{ value: "+", type: "terminal" }],
  },
  {
    variable: { value: "<sign>", type: "variable" },
    rightSide: [{ value: "-", type: "terminal" }],
  },
  {
    variable: { value: "<sign>", type: "variable" },
    rightSide: { value: "lambda", type: "terminal" },
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "0", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "1", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "2", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "3", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "4", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "5", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "6", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "7", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "8", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "9", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "a", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "b", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "c", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "d", type: "terminal" }],
  },
  {
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "e", type: "terminal" }],
  },
];
