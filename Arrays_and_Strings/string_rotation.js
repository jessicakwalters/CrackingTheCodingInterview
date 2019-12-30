/*write a method to check if s2 is a rotation of s1*/

function isRotation(string1, string2){
 if (string1.length != string2.length){
   return false;
 }
 let doubleString1 = string1+string1;
  if(isSubstring(doubleString1, string2)){
    return true;
  } else {
    return false;
  }
}

function isSubstring(string1, string2){
  return true;
}