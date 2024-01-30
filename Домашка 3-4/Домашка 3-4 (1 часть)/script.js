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

