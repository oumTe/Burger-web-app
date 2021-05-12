
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const hamburger= document.querySelector (".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


hamburger.addEventListener("click", () => {
 
      navlinks.classList.toggle('translation');      
    });
    


links.forEach((link,index) => {
  link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 1.5}s`;

 });

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open'); 
    menuOpen = true;
    

  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


window.onscroll = function(){myFunction()}

var sticky=navlinks.offsetTop + window.innerHeight;
function myFunction(){
  if ((window.pageYOffset >= sticky) && (window.innerWidth >= 780)) {
    navlinks.classList.add("sticky");
    navlinks.classList.add('active');

  }
  else{
    navlinks.classList.remove("sticky");
    navlinks.classList.remove('active');
  }
}

$(".default_option").click(function(){
  $(this).parent().toggleClass("active");
})

$(".select_ul li").click(function(){
  var currentele = $(this).html();
  $(".default_option li").html(currentele);
  $(this).parents(".select_wrap").removeClass("active");
})