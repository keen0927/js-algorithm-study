// var months = ['March','Jan','Feb','Dec'];
// var test = ['20','4','1','3','0'];

// var result = months.sort((a,b) => {
//     // return a - b;
//     return b - a;
// });

// console.log(result);

// var items = [
//     { name:  'Keen', value: 21},
//     { name:  'Hoi', value: 22},
//     { name:  'Sasuke', value: 25},
//     { name:  'Naruto', value: 25},
//     { name:  'KeKe', value: 11},
// ]

// const ddd = items.sort((a, b) => {
//     const resultTempt = a.value < b.value;
//     return resultTempt;
// });


// const ddd = items.sort((a,b) => {
//     const resultA = a.name.toUpperCase();
//     const resultB = b.name.toUpperCase();
//     if ( resultA < resultB ) {
//         return -1;
//     }
//     if ( resultA > resultB ) {
//         return 1;
//     }
//     return 0;
// });

// console.log(ddd);

// var stringArray = ['Blue','Humpback','Beluga'];
// var numericStringArray = ['80','9','700'];
// var numberArray = [40,1,5,200];
// var mixedNumericArray = ['80','9','700',40,1,5,200];

// const compareNumbers = (a,b) => {
//     return a - b;
// }

// String
// console.log(`stringArray : ${stringArray}`);
// console.log(`stringArray : ${stringArray.join()}`);
// console.log(`stringArray Sort : ${stringArray.sort()}`);

// Number
// console.log(`numberArray: ${numberArray.join()}`);
// console.log(`numberArray: ${numberArray.sort()}`);
// console.log(`numberArray: ${numberArray.sort(compareNumbers)}`);

// NumericString
// console.log(`NumericStringArray: ${numericStringArray.join()}`);
// console.log(`Sorted without a compare function: ${numericStringArray.sort()}`);
// console.log(`Sorted with compareNumbers: ${numericStringArray.sort(compareNumbers)}`);

// mix
// console.log(`mixedNumericArrayArray: ${mixedNumericArray.join()}`);
// console.log(`Sorted without a compare function: ${mixedNumericArray.sort()}`);
// console.log(`Sorted with compareNumbers: ${mixedNumericArray.sort(compareNumbers)}`);

const list = ['Bam','Koon','Sin','Keen'];

const mapped = list.map((el, i) => {
    return { index: i, value: el.toLowerCase()};
});

const mappedSort = mapped.sort((a,b) => {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
})

const result = mapped.map((el) => {
    return list[el.index];
})

console.log('mapped', mapped);

console.log('mappedSort', mappedSort);

console.log(result);
