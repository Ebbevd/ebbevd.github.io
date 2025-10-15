document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("learnMoreBtn").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We’ll get back to you soon.");
});
