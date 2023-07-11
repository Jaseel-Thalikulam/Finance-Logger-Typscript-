
import { Hasformatter } from '../interfaces/hasformatter.js'
export class Invoice implements Hasformatter {
 
    constructor (
        readonly name: string,
        private details: string,
        public amount: number
    ) { }
    
    display() {
    console.log(`name : ${this.name},Details : ${this.details} , amount :${this.amount}`)
    }

    showdetail() {
        return `${this.details}`
    }

    format(): string {
        return `${this.name},${this.details},${this.amount}`
    }
}