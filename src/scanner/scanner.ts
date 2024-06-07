
export function scanner (inputText:string){
    //! token list
    let tokensList :ScanToken[]=[];
    let splitInputByRows:string[] = inputText.split("\n");
    let currentbloc:number = 0;
    let rowsCount: number = splitInputByRows.length ;

    for(let index = 0 ; index< rowsCount ; index++){
        let columnNumber = 0;
        let splitInputByEachColumns:string[] = splitInputByRows[index].split(" ");
        let eachColumnCount:number = splitInputByEachColumns.length;
        for(let t =  0 ; t< eachColumnCount;t++){
            let input:string = splitInputByEachColumns[t];
            if(isKeyword(input)){
                //create token
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"kayWord",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }
            else if(isLitteral(input)){
                //todo : clearfy bloc strategy : EddyHezarian 
                currentbloc++;
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"literal",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }
            else if(isDelimeter(input)){
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"literal",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }
            else if(isOperator(input)){
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"literal",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }   
            else if(isNumber(input)){
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"literal",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }
            else if(isIdentifier(input)){
                columnNumber  += input.length;
                let instance:ScanToken = {idType:"literal",value:input ,blockNumber:currentbloc , outerBlockNumber:currentbloc-1 ,columnNumber : columnNumber , rowNumber:index};
                tokensList.push(instance);
            }
            else{
                throw Error ;
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
}



export function isKeyword(input:string):boolean{
    let _listOfKeyWords = ['program','end','begin','show','var','integer'];
    if(_listOfKeyWords.includes(input))
    {return true}
    else
    {return false}
}
export function isOperator(input:string):boolean{
    let _listOfOperators = ['+','=','-','/','*'];
    if(_listOfOperators.includes(input))
    {return true}
    else
    {return false}
}
export function isIdentifier(input:string):boolean{
    let lenght:number = input.length;
    let _listOfValidChars:string[]= ['a','b','c','d','e','1','2','3','4','5','6','7','8','9','0']
    for(let index = 0 ; index<lenght;index++){
        if(! _listOfValidChars.includes(input[index])){
           return false ;
        }
    }
    return true ;
}
export function isLitteral(input:string):boolean{
    let _listOflitterals:string[]= ['\"',';'," "]
    if(_listOflitterals.includes(input)){return true}
    return false;
}
export function isNumber(input:string):boolean{
    let _listOfNumbers:string[]= ['1','2','3','4','5','6','7','8','9','0'];
    let lenght:number = input.length;
    for(let index = 0 ; index<lenght;index++){
        if(! _listOfNumbers.includes(input[index])){
           return false ;
        }
    }
    return true ;
}
export function isDelimeter(input:string):boolean{
    let _listOflitterals:string[]= ['(',')']
    if(_listOflitterals.includes(input)){return true}
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

