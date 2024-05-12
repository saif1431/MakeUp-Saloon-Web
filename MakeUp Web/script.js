document.addEventListener("DOMContentLoaded", ()=>{

  
let menuList = document.querySelector('.navlinksbar');
let menubarIcon = document.getElementById('burgerbar');

menubarIcon.addEventListener('click', ()=>{
  if(window.getComputedStyle(menuList).display === 'none'){
    menuList.style.setProperty('display', 'flex', 'important');
  } else {
    menuList.style.setProperty('display', 'none', 'important');
  }
});
    
    
    // DropDownMenu-------------------------
    
let navlinks = document.querySelectorAll('.navlink');
let select = document.querySelector('.select');
let DropDownMenu = document.querySelector('.dropdown-content');
let animation = document.querySelectorAll('.animi');
let btn = document.querySelectorAll('button');


navlinks.forEach((navlink) => {
  navlink.addEventListener('mouseover', function(){
    if(navlink.classList.contains('skincares')){
    DropDownMenu.style.display = 'flex';
    DropDownMenu.style.transitionDelay = '0.5s';
    DropDownMenu.style.transitionDuration = '0.5s';}
    else{
      DropDownMenu.style.display = "none";
    }
  })
})
navlinks.forEach((navlink)=>{
  navlink.addEventListener('click',()=>{
    navlink.style.color= '#333';
  })
})





  // ------------Script For Navbar-----------
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let slides = document.querySelectorAll(".swiper-slide");

slides.forEach(slide => {
  slide.addEventListener('click', function(){
    let target = document.querySelector("#" + this.classList[1]);
    target.scrollIntoView({
      behavior: "smooth",
      inline: 'start'
    });
  });
});



})