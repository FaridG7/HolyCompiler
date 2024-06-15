import { Grammer } from "../assets/grammer";
import { block, parseTable, row } from "../assets/parseTable";
import { element, stack } from "../assets/stack";
import { rule, variable } from "../assets/types/grammer_types";
import { token, tokenTable } from "../assets/types/tokenTable_types";

type panicModeWarning = {
  rowNumber: number;
  columnNumber: number;
  type: "mismatch token" | "missing token";
};

export class parser {
  private tokenTable: tokenTable = [];
  private holderStack;
  public panicModeWarnings: panicModeWarning[];

  constructor(tokenTable: tokenTable) {
    this.tokenTable = tokenTable;
    this.holderStack = new stack();
    this.panicModeWarnings = [];
  }

  parse() {
    this.holderStack.push(Grammer[0].variable);
    let index: number = 0;
    let currentToken: token = (this.tokenTable as tokenTable)[index];
    let topOfStack: element;
    let action: block;
    let rowIndex: variable;
    let columnIndex: keyof row;
    let rule: rule;
    while (!this.holderStack.isEmpty()) {
      topOfStack = this.holderStack.pop();
      if (index < this.tokenTable?.length)
        currentToken = this.tokenTable[index];
      else
        throw new Error(
          `expected a token at row ${currentToken?.rowNumber}, column ${currentToken?.columnNumber}`
        );

      //debug process
      console.log("Top of Stack: ", topOfStack);
      console.log("Index: ", index);
      //debug process
      if (topOfStack.type === "terminal") {
        if (topOfStack.value === currentToken.value) index++;
        else {
          this.panicModeWarnings.push({
            rowNumber: currentToken.rowNumber,
            columnNumber: currentToken.columnNumber,
            type: "mismatch token",
          });
        }
      } else {
        rowIndex = topOfStack.value;
        columnIndex = currentToken.value;
        action = parseTable[rowIndex][columnIndex];
        //debug process
        console.log("Row Index of action: ", rowIndex);
        console.log("Column Index of action: ", columnIndex);
        console.log("Action: ", action);
        //debug process

        if (action === null) {
          this.panicModeWarnings.push({
            rowNumber: currentToken.rowNumber,
            columnNumber: currentToken.columnNumber,
            type: "mismatch token",
          });
          index++;
        } else if (action === "S") {
          if (this.holderStack.isEmpty())
            throw Error(
              `An Error occurred in row ${currentToken.rowNumber} column ${currentToken.columnNumber}`
            );
          else {
            this.panicModeWarnings.push({
              rowNumber: currentToken.rowNumber,
              columnNumber: currentToken.columnNumber,
              type: "missing token",
            });
          }
        } else if (typeof action === "number") {
          rule = Grammer[(action - 1) as number];
          //debug process
          console.log("Rule: ", rule);
          //debug process
          rule.rightSide
            .slice()
            .reverse()
            .forEach((element) => {
              if (element.value != "lambda") this.holderStack.push(element);
            });
        } else if (action === "lambda") {
          //do nothing
        }
      }
      console.log(
        "-----------------------------------------------------------"
      );
    }
  }
}
