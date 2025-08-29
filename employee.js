function sortEmployees() {
    // Get names from input fields
    let employees = [];
    for (let i = 1; i <= 5; i++) {
        let name = document.getElementById("emp" + i).value.trim();
        if (name !== "") {
            employees.push(name);
        }
    }

    // Sort alphabetically
    employees.sort();

    // Display result
    let resultArea = document.getElementById("result");
    resultArea.innerHTML = "<b>Employees in Sorted Order:</b><br>" + employees.join("<br>");
}
