import { Listtemplate } from './classes/Listtemplate.js';
import { Invoice } from './classes/invoice.js';
import { payment } from './classes/payment.js';
let docOne;
let docTwo;
docOne = new Invoice("Jaseem", "Home", 21);
docTwo = new payment("Jaseel", "Office", 23);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const mydetails = {
    name: "Jaseel",
    age: 22,
    speak(text = 'helooo') {
        // console.log(text)
    }
};
// console.log(mydetails)
const greetperson = (person) => {
    // console.log(`helo ${person.name}`)
};
greetperson({
    name: "Jaseel",
    age: 22,
    speak(text = 'helooo') {
        // console.log(text)
    }
});
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new Listtemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
});
