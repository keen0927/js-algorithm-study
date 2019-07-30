const arr = [5,9,7,10];

const solution = (arr, divisor) => {
    const result = arr.filter(n =>  n & divisor === 0);
    return result.length ? answer.sort((p,c) => p - c) : [-1] ;
}