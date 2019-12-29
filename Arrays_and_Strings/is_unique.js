/*Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?*/

function isUnique(string) {
  for(let i = 0; i < string.length; i++){
    for(let j = 0; j < string.length; j++){
      if(i != j){
        if(string[i] === string[j]){
          return false;
        }
      }
    }
  }
  return true;
}

console.log(isUnique('abcda'));