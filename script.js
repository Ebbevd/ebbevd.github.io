// Display current year automatically
document.getElementById("year").textContent = new Date().getFullYear();


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// --- Vending Machine 1 Status Check ---
async function checkVendingMachineStatus() {
    const URL = "https://sympodial-plicately-fredia.ngrok-free.dev";
    const indicator = document.getElementById("status-indicator");

    try {
        // 1️⃣ Update the status first (POST or GET, as your endpoint requires)
        await fetch(URL + "/status/update-status/");

        // 2️⃣ Get the current status
        const response = await fetch(URL + "/status/get-status/");
        const data = await response.json();

        const lastBeat = new Date(data.lastBeat);
        const now = new Date();
        const diffMinutes = (now - lastBeat) / (1000 * 60);

        if (diffMinutes <= 30) {
            indicator.classList.remove("status-red");
            indicator.classList.add("status-green");
        } else {
            indicator.classList.remove("status-green");
            indicator.classList.add("status-red");
        }
    } catch (error) {
        console.error("Failed to fetch machine status:", error);
        indicator.classList.remove("status-green");
        indicator.classList.add("status-red");
    }
}

// Check every 5 minutes
checkVendingMachineStatus();
setInterval(checkVendingMachineStatus, 5 * 60 * 1000);