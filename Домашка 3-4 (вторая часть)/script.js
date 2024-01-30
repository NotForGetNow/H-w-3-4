// let numA = prompt('Введите число')
// let numB = prompt('Введите число')
// let n = prompt('Введите число')
// let Num1 = prompt('Введите число')
// let Num2 = prompt('Введите число')
// let Num3 = prompt('Введите число')

let height = prompt('Высота')
let width = prompt('Длинна')

function square( height, width) {

    if (width == undefined) {
        let res = height * 4
    }
    
    else{ 
        
    }
}
alert(width)

// Соединение чисел
// let res = Num1 + Num2 + Num3
// alert(res)

// Как вычеслить факториал
// function factorial(n) { 
//     return n ? n * factorial(n - 1) : 1;
//   }
  
// alert( factorial(n) ); 

// Сравнение чисел
// function compare(a, b) {
//     if (numA < numB) {
//         return -1;
//     }

//     else if (numA > numB) {
//         return 1;
//     }

//     else {
//         return 0;
//     }
// }

// let res = compare(7, 3)
// alert(res)



































































// #1
// let age = prompt('Введите ваш возраст')
// if (age <= 12) {
//     alert('вы ребенок')
// }
// else if (age <= 18) {
//     alert('вы подросток')
// }
// else if (age <= 60) {
//     alert('вы взрослый')
// }
// else if (age > 60) {
//     alert('вы пенсионер')
// }


// // #2
// let num = prompt('Введите число 0-9')
// if (num == 1) {
//     alert('!')
// }
// else if (num == 2) {
//     alert('@')
// }
// else if (num == 3) {
//     alert('#')
// }
// else if (num == 4) {
//     alert('$')
// }
// else if (num == 5) {
//     alert('%')
// }
// else if (num == 6) {
//     alert('^')
// }
// else if (num == 7) {
//     alert('&')
// }
// else if (num == 8) {
//     alert('*')
// }
// else if (num == 9) {
//     alert('(')
// }
// else if (num == 0) {
//     alert(')')
// }


// // #3 Вычеслить, есть ли одинаковые числа
// let str = prompt('Введите число');
// str = Array.from(str);
// alert(str.some((v,i,a) => str.lastIndexOf(v) != i ) ? 'Есть одинаковые' : 'Нет одинаковых');


// // #4 високосный или нет год
// let year = prompt('Введите ваш год');
// if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
//     alert('Високосный')
// }
// else {
//     alert('Не високосный')
// }

