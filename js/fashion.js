// ====banner====
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  loop: true,
  autoplay : {
      delay:5000,
      disableOnInteraction:false
  },
  effect : "fade",
  speed : 600,
});



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






  var swiper = new Swiper(".fashion-tranding-items", {
    navigation: {
      nextEl: ".my-next-btn",
      prevEl: ".my-prev-btn",
    },
  });
  var swiper = new Swiper(".fashion-top-next-btn", {
    navigation: {
      nextEl: ".top-next-btn",
      prevEl: ".top-prev-btn",
    },
  });
  var swiper = new Swiper(".fashion-top-selling-items", {
    navigation: {
      nextEl: ".fashion-top-selling-next-btn",
      prevEl: ".fashion-top-selling-prev-btn",
    },
  });

