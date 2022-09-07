
const navitem = document.querySelector('nav ul')
const hamburgerIcon = document.querySelector(".hamb");
const closeButton = document.querySelector(".close");
const overlayBg = document.querySelector('.overlay')



hamburgerIcon.addEventListener('click',() => {
   navitem.style.display ="block";
//   g ./
   
});


closeButton.addEventListener('click', () =>{
    navitem.style.display = "none"
})

overlayBg.addEventListener('click', ()=>{
    navitem.style.display = "none"
})


const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 2
  });