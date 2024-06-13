import { Grammer } from "../assets/grammer";
import { parseTable, row } from "../assets/parseTable";
import { element, stack } from "../assets/stack";
import { rule, variable } from "../assets/types/grammer_types";
import { token, tokenTable } from "../assets/types/tokenTable_types";

export class parser {
  private tokenTable: tokenTable = [];
  private holderStack;

  constructor(tokenTable: tokenTable) {
    this.tokenTable = tokenTable;
    this.holderStack = new stack();
  }

  parse() {
    this.holderStack.push(Grammer[0].variable);
    let index: number = 0;
    let currentToken: token = (this.tokenTable as tokenTable)[index];
    let topOfStack: element;
    let action: number | "lambda" | null;
    let rowIndex: variable;
    let columnIndex: keyof row;
    let rule: rule;
    while (!this.holderStack.isEmpty()) {
      topOfStack = this.holderStack.pop();
      if (index < this.tokenTable?.length)
        currentToken = (this.tokenTable as tokenTable)[index];
      else
        throw new Error(
          `expected a token at at row ${currentToken?.rowNumber}, column ${currentToken?.columnNumber}`
        );

      if (topOfStack.type === "terminal") {
        if (topOfStack.value === currentToken.value) index++;
        else
          throw Error(
            `The row ${currentToken.rowNumber} column ${currentToken.columnNumber} terminal is not expected!!`
          );
      } else {
        rowIndex = topOfStack.value;
        columnIndex = currentToken.value;
        action = parseTable[rowIndex][columnIndex];

        if (action === "lambda") this.holderStack.pop();
        else if (action === null)
          throw new Error(
            `there is an error in row ${currentToken.rowNumber} and column ${currentToken.columnNumber}`
          );
        else {
          rule = Grammer[action as number];
          rule.rightSide
            .slice()
            .reverse()
            .forEach((element) => {
              if (element.value != "lambda") this.holderStack.push(element);
            });
        }
      }
    }
  }
}
