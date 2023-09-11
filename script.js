const grid = document.querySelector('.grid-container');
const gridCell = document.getElementsByClassName('cell');
let gridWidth = 16;


function createGrid(gridWidth)
{
    let gridArea = gridWidth ** 2;
    for (let i = 0; i < gridArea; i++)
    {
        let tempCell = document.createElement("div");
        tempCell.classList.add('cell');
        grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridWidth}, 1fr)`;
        grid.insertAdjacentElement('beforeend', tempCell);

    }
    for(let i = 0; i < gridArea; i++)
    {
        gridCell[i].addEventListener('mouseenter', function (event) {
            event.target.style.backgroundColor = "black";
        })
    }
}
createGrid(gridWidth);
  
  