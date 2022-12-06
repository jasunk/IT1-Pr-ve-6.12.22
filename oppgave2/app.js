
//definerer en terning, og setter verdien vist på den til 0
let terning = 0;

//definerer en variabel som skal telle antall forsøk
let antallForsøk = 0;



//kjører en løkke frem til terningen viser 6
while (terning != 6){
    /* setter terning til en tilfeldig verdi mellom 1 og 6, floor brukes
    for å ikke få desimalverdier, og +1 gjør at terningsverdien bli mellom
    1 og 6 i stedet for 0 og 5. Dette er nødvendig fordi .random() gir en
    tilfeldig verdi mellom 0 og 1, og startallet blir da 0. */
    terning = Math.floor(Math.random()*6)+1;

    //printer ut terningsverdien
    console.log(terning);


    antallForsøk++;
    if (terning===6){
        if (antallForsøk<3){
            console.log("Flaks, lotto neste!");
        }else if(antallForsøk=== (3 || 4)){
            console.log("Tja, som forventet");
        }else{
            console.log("Uflaks!");
        }
    }
}

// NY VERSJON MED TERNING UNDER



//Definerer terningfjes
let en = 
[
0,0,0,
0,1,0,
0,0,0
]
let to = 
[
1,0,0,
0,0,0,
0,0,1
]
let tre =
[
1,0,0,
0,1,0,
0,0,1
]
let fire =
[
1,0,1,
0,0,0,
1,0,1
]
let fem =
[
1,0,1,
0,1,0,
1,0,1
]
let seks =
[
1,0,1,
1,0,1,
1,0,1
]
//samler dem i en array
let terningFjes = [en,to,tre,fire,fem,seks]

let nyTerning=0
let nyAntallForsøk=0
let visning;
let terningFarger= document.querySelector("#terning").children
let respons = document.querySelector(".respons")

setInterval(trill, 500)

function trill(){
    //sjekker for det samme som i sted, men med et intervall på 0.5s
    if (nyTerning!=6){
       
        nyTerning = Math.floor(Math.random()*6)+1;
        
    
        //Jeg setter visning, altså terningfjeset som skal vises, til det som tilsvarer terningverdien
        visning =  terningFjes[(nyTerning-1)];
        for (var i=0; i < terningFarger.length; i++) {
            //Legger til og trekker fra klassen svart som tegner terningen
            //basert på hvilket terningfjes jeg ønsker.
            if (visning[i]===1){
              terningFarger[i].classList.add("black")
            }else{
              terningFarger[i].classList.remove("black")
            }
          }
        
        
        
    
    
        nyAntallForsøk++;
        if (nyTerning===6){
            if (nyAntallForsøk<3){
                respons.innerHTML="Flaks, lotto neste!"
            }else if(nyAntallForsøk=== (3 || 4)){
                respons.innerHTML="Tja, som forventet";
            }else{
                respons.innerHTML="Uflaks!";
            }
            respons.innerHTML += "<br> Du brukte "+nyAntallForsøk + " forsøk."
        }
    }
    
}
document.querySelector(".restartKnapp").addEventListener("click", restart)

function restart(){
    window.location.reload()
}