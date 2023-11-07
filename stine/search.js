
/*variabler*/
let searchBtn = document.querySelector(".search-btn"); /*søge ikon der åbner søgefelt*/
let cancelBtn = document.querySelector(".cancel-btn"); /*Kryds ikon, der lukker søgefeltet*/
let searchBox = document.querySelector(".search-box"); /*container, der indeholder søgefelt*/
let searchInput = document.querySelector("input"); /* input feltet*/


searchBtn.onclick = () =>{ /* gør søgefeltet synligt og aktiverer søgefunktionen */
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    searchFunction();

}


cancelBtn.onclick = () =>{ /* gør at når man trykker på krydset, så lukkes søgfletet sammen igen*/
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
}


/*filter funktion */ 

function searchFunction(){
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("input"); /* henter id=input */
    filter = input.value.toUpperCase();
    ul = document.getElementById("UL"); /* henter id=UL */
    li = ul.getElementsByTagName("li"); /* henter alle li */
    for (i = 0; i < li.length; i++){
        a =li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = ""; 
        } else { 
            li[i].style.display = "none"
        }
    }
}





