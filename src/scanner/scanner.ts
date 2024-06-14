import { token, tokenTable, tokenType } from "../assets/types/tokenTable_types";

type tempToken = Omit<token, "value" | "rowNumber" | "columnNumber"> & {
  value: string;
  rowNumber: undefined;
  columnNumber: undefined;
};

export class scanner {
  private inputText: string;
  private listOfListOfwords: string[][];
  private tempTokenTable: tempToken[][];
  private tokenTable: tokenTable;

  constructor(inputText: string) {
    this.inputText = inputText;
    this.listOfListOfwords = [];
    this.tempTokenTable = [];
    this.tokenTable = [];
  }

  getTokenTable(): tokenTable {
    if (this.tokenTable.length) {
      return this.tokenTable;
    } else {
      this.makeTokenTable();
      return this.tokenTable;
    }
  }

  makeTokenTable(): void {
    this.makeListOfListOfwords();
    // this.insertDelimiters();
    this.convertToTempTokens();
    this.convertToValidTokens();
  }

  makeListOfListOfwords() {
    const rows = this.inputText.split("\n");
    this.listOfListOfwords = rows.map((element) =>
      element.split(" ").filter((elem) => elem)
    );
  }

  insertDelimiters() {
    const newListOfListOfwords = this.listOfListOfwords.map((row) =>
      [...row.map((element) => [element, " "]), row[row.length - 1]].push("\n")
    );
    return newListOfListOfwords;
  }

  convertToTempTokens() {
    this.tempTokenTable = this.listOfListOfwords.map((listOfwords) =>
      listOfwords.map((word) => {
        if (this.isKeyword(word)) {
          return this.makeTempToken("keyWord", word);
        } else if (this.isLitteral(word)) {
          return this.makeTempToken("literal", word);
        } else if (this.isOperator(word)) {
          return this.makeTempToken("operator", word);
        } else if (this.isNumber(word)) {
          return this.makeTempToken("number", word);
        } else if (this.isIdentifier(word)) {
          return this.makeTempToken("identifier", word);
        }
        // else if (this.isDelimiter(word)) {
        //   return this.makeTempToken("identifier", word);
        // }
        else {
          return this.makeTempToken("invalid", word);
        }
      })
    );
  }

  convertToValidTokens() {
    const validTokenTypes = ["keyWord", "operator", "delimiter"];
    const tempTokenTableHolder1 = this.tempTokenTable.map((array) => {
      return array.map((tempToken) => {
        if (validTokenTypes.includes(tempToken.type)) {
          return { ...tempToken };
        } else {
          return Array.from(tempToken.value).map((char) => {
            return {
              rowNumber: undefined,
              columnNumber: undefined,
              blockNumber: tempToken.blockNumber,
              outerBlockNumber: tempToken.outerBlockNumber,
              type: tempToken.type,
              value: char,
            };
          });
        }
      });
    });
    const tempTokenTableHolder2 = tempTokenTableHolder1.map((row) =>
      row.reduce(
        (iniValue: tempToken[], cur) =>
          iniValue.concat(Array.isArray(cur) ? cur : [cur]),
        []
      )
    );
    const tempTokenTableHolder3 = tempTokenTableHolder2.map((row, rowNumber) =>
      row.map((tempToken, columnNumber) => {
        return {
          ...tempToken,
          rowNumber: rowNumber,
          columnNumber: columnNumber,
        } as token;
      })
    );
    this.tokenTable = tempTokenTableHolder3.reduce(
      (iniValue: token[], cur) =>
        iniValue.concat(Array.isArray(cur) ? cur : [cur]),
      []
    );
  }

  private makeTempToken(type: tokenType, value: string): tempToken {
    const token: tempToken = {
      rowNumber: undefined,
      columnNumber: undefined,
      blockNumber: 0,
      outerBlockNumber: undefined,
      type,
      value,
    };
    return token;
  }

  private isKeyword(word: string): boolean {
    const _listOfKeyWords = [
      "program",
      "end",
      "begin",
      "show",
      "var",
      "integer",
    ];
    if (_listOfKeyWords.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
  private isOperator(word: string): boolean {
    const _listOfOperators = ["+", "=", "-", "/", "*"];
    if (_listOfOperators.includes(word)) {
      return true;
    } else {
      return false;
    }
  }

  private isIdentifier(word: string): boolean {
    const firstCharRegex = /^[a-e]$/;

    const otherCharRegex = /^[a-e0-9]$/;

    if (!firstCharRegex.test(word[0])) {
      return false;
    }

    for (const char of word.slice(1)) {
      if (!otherCharRegex.test(char)) {
        return false;
      }
    }
    return true;
  }

  private isNumber(word: string): boolean {
    for (const char of word) {
      if (!char.match(/\d/)) {
        return false;
      }
    }
    return true;
  }

  private isLitteral(word: string): boolean {
    const _listOflitterals: string[] = ["(", ")", ":", ",", ";"];
    if (_listOflitterals.includes(word)) {
      return true;
    }
    return false;
  }
  // private isDelimiter(word: string): boolean {
  //   const _listOflitterals: string[] = ["\n", " "];
  //   if (_listOflitterals.includes(word)) {
  //     return true;
  //   }
  //   return false;
  // }
}
