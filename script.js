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
    "jaca": {
        name: "Jack Shovel",
        role: "Deputy Chief Of Police",
        photo: "jack.png",
        desc: `Jack Shovel to Sergeant z dużym doświadczeniem, który od lat pracuje w Departamencie. Prywatnie oraz służbowo również się długo znamy. Był kiedyś Kapitanem Field Training Division i do dziś trzyma pieczę nad tą jednostką. Dba o to, aby do służby trafiali odpowiedni ludzie, czyli tacy, którzy naprawdę pasują do pracy w policji i potrafią działać w zespole.

Jack świetnie zna procedury oraz sprawy prawne. Trudno go zagiąć, bo zawsze jest przygotowany i dokładnie wie, jakie zasady obowiązują w każdej sytuacji. Dzięki temu często jest osobą, do której inni przychodzą po radę.

Jest człowiekiem, który potrafi rozwiązywać problemy szybko i spokojnie. Zachowuje chłodną głowę, umie ocenić sytuację i znaleźć najlepsze wyjście. To ktoś, na kim zawsze można polegać zarówno w codziennej pracy, jak i w trudnych momentach.`
    },
    "jimmy": {
        name: "Jimmy Walker",
        role: "Captain I",
        photo: "jimmy.png",
        desc: `Jimmy Walker to Officer z dużym doświadczeniem, który od lat konsekwentnie buduje swoją pozycję w strukturach Los Santos Police Department. Jest osobą znaną z zaangażowania w służbę, odpowiedzialnego podejścia do obowiązków oraz realnego wpływu na funkcjonowanie jednostki w codziennej pracy.

Jimmy doskonale odnajduje się zarówno w działaniach patrolowych, jak i w pracy zespołowej. Zna procedury, potrafi je stosować w praktyce i przekazywać wiedzę innym funkcjonariuszom. Często pełni rolę osoby wspierającej młodszych oficerów cierpliwie tłumaczy, doradza i pomaga odnaleźć się w realiach służby.

Jest spokojny, opanowany i potrafi zachować zimną krew w stresujących sytuacjach. Zamiast eskalacji stawia na rozmowę, analizę sytuacji i rozsądne rozwiązania. Dzięki temu cieszy się zaufaniem zarówno przełożonych, jak i współpracowników.`
    },
    "foster": {
        name: "Drake Foster",
        role: "Assistant Chief Of Police",
        photo: "foster.png",
        desc: `Drake Foster to doświadczony Officer, który od lat związany jest z pracą w strukturach organów ścigania. Swoje kompetencje w zakresie zarządzania i dowodzenia potwierdził, pełniąc wcześniej stanowisko Deputy Commander of Blaine County Sheriff’s Office na innej stacji. Funkcja ta wymagała nie tylko doskonałej organizacji pracy, ale również umiejętności podejmowania trudnych decyzji i odpowiedzialności za ludzi.

Drake bardzo dobrze zna realia służby zarówno od strony operacyjnej, jak i dowódczej. Potrafi skutecznie koordynować działania jednostek, dbać o klarowny podział obowiązków oraz wspierać swoich podwładnych w codziennej służbie. Stawia na profesjonalizm, przejrzyste procedury i wzajemny szacunek w zespole.

Jest osobą spokojną, opanowaną i nastawioną na dialog. W sytuacjach kryzysowych zachowuje chłodną głowę, analizuje dostępne możliwości i wybiera rozwiązania, które służą zarówno funkcjonariuszom, jak i obywatelom miasta. Wierzy, że dobra policja to taka, która potrafi rozmawiać, mediować i działać z rozsądkiem.`
    },

    "matthew": {
        name: "Matthew Rose-Harrington",
        role: "Captain I",
        photo: "matthew2.png",
        desc: `Matthew Rose-Harrington nie ma jeszcze tak długiego stażu jak Ja czy Jack, ale mimo krótszego doświadczenia szybko udowodnił, że jest wyjątkowym Officerem. Jest osobą otwartą, miłą i bardzo cierpliwą. Zawsze wie, jak podejść do drugiego człowieka i z której strony z nim rozmawiać, dzięki czemu potrafi spokojnie i profesjonalnie rozwiązywać różne sytuacje.

Znamy się prywatnie, ponieważ poznałem go, gdy przechodził trudny moment w swoim życiu. Z czasem się zaprzyjaźniliśmy, a pracując razem, widziałem, jak pod moją wodzą wyrasta na mądrego, odpowiedzialnego i naprawdę dobrego Officera. W swojej karierze był również Detektywem oraz Sierżantem jednostki detektywistycznej, co dało mu duże doświadczenie w sprawach dochodzeniowych. Można powiedzieć, że w swojej pracy jest prawie nie do zastąpienia.

Jego rola jako Captain'a będzie ważna. Zajmie się dokumentacją, sprawami technicznymi, informacyjnymi itp. innymi rzeczami. To ogrom obowiązków, które wykonuje rzetelnie i dokładnie, odciążając resztę zespołu. Dzięki niemu Departament będzie działał sprawnie, a Departament może liczyć na solidne wsparcie od zaplecza.`
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



const galleryTiles = document.querySelectorAll('.gallery-tile img');

const modal = document.createElement('div');
modal.id = 'imageModal';
modal.style.cssText = `
    display: none;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.85);
    justify-content: center;
    align-items: center;
    z-index: 9999;
`;
modal.innerHTML = `
    <span id="modalClose" style="
        position:absolute;
        top:20px;
        right:30px;
        font-size:40px;
        color:#fff;
        cursor:pointer;
        z-index: 10000;
    ">✖</span>
    <img id="modalImage" src="" style="
        max-width:90%;
        max-height:90%;
        border-radius:20px;
        box-shadow: 0 0 30px rgba(0,191,255,0.5);
        object-fit: contain;
    ">
`;
document.body.appendChild(modal);

const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

galleryTiles.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});


