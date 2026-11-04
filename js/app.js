

// Affichage des défis

// let defisList = []

// defis.forEach(defi => {
//     defisList.push(defi.id)
// })

let idDefis=document.querySelector('#defis');

    
function afficherTousLesDefis(){
    idDefis.innerHTML = ""

    defis.forEach(defi => {

        
            afficherDefis(defi);
       
    })

let suprimmer=document.querySelectorAll('.supprimer')

ajouterLactionSupprimer(suprimmer)
}




function afficherDefis(defi){


idDefis.innerHTML+=`<section class="bg-[#022C13] rounded-xl" id="${defi.id}">
                <img class="w-100 h-48 rounded-t-xl"  src="${defi.image}" alt="">
                <div class="m-6 flex flex-col gap-5">
                    <div class="flex gap-3">
                        <img src="assets/icons/pen.png" alt="" class="w-10 h-10 modifier">
                        <img src="assets/icons/rectangle.png" alt="" class="w-10 h-10 supprimer">
                    </div>
                    <h2 class="text-[#CDED10] text-4xl"> ${defi.titre}</h2>
                    <h3 class="text-[#607966] text-2xl">Sport : ${defi.sport}</h3>
                    <p class="text-[#607966] text-2xl">${defi.description}</p>
                    <p class="text-[#607966] text-2xl">Objectif : ${defi.objectif}</p>
                    <p class="text-[#607966] text-2xl">Date limite : ${defi.datelimite}</p>
                    <a class="participantsList" href="#participants">Liste des participants</a>
                    <a class="px-6 py-4 rounded-xl border-2 text-2xl border-solid text-[#607966]" href="#">S'inscrire</a>
                </div>

</section>`


}



afficherTousLesDefis()

// Affichage des participants

function participants(){
let selectedParticipant;

let participantsListElement = document.querySelectorAll('.participantsList')

participantsListElement.forEach(par => {
    par.addEventListener("click", event => {
        selectedParticipant = event.currentTarget.parentElement.parentElement.id
        afficherParticipants(selectedParticipant)
    })
})

}







function afficherParticipants(selectedParticipant){
    let part = document.getElementById('participants')
    part.innerHTML = ""
    let par = defis.find((def) => def.id == selectedParticipant)

    part.innerHTML+= `<h2>${par.titre}</h2>`
    par.participants.forEach(participant =>
        part.innerHTML += `<p> ${participant.pseudo}</p>`
    )
    
}


// participants()

// Supprimer un défis


// let suprimmer=document.querySelectorAll('.supprimer')

// function supprimerDefis(){


//         ajouterLactionSupprimer()
//         // defis.splice(defis.findIndex((defi)=>defi.id == Number(id)),1)
//         ajouterLactionSupprimer()
// }


function ajouterLactionSupprimer(suprimmer) {
    alert("ok")
    suprimmer.forEach(sup => {
    
    sup.addEventListener("click", e =>{

        alert("supp ok")
        let id = e.currentTarget.parentElement.parentElement.parentElement.id
         defis.splice(defis.findIndex((defi)=>defi.id == Number(id)),1)

         afficherTousLesDefis()
        

        
        
        

    })
})
}













