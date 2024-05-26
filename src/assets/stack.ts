import { terminal, variable } from "./types/grammer_types";


export class stack{
    private holder: Array<terminal|variable>;
    private top:number;

    constructor(){
        this.holder = [];
        this.top = 0;
    }

    push(input:terminal|variable):void{
        this.holder.push(input);
        this.top = this.top + 1;
    }
    pop():terminal|variable{
        if(this.top > 0){
            this.top = this.top - 1;
            return this.holder.pop() as terminal|variable;
        }else{
            throw new Error("stack is empty!");
        }
    }
}