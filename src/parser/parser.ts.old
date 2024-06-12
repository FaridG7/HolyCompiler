import { Grammer } from "../assets/grammer";
import { element, stack } from "../assets/stack";
import { token, tokenTable } from "../assets/types/tokenTable_types";
import { parseTable, row } from "../assets/parseTable";
import { rule, variable } from "../assets/types/grammer_types";

export function parser(tokenTable: tokenTable) {
  const holderStack = new stack();
  holderStack.push(Grammer[0].variable);
  let index: number = 0;
  let currentToken: token;
  let topOfStack: element;
  let action: number | "lambda" | null;
  let rowIndex: variable;
  let columnIndex: keyof row;
  let rule: rule;
  while (!holderStack.isEmpty()) {
    currentToken = tokenTable[index];
    topOfStack = holderStack.pop();
    if (topOfStack.type === "terminal") {
      //compare the terminal with the token
      index = index + 1;
    } else {
      rowIndex = topOfStack.value;
      columnIndex = currentToken.value;
      action = parseTable[rowIndex][columnIndex];
      if (action === "lambda") holderStack.pop();
      if (action === null)
        throw new Error(
          `there is an error in row ${currentToken.rowNumber} and column ${currentToken.columnNumber}`
        );
      else {
        rule = Grammer[action as number];
        rule.rightSide.slice().reverse().forEach((element) => {
          if(element.value != "lambda") holderStack.push(element);
        });
      }
    }
  }
}
