// circulo &#11093;
// equis &#1093;

let board; 
let numSelected=0;
let primerclick;
let segundoclick;
let Indice=0;

function createBoard(numRows, numCols) {
    const rows = []
    cards=aleatorioSignos();
    for (let i = 0; i < numRows; i++) {
        const casillas = []

        for (let j = 0; j < numCols; j++) {
            casillas.push({
                seMuestra : false,
                emoji :cards[Indice],
            })
            Indice++;
        }
      
        rows.push(casillas)
    }

    return rows
}
function mostrarSignos(board){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            board[i][j].seMuestra = true;
        }
    }
 
}

function aleatorioSignos(){
    let cards = ["&#11093;","&#1093;","&#11093;","&#1093;","&#11093;","&#1093;","&#11093;","&#1093;","&#11093;"];
    let mezclar = cards.sort(() => Math.random() - 0.5);

    return mezclar;
    
}

function printBoard(board) {
    for (let row of board) {
        let rowStr = ""
        for (let casilla of row) {
            rowStr = rowStr + casilla + " "
        }
        console.log(rowStr)
    }
}

function setValue(board, row, col, value) {
    board[row][col] = value
}

const getValue = (board, row, col) => {
    return board[row][col]
}

const renderizarBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
        const casillas = board[i]
        for (let j=0; j < casillas.length; j++) {
            const butCasilla = document.getElementById(`${i}_${j}`) 
            if (casillas[j].seMuestra) {
                butCasilla.innerHTML = casillas[j].emoji
            }else {
                butCasilla.innerHTML = ""
            }
            
        }
    }
}


const casillaOnClick = (row, col) => {
    
    if (numSelected==1){
       console.log(numSelected);
    const casilla = getValue(board, row, col)
    casilla.seMuestra = true
    numSelected++;
    }
    if(numSelected==2){
       
        
    }
    }


const main = () => {
    board = createBoard(3, 3) 
    renderizarBoard(board)
    mostrarSignos(board)
    renderizarBoard(board)
 
 


}

main()















