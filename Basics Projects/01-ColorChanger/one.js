console.log("Janisar");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button); // Corrected typo here
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor = e.target.id; // This sets the color based on the ID directly
    });
});



