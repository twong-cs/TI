/**
 * @param {character[][]} board
 * @return {boolean}
 */

/** 
 * board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
 * 
*/
// var isValidSudoku = function (board) {
//   //checks for rows
//   for (let i = 0; i < board.length; i++) {
//     const cache = new Set();
//     for (let j = 0; j < board[i].length; j++) {
//       if (cache.has(board[i][j])) return false;
//       if (board[i][j] !== '.') cache.add(board[i][j]);
//     }
//   }

//   //check for columns
//   for (let i = 0; i < board.length; i++) {
//     const cache = new Set();
//     for (let j = 0; j < board[i].length; j++) {
//       if (cache.has(board[j][i])) return false;
//       if (board[j][i] !== '.') cache.add(board[j][i]);
//     }
//   }

//   //check for within 3x3 grid
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const cache = new Set();
//       for (let k = 0; k < 3; k++) {
//         if (cache.has(board[i * 3 + j][j * 3 + k])) return false;
//         if (board[i * 3 + j][j * 3 + k] !== '.')
//           cache.add(board[i * 3 + j][j * 3 + k]);
//       }
//     }
//   }

//   return true;
// };

var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const rowCache = new Set();
    const columnCache = new Set();
    const boxCache = new Set();
    for (let j = 0; j < board[i].length; j++) {
      const rowVal = board[i][j];
      const columnVal = board[j][i];
      const boxVal =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowCache.has(rowVal)) return false;
      if (rowVal !== '.') rowCache.add(rowVal);

      if (columnCache.has(columnVal)) return false;
      if (columnVal !== '.') columnCache.add(columnVal);
      console.log(
        3 * Math.floor(i / 3) + Math.floor(j / 3),
        3 * (i % 3) + (j % 3)
      );

      if (boxCache.has(boxVal)) return false;
      if (boxVal !== '.') boxCache.add(boxVal);
    }
  }

  return true;
};

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board));

const board2 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['8', '.', '.', '.', '8', '.', '.', '7', '9'],
];
// console.log(isValidSudoku(board2));

const board3 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '5'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
// console.log(isValidSudoku(board3));

const board4 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board4));
