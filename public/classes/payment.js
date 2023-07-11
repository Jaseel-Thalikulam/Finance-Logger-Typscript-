export class payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    display() {
        console.log(`recipient : ${this.recipient},Details : ${this.details} , amount :${this.amount}`);
    }
    showdetail() {
        return `${this.details}`;
    }
    format() {
        return `${this.recipient, this.details}`;
    }
}
