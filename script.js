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

async function getVendingMachineStock() {
    // If stock is low send an alert. 
    const URL = "https://sympodial-plicately-fredia.ngrok-free.dev";
    try {
        const response = await fetch(URL + "/status/get-stock/", {
            method: "GET",
            headers: { "ngrok-skip-browser-warning": "true" },
        });
        const data = await response.json();

        if (data.storage_status == "low_stock") {
            sendAlert();
        }

    } catch (error) {
        console.error("Failed to fetch machine stock:", error);
    }

}

function sendAlert() {
    // Send an alert when stock is low
    console.log("Stock is low! Sending alert...");
    // Implement alert logic here (e.g., send email or notification)
    emailjs.send("service_khjc9j8", "template_qokzv6w")
        .then(() => {
            console.log("Alert email sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send alert email:", err);
        });
}

function sendError() {
    // Send an alert when stock is low
    console.log("Could not connect to vending machine! Sending alert...");
    // Implement alert logic here (e.g., send email or notification)
    emailjs.send("service_khjc9j8", "template_yrvk7xe")
        .then(() => {
            console.log("Alert email sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send alert email:", err);
        });
}



const translations = {
    EN: {
        nav_home: "Home",
        nav_model: "Our Business Model",
        nav_story: "Our Story",
        nav_locations: "Locations",
        nav_contact: "Contact",
        hero_title: "Turning Undelivered Mail into Opportunity",
        hero_text: "We place vending machines to sell undelivered mail — reducing waste, sparking curiosity, and preventing items from disappearing forever.",
        model_title: "Our Business Model",
        model_text_1: "Every year, countless packages and items go unclaimed, are returned, or remain unused for various reasons — wrong addresses, failed deliveries, or simply forgotten orders. Instead of letting these items go to waste, we try to give them a second life.",
        model_text_2: "We work closely with delivery companies and other partners to collect items that would otherwise be discarded. Each package is anonymized and prepared for the consumer market.",
        step1_title: "1. We Collect",
        step1_text: "We collect undelivered items that can legally be resold, preventing unnecessary waste.",
        step2_title: "2. We Refill",
        step2_text: "Each package is repackaged and placed in vending machines at public locations and transport hubs.",
        step3_title: "3. You Discover",
        step3_text: "Customers buy a mystery package — each purchase supports sustainability and circular reuse.",
        story_title: "Our Story",
        story_text_1: "The idea arose from a simple question — what happens to all undelivered mail that never reaches home? After discovering much of it is destroyed, we wanted a system that benefits everyone: logistics companies, the environment, and curious customers.",
        story_text_2: "Our journey began with the vending machines themselves. Since many machines rely on proprietary technology made by only a few companies, we explored open-source alternatives. Everything is now internally designed and built! Our software is fully open-source and available here: VendOS on GitHub. The machines are built with simple, user-friendly electronics that are easy to repair. This approach allowed us to create vending machines that are both affordable and maintainable. Our very first machine was second-hand, with all electronics replaced to meet our standards.",
        story_link_text: "VendOS on GitHub",
        slide1_caption: "Development log: We provide all machines with new, sustainable components.",
        slide2_caption: "Development log: The machines are fully developed internally.",
        slide3_caption: "Development log: Each machine is equipped with a touchscreen.",
        story_text_3: "What began as an experimental concept has evolved into a sustainable model combining recycling, innovation, and a touch of mystery. Each vending machine represents a small step toward a more circular economy — and a fun surprise for everyone involved.",
        locations_title: "Looking for Locations",
        locations_text_1: "We are actively seeking new locations for our vending machines. We look for spaces with high foot traffic, such as offices, universities, transport hubs, shopping areas, and community centers. Collaborating with us gives you the opportunity to be part of an innovative, sustainable project while offering something unique and exciting to your visitors. We are still perfecting our machines and expanding our network, so this is the perfect time to join.",
        locations_text_2: "If you have a space that can host one of our machines, we would love to hear from you. Let's work together to bring sustainability, curiosity, and convenience to your location.",
        contact_title: "Contact",
        contact_email_label: "Email:",
        contact_email: "vandijkebbe@gmail.com",
        contact_phone_label: "Phone:",
        contact_phone: "+31649372053",
        vending_label: "Vending Machine 1:",
        rights_text: "All rights reserved."
    },
    NL: {
        nav_home: "Home",
        nav_model: "Ons Businessmodel",
        nav_story: "Ons Verhaal",
        nav_locations: "Locaties",
        nav_contact: "Contact",
        hero_title: "Onbezorgde Post Omzetten in Kans",
        hero_text: "We plaatsen verkoopautomaten om onbezorgde post te verkopen — zo verminderen we verspilling, wekken nieuwsgierigheid en voorkomen we dat items voorgoed verdwijnen.",
        model_title: "Ons Businessmodel",
        model_text_1: "Elk jaar blijven talloze pakketten en items ongeclaimd, worden geretourneerd of blijven ongebruikt om verschillende redenen — verkeerde adressen, mislukte leveringen of simpelweg vergeten bestellingen. In plaats van deze items te laten verspillen, proberen wij ze een tweede leven te geven.",
        model_text_2: "We werken nauw samen met bezorgbedrijven en andere partners om items te verzamelen die anders zouden worden weggegooid. Elk pakket wordt geanonimiseerd en klaargemaakt voor de consumentenmarkt.",
        step1_title: "1. Wij Verzamelen",
        step1_text: "We verzamelen onbezorgde items die legaal opnieuw verkocht mogen worden, zodat onnodige verspilling wordt voorkomen.",
        step2_title: "2. Wij Vullen Aan",
        step2_text: "Zonder voorkennis worden pakketten in verkoopautomaten geplaatst op openbare locaties en vervoershubs.",
        step3_title: "3. Jij Ontdekt",
        step3_text: "Klanten kopen een mysteriepakket — elke aankoop ondersteunt duurzaamheid en circulair hergebruik.",
        story_title: "Ons Verhaal",
        story_text_1: "Het idee kwam voort uit een eenvoudige vraag — wat gebeurt er met alle onbezorgde post die nooit thuis aankomt? Na te hebben ontdekt dat veel ervan wordt vernietigd, wilden we een systeem creëren dat iedereen ten goede komt: logistieke bedrijven, het milieu en nieuwsgierige klanten.",
        story_text_2: "Onze reis begon met de verkoopautomaten zelf. Omdat veel automaten afhankelijk zijn van propriëtaire technologie geproduceerd door slechts een paar bedrijven, besloten we open-source alternatieven te onderzoeken. Alles is nu intern ontworpen en gebouwd! Onze software is volledig open-source en te vinden hier: VendOS op GitHub. De machines zijn gebouwd met eenvoudige, gebruiksvriendelijke elektronica die gemakkelijk te repareren is. Deze aanpak stelde ons in staat verkoopautomaten te creëren die zowel betaalbaar als onderhoudbaar zijn. Onze allereerste machine was tweedehands, met alle elektronica vervangen om aan onze normen te voldoen.",
        story_link_text: "VendOS op GitHub",
        slide1_caption: "Development log: Wij voorzien alle machines van nieuwe, duurzame onderdelen.",
        slide2_caption: "Development log: De machines worden van binnen volledig door ons ontwikkeld.",
        slide3_caption: "Development log: We voorzien elke machine met een touchscreen scherm.",
        story_text_3: "Wat begon als een experimenteel concept, is uitgegroeid tot een duurzaam model dat recycling, innovatie en een vleugje mysterie combineert. Elke verkoopautomaat vertegenwoordigt een kleine stap naar een meer circulaire economie — en een leuke verrassing voor iedereen die meedoet.",
        locations_title: "Op Zoek naar Locaties",
        locations_text_1: "Wij zijn actief op zoek naar nieuwe locaties voor onze verkoopautomaten. We zoeken ruimtes met veel voetverkeer, zoals kantoren, universiteiten, vervoershubs, winkelgebieden en gemeenschapscentra. Samenwerken met ons biedt de kans deel uit te maken van een innovatief, duurzaam project terwijl u iets unieks en spannends aan uw bezoekers biedt. Wij zijn nog druk in de weer met het perfectioneren van onze automaten en het uitbreiden van ons netwerk, dus dit is het perfecte moment om aan boord te komen.",
        locations_text_2: "Als u een ruimte heeft die een van onze machines kan huisvesten, horen we graag van u. Laten we samenwerken om duurzaamheid, nieuwsgierigheid en gemak naar uw locatie te brengen.",
        contact_title: "Contact",
        contact_email_label: "Email:",
        contact_email: "vandijkebbe@gmail.com",
        contact_phone_label: "Telefoon:",
        contact_phone: "+31649372053",
        vending_label: "Vending Machine 1:",
        rights_text: "Alle rechten voorbehouden."
    }
};

let currentLang = "NL"; // initial language

document.getElementById("lang-toggle").addEventListener("click", () => {
    // Toggle language
    currentLang = currentLang === "NL" ? "EN" : "NL"; // uppercase consistently

    if (currentLang == "NL") {
        buttonLang = "EN"
    } else {
        buttonLang = "NL"
    }
    // Flag URLs
    const flags = {
        NL: "https://flagcdn.com/w20/nl.png",
        EN: "https://flagcdn.com/w20/gb.png"
    };

    // Update button with flag + text
    document.getElementById("lang-toggle").innerHTML = `
        <img src="${flags[buttonLang]}" alt="${buttonLang} flag">${buttonLang.toUpperCase()}
    `;

    // Update other texts
    updateTexts();
});


function updateTexts() {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

// Optional: Set current year dynamically
document.getElementById("year").innerText = new Date().getFullYear();


// Initial check and every 5 minutes
checkVendingMachineStatus();
setInterval(checkVendingMachineStatus, 5 * 60 * 1000);
getVendingMachineStock();
setInterval(getVendingMachineStock, 5 * 60 * 1000);

