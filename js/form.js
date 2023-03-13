// // Get a reference to the form element
// const form = document.getElementById("newsletter-form");
//
// // Add an event listener to the form's submit event
// form.addEventListener("submit", (event) => {
//     // Prevent the form from submitting normally
//     event.preventDefault();
//
//     // Get the user's name and email address from the form inputs
//     const name = form.elements["name"].value;
//     const email = form.elements["email"].value;
//
//     //  Validate the name and email address inputs
//     if (!name || !email) {
//
//     }
//
//
//     // Send the name and email address to your server using an HTTP request
//
//     // Clear the form inputs
//     form.reset();
//
//     // TODO: Display a success message to the user
// });
const form = document.querySelector('.newsletter-form');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.element['name'].value;
    const email = form.element['email'].value;

    const data = { name, email };

    fetch('/api/newsletter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }

        successMessage.style.display = 'block';
        return response.json();

        // to display it to the user
        // successMessage.classList.remove('hidden');


    }).then((data) => {
        console.log(data);
    });
});
