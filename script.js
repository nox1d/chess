const BOARD = document.getElementById('board');
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']; 
const RANKS = ['1', '2', '3', '4', '5', '6', '7', '8'];

for (let rank of RANKS) {
    for (let file of FILES) {
        let square = document.createElement('div');
        square.className = 'square';
        BOARD.appendChild(square);
    }
}

console.log(BOARD.childElementCount);