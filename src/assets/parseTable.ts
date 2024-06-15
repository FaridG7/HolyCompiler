export type block = null | number | "lambda" | "S";

export type row = {
  program: block;
  var: block;
  begin: block;
  end: block;
  integer: block;
  show: block;
  ",": block;
  ":": block;
  "=": block;
  "+": block;
  "-": block;
  "*": block;
  "/": block;
  "0": block;
  "1": block;
  "2": block;
  "3": block;
  "4": block;
  "5": block;
  "6": block;
  "7": block;
  "8": block;
  "9": block;
  a: block;
  b: block;
  c: block;
  d: block;
  e: block;
  ";": block;
  "(": block;
  ")": block;
};
type parseTable = {
  "<prog>": row;
  "<id>": row;
  "<alphaNum>": row;
  "<dec-list>": row;
  "<dec>": row;
  "<moreDec>": row;
  "<type>": row;
  "<stat-list>": row;
  "<moreStat>": row;
  "<stat>": row;
  "<write>": row;
  "<assign>": row;
  "<expr>": row;
  "<exprPrime>": row;
  "<term>": row;
  "<termPrime>": row;
  "<factor>": row;
  "<number>": row;
  "<moreDigits>": row;
  "<sign>": row;
  "<digit>": row;
  "<letter>": row;
};

export const parseTable: parseTable = {
  "<prog>": {
    program: 1,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<id>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "S",
    ",": "S",
    integer: null,
    show: null,
    "=": "S",
    "+": "S",
    "-": "S",
    "*": "S",
    "/": "S",
    ";": "S",
    "(": null,
    ")": "S",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 2,
    b: 2,
    c: 2,
    d: 2,
    e: 2,
  },
  "<alphaNum>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "lambda",
    ",": "lambda",
    integer: null,
    show: null,
    "=": "lambda",
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": 4,
    "1": 4,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4,
    "7": 4,
    "8": 4,
    "9": 4,
    a: 3,
    b: 3,
    c: 3,
    d: 3,
    e: 3,
  },
  "<dec-list>": {
    program: null,
    var: null,
    begin: "S",
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 5,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
  },
  "<dec>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "S",
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 6,
    b: 6,
    c: 6,
    d: 6,
    e: 6,
  },
  "<moreDec>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": "lambda",
    ",": 7,
    integer: null,
    show: null,
    "=": "lambda",
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<type>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: 8,
    show: null,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": "S",
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<stat-list>": {
    program: null,
    var: null,
    begin: null,
    end: "S",
    ":": null,
    ",": null,
    integer: null,
    show: 9,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 9,
    b: 9,
    c: 9,
    d: 9,
    e: 9,
  },
  "<moreStat>": {
    program: null,
    var: null,
    begin: null,
    end: "lambda",
    ":": null,
    ",": null,
    integer: null,
    show: 10,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 10,
    b: 10,
    c: 10,
    d: 10,
    e: 10,
  },
  "<stat>": {
    program: null,
    var: null,
    begin: null,
    end: "S",
    ":": null,
    ",": null,
    integer: null,
    show: 11,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 12,
    b: 12,
    c: 12,
    d: 12,
    e: 12,
  },
  "<write>": {
    program: null,
    var: null,
    begin: null,
    end: "S",
    ":": null,
    ",": null,
    integer: null,
    show: 13,
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: "S",
    b: "S",
    c: "S",
    d: "S",
    e: "S",
  },
  "<assign>": {
    program: null,
    var: null,
    begin: null,
    end: "S",
    ":": null,
    ",": null,
    integer: null,
    show: "S",
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 14,
    b: 14,
    c: 14,
    d: 14,
    e: 14,
  },
  "<expr>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 15,
    "-": 15,
    "*": null,
    "/": null,
    ";": "S",
    "(": 15,
    ")": "S",
    "0": 15,
    "1": 15,
    "2": 15,
    "3": 15,
    "4": 15,
    "5": 15,
    "6": 15,
    "7": 15,
    "8": 15,
    "9": 15,
    a: 15,
    b: 15,
    c: 15,
    d: 15,
    e: 15,
  },
  "<exprPrime>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 16,
    "-": 17,
    "*": null,
    "/": null,
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<term>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 18,
    "-": 18,
    "*": null,
    "/": null,
    ";": "S",
    "(": 18,
    ")": "S",
    "0": 18,
    "1": 18,
    "2": 18,
    "3": 18,
    "4": 18,
    "5": 18,
    "6": 18,
    "7": 18,
    "8": 18,
    "9": 18,
    a: 18,
    b: 18,
    c: 18,
    d: 18,
    e: 18,
  },
  "<termPrime>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": "lambda",
    "-": "lambda",
    "*": 19,
    "/": 20,
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<factor>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 22,
    "-": 22,
    "*": "S",
    "/": "S",
    ";": "S",
    "(": 23,
    ")": "S",
    "0": 22,
    "1": 22,
    "2": 22,
    "3": 22,
    "4": 22,
    "5": 22,
    "6": 22,
    "7": 22,
    "8": 22,
    "9": 22,
    a: 21,
    b: 21,
    c: 21,
    d: 21,
    e: 21,
  },
  "<number>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 25,
    "-": 25,
    "*": "S",
    "/": "S",
    ";": "S",
    "(": null,
    ")": "S",
    "0": 24,
    "1": 24,
    "2": 24,
    "3": 24,
    "4": 24,
    "5": 24,
    "6": 24,
    "7": 24,
    "8": 24,
    "9": 24,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<moreDigits>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": "lambda",
    "-": "lambda",
    "*": "lambda",
    "/": "lambda",
    ";": "lambda",
    "(": null,
    ")": "lambda",
    "0": 26,
    "1": 26,
    "2": 26,
    "3": 26,
    "4": 26,
    "5": 26,
    "6": 26,
    "7": 26,
    "8": 26,
    "9": 26,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<sign>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": 27,
    "-": 28,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": "S",
    "1": "S",
    "2": "S",
    "3": "S",
    "4": "S",
    "5": "S",
    "6": "S",
    "7": "S",
    "8": "S",
    "9": "S",
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<digit>": {
    program: null,
    var: null,
    begin: null,
    end: null,
    ":": null,
    ",": null,
    integer: null,
    show: null,
    "=": null,
    "+": "S",
    "-": "S",
    "*": "S",
    "/": "S",
    ";": "S",
    "(": null,
    ")": "S",
    "0": 29,
    "1": 30,
    "2": 31,
    "3": 32,
    "4": 33,
    "5": 34,
    "6": 35,
    "7": 36,
    "8": 37,
    "9": 38,
    a: null,
    b: null,
    c: null,
    d: null,
    e: null,
  },
  "<letter>": {
    program: null,
    var: "S",
    begin: "S",
    end: "S",
    ":": null,
    ",": null,
    integer: null,
    show: "S",
    "=": null,
    "+": null,
    "-": null,
    "*": null,
    "/": null,
    ";": null,
    "(": null,
    ")": null,
    "0": null,
    "1": null,
    "2": null,
    "3": null,
    "4": null,
    "5": null,
    "6": null,
    "7": null,
    "8": null,
    "9": null,
    a: 39,
    b: 40,
    c: 41,
    d: 42,
    e: 43,
  },
};
