const solution = (phoneNumber) => {
    // 11자리일때

    // 10자리일때

    // 짝수면 10자리 홀수면 11자리
    const checkNumber = phoneNumber.length % 2 ? 4 : 3;
    return '***-' + '*'.repeat(checkNumber) + '-' + phoneNumber.slice(-4);
}

console.log(solution('0102224444'));
// console.log(solution('01033335555'));