const bordSize = 5;
let boardColumns = [];

//****************1) создание двумерного массива ****************

for (let i = 0; i < bordSize; i++) {
  let boardRows = [];
  for (let k = 0; k < bordSize; k++){
    boardRows[k] = k;
  }
  boardColumns[i] = boardRows;
}

//**************** */ 2) функция очистки массива ****************

const clearArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      arr[i][k] = null;
    }
  }
};
clearArr(boardColumns);

//**************** 3) функция подсчета ненулевых(непустых) клеток во всём массиве ****************

const checkArr = (arrCheck) => {
  let clearValue = 0;
  for (let i = 0; i < arrCheck.length; i++) {
    for (let k = 0; k < arrCheck[i].length; k++) {
      if (arrCheck[i][k] == null){
        clearValue++;
      }
    }
  }
  console.log(clearValue);
};

checkArr(boardColumns);



console.table(boardColumns);

