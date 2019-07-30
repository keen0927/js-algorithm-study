// 나누어 떨어지는 숫자 배열 
// [5,9,7,10] 과 5가 주어지면 [5,10]을 리턴하고 아무것도 없으면 -1을 리턴

const arr = [5, 9, 7, 10];

const solution = (arr, num) => {
    const temp = arr.filter(n => n % num === 0);
    return temp.length !== 0 ? temp : [-1];
}


console.log(solution(arr, 5))