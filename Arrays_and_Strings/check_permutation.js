/*Given two strings, write a method to decide if one is a permutation of the other*/

function isPermutation(string1, string2){
  if (string1.length != string2.length){
    return false;
  }
  let found = false;
  for (let i = 0; i < string1.length; i++){
    for(let j = 0; j < string2.length; j++){
      if (string1[i] === string2[j]){
        found = true;
      }
    }
    if(!found){
      return false;
    }
  }
  return true;
}

console.log(isPermutation('12345', '13245'));