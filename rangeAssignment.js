function range(start, end, step) {
  var someArray = [];
  if (start > end || step < 0 || start === null || end === null || step === null){
    return [];
  }
  for (start; start <= end; start += step) {
    someArray.push(start);
  }
  return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));