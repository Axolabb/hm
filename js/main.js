// Первое задание
'1) Когда ты создаешь переменную через let, то  ее можно будет изменить в будущем, если через const, то нельзя'
const name = 'Dimon'
const CreditCardNumber = 'Zachem on tebe'
const type = 'human' 
const floor = 'Laminate'
const gender = 'man'
type === 'human' ? console.log(name, 'is', type) : console.log( name, "isn't", type);
// Залания по циклам
let i = 2
while(i <= 12) {
    i = i + 2
    console.log(`(1 задание) Число ${i}`)
}

let i2 = 10
while(1 <= i2) {
    console.log(`(2 задание) ${i2}`)
    i2 = i2 - 1
}
// Задания по массивам
const ints = [5, 15, 12, 7, 1, 6]
for(let i = 0; i < ints.length; i++) {
    if(ints[i] % 2 == 0) {
        console.log(`(3 задание)`, ints[i])
    }
}

const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'darkblue', 'violet']
for(let index = colors.length - 1; index >= 0; index--) {
    console.log(`(4 задание) `, colors[index])
}
// Задания по функциям
function hello(name) {
    return '(5 задание) Привет' + name;
}       console.log(hello(' Олег'))

const randomnumbers = [1, 5, 8, 15, 11, 10]
function if10() {
    for(let ii = 0; ii < randomnumbers.length; ii++) {
        if(randomnumbers[ii] >= 10) {
            console.log('(6 задание) ',randomnumbers[ii])
        }
        else {
            console.log('(6 задание) не подходит')
        }
    }
}
if10()

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
