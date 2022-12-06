
let oppsummering = document.querySelector(".oppsummering")
let danmarksplass = {
    målinger: [],
    gjennomsnitt:0,
    høyest:0,
    lavest:0,
    problematiskAnt:0,
    problematiskArray:[]
}
let solheimsviken = {
    målinger: [],
    gjennomsnitt:0,
    høyest:0,
    lavest:0,
    problematiskAnt:0,
    problematiskArray:[]
}

for (let i = 0; i < 1440; i++) {
    danmarksplass.målinger.push(parseInt(Math.random()*151))
    solheimsviken.målinger.push(parseInt(Math.random()*151))
    
}


danmarksplass.gjennomsnitt = finnGjennomsnitt(danmarksplass.målinger)
solheimsviken.gjennomsnitt = finnGjennomsnitt(solheimsviken.målinger)
danmarksplass.høyest = finnHøyeste(danmarksplass.målinger)
solheimsviken.høyest = finnHøyeste(solheimsviken.målinger)
danmarksplass.lavest = finnLaveste(danmarksplass.målinger)
solheimsviken.lavest = finnLaveste(solheimsviken.målinger)
danmarksplass.problematiskAnt = finnProblematisk(solheimsviken.målinger,"count")
solheimsviken.problematiskAnt = finnProblematisk(danmarksplass.målinger,"count")
danmarksplass.problematiskArray = finnProblematisk(solheimsviken.målinger,"array")
solheimsviken.problematiskArray = finnProblematisk(danmarksplass.målinger,"array")

if (danmarksplass.gjennomsnitt>solheimsviken.gjennomsnitt){
    oppsummering.innerHTML="Det er høyest konsentrasjon av svesvtøv på Danmarksplass, med et gjennomsnitt på " +danmarksplass.gjennomsnitt + ".<br>"
}else{
    oppsummering.innerHTML="Det er høyest konsentrasjon av svesvtøv i Solheimsviken, med et gjennomsnitt på " +solheimsviken.gjennomsnitt+ ".<br>"
}
oppsummering.innerHTML+= "Den høyeste verdien funnet på Danmarksplass var "+ danmarksplass.høyest+ ".<br>"
oppsummering.innerHTML+= "Den høyeste verdien funnet i Solheimsviken var "+ solheimsviken.høyest+ ".<br>"
oppsummering.innerHTML+= "Den laveste verdien funnet på Danmarksplass var "+ danmarksplass.lavest+ ".<br>"
oppsummering.innerHTML+= "Den laveste verdien funnet i Solheimsviken var "+ solheimsviken.lavest+ ".<br>"
oppsummering.innerHTML+= danmarksplass.problematiskAnt + " tall var problematiske på Danmarksplass, de er nå fjernet"+ ".<br>"
oppsummering.innerHTML+= solheimsviken.problematiskAnt + " tall var problematiske i Solheimsviken, de er nå fjernet"+ ".<br>"


function finnGjennomsnitt(verdier){
    let sum = Number(0);
    for (let i = 0; i < verdier.length; i++) {
        sum += verdier[i]
    }
    sum = sum/verdier.length
    return(sum)
    
}

function finnHøyeste(verdier){
    let høyeste = 0;
    let index = 0;
    for (let i = 0; i < verdier.length; i++) {
        if (verdier[i]>høyeste){
            høyeste=verdier[i]
            index=i
        }
    }
    /* console.log(høyeste, "på plass ", index) */
    return((høyeste + ', på plass '+ index))
    
}

function finnLaveste(verdier){
    let laveste=150;
    let index=0;
    for (let i = 0; i < verdier.length; i++) {
        if (verdier[i]<laveste){
            laveste=verdier[i]
            index=i
        }
    }
    
    return((laveste + ', på plass '+ index))
}

function finnProblematisk(verdier, type){
    
    let nyArray=[]
    for (let i = 0; i < verdier.length; i++) {
        if (verdier[i] > 140){
            nyArray.push(verdier[i])
            verdier.pop(i)
            
        }
        
    }
    if (type==="count"){
        return(nyArray.length)
    }else{
        return(nyArray)
    }
    
}
let newArrayDisplay = document.querySelectorAll(".hiddenInfo")
let dropDowns = document.querySelectorAll(".dropdown")

for (let i = 0; i < dropDowns.length; i++) {
    dropDowns[i].addEventListener("click", function(){
        toggleActive(i)
    })
    
}

function toggleActive(index){
    newArrayDisplay[index].classList.toggle("active")
}

newArrayDisplay[0].textContent = danmarksplass.problematiskArray.join(", ");
newArrayDisplay[1].textContent = solheimsviken.problematiskArray.join(", ");

