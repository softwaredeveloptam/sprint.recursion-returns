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
    if (x === this.size - 1 && y === this.size - 1) {
      //exit case
      paths++;
      return;
    }
    if (x < 0 || x >= this.size || y < 0 || y >= this.size) {
      return;
    }
    if (this.board.hasBeenVisited(x, y)) {
      return;
    } else {
      this.board.togglePiece(x, y);
      this.solve(x, y + 1);
      this.solve(x + 1, y);
      this.solve(x, y - 1);
      this.solve(x - 1, y);
      this.board.togglePiece(x, y);
    }
    this.solve(0, 0);
    return paths;
  }
}

module.exports = { RobotPaths };
