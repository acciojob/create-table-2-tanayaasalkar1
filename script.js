
function createTable() {
    let row = prompt("Input number of rows");
    let col = prompt("Input number of columns");

    // Check if user cancelled or entered non-numeric values
    if (
        row === null || col === null ||
        row.trim() === "" || col.trim() === "" ||
        isNaN(row) || isNaN(col)
    ) {
        return;
    }

    let rn = Number(row);
    let cn = Number(col);

    // Check for zero or negative values
    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers");
        return;
    }

    // Check for whole numbers
    if (!Number.isInteger(rn) || !Number.isInteger(cn)) {
        return;
    }

    const table = document.getElementById("myTable");

    // Clear existing table
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < rn; i++) {
        let newRow = table.insertRow();

        for (let j = 0; j < cn; j++) {
            let newCell = newRow.insertCell();

            newCell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

