// 같은 숫자는 싫어
// [1,1,3,3,0,1,1] 역속되는 중복을 제거하는 문제

function solution(arr) {

    const result = arr.filter((n,i) => {
        return n !== (arr[i+1]);
    })
    console.log(result);
    return result;
}

var arr = [2,2,2,4,5,5,5,0,3,3,3]

solution(arr);