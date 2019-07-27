var arr = [5,9,7,10]

function solution(arr, num) {
    const result = arr.filter(n => n % num === 0);
    return result.length ? result.sort((p, c) => p - c) : [-1];
}

solution(arr,5);