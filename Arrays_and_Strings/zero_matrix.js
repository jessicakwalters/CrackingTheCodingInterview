/*write an algorith such that if an element in an MxN matrix is 0, its entire rowna dn column are set to zero*/
function zeroed(matrix){
  let rowsToZero = new Set();
  let colsToZero = new Set();
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  for (let row = 0; row < numRows; row++){
    for(let col = 0; col < numCols; col++){
      if(matrix[row][col] === 0){
        if(!rowsToZero.has(row)){
          rowsToZero.add(row);
        }
        if(!colsToZero.has(col)){
          colsToZero.add(col);
        }
      }
    }
  }
  for(let rowNum of rowsToZero){
    for(let col = 0; col < numCols; col++){
      matrix[rowNum][col] = 0;
    }
  }
  for(let colNum of colsToZero){
    for(let row = 0; row < numRows; row++){
      matrix[row][colNum] = 0;
    }
  }
  return matrix;
}

let fourbyfour = [
  [ 13, 9, 5, 1 ],
  [ 14, 10, 0, 2 ],
  [ 0, 11, 7, 3 ],
  [ 16, 12, 8, 4 ]
];

console.log(zeroed(fourbyfour));