function solution(word) {
    console.log(word.substr(Math.ceil(word.length / 2) - 1, word.length % 2 === 0 ? 2 : 1))
}

solution('가나다라마');
