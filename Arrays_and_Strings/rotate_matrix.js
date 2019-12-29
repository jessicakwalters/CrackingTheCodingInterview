/*rotate an nxn matrix 90 degrees*/

function rotate90(matrix){
  let cols = matrix[0].length;
  let rows = matrix.length;
  if(rows != cols){
    return matrix;
  }

  //transpose
   for(let i = 0; i < rows; i++){
     for(let j = i; j < cols; j++){
       let temp = matrix[i][j];
       matrix[i][j] = matrix[j][i];
       matrix[j][i] = temp;
     }
   }
   //reverse
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols/2; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][cols - j - 1];
      matrix[i][cols - j - 1] = temp;
    }
  }
 return matrix;
}
let threebythree = [[1,2,3],[4,5,6],[7,8,9]];
let fourbyfour = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(rotate90(threebythree));
console.log(rotate90(fourbyfour));