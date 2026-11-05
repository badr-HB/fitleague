const box1 = document.getElementById("box1_child");
const box2 = document.getElementById("box2_child");
const box3 = document.getElementById("box3_child");
const defiss = document.getElementById("defiParent");
const first_form = document.getElementById("first-defi-form");
const second_form = document.getElementById("second-defi-form");
const submitbtn = document.getElementById("submit_defi");
const submitbtn2 = document.getElementById("submit_user");
const defi_name = document.getElementById("name-def");
const sport = document.getElementById("sport");
const description = document.getElementById("description");
const objectif = document.getElementById("objectif");
const date = document.getElementById("date");
const nom_utilisateur = document.getElementById("name");
const username = document.getElementById("UserName");
let alldefi = [];
let participants = [];
const regex = /\w{6}/;



function affiche_statistiques() {
    // const status = pullfromlocal.status;
    // const counter1 = status.filter(t => t.status === "en cours");
    // box1.textContent = `${counter1.length}`
    // const counter2 = status.filter(t => t.status === "terminé");
    // box2.textContent = `${counter2.length}`
    // const counter3 = status.filter(t => t.status === "annulé");
    // box3.textContent = `${counter3.length}`

}
affiche_statistiques();

// affichage_defi()
function affichage_defi() {
    for (let i = 0; i < 3; i++) {
        defiss.innerHTML += `<div class="w-full h-29 bg-[#D9D9D9] rounded-2xl flex items-center px-5 space-x-6">
                    <img src="./assets/images/sport.jpeg" alt="profile" class="border rounded-[50%] w-[50px] h-[50px]"/>
                    <div class="w-max space-y-5">
                        <p class="font-[Graduate] text-[20px] font-normal">${pullfromlocal.titre}</p>
                        <p class="font-[Inter]  text-[18px] font-normal">${pullfromlocal.sport}</p>
                    </div>
                </div>`
    }
}

//add defi

submitbtn.addEventListener("click", (event) => {
    event.preventDefault();
    alldefi = JSON.parse(localStorage.getItem('defis')) || [];
    localStorage.clear();

    if (defi_name.value != "" && regex.test(defi_name.value) && sport.value != "" && description.value != "" && objectif.value != "" && date.value != "") {

        const search = alldefi.find(t => t.titre == defi_name.value);
        if (!search) {
            alldefi.push(
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
        first_form.querySelectorAll('input[type = "text"]').forEach((element) => {
            element.value = '';
        })
        first_form.querySelector('input[type = "date"]').value = '';
    }
    else {
        changeColortoRed(defi_name, sport, description, objectif, date)
        first_form.querySelectorAll('input[type = "text"]').forEach((element) => {
            element.value = '';
        })
        // first_form.querySelector('input[type = "date"]').value = '';

    }
    addtolocal()


})
//

//add user
submitbtn2.addEventListener('click', (event) => {
    event.preventDefault();
    participants = JSON.parse(localStorage.getItem('participants')) || [];
    localStorage.clear();

    if (nom_utilisateur.value != '' && username.value != '' && regex.test(nom_utilisateur.value) && regex.test(username.value)) {
        const search = participants.find((array) => array.username == username.value)
        if (!search) {
            participants.push({
                nom: nom_utilisateur.value,
                username: username.value
            })

            document.getElementById('text-danger').textContent = "";
        }
        else {
            document.getElementById('text-danger').textContent = "user already exists";
            document.getElementById('text-danger').classList.add('text-[#EE4B2B]');
        }
    }
    else {
        document.getElementById('text-danger').textContent = "Please fill out this field and write 6 elements"
        document.getElementById('text-danger').classList.add('text-[#EE4B2B]')
    }
    addtolocal();

})
// 

function changeColortoRed(...params) { params.forEach((e) => { e.classList.add('border-red-500'), e.classList.remove('border-transparent') }) }
function changeColorBack(...params) { params.forEach((e) => { e.classList.remove('border-red-500'), e.classList.add('border-transparent') }) }

function addtolocal() {
    localStorage.setItem('defis', JSON.stringify(alldefi))
    localStorage.setItem('participants', JSON.stringify(participants))
}