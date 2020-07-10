function makeGrid(height, width) {
    var table = document.getElementById("pixelCanvas"); //get the table element
    tableContent = "";
    for (var row = 0; row < height; row++) {
        tableContent += "<tr>";
        for (var column = 0; column < width; column++) {
            tableContent += "<td class='cell'></td>";
        }
        tableContent += "</tr>";
    }
    table.innerHTML = tableContent; //update table content
    addClickOnCellListener(table);
}

function getSize(event) {
    event.preventDefault(); //don't try to send data anywhere else
    var height = Number(document.getElementById("inputHeight").value); //get the height of the grid
    var width = Number(document.getElementById("inputWidth").value); //get the width of the grid
    makeGrid(height, width); //make the grid or reset it in case it has colored cells
}

function addClickOnCellListener(table) {
    var cells = table.getElementsByTagName("td"); //find all the cells in the document
    for(let cell of cells) {
        cell.addEventListener("click", function () {
            cell.style.backgroundColor = document.getElementById("colorPicker").value;
        });
    } //for each sell set a listener to make it change it's color when clicked
}

var sizeForm = document.getElementById("sizePicker");
sizeForm.addEventListener("submit", getSize); //add event listener to actually use the data from form
