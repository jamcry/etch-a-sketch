const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

let n = getGridSize();
createGrid(n);

function getGridSize() {
    let size = prompt("Grid size N (for NxN): ");
    return size;
}

function createGrid(size) {
    for(let n = 0; n < size**2; n++) {
    let newBox = document.createElement("div");
    newBox.addEventListener("mouseover", function() {
        newBox.style.background = "black";
    });
    newBox.className = "box"; 
    let sideLength = (600 / size) + "px"; // calculate side length as "12px"
    newBox.style.width = sideLength;
    newBox.style.height = sideLength;
    container.appendChild(newBox);
    }
}

function resetGrid() {
    container.innerHTML = "";
    createGrid( getGridSize() );
}