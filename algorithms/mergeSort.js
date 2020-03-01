const mergeSort = (arr) => {
  // 1보다 아래면 arr 리턴
  if (arr.length <= 1) {
    return arr;
  }

  // 중간점 찾기
  const mid = Math.floor(arr.length / 2);

  // 재귀로 2개로 나누기
  const a = mergeSort(arr.slice(0,mid));
  const b = mergeSort(arr.slice(mid));

  // 결과값
  const result = [];

  let indexA = 0;
  let indexB = 0;

  while(indexA < a.length && indexB < b.length) {
    const elementA = a[indexA];
    const elementB = b[indexB];
   
    if (elementA <= elementB) {
      result.push(elementA);
      indexA += 1;
    } else {
      result.push(elementB);
      indexB += 1;
    }
    console.log(`while 1 : ${indexA} / ${indexB}`);
  }

  while (indexA < a.length) {
    result.push(a[indexA]);
    indexA += 1;
    console.log(`while 2 : ${indexA}`);
  }
  while (indexB < b.length) {
    result.push(b[indexB]);
    indexB += 1;
    console.log(`while 3 : ${indexB}`);
  }

  return result;
};

console.log(mergeSort([0,6,2,4,1]));