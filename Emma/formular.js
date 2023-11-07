/* variabler */
const selected = document.querySelector(".selected"); /* et bestemt område */
const optionsContainer = document.querySelector(".options-container"); /* hele listen */

const optionsList = document.querySelectorAll(".option"); /* boxen: vælg område*/

/* event - gør menuen synlig + fjerner den igen */
selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

/* funktion */
optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML; /* ved click på et bestemt område vil det blive vist på label(i boxen)*/
    optionsContainer.classList.remove("active"); /* og listen vil blive lukket */
  });
});