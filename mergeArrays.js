function merge(arrayOne, arrayTwo){
  var sortArray = arrayOne.concat(arrayTwo);
  return sortArray.sort()
}

//console.log(merge([],[]));

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([ 1, 2, 6 ], []));