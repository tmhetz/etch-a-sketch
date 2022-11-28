let container = document.getElementById("container");
let clearBtn = document.getElementById("clear");
let colorMode = "";
let lastGridSize = 64;
let colorAdded = false;

let boxes = document.querySelectorAll(".box");

document.querySelectorAll(".makeGrid").forEach((item) => {
    item.addEventListener("click", makeGrid);
});

document.querySelectorAll(".colorSelector").forEach((item) => {
    item.addEventListener("click", function(e) {
        colorMode = e.target.id;
        colorAdded = true;
        makeGrid();
    });
});

clearBtn.addEventListener("click", () => {
    let boxesClear = document.getElementsByClassName("box");
    for(let i = 0; i < boxesClear.length; i++){
        boxesClear[i].style.backgroundColor = "white";
    }
});

function makeGrid(e){
    clearGrid();
    
    let go = true;
    let counter = 0;
    let number;

    if(!colorAdded){
        number = Number(this.dataset.gridsize);
        lastGridSize = number;
    } else {
        number = lastGridSize;
    }
    colorAdded = false;
    
    while(go){
        makeRow(number);
        counter++;
        if(counter === number) go = false;
    }
    setWidthHeight(number);
}

function makeRow(number){
    let rowContainer = document.createElement("div");
    while(number > 0){
        let box = document.createElement("div");
        box.classList.add("box");
        box.addEventListener("mouseover", color);
        rowContainer.appendChild(box);
        number--;
    }
    container.appendChild(rowContainer);
}

function setWidthHeight(number){
    let height = 500/number;
    let width = 500/number;
    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.width = `${width}px`;
        boxes[i].style.height = `${height}px`;
    }
}

function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
}

function color(e){
    if(colorMode === "RGB"){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    } else if(colorMode === "BW"){
        e.target.style.backgroundColor = "black";
    } else{
        e.target.style.backgroundColor = "#118AB2";
    }
}