const btn = document.querySelectorAll("button");


function addClassList() {
    const personalInfo = document.querySelectorAll(".personal-info");
    for (j=0; j< personalInfo.length; j++) {
        personalInfo[j].classList.toggle("hide");
        personalInfo[j].classList.toggle("disappear");
        personalInfo[j].classList.toggle("appear");
    };
};

for (i=0; i< btn.length; i++) {
    btn[i].addEventListener("click", addClassList);
};