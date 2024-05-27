import { grammer } from "./types/grammer_types";

export const tempGrammer: grammer = [
  {
    variable: "<prog>",
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
    variable: "<id>",
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: "<alphaNum>",
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: "<alphaNum>",
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  { variable: "<alphaNum>", rightSide: { value: "lambda", type: "terminal" } },
  {
    variable: "<dec-list>",
    rightSide: [
      { value: "<dec>", type: "variable" },
      { value: ":", type: "terminal" },
      { value: "<type>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: "<dec>",
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "<moreDec>", type: "variable" },
    ],
  },
  { variable: "<moreDec>", rightSide: [{ value: "<dec>", type: "variable" }] },
  { variable: "<moreDec>", rightSide: { value: "lambda", type: "terminal" } },
  { variable: "<type>", rightSide: [{ value: "integer", type: "terminal" }] },
  {
    variable: "<stat-list>",
    rightSide: [
      { value: "<stat>", type: "variable" },
      { value: "<moreStat>", type: "variable" },
    ],
  },
  {
    variable: "<moreStat>",
    rightSide: [{ value: "<stat-list>", type: "variable" }],
  },
  { variable: "<moreStat>", rightSide: { value: "lambda", type: "terminal" } },
  { variable: "<stat>", rightSide: [{ value: "<write>", type: "variable" }] },
  { variable: "<stat>", rightSide: [{ value: "<assign>", type: "variable" }] },
  {
    variable: "<write>",
    rightSide: [
      { value: "show", type: "terminal" },
      { value: "(", type: "terminal" },
      { value: "<id>", type: "variable" },
      { value: ")", type: "terminal" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: "<assign>",
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "=", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    variable: "<expr>",
    rightSide: [
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: "<exprPrime>",
    rightSide: [
      { value: "+", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: "<exprPrime>",
    rightSide: [
      { value: "-", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  { variable: "<exprPrime>", rightSide: { value: "lambda", type: "terminal" } },
  { variable: "<term>", rightSide: [{ value: "<factor>", type: "variable" }] },
  {
    variable: "<termPrime>",
    rightSide: [
      { value: "*", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  {
    variable: "<termPrime>",
    rightSide: [
      { value: "/", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  { variable: "<termPrime>", rightSide: { value: "lambda", type: "terminal" } },
  { variable: "<factor>", rightSide: [{ value: "<id>", type: "variable" }] },
  {
    variable: "<factor>",
    rightSide: [{ value: "<number>", type: "variable" }],
  },
  {
    variable: "<factor>",
    rightSide: [
      { value: "(", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ")", type: "terminal" },
    ],
  },
  {
    variable: "<number>",
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: "<number>",
    rightSide: [
      { value: "<sign>", type: "variable" },
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: "<moreDigits>",
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: "<moreDigits>",
    rightSide: { value: "lambda", type: "terminal" },
  },
  { variable: "<sign>", rightSide: [{ value: "+", type: "terminal" }] },
  { variable: "<sign>", rightSide: [{ value: "-", type: "terminal" }] },
  { variable: "<sign>", rightSide: { value: "lambda", type: "terminal" } },
  { variable: "<digit>", rightSide: [{ value: "0", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "1", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "2", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "3", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "4", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "5", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "6", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "7", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "8", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "9", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "a", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "b", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "c", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "d", type: "terminal" }] },
  { variable: "<digit>", rightSide: [{ value: "e", type: "terminal" }] },
];
