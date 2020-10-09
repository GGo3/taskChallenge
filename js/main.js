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
let clearValue = 0;
const checkArr = (arrCheck) => {
  for (let i = 0; i < arrCheck.length; i++) {
    for (let k = 0; k < arrCheck[i].length; k++) {
      if (arrCheck[i][k] !== null){
        clearValue++;
      }
    }
  }
  console.log(clearValue);
};

checkArr(boardColumns);

//**************** 4) функция отображения на странице игрового поле(клетки массива) и строка статуса, в которой написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.

const mainEl = document.querySelector('.main');
let str = '';

const createBoard = (arrBoard) => {
  for (let i = 0; i < arrBoard.length; i++) {
    for (let k = 0; k < arrBoard[i].length; k++) {
      if (arrBoard[i][k] !== null){
        str = `${str}<div class="defolts_cells black"></div>`;
      } else {
        str = `${str}<div class="defolts_cells white"></div>`;
      }
    }
  }
  str = `${str}<div class="status">${clearValue}</div>`;
  mainEl.innerHTML = str;
};

createBoard(boardColumns);

