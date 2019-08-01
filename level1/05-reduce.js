const arr = [1, 3, 4, 5, 6];

const result = arr.reduce((acc, cur, index) => {
    console.log(index);
    return acc + cur;
}, 0);

console.log("result : ", result);