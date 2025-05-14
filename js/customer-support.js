 
let questions = document.querySelectorAll(".question");

questions.forEach((ques)=>{
    ques.addEventListener("click", ()=>{
        ques.classList.add("ques-bg");
        // ques-bg.style.background = "red";
        console.log(ques)
    })
})