let navLinks = document.getElementById("nav-links");

function showMenu() {
	navLinks.style.right = 0 + "px";
}
function hideMenu() {
	navLinks.style.right = -300 + "px";
}

// scrolling logic
const navbarHeight = document.querySelector(".navbar").offsetHeight;

document.documentElement.style.setProperty(
	"--scroll-padding",
	navbarHeight + "px"
);

// Email Logic
const smtpPass = "BC47B8625D1AEEA972ED1279CC26492AFB86";
const submitBtn = document.querySelector(".contact-form");
const calcForm = document.getElementById('calcForm');

submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.send("service_26w2up8","template_j652blw",{
        from_name: document.getElementById('email-inp').value,
        to_name: 'INVICTUS',
        message: `The subject is : ${document.getElementById('subject-inp').value} | Message is : ${document.getElementById('description-inp').value}`,
        reply_to: "",
    }).then(function(response) {
        alert('Mail sent successfull');
     }, function(error) {
        alert('FAILED...');
     });
});

// Copy Links Logic - TODO
//navigator.clipboard.writeText();  here you go !