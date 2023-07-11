

const circle = (dia: number) => {
    return dia * Math.PI
}


console.log(circle(2))


let string = ['MongoDb', 'Sql', 'BigTable', 'DianamoDB']

string.push("helo")
// string.push(33) error because elements of  "string" Array is string so we cant push number value
// string[1] = false string[1] is a string value so we cant assign other types 
string[1] = 'Firebase'


let number = [12, 33, 12]



number.push(33)
// number.push("helo")  error because elements of  "number" Array contains number so we cant push stirng value

let mixed = [1, "MongoDb", 2, 'BigTable', 3, 'DianamoDB'] 
//We can assign  value to a mixed array (minimum of one element with same datatype  which we  want push or assign  must be contain at the decleration of array ) in the above example if we want to assign the mixed[0] as a string value and viseversa is possible but if we want to assign a boolean value it is not possible because the boolean  element is not in any of the index of the array.

// mixed[0] = false   |  gives error


let obj = {
    name: "Jaseel",
    age: 20,
    place:"Calicut"
}

 obj.age  = 21
 //obj.age  = '22' show error because of same reason mentiond above

// obj.batch = "BCK74" shows error because the property didnt exist and we cant add it

let arrofstr: (string|boolean)[] = [] //can be set one or more types for an array element
let arrofnum: number[] = []

arrofstr.push('Jaseel')
arrofstr.push(true)
//arrofstr.push(2) show error 
arrofnum.push(1)


let text: number | string
//text = false | shows error  
text = 2
text = 'Jaseel'


let obj2: {
    name: string,
    age: number
    isDeveloper : boolean
}


obj2 = {
    name: 'jaseel',
    age: 22,
    isDeveloper:true
}//should mention every property that already declared,otherwise it will give an error

let age: any = 25 //can be any value in this example thje initial value is 25 and type is number

console.log(typeof age) //output : number

age = '25'
console.log(typeof age)//output : string
age = true
console.log(typeof age)//output : boolean


//array
let mixedarr: any[] = []


mixedarr.push(1)
mixedarr.push('Jaseel')

console.log(mixedarr)

//object
let obj3: { name: any, age: any }

obj3 = {
    name: 'Jaseel',
    age:20
}
console.log(obj3)
obj3 = {
    name: 20,
    age:'Jaseel'
}
console.log(obj3)


//function

function add(num1: number, num2: number, num3: number|string= 20,) {

    console.log(num1 + num2)
    console.log(num3)

}


add(12, 31)


function value(num : number, num2:string){
    return num+num2
}


let result = value(22, "Jaseel") //type of result string



//type aliases
type num = number
function add11(num:num){
    console.log(num)
}
add11(22)


//type aliases object

type obj11 = { name: string, age: number }

function objprint(obj:obj11){
    console.log(obj)
}

let myobj : obj11 = {name:"Jaseel",age:12}

objprint(myobj)
 

//function signature
let calculate : (x: number, y: number, z: string) => number;

calculate = (x,y,z)=>{
    if (z === 'add') {
        return x+y
    }else{
        return x-y
    }
}


let resultofcalc = calculate(22, 33, "sub")

console.log(resultofcalc)

let logdetails: (obj: { name: string, age: number }) => void
type person = { name: string, age: number };

//Generics

let testfunction = <T extends object>(obj: T) => {
    let  randomnumber = Math.random() * 100
     return {...obj,randomnumber}
 }

 let obj5 = {
     name: 'jaseel',
     age: 39,
     isDeveloper:true
 }
 
 let resultss = testfunction(obj5)
 
 console.log(resultss.name, resultss.randomnumber)
 
 interface Resource <T>{
     uid: Number
     resourceName: string
     data:T
 }
 
 
 let obj4: Resource <string[]> = {
     uid:22,
     resourceName: "Resource",
     data:["hlo","hi","missyou"]
     
 }
 
console.log(obj4)
 
//enum


enum restype  { book, pen, mouse,helo,www,eee,io }

let obj22 = {
type : restype.book
}
let obj20 = {
type : restype.io
}


console.log(obj22.type)
console.log(obj20.type)



//tuples

let arr: [string, number] = ['helo', 1]


arr =['jas',1]
// arr =[1,'jj'] //error