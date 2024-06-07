export function scanner(inputText: string) {
  //! token list
  const tokensList: ScanToken[] = [];
  const splitInputByRows: string[] = inputText.split("\n");
  let currentblock: number = 0;
  const rowsCount: number = splitInputByRows.length;

  for (let index = 0; index < rowsCount; index++) {
    let columnNumber = 0;
    const splitInputByEachColumns: string[] =
      splitInputByRows[index].split(" ");
    const eachColumnCount: number = splitInputByEachColumns.length;
    for (let t = 0; t < eachColumnCount; t++) {
      const input: string = splitInputByEachColumns[t];
      if (isKeyword(input)) {
        //create token
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "keyWord",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else if (isLitteral(input)) {
        //todo : clearfy bloc strategy : EddyHezarian
        currentblock++;
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "literal",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else if (isDelimeter(input)) {
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "literal",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else if (isOperator(input)) {
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "literal",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else if (isNumber(input)) {
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "literal",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else if (isIdentifier(input)) {
        columnNumber += input.length;
        const instance: ScanToken = {
          idType: "literal",
          value: input,
          blockNumber: currentblock,
          outerBlockNumber: currentblock - 1,
          columnNumber: columnNumber,
          rowNumber: index,
        };
        tokensList.push(instance);
      } else {
        throw Error;
      }
    }
  }
}

type ScanToken = {
  rowNumber: number;
  columnNumber: number;
  blockNumber: number;
  outerBlockNumber: number;
  idType: string;
  value: string;
};

export function isKeyword(input: string): boolean {
  const _listOfKeyWords = ["program", "end", "begin", "show", "var", "integer"];
  if (_listOfKeyWords.includes(input)) {
    return true;
  } else {
    return false;
  }
}
export function isOperator(input: string): boolean {
  const _listOfOperators = ["+", "=", "-", "/", "*"];
  if (_listOfOperators.includes(input)) {
    return true;
  } else {
    return false;
  }
}
export function isIdentifier(input: string): boolean {
  const lenght: number = input.length;
  const _listOfValidChars: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  for (let index = 0; index < lenght; index++) {
    if (!_listOfValidChars.includes(input[index])) {
      return false;
    }
  } //bug
  return true;
}
export function isLitteral(input: string): boolean {
  const _listOflitterals: string[] = ['"', ";", " "];
  if (_listOflitterals.includes(input)) {
    return true;
  }
  return false;
}
export function isNumber(input: string): boolean {
  const _listOfNumbers: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  const lenght: number = input.length;
  for (let index = 0; index < lenght; index++) {
    if (!_listOfNumbers.includes(input[index])) {
      return false;
    }
  }
  return true;
}
export function isDelimeter(input: string): boolean {
  const _listOflitterals: string[] = ["(", ")"];
  if (_listOflitterals.includes(input)) {
    return true;
  }
  return false;
}

// define tokeList as EMP list
// split input with \n pattern to detect rows
// in a for loop read each row
// define init column = 0
// define init bloc = 0
// for each row split input to detect each
// create a instance of token
// detect type of current item
// create switch case based on type
