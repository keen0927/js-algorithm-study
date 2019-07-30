// 나누어 떨어지는 숫자 배열 
// [5,9,7,10] 과 5가 주어지면 [5,10]을 리턴하고 아무것도 없으면 -1을 리턴
var arr = [5, 9, 7, 10]

function solution(arr, num) {
    const result = arr.filter(n => n % num === 0);
    return result.length ? result.sort((p, c) => p - c) : [-1];
}

solution(arr, 5);