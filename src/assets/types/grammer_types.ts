export type variable = "<prog>" | "<id>" | "<dec-list>" | "<dec>" | "<type>" | "<stat-list>" | "<stat>" | "<write>" | "<assign>" | "<expr>" | "<term>" 
    | "<factor>" | "<number>"| "<sign>" | "<digit>" | "<letter>" | "<alphaNum>" | "<moreDec>" | BNFtempVarables;

type BNFtempVarables = "<moreStat>" | "<exprPrime>" | "<termPrime>" | "<moreDigits>";

type numberTerminal = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;

type letterTerminal = "a" | "b" | "c" | "d" | "e";

type keyWordsTerminal = "program" | "var" | "begin" | "end" | "integer" | "show";

type sybolTerminal = ";" | ":" | "," | "(" | ")" | "{" | "}" ;

type operatorTerminal = "=" | "+" | "-" | "*" | "/";

export type terminal = keyWordsTerminal |letterTerminal | numberTerminal | sybolTerminal | operatorTerminal | "$";

type rule = {
    variable: variable;
    rightSide: Array<terminal | variable> | "lambda";
}

export type grammer = rule[];