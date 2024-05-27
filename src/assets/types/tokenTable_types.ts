type idType = "kayWord" | "number" | "operator" | "identifier" | "literal" | "delimiters";

export type token = {rowNumber:number,columnNumber:number,blockNumber:number,outerBlockNumber:number,idType:idType,idName:string}

export type tokenTable = token[];