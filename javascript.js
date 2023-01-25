const square = document.querySelector("#one");
const square2 = document.querySelector("#two");
const squares = document.querySelectorAll(".square");
const header = document.querySelector(".header-container");

let board = [0,1,2,3,4,5,6,7,8]

const playerFactory = (name, mark, turn)=> {
    return {name, mark, turn}
}

const player1 = playerFactory("player 1", "X", "true");
const player2 = playerFactory("player 2", "O", "false");


squares.forEach(squares =>{
    squares.addEventListener("click", clickSquare
        )})


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
        squares[a].classList.replace("x-mark","win")||squares[a].classList.replace("o-mark","win");
        squares[b].classList.replace("x-mark","win")||squares[b].classList.replace("o-mark","win");
        squares[c].classList.replace("x-mark","win")||squares[c].classList.replace("o-mark","win");
        gameOver(win);

        for (j=0;j<squares.length;j++){
            if(!squares[j].classList.contains("win")){
                squares[j].classList.replace("x-mark", "lose")||squares[j].classList.replace("o-mark","lose");
            }
            }
        
    }
}



 

return win

}

function clickSquare(e){
    console.log(e.target.dataset.array);
        if(player1.turn==="true"){
            e.target.textContent = player1.mark;
            e.target.classList.add("x-mark");
            board.splice(e.target.dataset.array,1, player1.mark);
        } else{
            e.target.textContent = player2.mark
            e.target.classList.add("o-mark")
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
    }


function gameOver(win){

    const winText = document.createElement("div");
    winText.setAttribute("class","win-text"); 
    squares.forEach(squares=>
        squares.removeEventListener("click", clickSquare))
    if(win === "X"){
       winText.innerText = `${player1.name} won!`;
       header.append(winText);

    } else {
       winText.innerText = `${player2.name} won!`;
       header.append(winText);
    }
}


