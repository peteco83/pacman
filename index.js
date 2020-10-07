import { LEVEL, OBJECT_TYPE } from "./setup";

// classes

import GameBoard from "./GameBoard";

// DOM Elements

const gameGrid = document.querySelector("#game");

const scoreTable = document.querySelector("#score");

const startButton = document.querySelector("#start-button");

// Game Constants

const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 80; //ms
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

// Initial Setup

let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

const gameOver = (pacman, grid) => {};

const checkCollision = (pacman, ghosts) => {};

const gameLoop = (pacman, ghosts) => {};

const startGame = () => {};
