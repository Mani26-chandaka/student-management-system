function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name === "" || roll === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td><button class="delete-btn" onclick="deleteRow(this)">Delete</button></td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.remove();
}