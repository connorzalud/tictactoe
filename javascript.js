const square = document.querySelector("#one");
const square2 = document.querySelector("#two");
const squares = document.querySelectorAll(".square");

let board = [0,1,2,3,4,5,6,7,8]

const playerFactory = (name, mark, turn)=> {
    return {name, mark, turn}
}

const player1 = playerFactory("player 1", "X", "true");
const player2 = playerFactory("player 2", "O", "false");


squares.forEach(squares =>{
    squares.addEventListener("click",function(e){
        console.log(e.target.dataset.array);
        if(player1.turn==="true"){
            e.target.textContent = player1.mark;
            board.splice(e.target.dataset.array,1, player1.mark);
        } else{
            e.target.textContent = player2.mark
            board.splice(e.target.dataset.array,1,player2.mark)
        }

        checkArray();
    
        if(player1.turn === "true"){
            player2.turn ="true";
            player1.turn ="false"
        } else{
            player2.turn ="false";
            player1.turn="true"
        }
    })})


function checkArray(){
    let win = false;
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
for (i=0; i<wins.length;i++){
    let [a,b,c] = wins[i];
    if(board[a] && board[a]===board[b] && board[a]===board[c]){
        win = board[a];
        break
    }
}

return console.log(win)

}

function gameOver(){
}