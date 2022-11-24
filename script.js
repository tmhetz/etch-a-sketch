let container = document.getElementById("container");

document.querySelectorAll(".makeGrid").forEach((item) => {
    item.addEventListener("click", makeGrid);
});

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