// ============================================================
// Dijk & Snijders — site interactions
// ============================================================

// ---------- footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- mobile nav ----------
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
    });
});

// ============================================================
// i18n
// Translation values may contain simple inline HTML (e.g. a link),
// so they are applied with innerHTML. Keep translation content
// trusted/static — never inject user-provided data this way.
// ============================================================

const translations = {
    NL: {
        meta_title: "Dijk & Snijders — Automatisering & Techniek",
        nav_services: "Diensten",
        nav_process: "Werkwijze",
        nav_story: "Ons Verhaal",
        nav_who: "Voor Wie",
        nav_contact: "Contact",

        hero_eyebrow: "AUTOMATISERINGSBUREAU",
        hero_title: "Wij bouwen systemen die zichzelf runnen.",
        hero_text: "Dijk &amp; Snijders ontwerpt, bouwt en onderhoudt automatisering op maat, van kleine industriële processen tot de verkoopautomaten waarmee we ooit begonnen. Eén filosofie: eenvoudige, robuuste techniek die jarenlang meegaat.",
        hero_cta_primary: "Plan een gesprek",
        hero_cta_secondary: "Bekijk onze diensten",

        services_eyebrow: "WAT WE DOEN",
        services_title: "Vier disciplines, één aanpak",
        service1_title: "Automatiseringsadvies",
        service1_text: "We brengen uw proces in kaart en ontwerpen een automatiseringsoplossing op maat, van eerste idee tot werkend prototype.",
        service2_title: "Elektronica &amp; Hardware",
        service2_text: "Custom elektronica, ontworpen om te repareren in plaats van te vervangen. Betaalbaar, onderhoudbaar en gebouwd om lang mee te gaan.",
        service3_title: "Verkoopautomaten: Bouw &amp; Reparatie",
        service3_text: "We bouwen en repareren verkoopautomaten met onze eigen techniek. U beheert de voorraad; wij zorgen dat de machine het gewoon blijft doen.",
        service4_title: "Open-Source Besturingssoftware",
        service4_text: "Onze software word in-house ontwikkeld en is volledig open-source. Updates zijn regelmatig beschikbaar en features worden op request toegevoegd.",

        process_eyebrow: "WERKWIJZE",
        process_title: "Van idee naar werkend systeem",
        step1_title: "Analyse",
        step1_text: "We duiken in uw proces en brengen kansen voor automatisering concreet in kaart.",
        step2_title: "Ontwerp",
        step2_text: "Samen ontwerpen we een oplossing: hardware, software, of allebei. Alles afgestemd op uw situatie.",
        step3_title: "Bouw",
        step3_text: "We bouwen en testen een werkend systeem, meestal eerst als prototype op kleine schaal.",
        step4_title: "Onderhoud",
        step4_text: "Ook na oplevering blijven we beschikbaar voor onderhoud, reparatie en doorontwikkeling.",

        story_eyebrow: "ONS VERHAAL",
        story_title: "Van de basischool tot een automatiseringssamenwerking",
        story_p1: "Wij kennen elkaar als sinds de basischool, na ook veel van onze studententeid samen te hebben doorgebracht leek het ons leuk een bedrijfje op te richten. Dit begon bij het kopen van een tweede hands verkoopautomaat. Dit hebben we volledig handgebouwd met eigen software. Met deze kennis zijn we veder gegaan.",
        story_p2: 'Omdat verkoopautomaten meestal draaien op propriëtaire techniek van een handvol fabrikanten, ontwierpen we onze eigen: eenvoudige, gebruiksvriendelijke elektronica en volledig open-source besturingssoftware, <a href="https://github.com/Ebbevd/VendOS" target="_blank" rel="noopener">VendOS</a>, die iedereen vrij kan gebruiken.',
        story_p3: "Die aanpak; robuuste, repareerbare techniek zonder onnodige complexiteit, bleek breder toepasbaar dan verkoopautomaten alleen. Vandaag zetten we dezelfde denkwijze in voor automatiseringsprojecten in uiteenlopende sectoren, terwijl we onze eerste liefde, de verkoopautomaat, zijn blijven bouwen en repareren.",

        who_eyebrow: "VOOR WIE",
        who_title: "Met wie we werken",
        who1_title: "Exploitanten van verkoopautomaten",
        who1_text: "U vult en beheert de machine, wij zorgen dat de techniek erin blijft werken, van eerste installatie tot reparatie.",
        who2_title: "Facilitaire bedrijven &amp; kantoren",
        who2_text: "Terugkerende processen die handmatig worden gedaan, zijn vaak kandidaat voor automatisering. We denken vrijblijvend mee.",
        who3_title: "Productie- &amp; logistieke bedrijven",
        who3_text: "We opereren in kleine bedrijven die kennis nodig hebben met betrekking tot automatisering, zowal op het gebied van hardware als software.",

        contact_eyebrow: "CONTACT",
        contact_title: "Laten we praten",
        contact_text: "Heeft u een proces dat slimmer kan, een machine die gerepareerd moet worden, of gewoon een vraag? Neem contact op.",
        contact_email_label: "E-mail",
        contact_phone_label: "Telefoon",
        form_name: "Naam",
        form_email: "E-mail",
        form_message: "Bericht",
        form_submit: "Versturen",

        footer_rights: "Alle rechten voorbehouden.",

        form_sending: "Bezig met versturen…",
        form_success: "Bedankt! We nemen zo snel mogelijk contact op.",
        form_error: "Er ging iets mis. Mail ons gerust rechtstreeks.",
    },

    EN: {
        meta_title: "Dijk & Snijders: Automation & Engineering",
        nav_services: "Services",
        nav_process: "Approach",
        nav_story: "Our Story",
        nav_who: "Who We Help",
        nav_contact: "Contact",

        hero_eyebrow: "AUTOMATION STUDIO",
        hero_title: "We build systems that run themselves.",
        hero_text: "Dijk &amp; Snijders designs, builds, and maintains custom automation, from small scale industrial processes to the vending machines we once started with. One philosophy: simple, robust technology that lasts for years.",
        hero_cta_primary: "Book a call",
        hero_cta_secondary: "See our services",

        services_eyebrow: "WHAT WE DO",
        services_title: "Four disciplines, one approach",
        service1_title: "Automation Consulting",
        service1_text: "We map out your process and design a tailored automation solution, from first idea to working prototype.",
        service2_title: "Electronics &amp; Hardware",
        service2_text: "Custom electronics, designed to be repaired rather than replaced. Affordable, maintainable, and built to last.",
        service3_title: "Vending Machines: Build &amp; Repair",
        service3_text: "We build and repair vending machines using our own technology. You manage the stock; we make sure the machine simply keeps working.",
        service4_title: "Open Source Control Software",
        service4_text: "Our software is developed in house and is fully open source. Updates are released regularly and features are added on request.",

        process_eyebrow: "APPROACH",
        process_title: "From idea to working system",
        step1_title: "Analysis",
        step1_text: "We dive into your process and map out concrete opportunities for automation.",
        step2_title: "Design",
        step2_text: "Together we design a solution: hardware, software, or both. Everything tailored to your situation.",
        step3_title: "Build",
        step3_text: "We build and test a working system, usually starting as a small scale prototype.",
        step4_title: "Maintenance",
        step4_text: "Even after delivery, we remain available for maintenance, repair, and further development.",

        story_eyebrow: "OUR STORY",
        story_title: "From primary school to an automation partnership",
        story_p1: "We have known each other since primary school, and after spending much of our student years together too, we thought it would be fun to start a small company. It began with buying a secondhand vending machine, which we rebuilt entirely by hand with our own software. From there, we kept building on that knowledge.",
        story_p2: 'Since most vending machines run on proprietary technology from a handful of manufacturers, we designed our own: simple, user friendly electronics and fully open source control software, <a href="https://github.com/Ebbevd/VendOS" target="_blank" rel="noopener">VendOS</a>, free for anyone to use.',
        story_p3: "That approach; robust, repairable technology without unnecessary complexity, turned out to apply far beyond vending machines alone. Today we bring the same thinking to automation projects across many different sectors, while still building and repairing our first love, the vending machine.",

        who_eyebrow: "WHO WE HELP",
        who_title: "Who we work with",
        who1_title: "Vending machine operators",
        who1_text: "You stock and manage the machine, we make sure the technology inside keeps working, from first installation to repair.",
        who2_title: "Facility Companies &amp; Offices",
        who2_text: "Recurring processes that are still done manually are often good candidates for automation. We're happy to think it through with you, with no obligation.",
        who3_title: "Manufacturing &amp; Logistics Companies",
        who3_text: "We operate with small businesses that need knowledge about automation, both in terms of hardware and software.",

        contact_eyebrow: "CONTACT",
        contact_title: "Let's talk",
        contact_text: "Do you have a process that could be smarter, a machine that needs repair, or simply a question? Get in touch.",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_submit: "Send",

        footer_rights: "All rights reserved.",

        form_sending: "Sending…",
        form_success: "Thank you! We will get back to you as soon as possible.",
        form_error: "Something went wrong. Feel free to email us directly.",
    },
};

const LANG_KEY = "ds-lang";

// Reading/writing localStorage can throw (file:// pages, private
// browsing, storage blocked by browser settings, etc). If it does,
// fall back to an in-memory language preference instead of letting
// the error stop the rest of the script from running.
function getSavedLang() {
    try {
        return localStorage.getItem(LANG_KEY);
    } catch (err) {
        return null;
    }
}

function saveLang(lang) {
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (err) {
        // ignore — language just won't persist between visits
    }
}

let currentLang = getSavedLang() || "NL";

const flags = {
    NL: "https://flagcdn.com/w20/nl.png",
    EN: "https://flagcdn.com/w20/gb.png",
};

const langToggle = document.getElementById("lang-toggle");

function applyTranslations(lang) {
    const dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang.toLowerCase();
    document.title = dict.meta_title;

    // button shows the language you'll switch TO
    const nextLang = lang === "NL" ? "EN" : "NL";
    langToggle.innerHTML = `<img src="${flags[nextLang]}" alt="" width="20" height="15"><span>${nextLang}</span>`;
}

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "NL" ? "EN" : "NL";
    saveLang(currentLang);
    applyTranslations(currentLang);
});

applyTranslations(currentLang);

// ============================================================
// Contact form (EmailJS)
//
// The public key is already configured below. To activate sending,
// fill in your EmailJS Service ID and Template ID from your
// EmailJS dashboard (Email Services / Email Templates).
// Until then, the form falls back to opening the visitor's email
// client with a pre-filled message.
// ============================================================

const EMAILJS_PUBLIC_KEY = "4kNHb5IX44HaXM24h";
const EMAILJS_SERVICE_ID = "service_khjc9j8"; // TODO: add your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "template_yrvk7xe"; // TODO: add your EmailJS template ID

if (window.emailjs) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dict = translations[currentLang];

    if (window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
        status.textContent = dict.form_sending;
        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
            status.textContent = dict.form_success;
            form.reset();
        } catch (err) {
            console.error("EmailJS error:", err);
            status.textContent = dict.form_error;
        }
        return;
    } else {
        console.warn("EmailJS not configured; falling back to mailto link.");
    }

    // Fallback: mailto link, since EmailJS isn't fully configured yet
    const name = form.from_name.value;
    const email = form.reply_to.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Contact via website — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:management@ds-technical-solutions.nl?subject=${subject}&body=${body}`;
});