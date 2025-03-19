const scrollContainer = document.getElementsByClassName("images");
let backBtn = document.getElementsByClassName("beck-arrow");
const nextBtn = document.getElementsByClassName("next-arrow")[0];
console.log(nextBtn)

// scrollContainer.addEventListener("wheel", (eve) =>{
//     eve.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;

// })

if(nextBtn){

    nextBtn.addEventListener("click", function (){
    console.log("print")
   })
} else{
    console.log("not print")
}


// let day = new Date();
// console.log(day.getDay)