//legger til aller barn under elementet produktTekst i en array:
let produktReklamasjoner = document.querySelector("#produktTekst").children;

//Definerer tekstene som skal vises i hver reklamasjonsdel (kunne blitt gjort i HTML med samme resultat)
let reklamasjonsInnerTexts = [
    "Kjøp nå ! Bare <span class='pris'></span> kroner!",
    "Har du hørt om produktet vårt? Prisen er nå bare <span class='pris'></span> kroner!",
    "Om du er på utkikk etter et godt produkt så koster vårt bare <span class='pris'></span> krooooner!",
    "<span class='pris'></span>? <span class='pris'></span>?! Du tror kanskje vi kødder når vi sier <span class='pris'></span> kroner, men neida! ",
    "NB:Prisen på forsendelse er 300 USD, sendt direkte fra vårt kontor på Øvre Kråkenes 300."
];

//definerer en startpris
let pris = 300;


//looper gjennom hvert reklamasjonselement, bestemmer tekst og posisjon
for (let i = 0; i < produktReklamasjoner.length; i++) {
    produktReklamasjoner[i].innerHTML=reklamasjonsInnerTexts[i]; //om teksten er skrevet i HTML-dokumentet er denne linjen unødvendig.
    produktReklamasjoner[i].style.left = produktReklamasjoner[i].dataset.left + "%"
    produktReklamasjoner[i].style.top = produktReklamasjoner[i].dataset.top + "%"
}

//kjører funskjonen som setter/oppdaterer prisen vist i tekstelementet
oppdaterPris()

function oppdaterPris(){
    //henter alle span-elementene og skriver prisen i dem
    let prisFelt = document.querySelectorAll(".pris");

    for (let i = 0; i < prisFelt.length; i++) {
        prisFelt[i].innerHTML = pris;
        
    }
}

//henter alle knapper
let knapper = document.querySelector("#knapper").children

//legger til en eventlistene for hver knapp, og sender indexen av knappen som argument.
// Dette må gjøres gjennom en anonym funskjon for å ikke møte feilmeldinger.
for (let i = 0; i < knapper.length; i++) {
    knapper[i].addEventListener("click", function(){
        knappTrykket(i)
    })
    
}

//Sjekker hvilken knapp som er trykket på basert på knappIndexen som hentes fra forige funskjon
function knappTrykket(knappIndex){
    if (knappIndex===0){
        pris-=10
    }else{
        pris+=10
    }
    oppdaterPris()
}