// Задание 1
let i;
let arr = [1, 2, 3, 4, 5];
for (i=0; i<arr.length; i++) {
    console.log(arr[i])
}

// Задание 2

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i=0; i<arr.length; i++){
    if ((arr[i] > -10)&&(arr[i] < -3)) {
        console.log(arr[i])}
}

// Задание 3

arr=[];
for (i=23; i<=57; i++) {
    arr.push(i);
}
console.log(arr);

i=23;
arr=[]; 
while (i<=57) {
    i++
    arr.push(i)
}
console.log(arr);
let result=0;
for (i=0; i<arr.length; i++) {
    result +=arr[i]
}
console.log(result);

// Задание 4

arr=['10', '20', '30', '50', '235', '3000'];
for (i=0; i<arr.length; i++) {
    if((arr[i][0] == '1') || (arr[i][0] == 2) || (arr[i][0] == 5));
    {console.log(arr[i])}
}

// Задание 5

let week=['ПН','ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (i=0; i<week.length; i++)
{if ((week[i]== 'СБ') || (week[i]== 'ВС')) {
    document.write("<b>"+ week[i] + "</b>" + "<br>")
    }
    else {
        document.write(week[i] + "<br>");
    }
}

// Задание 6

arr=["компьютер", 20, "разработка", 8];
arr[arr.length]= 50;
console.log(arr);
console.log(arr.length);
console.log(arr[arr.length-1]);

// Задание 7

let num;
i=0, arr=[];
while(true) {
    num = +prompt('Введите число');
    if (isNaN(num)) {
        alert('Это не число. Введите число');
    }
    else if (num ==0) {
        break;
    }
    else {
        arr[i] = num;
        i++;
        console.log(num);
    }
}
console.log(arr);
arr.sort(function(a,b) {
    return a-b;
})
console.log(arr);

// Задание 8

arr=[12,false, 'текст', 4, 2, -5, 0];
let reverseArr=[];
i=0;
while(i < arr.length){
    reverseArr.unshift(arr[i]);
    i++
}
console.log(reverseArr);

// Задание 9

num=0;
arr=[5, 9, 21, , , 9, 78, , , , 6];
console.log(+arr[3]);
for(i=0; i<arr.length; i++) {
    if (arr[i] == undefined) {
        num++;
    }
}
console.log(num);

// Задание 10

arr=[1,8,0,13,76,8,7,0,22,0,2,3,2];
for(i=0; i<arr.length; i++) {
    if (arr[0] !== 0) {
        arr.shift();
    }
    else {
        break;
    }
}
for(i=arr.length - 1; i >= 0; i--) {
    if(arr[arr.length-1] !==0) {
        arr.pop()
    }
    else {
        break;
    }
}
console.log(arr);
sum=0;
for (i=0; i<arr.length; i++) {
    sum +=arr[i];
}
console.log(sum);