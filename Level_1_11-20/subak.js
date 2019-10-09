const solution = (n) => {
    var tempString = '수박';
    return tempString.repeat(n).substr(0,n);
}

console.log(solution(3));