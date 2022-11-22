let btnMakeGrid = document.getElementById("makeGrid");
let container = document.getElementById("container");

btnMakeGrid.addEventListener("click", makeGrid);

function makeGrid(e){
    let go = true;
    let counter = 0;
    let number = Number(this.dataset.gridsize);
    while(go){
        makeRow(number);
        counter++;
        if(counter === number) go = false;
    }
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