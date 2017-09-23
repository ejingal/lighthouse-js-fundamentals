// function lastIndexOf (indexArray, value){
//   if (value !== indexArray){
//     return -1
//   }
// }

function lastIndexOf(indexArray, value) {
function lastIndexOf(indexArray, value) {
  var foundMatch = false;
  var result = 0;
  for (var i = indexArray.length - 1; i >= 0; i--) {
    if (indexArray[i] === value) {
      result = i;
      foundMatch = true;
      break;
    }
  }
  if(foundMatch){
    return result;
  } else {
    return -1;
  }
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

