const boutons= document.querySelectorAll(".bouton");
let blabla = document.querySelector(".blabla");
let blabla1 = document.querySelector(".blabla1");
let blabla2 = document.querySelector(".blabla2");



    boutons[0].addEventListener("mouseover", (e)=>{
blabla.innerHTML ="Un autre texte";
    })
    boutons[0].addEventListener("mouseout", (e)=>{
        blabla.innerHTML = "Notre professeur, son histoire,sa passion...";
            })
        
boutons[1].addEventListener("mouseover", (e)=>{
                blabla1.innerHTML ="Ca me joue bien des tours !";
                    })
boutons[1].addEventListener("mouseout", (e)=>{
                blabla1.innerHTML = "Notre professeur, son histoire,sa passion...";
                            })
boutons[2].addEventListener("mouseover", (e)=>{
                blabla2.innerHTML ="Atmosphère bienveillante !!";
                                    })
boutons[2].addEventListener("mouseout", (e)=>{
                blabla2.innerHTML = "Notre professeur, son histoire,sa passion...";
                                            })

const nav = document.querySelector("nav");
let info = document.querySelector(".info");
info.addEventListener("click", ()=>{  
    nav.classList.add("active");
    
    })
const exit = document.querySelector(".fa-backspace");
exit.addEventListener("click", ()=>{
    nav.classList.remove("active");
})

const fleche = document.querySelectorAll(".fa-external-link-alt");
document.querySelector(".tarifs").addEventListener("click", ()=>{
    document.querySelector(".displayTarif").classList.add("activeTarif");
})
// fleche[0].addEventListener("click", ()=>{
//     document.querySelector(".displayTarif").classList.remove("activeTarif");

// })

const bouton = document.querySelectorAll("button");
const tableauBouton = Array.from(bouton);
const tableauCards = Array.from(document.querySelectorAll(".cards"));
const tableauCache = Array.from(document.querySelectorAll(".cache"));

tableauBouton.forEach(element => {
    element.addEventListener("click", ()=>{
    let index =tableauBouton.indexOf(element);
     tableauCards[index].classList.toggle("plusGrand");
     tableauCache[index].classList.toggle("cacheActive");
     document.querySelector("footer").classList.toggle("footerActive");
     if ( tableauBouton[index].innerHTML== "Plus de détail" ) {
        tableauBouton[index].innerHTML = "Moins de détail";
    }
    else if ( tableauBouton[index].innerHTML == "Moins de détail") {
        tableauBouton[index].innerHTML= "Plus de détail";
    }
   
    else {
     
        tableauBouton[index].innerHTML = "Plus de détail";
    }
    
    })
});






