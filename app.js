let color = "black";

function createSquares(size){
    let canvas = document.getElementById("canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach((div) => div.remove );
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for(let i=0; i <amount; i++){
        let square = document.createElement("div");
       
        square.addEventListener("mouseover", squareColor);
        square.style.backgroundColor = "white";
        canvas.insertAdjacentElement("beforeend", square);
    }
}

createSquares(16);

function adjustSize(input){
    if(input >= 2 && input <= 100){
    createSquares(input);
    }else{
        alert("error");
    }

}

function squareColor(){
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100% , 50%)`;

    }else{
    this.style.backgroundColor = color;
    }}


function changeColor(choice){
    color = choice;
}

function resetCanvas(){
    let canvas = document.getElementById("canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor ="white" );
}