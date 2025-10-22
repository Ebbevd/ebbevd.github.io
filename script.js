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

async function checkVendingMachineStatus() {
    const URL = "https://sympodial-plicately-fredia.ngrok-free.dev";
    const indicator = document.getElementById("status-indicator");

    if (!indicator) return console.error("Status indicator element not found");

    try {
        const now = new Date();
        console.log("Current time:", now);
        // Update the status (GET or POST)
        await fetch(URL + "/status/update-status/", {
            method: "GET",
            headers: { "ngrok-skip-browser-warning": "true" },
        });

        // Get the current status
        const response = await fetch(URL + "/status/get-status/", {
            method: "GET",
            headers: { "ngrok-skip-browser-warning": "true" },
        });
        const data = await response.json();

        // Trim microseconds if necessary
        const lastBeat = new Date(data.lastBeat.replace(/\.(\d{3})\d+/, '.$1'));
        if (isNaN(lastBeat)) throw new Error("Invalid lastBeat date");

        const diffMinutes = (now - lastBeat) / (1000 * 60);

        console.log(`Last beat: ${lastBeat}, Now: ${now}, Diff (minutes): ${diffMinutes}`);

        if (diffMinutes <= 30) {
            console.log("Vending machine is ONLINE");
            indicator.classList.remove("status-red");
            indicator.classList.add("status-green");
        } else {
            console.log("Vending machine is OFFLINE");
            indicator.classList.remove("status-green");
            indicator.classList.add("status-red");
        }
    } catch (error) {
        console.error("Failed to fetch machine status:", error);
        indicator.classList.remove("status-green");
        indicator.classList.add("status-red");
    }
}

// Initial check and every 5 minutes
checkVendingMachineStatus();
setInterval(checkVendingMachineStatus, 5 * 60 * 1000);