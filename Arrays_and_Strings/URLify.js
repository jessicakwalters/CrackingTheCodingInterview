/*write a method to replace all spaces in a string with %20"*/

function URLify(string){
  let url = '';
  for(let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      url += '%20';
    } else {
      url += string[i];
    }
  }
  return url;
}

console.log(URLify('test string'));