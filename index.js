const preBtn = document.querySelector(".pre"),
 nextBtn = document.querySelector(".next");


function appearRight() {
    const personalInfo = document.querySelectorAll(".personal-info");
    for (j=0; j< personalInfo.length; j++) {
        personalInfo[j].classList.toggle("hide");
        personalInfo[j].classList.toggle("disappear");
        personalInfo[j].classList.toggle("appear");
        personalInfo[j].classList.toggle("left");
        personalInfo[j].classList.toggle("right");
    };
};
function appearLeft() {
    const personalInfo = document.querySelectorAll(".personal-info");
    for (j=0; j< personalInfo.length; j++) {
        personalInfo[j].classList.toggle("hide");
        personalInfo[j].classList.toggle("disappear");
        personalInfo[j].classList.toggle("appear");
        personalInfo[j].classList.toggle("right");
        personalInfo[j].classList.toggle("left");
    };
};

preBtn.addEventListener("click", appearLeft)
nextBtn.addEventListener("click",appearRight)