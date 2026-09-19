function addTwenty(num, number2) {
    if (number2) {
        return 20 + num + number2;
    }
    //return undefined
    return 20 + num;
}
const ab = addTwenty(10);
const ba = addTwenty(10.4, 34);
console.log(ab);
console.log(ba);
let str1 = 'naman';
str1 = 20;
const order1 = {
    email: 'nj',
    id: '123',
    name: 'nj',
    qty: 4,
    orderStatus: 'Packaged'
};
console.log(order1);
const order2 = {
    email: 'nj',
    id: '123',
    name: 'nj',
    qty: 4,
    orderStatus: 'check',
    packageNumber: 1232321
};
class Animal {
    constructor(name, age) {
    }
}
// interface ReptileI{
//     eat2(): undefined
// }
// interface FlyI{
//     fly(): undefined
// }
class Reptile extends Animal {
    eat() {
        console.log('eating');
    }
}
class Fly extends Animal {
    fly() {
        console.log('flying');
    }
}
// class DracoLizard extends Animal implements Fly, Reptile
class DracoLizard extends Reptile {
    // eat(): undefined{
    //     console.log('eating')
    // }
    fly() {
        console.log('flying');
    }
}
const randomFruit = {
    name: '',
    age: '',
    color: '',
    property: '',
    party: true
};
const p1 = {
    name: 'n',
    age: 2
};
const vipPerson1 = {
    name: 'n',
    age: 2,
    class: '10th'
};
//it will automatically merge both of them 
const schoolBottle1 = {
    height: 100,
    width: 40,
    color: 'red',
    brand: 'abcd'
};
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
};
//Type Guards and Narrowing
function greet(text) {
    if (text === 'morning' || text === 'evening' || text === 'night') {
        return `Good ${text}`;
    }
    //assertion
    // console.log(text in codes)
    else if (text in codes) {
        return codes[text];
    }
    return JSON.stringify(text);
}
console.log(greet(1));
let localStorageValue = '{"name":"naman","age":10}';
let parsedValue = JSON.parse(localStorageValue);
console.log(parsedValue.name);
export {};
//# sourceMappingURL=intro-2.js.map