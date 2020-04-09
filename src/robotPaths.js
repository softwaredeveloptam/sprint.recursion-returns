class Board {
  constructor(size) {
    this.board = []; //[[false, false, false], [false, false, false], [false, false, false]]  size = 3  row[0, 1 , 2] col[0, 1, 2]
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
    this.size = size;
  }

  solve(x, y) {
    let paths = 0;
    let size = this.size;
    let board = this.board;

    function innerFunc(x, y) {
      if (x === size - 1 && y === size - 1) {
        //exit case
        paths++;
        return;
      }
      if (x < 0 || x >= size || y < 0 || y >= size) {
        return;
      }
      if (board.hasBeenVisited(x, y)) {
        return;
      }
      board.togglePiece(x, y);
      innerFunc(x, y + 1);
      innerFunc(x + 1, y);
      innerFunc(x, y - 1);
      innerFunc(x - 1, y);
      board.togglePiece(x, y);
    }

    innerFunc(0, 0);
    return paths;
  }
}

module.exports = { RobotPaths };
