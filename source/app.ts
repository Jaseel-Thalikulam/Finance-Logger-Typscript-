import { Listtemplate } from './classes/Listtemplate.js'
import {Invoice} from './classes/invoice.js'
import { payment } from './classes/payment.js'
import {Hasformatter} from './interfaces/hasformatter.js'



let docOne : Hasformatter
let docTwo : Hasformatter

docOne =  new Invoice("Jaseem","Home",21)
docTwo =  new payment("Jaseel","Office",23)
let docs: Hasformatter[] = []
docs.push(docOne)
docs.push(docTwo)

// docs.forEach((doc) => {
//     console.log(doc)
// })

// let arr = []
// let inv1 = new Invoice("JASEEL", "HOME", 23) 
// let inv2 = new Invoice("JASEEL", "WORK", 23) 


// arr.push(inv1)
// arr.push(inv2)
// inv1.display()
// arr.forEach((inv) => {
//     console.log(inv.name,inv.amount,inv.showdetail())
   
// })

interface details {
    name: String;
    age: Number;
    speak(a:string):void
}

const mydetails: details = {
    name: "Jaseel",
    age: 22,
    speak(text: string = 'helooo') {
        // console.log(text)
    }
}
// console.log(mydetails)

const greetperson=(person : details)=>{
    // console.log(`helo ${person.name}`)
}

greetperson({
    name: "Jaseel",
    age: 22,
    speak(text: string = 'helooo') {
        // console.log(text)
    }
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul =  document.querySelector('ul')!
const list = new Listtemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values :[string,string,number]= [tofrom.value, details.value, amount.valueAsNumber]

  let doc: Hasformatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new payment(...values);
  }
  list.render(doc,type.value,'end')
});

