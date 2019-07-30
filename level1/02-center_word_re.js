function solution(word) {
    console.log(word.substr((Math.ceil(word.length) / 2) - 1,word.length % 2 === 0 ? 2 : 1));
}


solution('동해물과 백두산이 마르고 닳도록');