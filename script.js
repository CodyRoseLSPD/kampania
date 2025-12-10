document.getElementById("scrollDown").addEventListener("click", () => {
    document.getElementById("biuro-szefa").scrollIntoView({
        behavior: "smooth"
    });
});


const postulatCards = document.querySelectorAll('.postulat-card');

const observer = new IntersectionObserver(entries=>{
    entries.forEach((entry, index)=>{
        if(entry.isIntersecting){
            setTimeout(()=> entry.target.classList.add('fade-in'), index*200);
        }
    });
},{threshold:0.3});

postulatCards.forEach(card => observer.observe(card));

const profiles = {
    "cody": {
        name: "Cody Rose",
        role: "Chief Of Police",
        photo: "3.png",
        desc: `Nazywam się Cody Rose. Od wielu lat służę w LSPD i bardzo dobrze znam tę pracę. W swojej karierze pracowałem w różnych jednostkach, także specjalnych, dzięki czemu zdobyłem duże doświadczenie w trudnych sytuacjach i ważnych decyzjach. Miałem też okazję pracować w Biurze Szefa na innych stacjach, więc wiem, jak wygląda zarządzanie i odpowiedzialność na wysokim stanowisku.

Lubię zwierzęta i zawsze traktuję je z szacunkiem. Uważam, że pokazuje to, jaki jestem z natury, tzn. spokojny, otwarty i życzliwy. Zawsze staram się stworzyć przyjazną atmosferę w pracy. Każdego wysłucham, niezależnie od stopnia czy problemu, bo wierzę, że dobra komunikacja jest kluczem do współpracy.

Jako kandydat na Szefa Policji chcę wprowadzać jasne zasady, wspierać cały zespół i budować departament oparty na uczciwości i wzajemnym szacunku.`

    },
    "?3": {
        name: "Wkrótce",
        role: "Assistant Chief Of Police",
        photo: "niewazne.png",
        desc: `...`
    },
    "?": {
        name: "Wkrótce",
        role: "Captain I",
        photo: "niewazne.png",
        desc: `...`
    },

    "?2": {
        name: "Wkrótce",
        role: "Deputy Chief Of Police",
        photo: "niewazne.png",
        desc: `...`
    }
};

const modalOverlay = document.getElementById("modalOverlay");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalDescription = document.getElementById("modalDescription");
const modalPhoto = document.getElementById("modalPhoto");
const modalCloseBtn = document.getElementById("modalCloseBtn");

document.querySelectorAll(".biuro-card").forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.profile; 
        const p = profiles[id];
        if (!p) return;

        modalName.textContent = p.name;
        modalRole.textContent = p.role;
        modalDescription.textContent = p.desc;
        modalPhoto.src = p.photo;

        modalOverlay.style.display = "flex";
    });
});

modalCloseBtn.addEventListener("click", () => {
    modalOverlay.style.display = "none";
});