// Задание 1
for (let i=1; i<=50; i++) {
    console.log(i);
}
for (i=35; i>=8; i--) {
    console.log(i);
}
// Задание 2

i=89;
while (i>=11) {
    document.write(i);
    document.write("<br>");
    i--
}

// Задание 3

sum=0;
for (i=0; i<=100; i++) {
    sum=sum+i;
}
console.log(sum);

// Задание 4

sum=0;
for (i=1; i<=5; i++) {
    sum=sum+i;
    console.log("Сумма в числе "+i+" равна "+sum);
}

// Задание 5

for (i=8; i<=56; i++) {
    if (i % 2 ==0) {
        console.log(i);
    }
}
i=8;


while( i<=56) {
    if (i % 2==0) {
        console.log(i);
    }
        i++
}
// Задание 6

for ( i=2; i<=10; i++) {
    for (let j=2; j<=10; j++) {
        console.log(i + '*' + j + '=' +(i*j));
    }
    console.log('------');
}


// Задание 7

let n=1000; num=0;
i=1;
do {
    n=n/2;
    num=num+1;
    i++;
}
while (n>=50);
    console.log(n);
    console.log(num);

// Задание 8

let avgNum=0;
sum=0;
i=0;
while (true) {
    num = +prompt("Введите число");
    if (isNaN(num)) {
        alert("Введите число");
    }
    else if (num==0) {
        break;
    } else{
        sum=sum+num;
        i++;
    }
console.log(num +" " + sum+ " " + i);
}
console.log("Сумма "+ sum +" Среднее " + sum/i);

// Задание 9

let str= "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let arrStr=str.split(" ");
let max=arrStr[0], min=arrStr[0];
for (i=0; i<arrStr.length; i++) {
    if(arrStr[i]>max) {
        max=arrStr[i]
    }
    if(arrStr[i]<min) {
        min=arrStr[i]
    }
}
console.log(`MAX ${max}, MIN ${min}`);


// Задание 10

sum=0;
str= prompt('Введите число');
console.log('Введенное число ' +str);
arrStr = str.split('');
console.log(arrStr);
console.log('В числе ' +arrStr.length+ ' цифр(ы)');
for(i=0; i<arrStr.length; i++) {sum=sum + +arrStr[i]}
console.log('Сумма цифр введенного числа ' +sum);
reverseArrstr = arrStr.reverse();
reverseStr = reverseArrstr.join('');
console.log('Обратный порядок цифр ' +reverseStr);