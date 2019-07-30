function solution(a,b) {
    var days = ['sun','mon','tue','wed','thu','fri','sat'];
    var result = new Date(2019, a - 1, b).getDay();
    // console.log(result);
    console.log(days[result]);
}

solution(7,24);
