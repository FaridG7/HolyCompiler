import { Grammer } from "../assets/grammer";
import { stack } from "../assets/stack";
import { tokenTable } from "../assets/types/tokenTable_types";

export function parser(tokenTable:tokenTable){
    const holderStack = new stack();
    holderStack.push("$");
    holderStack.push(Grammer[0].variable);
    while (true) {
        //1)look at the top of the stack
        //2.a)if it's a terminal read from the token table
        //2.b)if it's a variable, look at the pars table
        //3)decide based on the parsing table

    }
}