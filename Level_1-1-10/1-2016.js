// 2019년 10월 8일은 무슨 요일일까?

const solution = (y,m,d) => {
    var week = ['일','월','화','수','목','금','토'];
    return week[new Date(y, m - 1, d).getDay()];
}

console.log(solution(2019, 10, 8));