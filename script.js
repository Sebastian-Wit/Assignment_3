// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    numRows ++;
    let newRow = document.createElement("tr");
    if(numCols == 0) { //If table is empty
        numCols ++;
        let newCol = document.createElement("td");
        newRow.appendChild(newCol); //First row and column must be added together
    }
    else{
        for(let i = 0; i < numCols; i++){
            let newCol = document.createElement("td");
            newRow.appendChild(newCol); //Add a new cell to each column (adding a new row)
        }
    }
    table.appendChild(newRow);
}

// Add a column
function addC() {
    let table = document.getElementById("grid");
    numCols ++;
    if(numRows == 0) { //If table is empty
        numRows ++;
        let newRow = document.createElement("tr");
        let newCol = document.createElement("td");
        newRow.appendChild(newCol); //Add first cell
        table.appendChild(newRow);
    }
    else{
        for(let i = 0; i < numRows; i++){
            let rows = table.getElementsByTagName("tr");
            let newCol = document.createElement("td");
            rows[i].appendChild(newCol); //Add a new cell to each row (adding a column)
        }
    }
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    if(numRows > 0){ //If table isn't empty
        table.deleteRow(numRows - 1); //Delete the last row
        numRows --;
        if(numRows == 0){
            numCols = 0; //Update the variables if necessary and the table is empty
        }
    }
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    if(numCols > 0){ //If table isn't empty
        for(let i = 0; i < numRows; i++){
            rows[i].deleteCell(numCols - 1); //Delete the final column from every row
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
        for(let j = 0; j < numCols; j++){ //For every cell
            let col = rows[i].cells[j];
            if(!col.style.backgroundColor || col.style.backgroundColor == "white"){ //The cells are only set to white after a clear, otherwise they don't have a background color
                col.style.backgroundColor = colorSelected;
            }
        }
    }

}

// Fill all cells
function fillAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){ //For every cell
            let col = rows[i].cells[j];
            col.style.backgroundColor = colorSelected; //Update the color to the selected color
        }
    }
}

// Clear all cells
function clearAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr");
    for(let i = 0; i < numRows; i++){
        for(let j = 0; j < numCols; j++){ //For every cell
            let col = rows[i].cells[j];
            col.style.backgroundColor = "white"; //Set the background color to white
        }
    }
}