import { Grammer } from "../assets/grammer";
import { block, parseTable, row } from "../assets/parseTable";
import { element, stack } from "../assets/stack";
import { errors } from "../assets/types/error_types";
import { rule, variable } from "../assets/types/grammer_types";
import { token, tokenTable } from "../assets/types/tokenTable_types";

export class parser {
  private tokenTable: tokenTable = [];
  private holderStack;
  public errors: errors;

  constructor(tokenTable: tokenTable) {
    this.tokenTable = tokenTable;
    this.holderStack = new stack();
    this.errors = [];
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
      else {
        this.errors.push({
          row: currentToken.rowNumber,
          column: currentToken.columnNumber,
          message: "expected a token",
          severity: "critical",
        });
        return;
      }

      //debug process
      console.log("Top of Stack: ", topOfStack);
      console.log("Index: ", index);
      //debug process
      if (topOfStack.type === "terminal") {
        if (topOfStack.value === currentToken.value) index++;
        else {
          this.errors.push({
            row: currentToken.rowNumber,
            column: currentToken.columnNumber,
            message: "token is not expected",
            severity: "critical",
          });
          return;
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
          this.errors.push({
            row: currentToken.rowNumber,
            column: currentToken.columnNumber,
            message: "An error occurred ",
            severity: "critical",
          });
          return;
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
    if (index < this.tokenTable.length - 1) {
      this.errors.push({
        row: currentToken.rowNumber,
        column: currentToken.columnNumber,
        message: "token is not expected",
        severity: "critical",
      });
      return;
    }
  }
  panicModeParse() {
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
      else {
        this.errors.push({
          row: currentToken.rowNumber,
          column: currentToken.columnNumber,
          message: "expected a token",
          severity: "critical",
        });
        return;
      }

      //debug process
      console.log("Top of Stack: ", topOfStack);
      console.log("Index: ", index);
      //debug process
      if (topOfStack.type === "terminal") {
        if (topOfStack.value === currentToken.value) index++;
        else {
          this.errors.push({
            row: currentToken.rowNumber,
            column: currentToken.columnNumber,
            message: "mismatch token",
            severity: "warning",
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
          this.errors.push({
            row: currentToken.rowNumber,
            column: currentToken.columnNumber,
            message: "mismatch token",
            severity: "warning",
          });
          this.holderStack.push(topOfStack);
          index++;
        } else if (action === "S") {
          if (this.holderStack.isEmpty()) {
            this.errors.push({
              row: currentToken.rowNumber,
              column: currentToken.columnNumber,
              message: "An Error occurred",
              severity: "critical",
            });
            return;
          } else {
            this.errors.push({
              row: currentToken.rowNumber,
              column: currentToken.columnNumber,
              message: "missing token",
              severity: "warning",
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
