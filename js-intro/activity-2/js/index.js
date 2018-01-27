// Functions to draw lines
// An attempt to replicate http://vallandingham.me/sentence_drawings/
'use strict';

// Constants / global variables
const height = 500;
const width = 500;

// Get canvas, set width/height/strokeStyle
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

// Set event listener (onkeydown)
let input = document.getElementById('textInput');
input.onkeydown = drawLines;

const directions = [
    { x: 10, y: 0 },
    { x: 0, y: 10 },
    { x: -10, y: 0 },
    { x: 0, y: -10 }
];

// Function to draw lines
function drawLines() {
    let pos = {
        x: width / 2,
        y: height / 2
    };
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    let words = input.value.split(' ');
    let wordLens = words.map(function (d) {
        return d.length;
    });
    wordLens.forEach(function (d, i) {
        let dirIndex = i % 4;
        let currDir = directions[dirIndex];
        pos.x += (currDir.x * d);
        pos.y += (currDir.y * d);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    });
}


