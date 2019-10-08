// 작은 1을 제거해서 [4,3,2]를 리턴하라

const arr = [4,3,2,1];

const solution = (arr) => {
    const getMinNumber = Math.min(...arr);
    const result = arr.filter(value => value !== getMinNumber);
    return result.length ? result : [-1];
}

console.log(solution(arr));