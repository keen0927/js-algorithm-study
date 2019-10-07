/**
 * 완주하지 못한선수
 */

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];


// const solution = (p,c) => {
//     p.sort();
//     c.sort();
//     while (p.length) {
//         let pp = p.pop();
//         if (pp !== c.pop()) return pp;
//     }
// }

// const answer = solution(participant, completion);

// console.log(answer);

function solution(participant, completion) {
    var dic = completion.reduce((obj, t) => (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
    // console.log(dic);
    return participant.find(t=> {
        if(dic[t])
            dic[t] = dic[t]-1;
        else 
            return true;
    });
}

var ddd = solution(participant, completion);

console.log(ddd);