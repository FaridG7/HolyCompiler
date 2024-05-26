type variable = "<prog>" | "<id>" | "<dec-list>" | "<dec>" | "<type>" | "<stat-list>" | "<write>" | "<assign>" | "<expr>" | "<term>" 
    | "<factor>" | "<number>"| "<sign>" | "<digit>" | "<letter>";
type terminal = "program" | "var" | "begin" | "end" | "integer" | "show" | ";" | ":" | "," | "(" | ")" | "=" | "+" | "-" | "*" |
     "/" | "{" | "}" | "lambda" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "a" | "b" | "c" | "d" | "e";

type c = terminal | variable;

type rule = {
    variable: variable;
    rightSide: c[];
}

export type grammer = rule[];