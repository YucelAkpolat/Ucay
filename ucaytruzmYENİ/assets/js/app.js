$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
});




const  navMenu = document.getElementById('nav_menu'),
       toggleMenu = document.getElementById('toggle-menu'),
       closeMenu = document.getElementById('close-menu')
       
     
toggleMenu.addEventListener('click',() =>{
    navMenu.classList.toggle('show');
    toggleMenu.classList.toggle('hidden')
    
})

closeMenu.addEventListener('click',() =>{
    navMenu.classList.remove('show');
    toggleMenu.classList.toggle('noHidden')
})

const WebCifarIcon = document.querySelector("#webCifar-icon");
const WebCifarEl = document.querySelector("#webCifar");
const close = WebCifarEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

WebCifarIcon.addEventListener("click", () => {
  WebCifarEl.classList.add("active");
});
close.addEventListener("click", () => {
  WebCifarEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://www.facebook.com/ZirZirDeli/");