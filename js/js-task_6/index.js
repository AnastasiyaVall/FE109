// Задание 1
// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));

// Задание 2
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

// let date = '2025-12-31';
// let dateReverse = date.replace(/(2025)(-)(12)(-)(31)/, '$5 $2 $3 $4 $1');
// console.log(dateReverse.replace(/ - /g, '/'));

// Задание 3
// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

// способ substring

// let str2 = 'Я учу javascript!';
// console.log(str2.substring(2, 5)); 
// console.log(str2.indexOf('j'));  // первое вхождение буквы j для слова javascript
// console.log(str2.indexOf('t')); // первое вхождение буквы t для слова javascript
// console.log(str2.substring(6, 16));

// способ substr

// let str2 = 'Я учу javascript!';
// console.log(str2.substr(2, 3));  
// console.log(str2.substr(6, 10));

// способ slice

// let str2 = 'Я учу javascript!';
// console.log(str2.slice(2, 5));  
// console.log(str2.slice(6, 16));

// Задание 4
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.



// Задание 5
// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

// let a, b, c;
// let difference = function(a,b){
//     let c = a-b;
//     if (a<b) {return Math.abs(c)}
//     else {return c};
// }
// console.log(difference(3, 5));
// console.log(difference(6, 1));


// Задание 6
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).



// Задание 7
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.


// Задание 8
// Дана почта пользователя test@mail.ru (можно использовать любую)
// Написать ф-цию, которая принимает почту и возвращает из нее логин -
// слово до знака @



// Задание 9
// Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.