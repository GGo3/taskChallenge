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




// 6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом. Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null;

const moveForward = document.querySelector('.forward');
const moveBackward = document.querySelector('.backward');
const moveLeft = document.querySelector('.left');
const moveRight = document.querySelector('.right');
let q = 0;
let r = 0;
boardColumns[q][r] = 1;
createBoard(boardColumns);

const moveChangeCells = (event) => {
  if (event.code == 'ArrowUp' && q !=0) {
    clearArr(boardColumns);
    q--;
    boardColumns[q][r] = 1; 
    createBoard(boardColumns);
  } else if (event.code == 'ArrowDown' && q !=4) {
    clearArr(boardColumns);
    q++;
    boardColumns[q][r] = 1;
    createBoard(boardColumns);
    
  } else if (event.code == 'ArrowLeft' && r !=0) {
    clearArr(boardColumns);
    r--;
    boardColumns[q][r] = 1;
    createBoard(boardColumns);
  } else if (event.code == 'ArrowRight' && r !=4) {
    clearArr(boardColumns);
    r++;
    boardColumns[q][r] = 1;
    createBoard(boardColumns);
  }
  console.table(boardColumns);
}
document.addEventListener('keydown', moveChangeCells);


