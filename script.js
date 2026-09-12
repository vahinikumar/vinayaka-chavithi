const DATA = [
  { title: "1. 🟢 గణపతి & పూజ స్థలం", items: [
    "మట్టి గణపతి","పీట","పసుపు","కుంకుమ","బియ్యప్పిండి — ముగ్గు కోసం",
    "పీఠం మీద వేసే ఉతికిన వస్త్రం","ఛత్రం / గొడుగు","పాలవెల్లి — Optional"
  ]},
  { title: "2. 🌿 21 రకాల పత్రాలు", numbered: true, items: [
    ["మాచీ పత్రం – మాచిపత్రి","Artemisia vulgaris"],
    ["బృహతీ పత్రం – వాకుడు ఆకు","Solanum indicum"],
    ["బిల్వ పత్రం – మారేడు ఆకు","Aegle marmelos"],
    ["దూర్వా పత్రం – గరిక","Cynodon dactylon"],
    ["దత్తూర పత్రం – ఉమ్మెత్త","Datura metel"],
    ["బదరీ పత్రం – రేగు ఆకు","Ziziphus mauritiana"],
    ["అపామార్గ పత్రం – ఉత్తరేణి","Achyranthes aspera"],
    ["తులసీ పత్రం – తులసి","Ocimum tenuiflorum"],
    ["చూత పత్రం – మామిడి ఆకు","Mangifera indica"],
    ["కరవీర పత్రం – గన్నేరు","Nerium oleander"],
    ["విష్ణుక్రాంత పత్రం – శంఖపుష్పి","Evolvulus alsinoides"],
    ["దాడిమీ పత్రం – దానిమ్మ ఆకు","Punica granatum"],
    ["దేవదారు పత్రం – దేవదారు","Cedrus deodara"],
    ["మరువక పత్రం – మరువం","Origanum majorana"],
    ["సింధువార పత్రం – వావిలి","Vitex negundo"],
    ["జాజీ పత్రం – జాజి ఆకు","Jasminum grandiflorum"],
    ["గండకీ పత్రం – దేవకాంచనం","Bauhinia variegata"],
    ["శమీ పత్రం – జమ్మి ఆకు","Prosopis cineraria"],
    ["అశ్వత్థ పత్రం – రావి ఆకు","Ficus religiosa"],
    ["అర్జున పత్రం – తెల్లమద్ది","Terminalia arjuna"],
    ["అర్క పత్రం – జిల్లేడు ఆకు","Calotropis gigantea"]
  ]},
  { title: "3. 🪔 పూజా సామాగ్రి", items: [
    "గంధం","అక్షింతలు","ఎరుపు రంగు అక్షింతలు","ఆకులు / 21 పత్రాలు","వక్కలు","కడ్డీలు",
    "కర్పూరం","దూది వస్త్రం","జంధ్యం — 16 పోగులు / 9 పోగులు","సింధూరం","నార్మల్ వత్తులు",
    "ధూప్ స్టిక్స్","కోన్ / కప్ ధూపం","నువ్వుల నూనె","ఆవు నెయ్యి","అగ్గిపెట్టె"
  ]},
  { title: "4. 🏺 కలశం", items: [
    "కలశం","వెండి చెంబు / ఇత్తడి చెంబు / రాగి చెంబు — అందుబాటులో ఉన్నది",
    "గంగాజలం — కలశపు చెంబులో ఉపయోగించడానికి"
  ]},
  { title: "5. 🪔 దీపారాధన", items: [
    "దీపపు కుందులు — 2","నూనె / ఆవు నెయ్యి","అగ్గిపెట్టె",
    "తెల్ల జిల్లేడు ఒత్తులు — Optional","నార్మల్ దూది పత్తి — జిల్లేడు ఒత్తికి ఉపయోగించడానికి"
  ]},
  { title: "6. 🍌 అరటి సామాగ్రి", items: ["అరటి ఆకులు","అరటి పిలకలు"] },
  { title: "7. 👩 గౌరీదేవి పూజ", items: ["తాంబూలం","బ్లౌజ్ పీస్ — Optional"] },
  { title: "8. 🌸 పూలు", items: [
    "ఎర్ర గులాబీలు","మందార పూలు","చామంతి పూలు","సన్నజాజులు","కలువ పూలు",
    "ఇతరంగా దొరికే పూలు","పూలమాల — Optional","విడిపూలు — ఎక్కువగా తీసుకొని మాలగా కట్టుకోవచ్చు"
  ], note: "గమనిక: వీడియో ప్రకారం ప్రత్యేకంగా ఒక రకమైన పూలే కావాలని లేదు. దొరికిన పూలను ఉపయోగించుకోవచ్చు; ఎరుపు పూలకు ప్రాధాన్యత ఉందని చెప్పారు." },
  { title: "9. 🍎 పండ్లు", items: [
    "ఆపిల్","దానిమ్మ","మొక్కజొన్న","జామకాయ","అరటి పండ్లు","వెలగపండు"
  ], note: "పండ్లను నైవేద్యంగా పెట్టవచ్చు, అలాగే పాలవెల్లిని అలంకరించడానికి ఉపయోగించవచ్చు." },
  { title: "10. 🍚 నైవేద్యాలు", items: [
    "అటుకులు","బెల్లం","పానకం","వడపప్పు","ఉండ్రాళ్లు","కుడుములు","మోదకాలు",
    "కజ్జికాయలు","ఇతర నైవేద్యాలు — మీ శక్తి కొలది"
  ]},
  { title: "11. 🥥 కొబ్బరికాయలు", items: [
    "కొబ్బరికాయ — 2 (1 కలశం కోసం, 1 నైవేద్యం కోసం)",
    "కలశం లేకపోతే → 1 కొబ్బరికాయ సరిపోతుంది"
  ]},
  { title: "12. 🌿 Optional Items", items: [
    "యాలకుల మాల","తెల్ల జిల్లేడు పూలు","తెల్ల జిల్లేడు ఒత్తులు","జువ్వాది పొడి",
    "అత్తరు","జువాది ఆయిల్","గంగాజలం","ఆవు పంచతం"
  ]},
  { title: "13. 🪔 ఇతర పూజ ఉపకరణాలు", items: [
    "హారతి పళ్లెం","పంచపాత్రాలు","కడ్డీల స్టాండ్","గంట"
  ]},
  { title: "14. 🙏 ప్రత్యేకంగా చేయాలనుకుంటే", items: [
    "\"ఓం గం గం గం గణపతయే నమః\" — నోట్‌బుక్‌లో రాయడం",
    "చిన్న చిన్న పేపర్లలో మంత్రం రాయడం",
    "వాటిని మాలలా కట్టి గణపయ్య దగ్గర పెట్టడం"
  ]},
  { title: "📌 ముందుగానే సిద్ధం చేసుకోవాల్సినవి", items: [
    "పూజ సామాగ్రి మొత్తం ఒకచోట పెట్టుకోవడం",
    "పూలను ముందుగానే తెచ్చుకొని ఫ్రిడ్జ్‌లో పెట్టుకోవడం",
    "పూజ సమయంలో మధ్యలో లేచే అవసరం లేకుండా అన్ని వస్తువులను పక్కన సిద్ధంగా పెట్టుకోవడం"
  ]}
];

const STORAGE_KEY = "vinayakaChavithiChecklist2026";
const CUSTOM_KEY = "vinayakaChavithiCustomItems2026";
let state = {};
let customItems = [];
let currentFilter = "all";
let searchTerm = "";

try { state = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch (e) { state = {}; }
try { customItems = JSON.parse(localStorage.getItem(CUSTOM_KEY) || "[]"); } catch (e) { customItems = []; }
if (!Array.isArray(customItems)) customItems = [];

const container = document.getElementById("container");
const checkSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12L9 17L20 6" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
let totalItems = 0;

function makeItem(item, id, section) {
    totalItems++;
    const li = document.createElement("li");
    li.dataset.id = id;
    li.dataset.text = Array.isArray(item) ? item.join(" ") : item;
    if (state[id]) li.classList.add("checked");

    const cb = document.createElement("div");
    cb.className = "checkbox";
    cb.innerHTML = checkSvg;

    const label = document.createElement("div");
    label.className = "label";

    if (section.numbered && Array.isArray(item)) {
        const idxSpan = document.createElement("span");
        idxSpan.className = "idx-num";
        idxSpan.textContent = (section.items.indexOf(item) + 1) + ".";
        label.appendChild(idxSpan);
        label.appendChild(document.createTextNode(item[0] + " — "));
        const latinSpan = document.createElement("span");
        latinSpan.className = "latin";
        latinSpan.textContent = item[1];
        label.appendChild(latinSpan);
    } else {
        label.textContent = Array.isArray(item) ? item.join(" — ") : item;
    }

    li.appendChild(cb);
    li.appendChild(label);
    li.addEventListener("click", () => toggle(id, li));
    return li;
}

DATA.forEach((section, sIdx) => {
    const secEl = document.createElement("div");
    secEl.className = "section";
    secEl.dataset.sectionIndex = sIdx;

    const titleEl = document.createElement("div");
    titleEl.className = "section-title";
    titleEl.textContent = section.title;
    titleEl.addEventListener("click", () => secEl.classList.toggle("collapsed"));
    secEl.appendChild(titleEl);

    const ul = document.createElement("ul");
    ul.className = "items";

    section.items.forEach((item, iIdx) => {
        const id = `s${sIdx}_i${iIdx}`;
        const li = makeItem(item, id, section);
        ul.appendChild(li);
    });

    secEl.appendChild(ul);

    if (section.note) {
        const noteEl = document.createElement("div");
        noteEl.className = "note";
        noteEl.textContent = section.note;
        secEl.appendChild(noteEl);
    }

    container.appendChild(secEl);
});

function toggle(id, li) {
    state[id] = !state[id];
    li.classList.toggle("checked", state[id]);
    save();
    updateProgress();
    applyFilters();
}

function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

function updateProgress() {
    const checkedCount = Object.values(state).filter(Boolean).length;
    const pct = totalItems ? Math.round((checkedCount / totalItems) * 100) : 0;
    const remaining = Math.max(0, totalItems - checkedCount);

    document.getElementById("progressFill").style.width = pct + "%";
    document.getElementById("progressText").textContent = `${checkedCount} / ${totalItems} completed`;
    document.getElementById("progressExtra").textContent = `${pct}% complete • ${remaining} remaining`;
}

function applyFilters() {
    const term = searchTerm.trim().toLowerCase();
    document.querySelectorAll("#container .section").forEach(section => {
        let visible = 0;
        section.querySelectorAll("ul.items li").forEach(li => {
            const text = (li.dataset.text || li.textContent).toLowerCase();
            const matchesSearch = !term || text.includes(term);
            const done = li.classList.contains("checked");
            const matchesFilter =
                currentFilter === "all" ||
                (currentFilter === "remaining" && !done) ||
                (currentFilter === "done" && done);

            const show = matchesSearch && matchesFilter;
            li.classList.toggle("filtered-out", !show);
            if (show) visible++;
        });
        section.classList.toggle("section-hidden", visible === 0);
    });
    renderCustomItems();
}

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        applyFilters();
    });
});

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value;
    clearSearch.classList.toggle("show", !!searchTerm);
    applyFilters();
});

clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    clearSearch.classList.remove("show");
    searchInput.focus();
    applyFilters();
});

function saveCustomItems() {
    try { localStorage.setItem(CUSTOM_KEY, JSON.stringify(customItems)); } catch (e) {}
}

function renderCustomItems() {
    const box = document.getElementById("customList");
    box.innerHTML = "";

    const term = searchTerm.trim().toLowerCase();
    customItems.forEach((item, index) => {
        const id = `custom_${index}`;
        const done = !!state[id];
        const matchesSearch = !term || item.text.toLowerCase().includes(term);
        const matchesFilter =
            currentFilter === "all" ||
            (currentFilter === "remaining" && !done) ||
            (currentFilter === "done" && done);

        if (!matchesSearch || !matchesFilter) return;

        const row = document.createElement("div");
        row.className = "custom-item" + (done ? " checked" : "");

        const cb = document.createElement("div");
        cb.className = "checkbox";
        cb.innerHTML = checkSvg;

        const text = document.createElement("div");
        text.className = "label";
        text.textContent = item.text;

        const del = document.createElement("button");
        del.className = "delete-custom";
        del.type = "button";
        del.textContent = "×";
        del.title = "Delete item";
        del.addEventListener("click", e => {
            e.stopPropagation();
            delete state[id];
            customItems.splice(index, 1);
            saveCustomItems();
            save();
            updateProgress();
            renderCustomItems();
        });

        row.append(cb, text, del);
        row.addEventListener("click", () => {
            state[id] = !state[id];
            save();
            renderCustomItems();
            updateProgress();
        });
        box.appendChild(row);
    });
}

document.getElementById("addCustomBtn").addEventListener("click", addCustomItem);
document.getElementById("customInput").addEventListener("keydown", e => {
    if (e.key === "Enter") addCustomItem();
});

function addCustomItem() {
    const input = document.getElementById("customInput");
    const text = input.value.trim();
    if (!text) return;
    customItems.push({ text });
    saveCustomItems();
    input.value = "";
    renderCustomItems();
}

document.getElementById("resetBtn").addEventListener("click", () => {
    if (confirm("అన్ని చెక్‌బాక్స్‌లను క్లియర్ చేయాలా? (Clear all checkboxes?)")) {
        state = {};
        save();
        document.querySelectorAll("ul.items li, .custom-item").forEach(el => el.classList.remove("checked"));
        updateProgress();
        applyFilters();
    }
});

// Include custom items in the total count.
totalItems += customItems.length;

updateProgress();
applyFilters();

// --- PWA install handling ---
const installBtn = document.getElementById("installBtn");
let deferredInstallPrompt = null;
const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

if (isStandalone) installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredInstallPrompt = e;
    installBtn.style.display = "block";
});

installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
        alert("Install option will appear when this website is opened from a supported HTTPS web host.");
        return;
    }
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
    installBtn.style.display = "none";
});

// Register service worker when hosted over HTTPS/localhost.
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
}
setTimeout(function(){
    document.getElementById("splash").classList.add("hide");
},10000);