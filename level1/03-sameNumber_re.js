const arr = ['1','1','2','2','3','4','4'];

const solution = (arr) => {
    const sameNumber = arr.filter((e,i) => {
        return e !== arr[i+1]
    });
    return sameNumber;
}

console.log(solution(arr));