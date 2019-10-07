/**
 * 완주하지 못한선수
 */

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];

const solution = (p,c) => {
    p.sort();
    c.sort();

    for ( i = 0 ; i <= c.length ; i++ ) {
        if (c[i] !== p[i]) return p[i];
    }
}

console.log(solution(participant, completion));