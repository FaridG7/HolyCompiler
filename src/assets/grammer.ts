import { grammer } from "./types/grammer_types";

export const BNFGrammer: grammer = [
  {
    //1
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
    //2
    variable: { value: "<id>", type: "variable" },
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    //3
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: [
      { value: "<letter>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    //4
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<alphaNum>", type: "variable" },
    ],
  },
  {
    variable: { value: "<alphaNum>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //5
    variable: { value: "<dec-list>", type: "variable" },
    rightSide: [
      { value: "<dec>", type: "variable" },
      { value: ":", type: "terminal" },
      { value: "<type>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    //6
    variable: { value: "<dec>", type: "variable" },
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "<moreDec>", type: "variable" },
    ],
  },
  {
    //7
    variable: { value: "<moreDec>", type: "variable" },
    rightSide: [
      { value: ",", type: "terminal" },
      { value: "<dec>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreDec>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //8
    variable: { value: "<type>", type: "variable" },
    rightSide: [{ value: "integer", type: "terminal" }],
  },
  {
    //9
    variable: { value: "<stat-list>", type: "variable" },
    rightSide: [
      { value: "<stat>", type: "variable" },
      { value: "<moreStat>", type: "variable" },
    ],
  },
  {
    //10
    variable: { value: "<moreStat>", type: "variable" },
    rightSide: [{ value: "<stat-list>", type: "variable" }],
  },
  {
    variable: { value: "<moreStat>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //11
    variable: { value: "<stat>", type: "variable" },
    rightSide: [{ value: "<write>", type: "variable" }],
  },
  {
    //12
    variable: { value: "<stat>", type: "variable" },
    rightSide: [{ value: "<assign>", type: "variable" }],
  },
  {
    //13
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
    //14
    variable: { value: "<assign>", type: "variable" },
    rightSide: [
      { value: "<id>", type: "variable" },
      { value: "=", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ";", type: "terminal" },
    ],
  },
  {
    //15
    variable: { value: "<expr>", type: "variable" },
    rightSide: [
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    //16
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: [
      { value: "+", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    //17
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: [
      { value: "-", type: "terminal" },
      { value: "<term>", type: "variable" },
      { value: "<exprPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<exprPrime>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //18
    variable: { value: "<term>", type: "variable" },
    rightSide: [{ value: "<factor>", type: "variable" }],
  },
  {
    //19
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: [
      { value: "*", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  {
    //20
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: [
      { value: "/", type: "terminal" },
      { value: "<factor>", type: "variable" },
      { value: "<termPrime>", type: "variable" },
    ],
  },
  {
    variable: { value: "<termPrime>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //21
    variable: { value: "<factor>", type: "variable" },
    rightSide: [{ value: "<id>", type: "variable" }],
  },
  {
    //22
    variable: { value: "<factor>", type: "variable" },
    rightSide: [{ value: "<number>", type: "variable" }],
  },
  {
    //23
    variable: { value: "<factor>", type: "variable" },
    rightSide: [
      { value: "(", type: "terminal" },
      { value: "<expr>", type: "variable" },
      { value: ")", type: "terminal" },
    ],
  },
  {
    //24
    variable: { value: "<number>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    //25
    variable: { value: "<number>", type: "variable" },
    rightSide: [
      { value: "<sign>", type: "variable" },
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    //26
    variable: { value: "<moreDigits>", type: "variable" },
    rightSide: [
      { value: "<digit>", type: "variable" },
      { value: "<moreDigits>", type: "variable" },
    ],
  },
  {
    variable: { value: "<moreDigits>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //27
    variable: { value: "<sign>", type: "variable" },
    rightSide: [{ value: "+", type: "terminal" }],
  },
  {
    //28
    variable: { value: "<sign>", type: "variable" },
    rightSide: [{ value: "-", type: "terminal" }],
  },
  {
    variable: { value: "<sign>", type: "variable" },
    rightSide: [{ value: "lambda", type: "terminal" }],
  },
  {
    //29
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "0", type: "terminal" }],
  },
  {
    //30
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "1", type: "terminal" }],
  },
  {
    //31
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "2", type: "terminal" }],
  },
  {
    //32
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "3", type: "terminal" }],
  },
  {
    //33
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "4", type: "terminal" }],
  },
  {
    //34
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "5", type: "terminal" }],
  },
  {
    //35
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "6", type: "terminal" }],
  },
  {
    //36
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "7", type: "terminal" }],
  },
  {
    //37
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "8", type: "terminal" }],
  },
  {
    //38
    variable: { value: "<digit>", type: "variable" },
    rightSide: [{ value: "9", type: "terminal" }],
  },
  {
    //39
    variable: { value: "<letter>", type: "variable" },
    rightSide: [{ value: "a", type: "terminal" }],
  },
  {
    //40
    variable: { value: "<letter>", type: "variable" },
    rightSide: [{ value: "b", type: "terminal" }],
  },
  {
    //41
    variable: { value: "<letter>", type: "variable" },
    rightSide: [{ value: "c", type: "terminal" }],
  },
  {
    //42
    variable: { value: "<letter>", type: "variable" },
    rightSide: [{ value: "d", type: "terminal" }],
  },
  {
    //43
    variable: { value: "<letter>", type: "variable" },
    rightSide: [{ value: "e", type: "terminal" }],
  },
];

export const Grammer = BNFGrammer.filter(
  (rule) => rule.rightSide[0].value != "lambda"
);
