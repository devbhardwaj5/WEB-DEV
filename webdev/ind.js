// Welcome / Thank You Button
function thankYou() {
    alert("Thank you for visiting Dev Bhardwaj's Portfolio! 🚀\nB.Tech CSE Core Student");
}

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Show confirmation message
    const confirmationBox = document.getElementById("confirmation");
    confirmationBox.classList.remove("hidden");
    confirmationBox.innerText = "Thank you for contacting Dev Bhardwaj! 📩 I will get back to you soon.";

    // Reset form
    this.reset();
});

// Section navigation system
function showSection(sectionId) {
    // Hide all sections
    let sections = document.getElementsByClassName("content");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // Show selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = "block";
}

// Auto welcome message on page load
window.onload = function () {
    console.log("Welcome to Dev Bhardwaj's Portfolio Website");
};
