// // Задание 1
// let nameUser = prompt('Ваше имя?'),
//     age = prompt('Ваш возраст?'),
//     city = prompt('В каком городе вы живете?'),
//     phone = prompt('Ваш номер телефона'),
//     email = prompt('Ваш адрес электронной почты'),
//     company = prompt('В какой компании вы работаете?');

// document.write('Меня зовут '+nameUser+'. Мне '+age+' лет.<br> Я проживаю в городе '+city+' и работаю в компании '+company+' <br> Мои контактные данные:<br>'+phone+', '+email);

// // Задание 2
// let today = new Date(2021);
// let yyy = today.getFullYear;
// let birth = today - age;
// document.write('<br>'+ nameUser + ' родился в ' + birth + ' году.');

// Задание 3

let num = '987654';
if ((+ num[0] + +num[1] + +num[2]) == (+num[3] + +num[4] + +num[5])) {
    console.log('Да');
}
else{
    console.log('Нет');
}

// Задание 4

let a = 1;
if (a > 0) {
    console.log('Верно');
}
else{
    console.log('Неверно');
}

// Задание 5

a=10;
let b=2;

if((a + b) > 1) {
    console.log(Math.pow(a + b, 2));
}

console.log(a - b);
console.log(a * b);
console.log(a / b);

// Задание 6

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно');
}

else{
    console.log('Неверно');
}