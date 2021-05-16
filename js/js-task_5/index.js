// // Задание 1
// // Сделайте функцию, которая отнимает от первого числа второе и делит на
// // третье. Числа передаются параметром.

// let sumDivision = function(a,b,c){
//     let result = (a - b) / c;
//     return result;
// };
// console.log(sumDivision(100,10,2));


// // Задание 2
// // Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// // передается параметром.

// let cube = function(a){
//     return Math.pow(a,3);
// };
// let square = function(a){
//     return Math.pow(a,2);
// };
// console.log(cube(2), square(2));

// // Задание 3
// // Напишите функции min и max, которые возвращают меньшее и большее из
// // чисел a и b.

// let minNumber = function(a,b){
//     return Math.min(a,b);
// }
// console.log(minNumber(158,9));

// let maxNumber = function(a,b){
//     return Math.max(a,b);
// }
// console.log(maxNumber(158,9));

// Задание 4
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

// a = +prompt("Введите первое число");
// b = +prompt("Введите второе число");

// let createArray = function(a,b) {
//     let array = [];
//     for (let i = a; i<=b; i++) {
//         array.push(i);
//     };
//     return(array);
// };

// let newArray = function(){
//     console.log(createArray(a,b));
// };
// newArray()

// Задание 5
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

// let isEven = function(a) {
//     if (a % 2 == 0) {return true}
//     else {return false};
// };
// console.log(isEven(2));
// console.log(isEven(5));

// Задание 6
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

// let arrCreate = function(ar) {
//     let newArr = [];
//     for (let i=0; i<ar.length; i++) {
//         if(isEven(ar[i])!==true) continue;
//         newArr.push(ar[i]);
//     }
//     console.log(newArr);
// }
// arrCreate([1,8,5,210,67,94,666]);

// Задание 7

// let a = prompt("Введите первое число от 1 до 9");
// let b = prompt("Введите второе число от 1 до 9");
// let pyramid = function(a,b) {
//     for(let i=1; i<=a; i++) {
//         let str=''
//     }
//     for(let j=1; j<=i; j++){
//         str = str + i;
//         if(b==null){
//             document.write(i);
//         }
//         else document.write(b);
//     }
//     document.write(str+ '<br>');
// }

// Задание 8
// Дан массив с числами (передается параметром). Выведите последовательно его элементы, 
// используя рекурсию и не используя цикл.


// let arrCreate = function(array){
//     console.log(array[i]);
//     i++;
//     if(i<array.length) arrCreate(array);
// }
// let i=0;
// arrCreate([9,48,-99,14,666,4567,90,-405]);

// Задание 9
// Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток 
// (Доброе утро\день\вечер\ночи Иван)

// let firstName = prompt('Как вас зовут?')
// let today = new Date();
// console.log(today.getHours());
// let hours = +today.getHours();
// let greeting = function(firstName, hours) {
//     if(hours>=0 && hours<6){
//         return(`Доброй ночи, ${firstName}`);
//     }
//     if(hours>=6 && hours<12){
//         return(`Доброе утро, ${firstName}`);
//     }
//     if(hours>=12 && hours<17){
//         return(`Добрый день, ${firstName}`);
//     }
//     if(hours>=17 && hours<24){
//         return(`Добрый вечер, ${firstName}`);
//     }
    
// }
// console.log(greeting(firstName, hours));