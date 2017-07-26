// import {sum, product} from './modules/functions';
// require("!style-loader!css-loader!./style.css");
// document.write(require('./export.js'));
// const a=3;
// const b = 7;

// import {person, personName} from "./base";
// import p from "./base";
// p();
// person.id++;


class Person {
    // constructor () {
    //     console.log("constr");
    // }
    showId() {
        console.log('9');
    }
}
class Child extends Person{
    constructor () {
        super();
        console.log("c cons");
    }
    ji() {console.log('ji')};
}
let person = new Child();

console.log(typeof Person);
console.log(person instanceof Person);
person.showId();
console.log(person.showId === Person.prototype.showId);
console.log(person.constructor);
console.log(person.__proto__.constructor);
person.ji();