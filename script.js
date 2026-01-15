// --- CARROUSEL FUNCTIE ---
function scrollCarousel(id, distance) {
    const container = document.getElementById(id);
    container.scrollBy({ left: distance, behavior: 'smooth' });
}

// --- PROJECT DATA (Hier vul je je teksten en foto's in) ---
const projectData = {
    modtheworld: {
        title: "Mod The World",
        desc: "Een schoolproject waarbij ik een website heb gemaakt voor alle auto modificaties op een plek te hebben staan.",
        images: ["assets/mtw_foto_1.png", "assets/mtw_foto_2.png"], // Vervang met jouw foto url's
        link: "https://teunfaassen.provil-ion.be/"
    },
    portfolio: {
        title: "Portfolio Project",
        desc: "Deze website die je nu bekijkt! Gemaakt met HTML, CSS en JS.",
        images: ["assets/portfolio_1.png", "assets/portfolio_2.png"],
        link: "https://github.com/webpxl/41dvo1070-werkplekleren-1-portfolio-25-26-grdvo-tfaassen"
    },
    geozoeker: {
        title: "GeoZoekkr",
        desc: "Mijn GIP project. Een geoguessr kloon. die ik volledig heb gecodeerd met python html css en js en gebruik maakt van een database.",
        images: ["assets/geozoekkr_1.png", "assets/geozoekkr_2.png", "assets/geozoekkr_3.png", "assets/geozoekkr_4.png"],
        link: "https://github.com/tfaassen/gip"
    },
    granturismo: {
        title: "GT Livery Editor",
        desc: "Creatieve ontwerpen gemaakt in de Gran Turismo editor.",
        images: ["assets/gt_1.png", "assets/gt_2.png", "assets/gt_3.png", "assets/gt_4.png", "assets/gt_5.png", "assets/gt_6.png", "assets/gt_7.png", "assets/gt_8.png", "assets/gt_9.png", "assets/gt_10.png"],
        link: "https://www.gran-turismo.com/us/gt7/user/mymenu/e55128b0-5a90-4a7a-aa37-1522fbefe3ce/profile"
    },
    dashboardCV: {
        title: "dashboard cv",
        desc: "een Creatieve dashboard cv gemaakt in figma voor werkplekleren. ik vond het wel leuk om dit project letterlijk te nemen zoals je kan zien.",
        images: ["assets/dash_1.png", "assets/dash_2.png", "assets/dash_3.png", "assets/dash_4.png", "assets/dash_5.png", "assets/dash_6.png", "assets/dash_7.png", "assets/dash_8.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    takeaway: {
        title: "takaway scripting project",
        desc: "Een etens afhaal website gemaakt voor scripting.",
        images: ["assets/tkw_1.png", "assets/tkw_2.png", "assets/tkw_3.png", "assets/tkw_4.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    mijnAuto: {
        title: "mijn auto",
        desc: "Hier zie je de aanpassingen die ik heb gedaan aan mijn auto.",
        images: ["assets/bmw_1.png", "assets/bmw_2.jpeg", "assets/bmw_3.jpeg", "assets/bmw_4.jpeg", "assets/bmw_5.jpeg"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    },
    NVA: {
        title: "N-VA",
        desc: "Ik ben politiek geëngageerd in mijn woonplaats. Ik ben zelfs opgekomen voor de verkiezingen van 2024 .",
        images: ["assets/NVA_1.png"],
        link: "https://hamont-achel.n-va.be/wie-is-wie/teun-faassen"
    },
    photoshop: {
        title: "Photoshop bewerkingen",
        desc: "mijn persoonlijke photoshop bewerkingen.",
        images: ["assets/photoshop_1.png", "assets/photoshop_2.png"],
        link: "https://faassenteundvoportofolio.netlify.app/"
    }
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