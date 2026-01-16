// --- CARROUSEL FUNCTIE ---
function scrollCarousel(id, distance) {
    const container = document.getElementById(id);
    container.scrollBy({ left: distance, behavior: 'smooth' });
}

// --- PROJECT DATA (Hier vul je je teksten en foto's in) ---
const projectData = {
    modtheworld: {
        title: "Mod The World",
        desc: "Dit was een schoolproject waarbij ik een website heb gemaakt om alle automodificaties op één plek te verzamelen."+
            " De site is gemaakt in WordPress met een specifiek thema en verschillende plug-ins."+
            " Je kunt op de link klikken om de website live te bekijken.",
        images: ["assets/mtw_foto_1.png", "assets/mtw_foto_2.png","assets/mtw_foto_3.png","assets/mtw_foto_4.png"],
        link: "https://teunfaassen.provil-ion.be/"
    },
    portfolio: {
        title: "Portfolio Project",
        desc: "De website die je nu bekijkt! Volledig gebouwd met HTML, CSS en JS."+
            " Dit is een online portfolio om mijn projecten en vaardigheden op een creatieve manier te tonen."+
            " Je kunt op de link klikken om de broncode op GitHub te bekijken.",
        images: ["assets/portfolio_1.png", "assets/portfolio_2.png"],
        link: "https://github.com/webpxl/41dvo1070-werkplekleren-1-portfolio-25-26-grdvo-tfaassen"
    },
    geozoeker: {
        title: "GeoZoekkr",
        desc: "Dit is mijn GIP-project van het middelbaar: een GeoGuessr-kloon die ik volledig zelf heb gecodeerd met Python, HTML, CSS en JS, inclusief een werkende database."+
            " Het was een boeiende uitdaging waar ik veel heb geleerd over webontwikkeling en databeheer."+
            " Je kunt op de link klikken om de code op GitHub te bekijken.",
        images: ["assets/geozoekkr_1.png", "assets/geozoekkr_2.png", "assets/geozoekkr_3.png", "assets/geozoekkr_4.png"],
        link: "https://github.com/tfaassen/gip"
    },
    granturismo: {
        title: "GT Livery Editor",
        desc: "In deze galerij zie je mijn Gran Turismo 7 liveries en in-game fotografie."+
            " Ik ontwerp al jaren liveries voor Gran Turismo en dit is een selectie van mijn beste werk."+
            " Klik op de link om mijn volledige profiel met alle ontwerpen te bekijken."+
            " Daarnaast maak ik regelmatig foto's in het spel die ook op mijn profiel te zien zijn.",
        images: ["assets/gt_1.png", "assets/gt_2.png", "assets/gt_3.png", "assets/gt_4.png", "assets/gt_5.png", "assets/gt_6.png", "assets/gt_7.png", "assets/gt_8.png", "assets/gt_9.png", "assets/gt_10.png"],
        link: "https://www.gran-turismo.com/us/gt7/user/mymenu/e55128b0-5a90-4a7a-aa37-1522fbefe3ce/profile"
    },
    dashboardCV: {
        title: "Dashboard-CV",
        desc: "Een creatief dashboard-CV gemaakt in Figma voor het vak Werkplekleren. Ik vond het leuk om de opdracht 'dashboard' heel letterlijk te nemen, zoals je aan het design kunt zien.",
        images: ["assets/dash_1.png", "assets/dash_2.png", "assets/dash_3.png", "assets/dash_4.png", "assets/dash_5.png", "assets/dash_6.png", "assets/dash_7.png", "assets/dash_8.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    takeaway: {
        title: "Takeaway Scripting Project",
        desc: "Dit is een website voor het afhalen van eten, gemaakt voor het vak Scripting."+
            " De site is gebouwd met HTML, CSS en JS en bevat een werkend winkelmandje en een admin-paneel om gerechten toe te voegen of te verwijderen."+
            " Een leerrijk project waarin ik mijn scripting-vaardigheden flink heb kunnen verbeteren.",
        images: ["assets/tkw_1.png", "assets/tkw_2.png", "assets/tkw_3.png", "assets/tkw_4.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    mijnAuto: {
        title: "Mijn Auto",
        desc: "Op deze foto's zie je de aanpassingen die ik aan mijn eigen auto heb gedaan. De eerste foto toont een lijst met modificaties." +
            " Op de tweede foto zie je het CarPlay-systeem dat ik zelf heb ingebouwd. De derde foto toont mijn nieuwe velgen." +
            " De overige foto's laten het resultaat zien nadat ik de auto volledig heb gepolijst en gewaxt.",
        images: ["assets/bmw_1.png", "assets/bmw_2.jpeg", "assets/bmw_3.jpeg", "assets/bmw_4.jpeg", "assets/bmw_5.jpeg"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    NVA: {
        title: "N-VA",
        desc: "Ik ben politiek geëngageerd in mijn woonplaats Hamont-Achel. In 2024 heb ik zelfs deelgenomen aan de lokale verkiezingen.",
        images: ["assets/NVA_1.png"],
        link: "https://hamont-achel.n-va.be/wie-is-wie/teun-faassen"
    },
    photoshop: {
        title: "Photoshop-bewerkingen",
        desc: "Hier vind je een aantal van mijn Photoshop-werken waar ik in mijn vrije tijd en tijdens mijn opleiding aan heb gewerkt."+
            " Ik werk erg graag met Photoshop en ben altijd op zoek naar nieuwe technieken om te leren.",
        images: ["assets/photoshop_1.png", "assets/photoshop_2.png", "assets/photoshop_3.png", "assets/photoshop_4.png", "assets/photoshop_5.png", "assets/photoshop_6.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },

};

// --- MODAL FUNCTIES ---
function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const data = projectData[projectId];

    if (!data) return; // Stop als project niet bestaat

    // Vul de modal met data
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-link').href = data.link;

    // Foto's inladen
    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = ""; // Eerst leegmaken

    data.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('gallery-img');
        gallery.appendChild(img);
    });

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById('project-modal').style.display = "none";
}

// Sluit modal als je ernaast klikt
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// --- CONTACT POPUP FUNCTIE ---
function toggleContact(popupId) {
    const popup = document.getElementById(popupId);

    // Check of deze al open staat
    const isOpen = popup.classList.contains('show');

    // Sluit EERST alle andere popups (zodat je geen rommel krijgt)
    document.querySelectorAll('.contact-popup').forEach(p => {
        p.classList.remove('show');
    });

    // Als hij nog niet open was, open hem dan nu
    if (!isOpen) {
        popup.classList.add('show');
    }
}
// --- NAVBAR MOBIEL FUNCTIE ---
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuLinks.classList.toggle('active');
});

// Sluit menu als je op een link klikt (handig voor mobiel)
function closeMenu() {
    menu.classList.remove('active');
    menuLinks.classList.remove('active');
}

// --- SOEPEL SCROLLEN ---
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        // Alleen scrollen als het een interne link is (begint met .)
        if (targetId.startsWith('.')) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // -70 voor de hoogte van de navbar
                    behavior: 'smooth'
                });
            }
        }
    });
});