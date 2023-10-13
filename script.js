const burgerMenu =document.querySelector('.burgerMenu')
const openMenu =document.querySelector('.openMenu')
const closeMenu =document.querySelector('.closeMenu')

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show (){
  burgerMenu.style.display = 'flex';
  burgerMenu.style.top = '0';
}

function close (){
  burgerMenu.style.top = '-100%';
}