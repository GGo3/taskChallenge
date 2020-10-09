const bordSize = 5;
let boardColumns = [];


const createArr = (newArr, value) => {
  for (let i = 0; i < bordSize; i++) {
    let boardRow = [];
    for (let k = 0; k < bordSize; k++){
      boardRow[k] = value;
    }
    newArr[i] = boardRow;
  }
}

createArr(boardColumns, null);

console.table(boardColumns);