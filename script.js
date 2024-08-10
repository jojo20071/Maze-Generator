const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const cols = 31;
const rows = 302;
const cellSize = canvas.width / cols;

let grid = [];
let stack = [];
let solutionPath = [];

class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]; // top, right, bottom, left
    this.visited = false;
  }

  draw() {
    const x = this.i * cellSize;
    const y = this.j * cellSize;

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;

    if (this.walls[0]) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + cellSize, y);
      ctx.stroke();
    }
    if (this.walls[1]) {
      ctx.beginPath();
      ctx.moveTo(x + cellSize, y);
      ctx.lineTo(x + cellSize, y + cellSize);
      ctx.stroke();
    }
    if (this.walls[2]) {
      ctx.beginPath();
      ctx.moveTo(x + cellSize, y + cellSize);
      ctx.lineTo(x, y + cellSize);
      ctx.stroke();
    }
    if (this.walls[3]) {
      ctx.beginPath();
      ctx.moveTo(x, y + cellSize);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    if (this.visited) {
      ctx.fillStyle = "#fff";
      ctx.fillRect(x, y, cellSize, cellSize);
    }
  }

  highlight(color) {
    const x = this.i * cellSize;
    const y = this.j * cellSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cellSize, cellSize);
  }

  checkNeighbors() {
    let neighbors = [];

    const top = grid[index(this.i, this.j - 1)];
    const right = grid[index(this.i + 1, this.j)];
    const bottom = grid[index(this.i, this.j + 1)];
    const left = grid[index(this.i - 1, this.j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      const r = Math.floor(Math.random() * neighbors.length);
      return neighbors[r];
    } else {
      return undefined;
    }
  }
}



