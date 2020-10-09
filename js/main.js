const bordSize = 5;
let boardColumns = [];


for (let i = 0; i < bordSize; i++) {
  let boardRow = [];
  for (let k = 0; k < bordSize; k++){
    boardRow[k] = k;
  }
  boardColumns[i] = boardRow;
}
console.log(boardColumns);