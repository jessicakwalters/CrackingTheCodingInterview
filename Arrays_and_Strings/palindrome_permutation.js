/*given a string, write a function to check if it is a permutation of a palindrome"*/
function palidromePermutation(string){
  let letters = new Map();
  for(let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      i++;
    }
    if(letters.has(string[i])){
      let value = letters.get(string[i]);
      letters.set(string[i], !value);
    } else{
      letters.set(string[i], true);
    }
  }
  let numSingleChars = 0;
  for(let [key, value] of letters) {
    if(value){
      numSingleChars++;
    }
  };
  return numSingleChars <= 1;
}

console.log(palidromePermutation('taco cat'));