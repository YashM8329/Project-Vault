// console.log("Hii")
// console.warn("This is just  WARNING")
// alert("Danger")
// let fname = prompt("enter your first name: ")
// let lname = prompt("enter your last name: ")
// msg = "Welcome" + fname + lname + "!"
// alert(msg)

// let num = prompt("Enter num : ")
// if(num % 2 == 0){console.log("Good")}
// else{console.log("Bad")}

// let name = prompt("Enter your name: ")
// let age = prompt("Enter your age: ")
// msg = name + " is " + age + " years old"
// alert(msg)
// alert(`${name} is ${age} years old`)

// let num = 1
// switch(num){
//     case 1:
//         console.log("Jan", "Feb", "Mar")
//         break;

//     case 2:
//         console.log("April")
//         console.log("May")
//         console.log("June")
//         break;
    
//     case 3:
//         console.log("July")
//         console.log("August")
//         console.log("Sept")
//         break;

//     case 4:
//         console.log("Oct")
//         console.log("Nov")
//         console.log("Dec")
//         break;

//     default:
//         console.log("Nothing")
// }

// let str = prompt("Enter string: ")
// if(str[0] == "A" || str[0] == "a")
// {
//     if(str[4] != "/0"){console.log("Golden")}
//     else{console.log("Not a golden")}
// }
// else{console.log("Not a golden")}

// let num1 = prompt("Enter the first num: ")
// let num2 = prompt("Enter the second num: ")
// let num3 = prompt("Enter the third num: ")
// if(num1 >= num2 && num1 >= num3){console.log(num1)}
// else if(num1 <= num2 && num2 >= num3){console.log(num2)}
// else{console.log(num3)}

// let num1 = prompt("Enter the first num: ")
// let num2 = prompt("Enter the second num: ")
// if(num1 % 10 == num2 % 10){console.log("Yes")}
// else{console.log('No')}

// let arr = [3, 7, 8, 4, 6, 3]
// let num = prompt("Enter the number you want array: ")
// console.log(arr.slice(0, num))

// let arr = [3, 7, 8, 4, 6, 3]
// let num = prompt("Enter the number you want array: ")
// console.log(arr.slice(num, 6))

// let str = prompt("Enter the string: ")
// if(str){console.log("Not empty")}
// else{console.log("Empty")}

// let str = prompt("Enter the string: ")
// let element = prompt("Enter the index you want to check: ")
// if(str[element] >= 65 && str[element] <= 96){console.log("Upper case")}
// else{console.log("Lower case")}
// if(str[element] === str[element].toUpperCase()){console.log("Upper case")}
// else{console.log("Lower case")}

// let str = prompt("Enter the string: ")
// console.log(str.trim())

// let arr = [3, 7, 8, 4, 6, 3]
// let num = prompt("Enter the number you want to find in array: ")
// let count = 0
// for(let i=0; i<6; i++)
// {
//     if(arr[i] == num)
//     {
//         console.log("Got the number in array")
//         count = 1;
//         break;
//     }
// }
// if(count == 0){console.log("Number do not exist in array")}

// let arr = [3, 7, 8, 4, 6, 3]
// let num = prompt("Enter the number you want to delete from array: ")
// arr.splice(num, 1)
// console.log(arr)

// let num = prompt("Enter the number: ")
// let i = 0
// while(num[i])
// {
//     i++
// }
// console.log(i)

// let num = prompt("Enter the number: ")
// let i = 0
// let count = 0
// while(num[i])
// {
//     count = count + Math.floor(num[i])
//     i++
// }
// console.log(count)

// let num = prompt("Enter the number: ")
// let count = 1
// while(num)
// {
//     count = count * num
//     num = num - 1
// }
// console.log(count)

// let arr = [3, 7, 8, 4, 6, 3];
// let num = arr[0];
// for(let i=0; i<6; i++)
// {
//     if(arr[i] > num){num = arr[i];}
// }
// console.log(num)

// let num = prompt("Enter the number: ")
// num = Math.floor((((Math.random() + 1) * 10)) / 6)
// console.log(num)

// const car = {
//     name: "Ciaz",
//     model: "Delta",
//     color: "NExa Blue"
// };
// console.log(car.model)

// const Person = {
//     name: "Yash",
//     age: 23,
//     city: "Gandhinagar"
// };

// arr = [2, 4, 6, 7, 8, 9];
// function arrayelements(arr){
//     let num = prompt("Enter the number: ");
//     let newarr = arr.slice(num, 9);
//     return newarr;
// }
// console.log(arrayelements(arr));

// let str="abcdabcdefgggh";
// function getUnique(str)
// {
//     let ans="";
//     for(let i=0; i<str.length; i++)
//     {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1)
//         {
//             ans+=currChar;
//         }
//     }
//     return ans;
// }
// console.log(getUnique(str));

// let arr = ["India", "Australia", "Germany", "United states of america", "Russia"];

// function count(arr)
// {
//     let max = 0;
//     for(let i=0; i<arr.length; i++)
//     {   
//         let count = 0;
//         count = count + arr[i].length;
//         if(count > max)
//         {
//             max = count;
//         }
//     }
//     return max;
// }

// count(arr)
// console.log(count(arr));

// let str = prompt("Enter the string: ");
// console.log(str)
// function strcount(response)
// {
//     let count = 0;
//     for(let i=0; i<str.length; i++)
//     {
//         if(str[i] == "a" || str[i] == "e"|| str[i] == "i"|| str[i] == "o"|| str[i] == "u")
//         {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(strcount(str));

// let start = 15;
// let end = 13;

// function range(a, b)
// {
//     let random = [];
//     for(let i=0; i<5; i++)
//     {
//         let rand = Math.floor(Math.random() * (b-a)) + a;
//         random.push(rand);
//     }
//     return random;
// }

// let arravg  = (a, b) => {
//     return `Hello, ${a+b}, ${a*b}`;
// };
// console.log(arravg(10, 12));

// let arravg  = (a, b) => (a+b);
// console.log(arravg(10, 12));

// let info = (name, age) => ({
//     name: name,
//     age: age
// });
// console.log("Yash", 21);

// let num = [2, 4, 7, 9];
// let squared = num.map(n => n*n);
// console.log(squared);

// const person = {
//     name: 'Yash',
//     greet: function() {
//         console.log(this.name);
//     }
// };

// person.greet();

// let arr = [10, 20, 30];
// let avg = (arr) => {
//     let total = 0;
//     for(let i=0; i<arr.length; i++)
//     {
//         total = total + arr[i]; 
//     }
//     return total/arr.length;
// }
// console.log(avg(arr));

// const isEven = (num) => {
//     if(num % 2 == 0){console.log("Is even");}
//     else{console.log("Not even");}
// }
// isEven(11);

// let arr = [1, 4, 6, 9, 3];
// let square = arr.map(n => n*n)
// console.log(square);

// let sum = square.reduce((acc, el) => acc + el);
// console.log(sum);

// let arr = [1, 4, 6, 7, 2, 9];
// let plus5 = arr.map(n => n+5);
// console.log(plus5);

// let arr = ["fdgaf", "afg", "ae", "aetja"];
// let upper = arr.forEach((arr) => {
//     console.log(arr.toUpperCase());
// });

// const double = (arr, ...args) => [
//     ...arr,
//     ...args.map(v => v*2),
// ];
// console.log(double([1, 4, 7, 12], 4, 9));

// const merge = (obj1, obj2) => ({...obj1, ...obj2});
// console.log(merge({a:1, b:2}, {c:3, d:4}));