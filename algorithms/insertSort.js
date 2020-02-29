const arr = [2, 4, 9, 1];
// const arr = [2, 4, 9, 14 ,23 ,7];
// const arr = [2, 1, 4, 3, 9, 14 ,23 ,7];

// const insertionSort = arr => {
//   for (let i = 1; i < arr.length ; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }
//   console.log(arr);
// };

// console.log(insertionSort(arr));


// const insertionSort = arr => {
//   for (let i = 1; i < arr.length ; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//   }
// }

// 2,4,9,14,23,7
// current = 4;
// j = 0;
// 0 >= && 2 > 4 아니므로 넘어가고
// arr[1] = 4;


// function insertionSort(arr) {
//   for ( let i = 1 ; i < arr.length ; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   console.log(arr);
// }


// const insertionSort = (arr) => {

//   for ( let i = 1 ; i < arr.length ; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   console.log(arr);
// }


// 1 , 3, 4, 2
const insertionSort = (arr) => {
  for (let i = 1 ; i < arr.length ; i++) {
    let current = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  console.log(arr);
};

insertionSort(arr);


