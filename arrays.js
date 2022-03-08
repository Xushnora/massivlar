// let newArray = [12, 25, 89, 2, 89, 9];

// for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] % 2 == 1) {
//         console.log(newArray[i]);
//     }
// }


// 1-masala

// let newArray = 10;
// let toqArray = [];
// let b = 0;
// for (let i = 0; true; i++) {
//     if (i % 2 == 1) {
//         if (b < newArray) {
//             toqArray[toqArray.length] = i;
//             b++;
//         } else {
//             break;
//         }
//     }
// }
// console.log(toqArray);


// 2 -masala

// let n = 10;
// let c = [];
// for (let i = 0; i < n; i++) {
//     c[c.length] = 2**i;
// }
// console.log(c);


// 3- masala

// let a = 2;
// let d = 4;
// let n = 7;
// let count = a;
// let arfProg = [];
// for (let i = 0; i < n; i++) {
//     arfProg[arfProg.length] = count;
//     count = a += d;
// }

// console.log(arfProg);


// 4- masala

// let a = 3;
// let d = 2;
// let n = 7;
// let count = a;
// let geoProg = [];
// for (let i = 0; i < n; i++) {
//     geoProg[geoProg.length] = count;
//     count = a *= d;
// }

// console.log(geoProg);


// 5-masala


// const fibonacci = (n) =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
  
//   console.log(fibonacci(10));



// 6 - masala

// let a = 4;
// let b = 6;
// let c = a;
// let n = 10;
// let newArray = [];
// for(let i = 0; i<n; i++) {
//     c = c + b;
//     newArray[newArray.length] = a;
//     a = b;
//     b = c;
// }
// console.log(newArray);


// 7-masala

// let n = [1,2,3,4,5,8];
// let nevArr = [];
// for (let i = n.length-1; i >= 0; i--) {
//     nevArr[nevArr.length] = n[i];
// }
// console.log(nevArr);


// 8-masala

// let n = [4, 5, 6, 7, 8, 9];
// let c = 0;
// let sum = [];
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 == 1) {
//         sum.push(n[i]);
//         c++;
//     }
// }
// console.log(sum, "toqlar soni: ", c, "ta");


// 9

// let n = [4, 5, 6, 7, 8, 9];
// let c = 0;
// let sum = [];
// for (let i = n.length - 1; i >= 0; i--) {
//     if (n[i] % 2 == 0) {
//         sum.push(n[i]);
//         c++;
//     }
// }
// console.log(sum, 'juftlar soni: ', c, "ta");


// 10

// let n = [4, 5, 6, 7, 8, 9];
// let c = 0;
// let b = 0;
// let sum = [];
// let sum2 = [];
// for (let i = n.length - 1; i >= 0; i--) {
//     if (n[i] % 2 == 1) {
//         sum.push(n[i]);
//         c++;
//     }
// }
// for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 == 0) {
//         sum2.push(n[i]);
//         b++;
//     }
// }
// console.log(sum2, "Juftlar soni: ", b, "ta");
// console.log(sum, 'toqlar soni: ', c, "ta");


// 18-masala


// function find(arr){
//     let lastNumber = arr[arr.length-1]
//     let find = 0
//     for (let index = 0; index < arr.length; index++) {
//         if(lastNumber>arr[index]) {
//             // console.log(arr[index])
//             return arr[index]
//         }
//     }
//     return 0
// }

// let arr = [6, 2, 3, 4, 5]
// console.log(find(arr));


// 19-masala

