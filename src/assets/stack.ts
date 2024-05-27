import { terminalObject, variableObject } from "./types/grammer_types";

export type element = terminalObject|variableObject;

export class stack{
    private holder: Array<element>;
    private top:number;

    constructor(){
        this.holder = [];
        this.top = 0;
    }

    push(input:element):void{
        this.holder.push(input);
        this.top = this.top + 1;
    }
    pop():element{
        if(this.top > 0){
            this.top = this.top - 1;
            return this.holder.pop() as element;
        }else{
            throw new Error("stack is empty!");
        }
    }
}