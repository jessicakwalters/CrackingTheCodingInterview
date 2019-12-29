/*there are three types of edits that can be performed on a string: insert, remove, and replace. Given two strings, write a function to check if they are one edit or zero edits away*/

function isOneAway(string1, string2){
 if(string1.length === string2.length) {
   return replaceOne(string1, string2);
 } else if(string1.length + 1 === string2.length){
   return addOrRemoveOne(string2, string1);
 } else if(string1.length - 1 === string2.length){
   return addOrRemoveOne(string1, string2);
 }
 return false;
}

function replaceOne(string1, string2){
  let foundDiff = false;
  for(let i = 0, j = 0; i <string1.length; i++, j++){
    if(!foundDiff && string1[i] !== string2[j]){
      foundDiff = true;
    } else if (foundDiff && string1[i] !== string2[j]){
      return false;
    }
  }
  return true;
}

function addOrRemoveOne(string1, string2){
  //note the longer string is string1
  let foundDiff = false;
  for(let i = 0, j = 0; i < string1.length; i++, j++){
    if(!foundDiff && string1[i] != string2[j]){
      j--;
      foundDiff = true;
    } else if (foundDiff && string1[i] !== string2[j]){
      return false;
    }
  }
  return true;
}

console.log(isOneAway('bale', 'pale'));