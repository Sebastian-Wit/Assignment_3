// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    numRows ++;
    let newRow = document.createElement("tr");
    if(numCols == 0) {
        numCols ++;
        let newCell = document.createElement("td");
        newRow.appendChild(newCell);
    }
    else{
        for(let i = 0; i < numCols; i++){
            let newCell = document.createElement("td");
            newRow.appendChild(newCell); 
        }
    }
    table.appendChild(newRow);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    numCols ++;
    let rows = table.getElementsByTagName("tr");
    if(numRows == 0) {
        numRows ++;
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        newRow.appendChild(newCell);
        table.appendChild(newRow);
    }
    else{
        for(let i = 0; i < numRows; i++){
            let newCell = document.createElement("td");
            rows[i].appendChild(newCell); 
        }
    }
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    if(numRows > 0){
        table.deleteRow(numRows - 1);
        numRows --;
        if(numRows == 0){
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    if(numCols > 0){
        for(let i = 0; i < numRows; i++){
            rows[i].deleteCell(numCols - 1);
        }
        numCols --;
        if(numCols == 0){
            numRows = 0;
            while(table.rows[0]){
                table.deleteRow(0); //Delete remaining rows if table is empty
            }
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = rows[i].cells[j];
            if(!cell.style.backgroundColor || cell.style.backgroundColor == "white"){ //The cells are only set to white after a clear, otherwise they don't have a background color
                cell.style.backgroundColor = colorSelected;
            }
        }
    }

}

// Fill all cells
function fillAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = rows[i].cells[j];
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){
            let cell = rows[i].cells[j];
            cell.style.backgroundColor = "white";
        }
    }
}