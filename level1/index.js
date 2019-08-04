// function solution(year, month, day) {
//     const days = ['sun','mon','tue','wed','thu','fri','sat'];
//     const findDate = new Date(year, month - 1, day).getDay();
//     return days[findDate];
// }
// console.log(solution(2019,8,4));


// function solution(word) {
//     return word.substr(Math.ceil(word.length / 2) - 1, (word.length % 2 !== 0) ? 1 : 2);
// }
// console.log(solution('123456'));


// const arr = ['1','1','2','2','3','4','4'];
// function solution(value) {
//     return value.filter((n,i) => { 
//         return n !== arr[i+1];
//     });
// }
// console.log(solution(arr));


// function solution(arr, num) {
//     const result = arr.filter(n => n % num === 0);
//     return result.length ? result.sort((a,b) => b - a) : [-1] ;
// }
//console.log(solution([15,9,7,10],5));

// ['abce', 'abcd', 'cdx']와 2가 주어지면 2번째 인덱스 글자(c, c, x)를 기준으로 정렬.
// 만약 2번째 인덱스 글자가 서로 같다면(c, c처럼) 사전순으로 정렬. 

const strings = ['abce','abcd','cdx'];

function solution(strings, n) {
    return strings.sort((p, c) => p[n] === c[n] ? p.localeCompare(c) : p[n].localeCompare(c[n]))
}

console.log(solution(strings,2));
