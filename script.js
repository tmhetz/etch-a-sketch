let btnMakeGrid64 = document.getElementById("makeGrid64");
let btnMakeGrid32 = document.getElementById("makeGrid32");
let btnMakeGrid16 = document.getElementById("makeGrid16");
let btnMakeGrid8 = document.getElementById("makeGrid8");

let container = document.getElementById("container");

btnMakeGrid64.addEventListener("click", makeGrid);
btnMakeGrid32.addEventListener("click", makeGrid);
btnMakeGrid16.addEventListener("click", makeGrid);
btnMakeGrid8.addEventListener("click", makeGrid);

// add event listeners to each button in one line

// clear the sketchboard during each button press

function makeGrid(e){
    let go = true;
    let counter = 0;
    let number = Number(this.dataset.gridsize);
    
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
        rowContainer.appendChild(box);
        number--;
    }
    container.appendChild(rowContainer);
}

function setWidthHeight(number){
    let height = 500/number;
    console.log(height);
    let width = 500/number;
    let boxes = document.getElementsByClassName("box");
    console.log(boxes);
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.width = `${width}px`;
        boxes[i].style.height = `${height}px`;
    }
}