// 작은 1을 제거해서 [4,3,2]를 리턴하라

const arr = [4,3,2,1];

const solution = (arr) => {
    // 배열의 최소값을 구하고
    const getMinNumber = Math.min(...arr);
    // 필터로 돌려서 최소값이면 리턴
    return arr.filter(v => v !== getMinNumber);
}

console.log(solution(arr));