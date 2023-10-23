// 82 урок, 3)
function calculator(num1, sign, num2) {
    if (sign == '+') {
        console.log(num1 + num2)
    }
    else if(sign == '-') {
        console.log(num1 - num2)
    }
    else if(sign == '/') {
        console.log(num1 / num2)
    }
    else if(sign == '*') {
        console.log(num1 * num2)
    }
}
calculator(95, '*', 19)
// 83 урок,1)
const user = { 
     name: 'Dimon',
     CreditCardNumber: 'Zachem on tebe',
     type: 'human' ,
     gender: 'man'
}
// 83 урок,2)
const users = { 
    Dimon: {
       name: 'Dimon',
        CreditCardNumber: 'Zachem on tebe',
        type: 'human' ,
        gender: 'man',
        hello(user) {
            console.log(`Hello `, user)
        } 
    }
}
users.Dimon.hello(`Boris`)
// 83 урок,3)
const Dimon = {
    name: 'Dimon',
    type: 'human',
    admin: false
};
const Chinhunan = {
    name: 'Chinhunan',
    type: 'salamandra',
    admin: false
};
const Alex = {
    name: 'Alex',
    type: 'human',
    admin: true
};
const Max = {
    name: 'Max',
    type: 'human',
    admin: true
};
let countUsers = 0;
const humans = [Dimon, Chinhunan, Alex, Max];
for(let i = 0; i < humans.length; i++) {
    if(humans[i].admin === true) {
        countUsers++;
    }
}
console.log(countUsers);

