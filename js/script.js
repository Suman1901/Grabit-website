

// const naveMenuSec = document.querySelector(".nav-menu-sec");


// const bars = document.querySelector(".bars");
// const naveMenuLinks = document.querySelector(".links");

// bars.addEventListener("click", () =>{
//   naveMenuLinks.classList.toggle("mobile-menu");
//   naveMenuSec.classList.toggle("menu-sec");
// })

// ==== navber ====

const categori = document.querySelector("#categori-sec");
// console.log(categori)
categori.addEventListener("click", () =>{
  const categoriesList = document.querySelector("#categori-list");
  categoriesList.classList.toggle("categories-list");
  // console.log(categoriesList)
})



// const businessLocation = document.getElementById("business-location");
// const delhi = document.getElementById("delhi");



// ====banner====
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  // autoplay : {
  //     delay:5000,
  //     disableOnInteraction:false
  // },
  effect : "fade",
  speed : 600,
});




// ===day of the deal===
let time = new Date();

const hrs =document.getElementById("hrs");
const min =document.getElementById("min");
const sec =document.getElementById("sec");

setInterval(() =>{
  let currentTime = new Date()
  
  hrs.innerHTML = (currentTime.getHours()<10 ? "0" : "") + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()<10 ? "0" : "") + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()<10 ? "0" : "") + currentTime.getSeconds();
}, 1000)


var swiper = new Swiper(".day-of-deal-imges-sec", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});


// ====top product====

var swiper = new Swiper(".top-rate-Swiper", {
  navigation: {
    nextEl: ".top-rate-Swiper-next-btn",
    prevEl: ".top-rate-Swiper-prev-btn",
  },
});

var swiper = new Swiper(".my-Swiper", {
  navigation: {
    nextEl: ".my-next-btn",
    prevEl: ".my-prev-btn",
  },
});

var swiper = new Swiper(".top-selling", {
  navigation: {
    nextEl: ".top-selling-next-btn",
    prevEl: ".top-selling-prev-btn",
  },
});





// ====latest blog====

var swiper = new Swiper(".latest-blog-swiper", {
  navigation: {
    nextEl: ".latest-blog-nxt-btn",
  },
});



