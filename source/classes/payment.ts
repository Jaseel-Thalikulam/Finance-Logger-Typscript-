
import {Hasformatter} from '../interfaces/hasformatter.js'
export class payment implements Hasformatter{

    constructor (
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }
    
    display() {
    console.log(`recipient : ${this.recipient},Details : ${this.details} , amount :${this.amount}`)
    }

    showdetail() {
        return `${this.details}`
    }

    format(): string {
        return `${this.recipient,this.details}`
    }
}