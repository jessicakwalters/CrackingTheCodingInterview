'use strict';

function compressString(string){
  let compressedString = string[0];
  let currentLetter = string[0];
  let numRepeats = 1;
  for(let i = 1; i < string.length; i++){
    if(string[i] === currentLetter){
      numRepeats++;
    } else {
      compressedString += numRepeats;
      numRepeats = 1;
      compressedString += string[i];
      currentLetter = string[i];
    }
  }
  compressedString += numRepeats;
  if (compressedString.length < string.length){
    return compressedString;
  } else {
    return string;
  }
}

console.log(compressString('aabcccccaaa'));