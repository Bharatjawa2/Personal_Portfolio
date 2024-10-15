var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu1 = document.getElementById("sidemenu");
function openmenu() {
    sidemenu1.style.right = "0";
}
function closemenu() {
    // event.preventDefault();
    sidemenu1.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxMfm7WlkGXvuL53DPHgrvZ6rIGdxVZ_cJXbYplSBWiychPR821fHgqT_57SvXZQ6Y/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();

    // Form validation
    const name = form['Name'].value.trim();
    const email = form['Email'].value.trim();
    const message = form['Message'].value.trim();

    // Simple validation checks
    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }

    // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Proceed with form submission if validation passes
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            alert("Message has been sent to Bharat. He will try to connect with you!");
            form.reset(); // Optional: Clear the form after submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("There was an error sending your message. Please try again later.");
        });
});

