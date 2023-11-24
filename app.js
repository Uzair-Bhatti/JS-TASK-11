document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}, Email: ${email}, Password: ${password}`;
    document.getElementById('formData').appendChild(listItem);
});

function readMore() {
    let summary = document.getElementById("summary");
    let fullDetails = document.getElementById("full-details");

    if (fullDetails.style.display === 'none') {
        fullDetails.style.display = 'block';
        summary.style.display = 'none';
        this.textContent = 'Read less';
    } else {
        fullDetails.style.display = 'none';
        summary.style.display = 'block';
        this.textContent = 'Read more';
    }
};

function showData(){
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${name}, Email: ${email}, Password: ${password}`;
    document.getElementById('formData').appendChild(listItem);
}

// function editRow(rowNum) {
//     let table = document.getElementById("studentTable");
//     table.editRow(rowNum);
// }
// function editRow(rowNum) {
//     let table = document.getElementById("studentTable");
//     table.editRow(rowNum);
//     let name = +prompt("Enter name");
//     let className = +prompt("Enter class");
// }


// function deleteRow(rowNum) {
//     let table = document.getElementById("studentTable");
//     table.deleteRow(rowNum);
// }

const form = document.getElementById('studentForm');
        const table = document.getElementById('studentTable');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const className = document.getElementById('class').value;

            const row = table.insertRow();
            row.insertCell().textContent = name;
            row.insertCell().textContent = className;

            const actionCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            actionCell.appendChild(deleteButton);

            deleteButton.addEventListener('click', function () {
                table.deleteRow(row.rowIndex);
            });
        });