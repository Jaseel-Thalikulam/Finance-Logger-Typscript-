export class Invoice {
    constructor(name, details, amount) {
        this.name = name;
        this.details = details;
        this.amount = amount;
    }
    display() {
        console.log(`name : ${this.name},Details : ${this.details} , amount :${this.amount}`);
    }
    showdetail() {
        return `${this.details}`;
    }
    format() {
        return `${this.name},${this.details},${this.amount}`;
    }
}
