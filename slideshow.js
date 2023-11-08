// Angiver div (carousel1 til variablen "carousel" document.querySelector går ind i HTML dokumentet og henter diven og gør det til en DOM objekt i javascript)
let carousel = document.querySelector('.carousel1'); 

// Her henter vi diven "wrapper i" inde i HTMl dokumentet, og gør det til en DOM Objekt, grunden til vi bruger All her er fordi der findes to ikoner//
arrowIcons = document.querySelectorAll('.wrapper i');

// Angiver første billede i "carousel diven til være variablen firstImg"
let firstImg = carousel.querySelectorAll("img")[0];
 
//Viser pile samt sætter timer på hvornår de skal vises efter click
const showHideIcons = () => {
if(carousel.scrollLeft == 0){
  arrowIcons[0].style.display = "none";
} else {
  arrowIcons[0].style.display = "block";
}

if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
  arrowIcons[1].style.display = "none"; 
} else {
  arrowIcons[1].style.display = "block"; 
}
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () =>{
    showHideIcons();
    setTimeout(() => showHideIcons(), 60);
  });
});


//Dette er et For Loop der er angivet at i = er 0 (starten på karrusellen), arrowIcons.length bestemmer hvor længe løkken skal køre, og så længe den er sand bliver loope ved med at køre
for (let i = 0; i < arrowIcons.length; i++) {
  
  //Her bruger vi vores varibel fra koden over, til at indikere at karussel starter vedd første billede, dernæst tilføjer vi en event listener (click) 
  // Vi giver her vores tidligere variabel en ny varibel kombineret med "ClientWidth, som er skærmstørrelsen på klienten. Dernæst laver vi en if else termilogi som går ind og bestemmer hvilken pil den scroller karusellen, det gøres ved at bruge -= og +="
  arrowIcons[i].addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;

    if (arrowIcons[i].id == "left") {
      carousel.scrollLeft -= firstImgWidth;
    } else {
      carousel.scrollLeft += firstImgWidth;
    }
  });
}