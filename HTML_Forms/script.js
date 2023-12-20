document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const tableBody = document.getElementById('tableBody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const address = document.getElementById('address').value;
        const pincode = document.getElementById('pincode').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(item => item.value).join(', ');
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;

        // Create a new table row
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food}</td>
            <td>${state}</td>
            <td>${country}</td>
        `;

        // Append the new row to the table
        tableBody.appendChild(newRow);

        // Clear form fields
        form.reset();
    });
});
