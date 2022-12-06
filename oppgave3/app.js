//henter alle inputfeltene og putter dem i en array
let inputFelter = document.querySelectorAll("input");

//legger til en lyttefunksjon som oppdager når submit-knappen blir trykket på
document.querySelector(".knapp").addEventListener("click", submit);

//array som holder på verdiene for a, b og h
let abh = [];

//kalles når knappen trykkes på
function submit(){
    /* leter gjennom alle inputfeltene, og sjekker om verdien kan omgjøres til tall.
    Om det kan det, blir verdien lagt i abh-arrayet. Om ikke får bruker tilbakemelding */
    for (let i = 0; i < inputFelter.length; i++) {
        if (Number(inputFelter[i].value)){
            abh[i]=Number(inputFelter[i].value);
        }else{
            alert("Skriv tall!");
            //bruker return her slik at ikke meldingen skrives for hvert felt om ingen er tall
            return;
        }
        
        
    }
    //kaller funskjonen regnAreal med a, b og h som argumenter
    regnAreal(abh[0],abh[1],abh[2]);
    
    
}

function regnAreal(a,b,h){
    //regner og skriver arealet
    let areal = ((a+b) * h) / 2;
    document.querySelector(".arealTekst").innerHTML="Arealet av trapeset er: "+areal;
}