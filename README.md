# Maze Generator
![image](https://github.com/user-attachments/assets/87275f7a-7d23-4b97-9d60-d78242d7ea73)
Live: https://maze-generator-five.vercel.app/
## Overview

This JavaScript program generates a maze using a depth-first search (DFS) algorithm. It visualizes the maze construction process on an HTML canvas, with each cell drawn and connected to its neighbors based on random selection.

## Features

- **Grid-Based Maze**: The maze is composed of cells, each with four walls that can be removed to connect to adjacent cells.
- **Depth-First Search**: The maze is generated using the DFS algorithm with backtracking, ensuring a unique path through the maze.
- **Canvas Rendering**: The maze is drawn on an HTML canvas, with cells being highlighted as they are visited.

## How it Works

1. **Initialize Grid**: The grid is initialized with unvisited cells.
2. **Generate Maze**: The algorithm starts at a random cell, marks it as visited, and recursively visits neighboring cells, removing walls to create passages.
3. **Render**: As the maze is generated, it is rendered in real-time on the canvas.

## Requirements

- A web browser with JavaScript enabled.
