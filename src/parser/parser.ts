import { Grammer } from "../assets/grammer";
import { stack } from "../assets/stack";
import { terminal, variable } from "../assets/types/grammer_types";
import { token, tokenTable } from "../assets/types/tokenTable_types";
import { parseTable } from "../assets/parseTable";

export function parser(tokenTable:tokenTable){
    const holderStack = new stack();
    holderStack.push("$");
    holderStack.push(Grammer[0].variable);
    let index = 0;
    while (true) {
        let token:token = tokenTable[index].idName;
        let topOfStack:terminal|variable = holderStack.pop();
        if(topOfStack.getClass() == terminal.class)
        //1)look at the top of the stack
        //2.a)if it's a terminal read from the token table
        //2.b)if it's a variable, look at the pars table
        //3)decide based on the parsing table

    }
}

function 