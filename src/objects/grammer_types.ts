type variable = "<prog>" | "<id>" | "<dec-list>" | "<dec>" | "<type>" | "<stat-list>" | "<write>" | "<assign>" | "<expr>" | "<term>" 
    | "<factor>" | "<number>"| "<sign>" | "<digit>" | "<letter>";

type numberTerminal = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" ;

type letterTerminal = "a" | "b" | "c" | "d" | "e";

type keyWordsTerminal = "program" | "var" | "begin" | "end" | "integer" | "show";

type sybolTerminal = ";" | ":" | "," | "(" | ")" | "{" | "}" ;

type operatorTerminal = "=" | "+" | "-" | "*" | "/";

type terminal = keyWordsTerminal |letterTerminal | numberTerminal | sybolTerminal | operatorTerminal | "lambda";

type rule = {
    variable: variable;
    rightSide: Array<terminal | variable>;
}

export type grammer = rule[];