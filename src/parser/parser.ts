import { Grammer } from "../assets/grammer";
import { element, stack } from "../assets/stack";
import { token, tokenTable } from "../assets/types/tokenTable_types";
import { parseTable } from "../assets/parseTable";

export function parser(tokenTable: tokenTable) {
  const holderStack = new stack();
  holderStack.push({ value: "$", type: "terminal" });
  holderStack.push(Grammer[0].variable);
  let index: number = 0;
  let token: token;
  let topOfStack: element;
  let action: number | "lambda" | null;
  while (true) {
    token = tokenTable[index];
    topOfStack = holderStack.pop();
    if (topOfStack.type === "terminal") {
      //compare the terminal with the token
      index = index + 1;
    } else {
      //decide based on the parse table
      action = parseTable[topOfStack.value][token.idName as "show"]; //!!!!temporary
      if (action === "lambda") holderStack.pop();
    }
  }
}
