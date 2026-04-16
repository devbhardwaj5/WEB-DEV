function showMessage() {
    alert("Welcome to Dev Bhardwaj's Portfolio Website!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("confirmation").classList.remove("hidden");
    this.reset();
});
