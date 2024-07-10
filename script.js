const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const cols = 25;
const rows = 25;
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
}





