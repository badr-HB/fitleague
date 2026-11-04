const box1 = document.getElementById("box1_child");
const box2 = document.getElementById("box2_child");
const box3 = document.getElementById("box3_child");
const defiss = document.getElementById("defiParent");
const first_form = document.getElementById("first-defi-form");
const second_form = document.getElementById("second-defi-form");
const submitbtn = document.getElementById("submit_defi");
const submitbtn2 = document.getElementById("submit_user")
const defi_name = document.getElementById("name-def");
const sport = document.getElementById("sport");
const description = document.getElementById("description");
const objectif = document.getElementById("objectif");
const date = document.getElementById("date");
const utilisateur_name = document.getElementById("name");
const username = document.getElementById("UserName");
let data = [];

affiche_statistiques();
function affiche_statistiques() {
    const counter1 = defis.filter(t => t.status === "en cours");
    box1.textContent = `${counter1.length}`
    const counter2 = defis.filter(t => t.status === "terminé");
    box2.textContent = `${counter2.length}`
    const counter3 = defis.filter(t => t.status === "annulé");
    box3.textContent = `${counter3.length}`
}
affichage_defi()
function affichage_defi() {
    for (let i = 0; i < 3; i++) {
        defiss.innerHTML += `<div class="w-full h-29 bg-[#D9D9D9] rounded-2xl flex items-center px-5 space-x-6">
                    <img src=${defis[i].image} alt="profile" />
                    <div class="w-max space-y-5">
                        <p class="font-[Graduate] text-[20px] font-normal">${defis[i].titre}</p>
                        <p class="font-[Inter]  text-[18px] font-normal">${defis[i].sport}</p>
                    </div>
                </div>`
    }
}

//add defi
submitbtn.addEventListener("click", (b) => {
    b.preventDefault();

    if (defi_name.value != "" && sport.value != "" && description.value != "" && objectif.value != "" && date.value != "") {
        const search = data.find(t => t.titre == defi_name.value);
        if (!search) {
            data.push(
                {
                    titre: defi_name.value,
                    sport: sport.value,
                    description: description.value,
                    objectif: objectif.value,
                    datelimite: date.value,
                    status: "en cours"
                }
            )
        }
        else {
            alert("defi already exists")
        }
        changeColorBack(defi_name, sport, description, objectif, date)
    }
    else {
        changeColortoRed(defi_name, sport, description, objectif, date)
    }


})
//

//add user
submitbtn2.addEventListener('click',(e) => {
    e.preventDefault();
})
// 

function changeColortoRed(...params) { params.forEach((e) => { e.classList.add('border-red-500'), e.classList.remove('border-transparent') }) }
function changeColorBack(...params) { params.forEach((e) => { e.classList.remove('border-red-500'), e.classList.add('border-transparent') }) }