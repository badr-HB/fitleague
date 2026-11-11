// Affichage des défis

// let defisList = []

// defis.forEach(defi => {
//     defisList.push(defi.id)
// })

let idDefis = document.querySelector("#defis");

function afficherTousLesDefis() {
  idDefis.innerHTML = "";

  defis.forEach((defi) => {
    afficherDefis(defi);
  });

  let suprimmer = document.querySelectorAll(".supprimer");
 

  ajouterLactionSupprimer(suprimmer);
  
}

function afficherDefis(defi) {
  idDefis.innerHTML += `<section class="bg-[#022C13] rounded-xl" id="${defi.id}">
                <img class="w-100 h-48 rounded-t-xl"  src="${defi.image}" alt="">
                <div class="m-6 flex flex-col gap-5">
                    <div class="flex gap-3">
                        <img src="assets/icons/pen.png" alt="" data-modifier="${defi.id}" class="w-10 h-10 modifier" onclick="document.querySelector('[data-modal=\\'${defi.id}\\']').classList.remove('hidden')">
                        <img src="assets/icons/rectangle.png" data-supprimer="${defi.id}" alt="" class="w-10 h-10 supprimer">
                    </div>
                    <h2 class="text-[#CDED10] text-4xl"> ${defi.titre}</h2>
                    <h3 class="text-[#607966] text-2xl">Sport : ${defi.sport}</h3>
                    <p class="text-[#607966] text-2xl">${defi.description}</p>
                    <p class="text-[#607966] text-2xl">Objectif : ${defi.objectif}</p>
                    <p class="text-[#607966] text-2xl">Date limite : ${defi.datelimite}</p>
                    <a class="participantsList" href="#participants">Liste des participants</a>
                    <a class="px-6 py-4 rounded-xl border-2 text-2xl border-solid text-[#607966]" href="#">S'inscrire</a>
                </div>
                <div class="hidden fixed inset-0 bg-black/50 flex items-center justify-center" data-modal="${defi.id}">

                    <div class="bg-white p-6 rounded-lg shadow-lg w-160">

                        
                        <form class="form-defis form-modifier" data-btnmodifier="${defi.id}" >
                            <div class="form-defis">
                                <label for="name">Titre :  </label>
                                <input type="text" name="titre" id="titre" value="${defi.titre}" required />
                            </div>
                                <div class="form-defis">
                                <label for="sport">Sport :  </label>
                                <input type="text" name="sport" id="sport" value="${defi.sport}" required />
                            </div>
                                <div class="form-defis">
                                <label for="description">Description :  </label>
                                <input type="text" name="description" id="description" value="${defi.description}" required />
                            </div>
                            <div class="form-defis">
                                <label for="objectif">Objectif: </label>
                                <input type="text" name="objectif" id="objectif" value="${defi.objectif}" required />
                            </div>
                            <div class="form-defis">
                                <label for="datelimite">Date limite: </label>
                                <input type="text" name="datelimite" id="datelimite" value="${defi.datelimite}" required />
                            </div>
                            <div class="form-defis">
                                <input type="submit" value="Modifier le défis" />
                            </div>
                        </form>

                        <button class="bg-red-500 text-white px-4 py-2 rounded"
                                onclick="document.querySelector('[data-modal=\\'${defi.id}\\']').classList.add('hidden')">
                            Fermer
                        </button>

                    </div>
                </div>

</section>`;
}

afficherTousLesDefis();

// Affichage des participants

function participants() {
  let selectedParticipant;

  let participantsListElement = document.querySelectorAll(".participantsList");

  participantsListElement.forEach((par) => {
    par.addEventListener("click", (event) => {
      selectedParticipant = event.currentTarget.parentElement.parentElement.id;
      afficherParticipants(selectedParticipant);
    });
  });
}

function afficherParticipants(selectedParticipant) {
  let part = document.getElementById("participants");
  part.innerHTML = "";
  let par = defis.find((def) => def.id == selectedParticipant);

  part.innerHTML += `<h2>${par.titre}</h2>`;
  par.participants.forEach(
    (participant) => (part.innerHTML += `<p> ${participant.pseudo}</p>`),
  );
}

// participants()

// Supprimer un défis

// let suprimmer=document.querySelectorAll('.supprimer')

// function supprimerDefis(){

// defis.splice(defis.findIndex((defi)=>defi.id == Number(id)),1)
//         ajouterLactionSupprimer()
// }

function ajouterLactionSupprimer(suprimmer) {
  suprimmer.forEach((sup) => {
    sup.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.supprimer;
      defis.splice(
        defis.findIndex((defi) => defi.id == Number(id)),
        1,
      );

      afficherTousLesDefis();
    });
  });
}



function modifierDefis(){
 let modifier = document.querySelectorAll(".form-modifier");
 modifier.forEach(mod => {
 mod.addEventListener('submit',(e)=>{
    e.preventDefault();
    let id=e.currentTarget.dataset.btnmodifier
    let defi = defis.find(d => d.id == id)
    defi.titre = e.currentTarget.titre.value
    defi.sport = e.currentTarget.sport.value
    defi.description = e.currentTarget.description.value
    defi.objectif=e.currentTarget.objectif.value
    defi.datelimite =e.currentTarget.datelimite.value

          defis.splice(
        defis.findIndex((singledefi) => singledefi.id == Number(id)),
        1,defi
      );
    console.log(defis)

    

    

 })

 })
//  afficherTousLesDefis()
}

modifierDefis()

//pull request