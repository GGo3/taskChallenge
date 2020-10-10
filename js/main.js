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

let clearValue = 1;
const checkArr = (arrCheck) => {
  clearValue = 0;
  for (let i = 0; i < arrCheck.length; i++) {
    for (let k = 0; k < arrCheck[i].length; k++) {
      if (arrCheck[i][k] !== null){
        clearValue++;
      }
    }
  }
};

//**************** 4) функция отображения на странице игрового поле(клетки массива) и строка статуса, в которой написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.

const mainEl = document.querySelector('.main');
let str = '';

const createBoard = (arrBoard) => {
  let str = '';
  mainEl.innerHTML = '';
  for (let i = 0; i < arrBoard.length; i++) {
    for (let k = 0; k < arrBoard[i].length; k++) {
      if (arrBoard[i][k] !== null){
        str = `${str}<div class="defolts_cells blue"></div>`;
      } else {
        str = `${str}<div class="defolts_cells white"></div>`;
      }
    }
  }
  str = `${str}<div class="status">${clearValue}</div>`;
  mainEl.innerHTML = str;
};

let currentPosition=[0, 0];
boardColumns[currentPosition[0]][currentPosition[1]] = 1;
createBoard(boardColumns);
console.table(boardColumns);


// 6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом. Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null;

const moveUp = document.querySelector('.up');
const moveDown = document.querySelector('.down');
const moveLeft = document.querySelector('.left');
const moveRight = document.querySelector('.right');


const moveCell = (x, y) => {
  clearArr(boardColumns);
  boardColumns[currentPosition[0] + x][currentPosition[1] + y] = 1;
  currentPosition[0] += x;
  currentPosition[1] += y;
  createBoard(boardColumns);
  checkArr(boardColumns);
};

const moveCellUp = () => moveCell(-1, 0);
const moveCellDown = () => moveCell(1, 0);
const moveCellLeft = () => moveCell(0, -1);
const moveCellRight = () => moveCell(0, 1);

moveDown.addEventListener('click', moveCellDown);
moveUp.addEventListener('click', moveCellUp);
moveLeft.addEventListener('click', moveCellLeft);
moveRight.addEventListener('click', moveCellRight);

const handleKeyboard = (t) => {
  t = t || window.event;
  switch (t.keyCode) {
    case 38:
      moveCellUp();
      break;
    case 40:
      moveCellDown();
      break;
    case 37:
      moveCellLeft();
      break;
    case 39:
      moveCellRight();
      break;
  }
}
document.addEventListener('keydown', handleKeyboard);
