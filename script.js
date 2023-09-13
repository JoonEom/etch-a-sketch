const grid = document.querySelector('.grid-container');
const gridCell = document.getElementsByClassName('cell');
const reset = document.querySelector('.reset');
const resolution = document.querySelector('.resolution');
let gridWidth = 16;


function createGrid(gridWidth)
{
    let gridArea = gridWidth ** 2;
    for (let i = 0; i < gridArea; i++)
    {
        let tempCell = document.createElement("div");
        tempCell.classList.add('cell');
        //css style for grid
        grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
        grid.insertAdjacentElement('beforeend', tempCell);

    }
    for(let i = 0; i < gridArea; i++)
    {
        gridCell[i].addEventListener('mouseenter', function (e) {
            e.target.style.backgroundColor = "black";
        })
    }
}

function resetGrid(){
    for (let i=0; i < (gridWidth * gridWidth); i++) {
        gridCell[i].style.backgroundColor = "white";
    }
}

reset.addEventListener("click", function () {
    for (let i=0; i < (gridWidth * gridWidth); i++) {
        gridCell[i].style.backgroundColor = "white";
    }

},false);

resolution.addEventListener("click",function(){
    let userInput = prompt("Enter a number 1-100: ");
    while(userInput > 100 || userInput < 1 || isNaN(userInput))
    {
        userInput = prompt("Not in range. Please enter again: ")
    }
    gridWidth = userInput;
    createGrid(gridWidth);
    resetGrid();
    
});




createGrid(gridWidth);
  
