function addTwenty( num: number, number2?: number) : number {
    if(number2){
        return 20  + num + number2;
    }
    //return undefined
    return 20  + num
}


const ab = addTwenty(10);
const ba = addTwenty(10.4, 34)
console.log(ab)
console.log(ba)

let str1: String | Number = 'naman' 
str1 = 20

// can amazon order follow a differnet status codes than myntra
//if no
type OrderStatus = 'Ordered' | 'Packaged' | 'Transit' | 'Delivered' | 'Cancelled' | 'Return'

//if yes
type AmazonOrderStatus = 'Ordered' | 'Packaged' | 'Transit' | 'Delivered'
type MyntraOrderStatus = AmazonOrderStatus | 'check'


interface AmazonOrder{
    id: String;
    name: String;
    email: String;
    qty: Number;
    deliveryDate?: String;
    orderStatus: OrderStatus
}

interface MyntraOrder{
    id: String;
    name: String;
    email: String;
    qty: Number;
    deliveryDate?: String;
    packageNumber: Number; //sms 
    orderStatus: MyntraOrderStatus
}
const order1: AmazonOrder = {
    email: 'nj',
    id: '123',
    name: 'nj',
    qty: 4,
    orderStatus: 'Packaged'
}
console.log(order1)

// const order2: Order = {
//     id: '123',
//     name: 'nj',
//     email: 'nj',
// }

type Order = AmazonOrder | MyntraOrder;

const order2: Order = {
    email: 'nj',
    id: '123',
    name: 'nj',
    qty: 4,
    orderStatus: 'check',
    packageNumber: 1232321
}

class Animal{
    constructor(name: String, age: Number){

    }
}
// interface ReptileI{
//     eat2(): undefined
// }
// interface FlyI{
//     fly(): undefined
// }
class Reptile extends Animal implements Reptile{
    eat(): undefined{
        console.log('eating')
    }
}
class Fly extends Animal{
    fly(): undefined{
        console.log('flying')
    }
}


// class DracoLizard extends Animal implements Fly, Reptile
class DracoLizard extends Reptile implements  Fly{
    // eat(): undefined{
    //     console.log('eating')
    // }
    fly(): undefined{
        console.log('flying')
    }
}

//this is not feasible in JS or TS
// class  DracoLizard extends Reptile, Fly{

// }


//type vs interface, whats the difference????

//objects -> interface use krna chaiye
//interface cannot do union

// interface fruitType {
//     type: 'citrus' | 'not-citrus'
// }
interface a{
    name: '',
    age: ''
}
interface b{
    color: '',
    property: ''
}

interface fruitType extends a,b{
    party: boolean
}

const randomFruit: fruitType = {
     name: '',
     age: '',
     color: '',
     property: '',
     party: true

}

type person = {
    name: String,
    age: Number
}
const p1: person = {
    name: 'n',
    age: 2
}

type vipPerson = person & {
    class: String
}

const vipPerson1:vipPerson = {
    name: 'n',
    age: 2,
    class: '10th'
}

/* 
    ideally both of them work very good with objects

        with interface you can utilise extends keyword, and to do the same thing 
        in type we can achieve that by & keyword

    but type can work also with primitive types and supports union (|)

*/

interface bottleI {
    height: number;
    width: number;
    color: string;
}

interface bottleI{
    brand: string
}
//it will automatically merge both of them 

const schoolBottle1: bottleI = {
    height: 100,
    width: 40,
    color: 'red',
    brand: 'abcd'
}
//where would be use something like above????????


//not allowed with type 
// type Anime = {
//     'genre': string
// }
// type Anime = {

// }

//generics -> 
// when a functionality has the ability to do its work with multiple datatypes


//datatype???
//LS -> datatype??? string 
// function convertToLSCompatibility<M>(item: M): string{
//     return JSON.stringify(item)
// } 

// function convertToAnArray<M>(item: M): M[]{
//     return [item]
// }

const codes = {
    1: 'gg',
    2: 'op'
}

//Type Guards and Narrowing
function greet(text: 'morning' | 'evening' | 'night' | number) : String{
    if(text === 'morning' || text === 'evening' || text === 'night'){
        return `Good ${text}`
    }
    //assertion
    // console.log(text in codes)
    else if(text in codes){
        return codes[text as keyof typeof codes] 
    }
    return JSON.stringify(text)
}
console.log(greet(1))

type User = {
    name: String, 
    age: number
}

let localStorageValue = '{"name":"naman","age":10}';
let parsedValue = JSON.parse(localStorageValue) as User;

// console.log(parsedValue.)


