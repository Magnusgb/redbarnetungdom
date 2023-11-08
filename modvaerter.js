// Opret arrays med stier til billeder
let magnusImages = [
  "podcastforside-billeder/magnus.jpg",
  "podcastforside-billeder/magnus-js.jpg"
 ];
 
 
 let stineImages = [
  "podcastforside-billeder/stine.jpg",
  "podcastforside-billeder/stine-js.jpg"
 ];
 
 
 // Funktion til at skifte billede ved hover for Magnus
 function handleMagnusHover() {
  let magnusImg = document.querySelector('.container img[alt="Magnus"]');
  let currentIndex = 0;
 
 
  magnusImg.addEventListener('mouseenter', () => {
    console.log("Mouse left Magnus image.");
    currentIndex = (currentIndex + 1) % magnusImages.length;
    magnusImg.src = magnusImages[currentIndex];
  });
 
 
  magnusImg.addEventListener('mouseleave', () => {
    console.log("Mouse left Magnus image.");
    currentIndex = 0;
    magnusImg.src = magnusImages[currentIndex];
  });
 }
 
 
 // Funktion til at skifte billede ved hover for Stine
 function handleStineHover() {
  let stineImg = document.querySelector('.container1 img[alt="Stine"]');
  let currentIndex = 0;
 
 
  stineImg.addEventListener('mouseenter', () => {
    currentIndex = (currentIndex + 1) % stineImages.length;
    stineImg.src = stineImages[currentIndex];
  });
 
 
  stineImg.addEventListener('mouseleave', () => {
    currentIndex = 0;
    stineImg.src = stineImages[currentIndex];
  });
 }
 
 
 // Kald funktionerne efter at HTML'en er indlæst
 window.addEventListener("load", () => {
  handleMagnusHover();
  handleStineHover();
 });
 